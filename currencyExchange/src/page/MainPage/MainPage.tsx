import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/core/Header/Header'
import '../../App.css'

export const MainPage: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  )
}
