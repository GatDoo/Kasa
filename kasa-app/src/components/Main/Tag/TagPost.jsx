import React from 'react';
import Tag from './Tag';

export default function TagPost({ tags }) {
  return (
    <div className='tag-flex'>
        {tags.map((tagItem, index) => (
    <Tag 
        key={index}
        tag={tagItem}
    />
  ))}
    </div>
  );
}

