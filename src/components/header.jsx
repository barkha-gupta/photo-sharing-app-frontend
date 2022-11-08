import { Link } from 'react-router-dom';
const Header= () =>
{
    return(
        <div>
            <div className="header">
                <div className="insta-icon">
                <i className="fa fa-bullseye" aria-hidden="true"></i>
                </div>
                <div className="insta-clone">Instaclone</div>
                <div className="camera-icon">
                <Link to="/createpost" >
                    <i className="fa fa-camera" aria-hidden="true"></i>  
                </Link> 
                </div>
            </div>
        </div>
    )
}
export default Header;