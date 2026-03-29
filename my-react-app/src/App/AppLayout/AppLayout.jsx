import PropTypes from 'prop-types';
import {Field} from "./Field/Field"
import {Information} from "./Information/Information"
import style from './AppLayout.module.css'

export const AppLayout = ({ currentPlayer, isGameEnded, isDraw, field, onChangeField, reset}) => {
  return (
    <div className={style.appLayout}>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        reset={() => reset()}
      />
      <Field 
        field={field}
        onChangeField={(index) => {onChangeField(index)}}
        isGameEnded={isGameEnded}
        />
    </div>
  )
}

AppLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', 'O', '']),
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  field: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', ''])),
  onChangeField: PropTypes.func,
  reset: PropTypes.func,
}
