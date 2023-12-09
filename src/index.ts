import { Construct } from 'constructs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLClient } from 'graphql-request';
import { CreateDashboard } from './docs/mutations/createDashboard';
import { DeleteDashboard } from './docs/mutations/deleteDashboard';
import { UpdateDashboard } from './docs/mutations/updateDashboard';
import { ListDashboardsPage1, ListDashboardsPageNext, IDashboardListResult } from './docs/queries/listDashboards';
import { ReadDashboard } from './docs/queries/readDashboard';
import { DashboardInput, DashboardCreateResult, DashboardDeleteResult, DashboardUpdateResult, DashboardEntityResult } from './types';

export * from './types';

/*
  TODO Tagging (from new Construct)
 */


export interface IDashboardConfiguration {
  key: string;
  endpoint?: string;
}

export interface IDashboardCreateResult {
  dashboardCreate: DashboardCreateResult;
}

export interface IDashboardUpdateResult {
  dashboardUpdate: DashboardUpdateResult;
}

export interface IDashboardDeleteResult {
  dashboardDelete: DashboardDeleteResult;
}

export interface IEntityResult {
  entity: DashboardEntityResult;
}

export interface IDashboardReadResult {
  actor: IEntityResult;
}

export interface IQueryOptions {
  limit: number;
  caseSensitiveTagMatching: boolean;
  tagFilter: string;
}

export class DashboardManager extends Construct {
  private defaultEndpoint: string = 'https://api.newrelic.com/graphql';
  private client: GraphQLClient;

  constructor(scope: Construct, id: string, config: IDashboardConfiguration) {
    super(scope, id);

    if (config == null) {
      throw 'Missing required configuration';
    }

    if (config.key == null || config.key.trim() == '') {
      throw 'License key is required';
    }

    if (config.endpoint == null || config.endpoint.trim() == '') {
      config.endpoint = this.defaultEndpoint;
      console.info('Using default NerdGraph endpoint: ' + config.endpoint);
    }

    this.client = new GraphQLClient(config.endpoint,
      {
        headers: { 'API-Key': config.key },
      },
    );
  }

  async create(accountId: number, dashboard: DashboardInput): Promise<IDashboardCreateResult> {
    return this.client.request(CreateDashboard, {
      dashboard: dashboard,
      accountId: accountId,
    });
  }

  async update(guid: string, dashboard: DashboardInput): Promise<IDashboardUpdateResult> {
    return this.client.request(UpdateDashboard, {
      guid: guid,
      dashboard: dashboard,
    });
  }

  async delete(guid: string): Promise<IDashboardDeleteResult> {
    return this.client.request(DeleteDashboard, { guid: guid });
  }

  async read(guid: string): Promise<IDashboardReadResult> {
    return this.client.request(ReadDashboard, { guid: guid });
  }

  // list does not return a newly created Dashboard due to the Entity propagation delay. Use read instead.
  async list(query: string = 'type in (\'DASHBOARD\')', cursor: string = '', options: IQueryOptions = { limit: 1, tagFilter: '', caseSensitiveTagMatching: false }): Promise<IDashboardListResult> {
    if (cursor == null || cursor == '' || cursor.trim().length === 0) {
      return this.client.request(ListDashboardsPage1, {
        query: query,
        options: options,
      });
    } else {
      return this.client.request(ListDashboardsPageNext, {
        query: query,
        cursor: cursor,
        options: options,
      });
    }
  }
}