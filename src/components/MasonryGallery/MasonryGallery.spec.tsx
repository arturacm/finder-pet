import { render, screen } from '@testing-library/react';

import MasonryGallery from './index.tsx';

const mockedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const componentList = mockedList.map(el => (<h1 key={el}>{el}</h1>))

describe('MasonryGallery', () => {
  test('renders MasonryGallery component', () => {
    render(<MasonryGallery elements={componentList} />);
  });

  test('all items are being rendered', async () => {
    render(<MasonryGallery elements={componentList} />);

    const rendered = await screen.findAllByRole('heading')
    expect(rendered.length).toBe(mockedList.length)
  })

});
