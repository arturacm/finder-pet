import React from 'react';
import style from './style.module.scss';

interface MasonryGallery {
  columns?: number;
  elements: React.ReactNode[];
  className?: string;
}

const MasonryGallery = ({
  elements,
  columns = 3,
  className,
}: MasonryGallery): React.ReactElement => {
  const elementColumns = new Array<React.ReactElement | null>(columns);
  elementColumns.fill(null);
  const res = elementColumns.map((_, index) => (
    <div className={style.column} key={`column-${index}`}>
      {elements.filter((_, i) => i % columns === index)}
    </div>
  ));

  return (
    <div
      className={`${style.masonryGallery} ${className}`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {res}
    </div>
  );
};

export default MasonryGallery;
