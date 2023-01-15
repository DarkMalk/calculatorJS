const ButtonsCalculator = ({ idBtn, symbol, value, func, isOperator, isEqual }) => {
  return (
    <button
      id={idBtn}
      className={`btn ${isOperator ? 'btn-operator' : ''} ${isEqual ? 'btn-equal' : ''}`}
      value={value}
      onClick={func}
    >
      {symbol}
    </button>
  )
}

export default ButtonsCalculator
