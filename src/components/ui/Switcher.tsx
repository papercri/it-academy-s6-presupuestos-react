import '../../assets/styles/css/switch.css'
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
    <section className='flex items-center justify-center pb-8 gap-8'>
        <p className='font-black '>Monthly payment</p>
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
      <p className='font-black '>Annual payment</p>

    </section>
  );
}
export default Switch;
