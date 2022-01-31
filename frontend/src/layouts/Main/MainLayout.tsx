import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.css'

export const MainLayout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Outlet/>
    </div>
  )
}
