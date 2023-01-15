import { evaluate } from 'mathjs'
import { useState } from 'react'
import ButtonsCalculator from './components/buttons-calculator'

const INIT_VALUE = '0'

const App = () => {
  const [equation, setEquation] = useState(INIT_VALUE)

  const handleResult = _ => {
    const resultEquation = evaluate(equation)
    setEquation(resultEquation)
  }

  const handleNumber = event => {
    const number = event.target.value
    if (equation === INIT_VALUE) {
      setEquation(number)
    } else {
      setEquation(equation + number)
    }
  }

  const handleClear = _ => {
    setEquation(INIT_VALUE)
  }

  const handleOperator = event => {
    const operator = event.target.value
    if (equation === INIT_VALUE) {
      if (operator === '+' || operator === '-') {
        setEquation(operator)
      } else {
        setEquation(equation + operator)
      }
    } else {
      setEquation(equation + operator)
    }
  }

  const handleDecimal = event => {
    const decimal = event.target.value
    const array = equation.split(/[+]|[*]|[-]|[/]/)
    const lastElem = array[array.length - 1]
    if (!lastElem.includes('.')) {
      setEquation(equation + decimal)
    }
  }

  return (
    <div className='calculator'>
      <div id='display'>{equation}</div>
      <div className='container-buttons'>
        <ButtonsCalculator idBtn='zero' symbol='0' value='0' func={handleNumber} />
        <ButtonsCalculator idBtn='one' symbol='1' value='1' func={handleNumber} />
        <ButtonsCalculator idBtn='two' symbol='2' value='2' func={handleNumber} />
        <ButtonsCalculator idBtn='three' symbol='3' value='3' func={handleNumber} />
        <ButtonsCalculator idBtn='four' symbol='4' value='4' func={handleNumber} />
        <ButtonsCalculator idBtn='five' symbol='5' value='5' func={handleNumber} />
        <ButtonsCalculator idBtn='six' symbol='6' value='6' func={handleNumber} />
        <ButtonsCalculator idBtn='seven' symbol='7' value='7' func={handleNumber} />
        <ButtonsCalculator idBtn='eight' symbol='8' value='8' func={handleNumber} />
        <ButtonsCalculator idBtn='nine' symbol='9' value='9' func={handleNumber} />
        <ButtonsCalculator idBtn='decimal' symbol='.' value='.' func={handleDecimal} />
        <ButtonsCalculator idBtn='clear' symbol='AC' value='AC' isOperator={true} func={handleClear} />
        <ButtonsCalculator idBtn='add' symbol='+' value='+' isOperator={true} func={handleOperator} />
        <ButtonsCalculator idBtn='subtract' symbol='-' value='-' isOperator={true} func={handleOperator} />
        <ButtonsCalculator idBtn='multiply' symbol='x' value='*' isOperator={true} func={handleOperator} />
        <ButtonsCalculator idBtn='divide' symbol='/' value='/' isOperator={true} func={handleOperator} />
        <ButtonsCalculator idBtn='equals' symbol='=' value='=' isEqual={true} func={handleResult} />
      </div>
    </div>
  )
}

export default App
