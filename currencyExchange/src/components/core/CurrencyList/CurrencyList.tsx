import React from 'react'
import { useAppSelector } from '../../../hooks/hooks'
import { Currency } from '../Currency/Currency'

export const CurrencyList = () => {
  const allMoney = useAppSelector(state => state.currency.currency)
  const filterCurrency = allMoney.filter(
    el => el.cc === 'CAD' || el.cc === 'AED' || el.cc === 'USD' || el.cc === 'EUR'
  )
  return (
    <div className="currency">
      <h1>Current value currency</h1>
      {filterCurrency.map(el => (
        <Currency key={el.r030} {...el} />
      ))}
    </div>
  )
}
