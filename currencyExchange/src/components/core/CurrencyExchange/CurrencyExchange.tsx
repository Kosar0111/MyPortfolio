import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './CurrencyExchange.css'

export const CurrencyExchange: FC = () => {
  const [state, setState] = useState('')
  let total = 0
  const [value, setValue] = useState('')

  const int = parseInt(state)
  console.log(int, value)

  console.log(isNaN(parseInt(value)))

  const currentValue = localStorage.getItem('currency')

  const navigate = useNavigate()
  const goBack = () => navigate('/', { replace: true })
  useEffect(() => {
    setValue(currentValue || '')
  }, [currentValue])

  return (
    <div>
      <div className="go-back" onClick={goBack}>
        Go back
      </div>
      <>
        <label className="sum-label">Sum</label>
        <input
          className="sum-money"
          placeholder="Enter your sum of money"
          name="sum-money"
          type="text"
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </>
      <div className="total">
        <span className="total-title">You'll can get in UAH: </span>
        <span className="total-sum">
          {Number.isNaN(parseInt(state))
            ? 0
            : value === 'UAH'
            ? (parseInt(state) * 1).toFixed(2)
            : value === 'EUR'
            ? (parseInt(state) * 35.797).toFixed(2)
            : value === 'USD'
            ? (parseInt(state) * 36.5686).toFixed(2)
            : value === 'CAD'
            ? (parseInt(state) * 26.6477).toFixed(2)
            : value === 'AED'
            ? (parseInt(state) * 9.9558).toFixed(2)
            : total}
        </span>
      </div>
    </div>
  )
}
