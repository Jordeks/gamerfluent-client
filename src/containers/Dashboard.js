import DashContent from './DashContent'
import ProfileSideBar from '../components/ProfileSideBar'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <ProfileSideBar />
            <DashContent />
        </div>
    )
}

export default Dashboard