// import { expect } from 'vitest';
// import { Header } from '../components/Header';

// describe('Header', () => {
//   it('어쩌구저쩌구', () => {
//     expect(Header('1234564')).toBe(true);
//   });

//   it('어쩌구저쩌구', () => {
//     expect(Header('')).toBe(false);
//   });
// });

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header'; // Header 컴포넌트 경로 맞추기

// import { describe, it, render, screen } from '@testing-library/react';
// import Header from './Header'; // Header 컴포넌트 경로 맞추기
// import { expect } from 'vitest';
// 오류 있었던 부분 정리해서 글써놓기

describe('Header', () => {
  it('cartItem이 빈 배열이어도 bag아이콘이 렌더링 되어야 한다', () => {
    render(<Header cartItems={[]} />); // cartItems가 빈 배열인 경우

    // bag 아이콘이 화면에 렌더링되는지 확인
    const bagIcon = screen.getByAltText('bag');
    expect(bagIcon).toBeInTheDocument();
  });

  it('카트안에 아이템이 들어가있을 때 카트의 아이템 갯수 카운트가 보여야 한다', () => {
    const cartItems = [1, 2, 3]; // 예시로 3개의 아이템을 넣음
    render(<Header cartItems={cartItems} />);

    // cart 아이템 개수가 화면에 표시되는지 확인
    const cartCount = screen.getByText(cartItems.length);
    expect(cartCount).toBeInTheDocument();
  });

  it('카트가 비어있으면 카트 아이템 카우는가 보이지 않아야한다', () => {
    render(<Header cartItems={[]} />); // 빈 배열로 렌더링

    // cart 아이템 개수가 없음을 확인
    const cartCount = screen.queryByText(/^\d+$/); // 숫자로 된 텍스트를 찾음
    expect(cartCount).toBeNull(); // cartCount가 없으면 Null이어야 함
  });
});
