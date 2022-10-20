import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import { useAppDispatch } from './hooks/hooks'
import { getAllCurrency } from './store/currency'
import { routes } from './routes/routes'

export const App = () => {
  const element = useRoutes(routes)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllCurrency())
  }, [dispatch])

  return <>{element}</>
}
