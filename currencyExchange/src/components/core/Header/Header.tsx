import { FC, useState } from 'react'
import '../../../App.css'
import { useAppSelector } from '../../../hooks/hooks'

export const Header: FC = () => {
  let country = localStorage.getItem('currency')
  const [state, setState] = useState(country || 'UAH')
  const allMoney = useAppSelector(state => state.currency.currency)
  const filterCurrency = allMoney.filter(
    el => el.cc === 'CAD' || el.cc === 'AED' || el.cc === 'USD' || el.cc === 'EUR'
  )

  const choiceCurrency = (cur: string): void => {
    localStorage.setItem('currency', `${cur}`)
    setState(cur)
  }

  return (
    <div className="choice">
      <label className="label">Choice currency</label>
      <select onChange={e => choiceCurrency(e.target.value)}>
        <option disabled>Choice currency </option>
        <option value="UAH" onChange={() => choiceCurrency('UAH')}>
          UAH
        </option>
        {filterCurrency.map(el => (
          <option key={el.r030} defaultValue={state} value={el.cc}>
            {el.cc}
          </option>
        ))}
      </select>
    </div>
  )
}
