import createTestContext from 'react-cosmos-test/enzyme';
import fixture from 'components/__fixtures__/Button/example';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('renders example', () => {
    expect(getWrapper().text()).toContain('Example');
});