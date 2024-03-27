import { ArticlesContainer } from "../components"
import { AuthStatus } from '../components/AuthStatus/AuthStatus';


export const Dashboard = () => {  

  return (
    <div className="dashboard-container">

      <AuthStatus />

      <h1>Dashboard Page</h1>
      <ArticlesContainer />

    </div>
  )
}
