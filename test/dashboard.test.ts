import { App, Stack } from 'aws-cdk-lib';
// @ts-ignore
import { TestConfiguration } from '../local/setupJest';
import { DashboardInput, DashboardManager, DashboardCreateResult } from '../src/index';


const mockApp = new App();
const stack = new Stack(mockApp);
let dm: DashboardManager;
let guid: any;
let dashboardInput: DashboardInput;

beforeAll(() => {
  console.log('beforeAll ' + new Date());
  dm = new DashboardManager(stack, 'testing-stack', { key: TestConfiguration.LicenseKey });
  dashboardInput = {
    permissions: 'PUBLIC_READ_WRITE',
    description: 'L2 CDK Dashboard Create Test',
    name: 'L2DashboardCreate',
    pages: [{
      description: 'Page Description',
      name: 'Page Name',
      widgets: [{ title: 'Widget Title', configuration: { markdown: { text: 'Markdown text' } } }],
    }],
  };
});


afterAll(async () => {
  const result = await dm.delete( guid );
  console.log('afterAll: delete result:');
  console.log(result);
});

test('Dashboard Create', async () => {
  console.log('Dashboard Create ' + new Date());
  // @ts-ignore
  const result = await dm.create( 1074083, dashboardInput );
  // destructure the result
  // @ts-ignore
  const { dashboardCreate: dcr }: {dcr: DashboardCreateResult} = result;
  expect(dcr.errors).toBeNull();
  expect(dcr.entityResult.guid).toBeDefined();
  guid = dcr.entityResult.guid;
  console.log(result);
  console.log(await dm.read(guid));
});

test('Dashboard Read Pass', async () => {
  console.log('Dashboard Read pass' + new Date());
  try {
    const result = await dm.read(guid);
    expect(result.actor?.entity?.guid).toBeDefined();
    expect(result.actor?.entity?.guid).toEqual(guid);
  } catch (error) {
    reportError({ message: toErrorWithMessage(error) });
  }
});

test('Dashboard Read Fail', async () => {
  console.log('Dashboard Read Fail ' + new Date());
  const result = await dm.read('MTA3NDA4M3xWSVp8REFTSEJPQVJEfGRhOjQ4MzU2NjU');
  console.log(result);
});

test('Dashboard Update', async () => {
  console.log('Dashboard Update' + new Date());

  if (guid == null) {
    const result = await dm.create( 1074083, dashboardInput );
    expect(result.dashboardCreate.errors).toBeNull();
    expect(result.dashboardCreate.entityResult?.guid).toBeDefined();
    guid = result.dashboardCreate.entityResult?.guid;
  }
  const description = 'L2 CDK Dashboard Update Test';
  dashboardInput.description = description;
  const result = await dm.update(guid, dashboardInput );
  expect(result.dashboardUpdate.errors).toBeNull();
  expect(result.dashboardUpdate.entityResult?.description).toBe(description);
});

test('Dashboard Delete', async () => {
  console.log('Dashboard Delete' + new Date());
  const result = await dm.delete( guid );
  expect(result.dashboardDelete.errors).toBeNull();
});

// NOTE: List does not return a newly created Dashboard due to the propagation delay
test('Dashboard List', async () => {
  console.log('Dashboard List ' + new Date());
  const result = await dm.list();
  const result2 = await dm.list(result.actor?.entitySearch.query, result.actor?.entitySearch.results.nextCursor);
  console.log(result);
  console.log(result2);
  expect(true).toEqual(true);
});

type ErrorWithMessage = {
  message: string;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}