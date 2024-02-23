import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { append, clear, evaluate } from '../Calculator/calculatorSlice';

export const Calculator = () => {
  const numExpression = useSelector((state: RootState) => state.calculator.numExpression);
  const dispatch = useDispatch();

  const handleClick = (character: string) => {
    dispatch(append(character));
  };

  return (
    <div>
        <h1 className='text-center mt-4'>Calculator</h1>
        <input type="text" className="p-3 mb-1 row row-cols-3 w-25 m-auto mt-5" value={numExpression} readOnly />
        <div className='row row-cols-3 w-25 m-auto'>
            <button className='col border-1 p-3' onClick={() => handleClick('1')}>1</button>
            <button className='col border-1 p-3' onClick={() => handleClick('2')}>2</button>
            <button className='col border-1 p-3' onClick={() => handleClick('3')}>3</button>
            <button className='col border-1 p-3' onClick={() => handleClick('4')}>4</button>
            <button className='col border-1 p-3' onClick={() => handleClick('5')}>5</button>
            <button className='col border-1 p-3' onClick={() => handleClick('6')}>6</button>
            <button className='col border-1 p-3' onClick={() => handleClick('7')}>7</button>
            <button className='col border-1 p-3' onClick={() => handleClick('8')}>8</button>
            <button className='col border-1 p-3' onClick={() => handleClick('9')}>9</button>
            <button className='col border-1 p-3' onClick={() => handleClick('0')}>0</button>
            <button className='col border-1 p-3' onClick={() => handleClick('+')}>+</button>
            <button className='col border-1 p-3' onClick={() => handleClick('-')}>-</button>
            <button className='col border-1 p-3' onClick={() => handleClick('*')}>*</button>
            <button className='col border-1 p-3' onClick={() => handleClick('/')}>/</button>
            <button className='col border-1 p-3' onClick={() => dispatch(evaluate())}>=</button>
            <button className='col border-1 p-3' onClick={() => dispatch(clear())}>C</button>
        </div>
    </div>
  );
};

export default Calculator;