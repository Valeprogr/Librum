
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "../components/spinner/Spinner";


export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user)

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            {user ?
                  <div>
                  <img src={user.picture} alt={user.name} />
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  <p>{user.nickname}</p>
                </div>
                :
                null
            }
          
        </div>
    );
};

export default Profile;