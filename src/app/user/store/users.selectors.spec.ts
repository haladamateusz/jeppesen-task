import * as fromUsers from './users.reducer';
import { selectUserState } from './users.selectors';

describe('Users Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserState({
      [fromUsers.usersFeatureKey]: {}
    });
    expect(result).toEqual({});
  });
});
