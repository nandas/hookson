import React,{useState,useEffect,useRef} from 'react';

const Dropdown = ({ options,onDropDownChange,selected}) => {
  const [open,setOpen]=useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  
  const renderedOptions = options.map((option) => {

    if(option.label==selected.label){
      return null;
    }

    return (
      <div key={option.value} className="item"
      onClick={() => onDropDownChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className={`ui selection dropdown ${open ?'visible active':''}`}
             onClick={()=>setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ?'transition visible':''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
