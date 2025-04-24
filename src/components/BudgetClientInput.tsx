  interface BudgetClientInputProps  {
    clientEmail: string;
    setClientEmail: (value: string) => void;
    clientName: string;
    setClientName: (value: string) => void;
  };
  
  function BudgetClientInput({ 
    clientName, 
    setClientName,
    clientEmail, 
    setClientEmail
  }: BudgetClientInputProps) {
    return (
    < >
      <input
            type="text"
            placeholder="Nombre"
            value={clientName}
            className="form-input"
            onChange={(e) => setClientName(e.target.value)}
        />
      
        <input 
            type="text"
            placeholder="Email"
            value={clientEmail}
            className="form-input"
            onChange={(e) => setClientEmail(e.target.value)}
        />

</>
  )
}

export default BudgetClientInput