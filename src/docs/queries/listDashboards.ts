import { gql } from 'graphql-request';

export interface ITag{
  key: string;
  values: string[];
}
export interface IEntity{
  __typename: string;
  accountId: number;
  alertSeverity: string;
  createdAt: string;
  dashboardParentGuid: string;
  domain: string;
  entityType: string;
  guid: string;
  indexedAt: number;
  name: string;
  permalink: string;
  permissions: string;
  reporting: boolean;
  tags: ITag[ ];
  type: string;
  updatedAt: string;
}
export interface IResult{
  entities: IEntity[];
  nextCursor: string;
}

export interface IType{
  count: number;
  domain: string;
  entityType: string;
  type: string;
}
export interface IEntitySearchResults {
  count: number;
  query: string;
  results: IResult;
  types: IType[];
}

export interface IEntitySearch{
  entitySearch: IEntitySearchResults;
}
export interface IDashboardListResult{
  errors?: any[];
  actor?: IEntitySearch;
}
/*
{
  "data": {
    "actor": {
      "entitySearch": {
        "count": 11663,
        "query": "type in ('DASHBOARD')",
        "results": {
          "entities": [
            {
              "__typename": "DashboardEntityOutline",
              "accountId": 1606862,
              "alertSeverity": null,
              "createdAt": "2020-08-27T16:45:56Z",
              "dashboardParentGuid": null,
              "domain": "VIZ",
              "entityType": "DASHBOARD_ENTITY",
              "guid": "MTYwNjg2MnxWSVp8REFTSEJPQVJEfDEzNjQyNTI",
              "indexedAt": 1702038234087,
              "name": " $ ACME Business Metrics_Demo",
              "permalink": "https://one.newrelic.com/redirect/entity/MTYwNjg2MnxWSVp8REFTSEJPQVJEfDEzNjQyNTI",
              "permissions": "PUBLIC_READ_WRITE",
              "reporting": true,
              "tags": [
                {
                  "key": "account",
                  "values": [
                    "Demotron V2"
                  ]
                },
              ],
              "type": "DASHBOARD",
              "updatedAt": "2023-12-08T11:16:05Z"
            }
          ],
          "nextCursor": "gaJRlT5FlaOpXREZWRKZVUQpURTRlRFJFOwZ1UXhnbNJzZq50dZRVTnAAAA02btVGZfN3YpJHdl1GIzNXZul2c1JGIl12YhBCJg0BAAAQbCAAAAw2g"
        },
        "types": [
          {
            "count": 11663,
            "domain": "VIZ",
            "entityType": "DASHBOARD_ENTITY",
            "type": "DASHBOARD"
          }
        ]
      }
    }
  }
}
 */
export const ListDashboardsPageNext= gql `query ListDashboards(
    $query: String,
    $cursor: String,
    $options: EntitySearchOptions,
) { actor
{ entitySearch( query: $query options:$options )
{
    count
    query
    results (cursor: $cursor) {
        entities {
            __typename
            accountId
            alertSeverity
            domain
            entityType
            guid
            indexedAt
            name
            permalink
            reporting
            tags { key values }
            type
            ... on DashboardEntityOutline {
                __typename
                createdAt
                dashboardParentGuid
                permissions
                updatedAt
            }
        }
        nextCursor
    }
    types {
        count
        domain
        entityType
        type
    }
} } }`;
export const ListDashboardsPage1= gql `query ListDashboards(
    $query: String,
    $options: EntitySearchOptions,
) { actor
{ entitySearch( query: $query options: $options )
{
    count
    query
    results {
        entities {
            __typename
            accountId
            alertSeverity
            domain
            entityType
            guid
            indexedAt
            name
            permalink
            reporting
            tags { key values }
            type
            ... on DashboardEntityOutline {
                __typename
                createdAt
                dashboardParentGuid
                permissions
                updatedAt
            }
        }
        nextCursor
    }
    types {
        count
        domain
        entityType
        type
    }
} } }`;