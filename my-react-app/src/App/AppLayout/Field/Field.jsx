import PropTypes from 'prop-types';
import {FieldLayout} from "./FieldLayout/FieldLayout"

export const Field = ({ field, onChangeField, isGameEnded }) => {
  return (<FieldLayout
    field={field}
    onChangeField={(index)=> {onChangeField(index)}}
    isGameEnded={isGameEnded}
  />)
}

Field.propTypes = {
  isGameEnded: PropTypes.bool,
  field: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', ''])),
  onChangeField: PropTypes.func,
}