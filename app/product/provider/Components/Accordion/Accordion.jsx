'use client';

import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
