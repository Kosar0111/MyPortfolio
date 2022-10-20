import { FC } from 'react'
import { ICurrency } from '../../../model/interfaceCurrency'
import './Currency.css'

export const Currency: FC<ICurrency> = (el: ICurrency) => {
  return (
    <div className="currency-wrapper">
      <div className="currency-wrapper__short">{el.cc}</div>
      <div className="currency-wrapper__country">{el.txt}</div>
      <div className="currency-wrapper__value">{el.rate}</div>
    </div>
  )
}
