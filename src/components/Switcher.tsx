import styled from 'styled-components';
import { useState } from 'react';

interface SwitchProps {
  onToggle: (isChecked: boolean) => void;
}

const Switch = ({ onToggle }: SwitchProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        onToggle(newState);
    };
  return (
    <section className='flex items-center justify-center pb-6 gap-6'>
        <p className='font-black pt-4'>Pago mensual</p>
        <StyledWrapper>
      <label>
      <input
          className="toggle-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false" />
          </div>
          <div className="toggle-button" />
          <div className="moon-icon-wrapper">
            <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false" />
          </div>
        </div>
      </label>
      
    </StyledWrapper>
    <p className='font-black pt-4'>Pago anual</p>
    </section>
    
  );
}

const StyledWrapper = styled.div`
  .toggle-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    
  }

  .toggle-slot {
    font-size: 10px;
    position: relative;
    height: 3.5em;
    width: 7em;
    border: 0px solid transparent;
    border-radius: 10em;
    background-color: #45BBA5;
    transition: background-color 250ms;
    cursor:pointer
  }

  .toggle-checkbox:checked ~ .toggle-slot {
    background-color: #45BBA5;
  }

  .toggle-button {
    transform: translate(0.3em, 0.25em);
    position: absolute;
    height: 3em;
    width: 3em;
    border-radius: 50%;
    background-color: #45BBA5;
     box-shadow: inset 0px 0px 0px 0.75em white;
    transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .toggle-button {
    background-color: #45BBA5;
    box-shadow: inset 0px 0px 0px 0.75em white;
    transform: translate(3.65em, 0.25em);
  }
  }`;

export default Switch;
