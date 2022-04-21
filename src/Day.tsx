import {useState} from 'react';

import './Day.scss';

function Day() {

  const [showBlue, setShowBlue] = useState('');
  const [showRed, setShowRed] = useState('');
  const [showGreen, setShowGreen] = useState('');
  const [showYellow, setShowYellow] = useState('');

  return (
    <div className='day-container'>
      <div className={'outer-square blue-hover ' + showBlue}>
        <div className={'inner-square  ' +  showBlue} onClick={() => setShowBlue(showBlue === 'blue' ? '' : 'blue')}></div>
      </div>
      <div className={'outer-square red-hover ' + showRed}>
        <div className={'inner-square ' +  showRed} onClick={() => setShowRed(showRed === 'red' ? '' : 'red')}></div>
      </div>
      <div className={'outer-square green-hover ' + showGreen}>
        <div className={'inner-square ' +  showGreen} onClick={() => setShowGreen(showGreen === 'green' ? '' : 'green')}></div>
      </div>
      <div className={'outer-square yellow-hover ' + showYellow}>
        <div className={'inner-square ' +  showYellow} onClick={() => setShowYellow(showYellow === 'yellow' ? '' : 'yellow')}></div>
      </div>
    </div>
  );
}

export default Day;
