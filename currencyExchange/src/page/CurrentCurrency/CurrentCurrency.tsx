import { CurrencyList } from '../../components/core/CurrencyList/CurrencyList'
import { useNavigate } from 'react-router-dom'
import './CurrentCurrency.css'

export const CurrentCurrency = () => {
  const navigate = useNavigate()
  const goChange = () => navigate('/exchange', { replace: true })
  return (
    <div>
      <div className="go-change" onClick={goChange}>
        Change your money
      </div>
      <CurrencyList />
    </div>
  )
}
