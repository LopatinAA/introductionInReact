import PropTypes from 'prop-types';
import style from './FieldLayout.module.css'

export const FieldLayout = ({ field, onChangeField, isGameEnded }) => {
  return (
    <div className={style.fieldlayout}>
      {field.map((e, index) => {
        return (
          <button
            key={index}
            onClick={() => { onChangeField(index) }}
            disabled={e !== '' || isGameEnded}
          >
            {e}
          </button>
        )
      })}
    </div>
  )
}

FieldLayout.propTypes = {
  isGameEnded: PropTypes.bool,
  field: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', ''])),
  onChangeField: PropTypes.func,
}