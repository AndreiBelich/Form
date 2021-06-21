import React from 'react';
import style from "./FormRow.module.sass";


function FormRow({children}) {
  return (
    <div className={style.formRow}>
      { children }
    </div>
  )
}

export default FormRow;