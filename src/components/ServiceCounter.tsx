interface ServiceCounterProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  infoButton?: React.ReactNode; 
}

  const ServiceCounter: React.FC<ServiceCounterProps> = ({ id, label, value, onChange, infoButton }) => {
    return (
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="form-label">
          {label}
          {infoButton}
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onChange(Math.max(value - 1, 1))}
            className="btn-more-less"
          >
            -
          </button>
          <input
            id={id}
            type="number"
            value={value}
            min={1}
            onChange={(e) => onChange(Math.max(Number(e.target.value), 1))}
            className="form-input w-[65px] text-center no-spinner border-0 shadow-none text-2xl text-selected font-extrabold"
          />
          <button
            type="button"
            onClick={() => onChange(value + 1)}
            className="btn-more-less"
          >
            +
          </button>
        </div>
      </div>
    );
  };
  
  export default ServiceCounter;
  