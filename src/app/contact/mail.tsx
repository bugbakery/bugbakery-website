'use client';

import React, { useEffect, useState } from 'react';

export function MailLink() {
  const address = 'gro.yrekabgub@tcatnoc';
  const [addressState, setAdress] = useState(null as null | string);
  useEffect(() => {
    setTimeout(() => {
      setAdress(address.split('').reverse().join(''));
    }, 1000);
  }, []);

  return addressState ? (
    <a className="underline" href={`mailto:${addressState}`}>
      {addressState}
    </a>
  ) : (
    <span>xxxxxxx@xxxxxxxxxxx.xxx (Loading...)</span>
  );
}
