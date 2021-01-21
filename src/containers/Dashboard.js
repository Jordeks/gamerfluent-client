import DashContent from './DashContent'
import ProfileSideBar from '../components/ProfileSideBar'

const Dashboard = (props) => {
    return (
        <div className='dashboard'>
            <ProfileSideBar {...props} />
            <DashContent />
        </div>
    )
}

export default Dashboard