import { useState, useEffect } from 'react';

type CounterProps = {
  initialValue: number;
  finalValue: number;
}


const Counter = ({ initialValue, finalValue } : CounterProps) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    // Lógica para animar el contador
    const interval = setInterval(() => {
      if (count < finalValue) {
        setCount(count + 1);
      }
    }, 50); // Velocidad de la animación

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [count, finalValue]);

  return (
    <div className="counter">
      {count}
    </div>
  );
};

export default Counter;
