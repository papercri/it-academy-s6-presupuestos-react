  /* eslint-disable @typescript-eslint/no-unused-vars */

  interface BudgetClientInputProps  {
    clientEmail: string;
    setClientEmail: (value: string) => void;
    clientName: string;
    setClientName: (value: string) => void;
    errors: {
      name?: string;
      email?: string;
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: 'name' | 'email') => void;
  };
  
  const BudgetClientInput: React.FC<BudgetClientInputProps> = ({
    clientName,
    setClientName,
    clientEmail,
    setClientEmail,
    errors,
    handleInputChange,
  }) => {
    return (
    < >
      <input
        type="text"
        placeholder="Nombre"
        value={clientName}
        onChange={(e) => handleInputChange(e, 'name')}
        className={`form-input ${errors.name ? 'border-red-500' : ''}`}
        />
      
      <input 
        type="text"
        placeholder="Email"
        value={clientEmail}
        onChange={(e) => handleInputChange(e, 'email')}
        className={`form-input ${errors.email ? 'border-red-500' : ''}`}
      />
</>
  )
}

export default BudgetClientInput