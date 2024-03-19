'use client';
import SelectSearch, { SelectSearchOption } from 'react-select-search';
import { iso31661 } from 'iso-3166';
import 'react-select-search/style.css';
import { useState } from 'react';

interface CountryOption extends SelectSearchOption {
  value: string;
  name: string;
}

const options: CountryOption[] = iso31661.map((country) => ({
  name: country.name,
  value: country.alpha2,
}));

export default function SearchSelect() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <SelectSearch
      options={options}
      value={selectedValue}
      onChange={(value) => setSelectedValue(`${value}`)}
      search
      placeholder="Choose your country"
    />
  );
}
