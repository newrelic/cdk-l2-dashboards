// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from 'graphql-request';
export const DeleteDashboard = gql `
mutation DeleteDashboard(
    $guid: EntityGuid!,
) { dashboardDelete(
    guid: $guid,
) {
    errors {
        description
        type
    }
    status
} }
`;