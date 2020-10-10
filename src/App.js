import React,{useState} from 'react';
import Dropdown from './components/Dropdown';




const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default () => {
  const[selected,setSelected]=useState(options[0]);
  return (
    <div>
      {/*<Accordion items={items} />*/}
      <Dropdown options={options}
                onDropDownChange={setSelected}
                selected = {selected}
      />
    </div>
  );
};