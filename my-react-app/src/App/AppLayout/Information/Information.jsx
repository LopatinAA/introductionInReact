import PropTypes from 'prop-types';
import {InformationLayout} from "./InformationLayout/InformationLayout"
import style from './Information.module.css'

export const Information = ({ currentPlayer, isGameEnded, isDraw, reset}) => {
  return (
    <div className={style.information}>
      <InformationLayout
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <button onClick={() => reset()}>R</button>
    </div>
  )
}

Information.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', 'O', '']),
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  reset: PropTypes.func,
}

