import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <div className='header'>
            <h1 className='heading-primary heading-primary--main'>
                GamerFluent
            </h1>
            <h3 className='heading-primary heading-primary--sub'>
                The Spawn Point for All Your gaming needs 
            </h3>
        </div>
        <NavLink className='button' to="/dashboard">Go to your dash</NavLink>
        </>
    )
}

export default Header; 