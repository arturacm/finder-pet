import { render } from '@testing-library/react';

import ButtonIcon from './index.tsx';

describe('Button', () => {
  test('renders Button Icon component', () => {
    render(
      <ButtonIcon src="https://placehold.co/600x400.png" onClick={console.log} />,
    );
  });
});
