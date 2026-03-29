import PropTypes from 'prop-types';
import style from './InformationLayout.module.css'

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
  if (isDraw) {
    return <div className={style.informationLayout}>
      Ничья
    </div>
  } else {
    if (isGameEnded) {
      return <div className={style.informationLayout}>
        {`Победа ${currentPlayer}`}
      </div>
    } else {
      return <div className={style.informationLayout}>
        {`Ходит ${currentPlayer}`}
      </div>
    }
  }
}

InformationLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', 'O', '']),
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  reset: PropTypes.func,
}