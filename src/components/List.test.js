import { render, act, screen, waitFor } from '@testing-library/react';
import List from './List';

// jest.mock('../api/api');

const mountComponent = () => render(<List />);
const loopEnd = (t = 0) => new Promise(r => setTimeout(r, t));
let wrapper;

describe('snapshots', () => {
    afterEach(() => {
        wrapper?.unmount;
        wrapper = null;
    });

    it('should display list', async () => {
        wrapper = mountComponent();

        await act(async () => {
           await waitFor(() => {
               screen.getByTestId('list');
           });

           await loopEnd(10);
        });

        expect(wrapper).toMatchSnapshot();
    })
})

