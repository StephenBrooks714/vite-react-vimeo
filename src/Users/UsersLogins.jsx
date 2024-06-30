import { useCallback } from 'react'
import Navbar from '../layouts/Navbar'
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';
import Dashboard from '../actions/Dashboard';

const Login = () => {
    const { isAuthenticated, isSessionLoading } = useSession()
    const { user, isUserLoading } = useUser()
    const { logout } = useDescope()

    const exampleFetchCall = async () => {
        const sessionToken = getSessionToken();

        // example fetch call with authentication header
        fetch('your_application_server_url', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + sessionToken,
            }
        })
    }

    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    return <>
        <Navbar />
        <main className={"container"} style={{marginTop: "120px"}}>
            <div className={"row justify-content-center"}>
                <div className={"col-lg-10"}>
                    {!isAuthenticated &&
                        (
                            <Descope
                                flowId="sign-up-or-in"
                                onSuccess={(e) => console.log(e.detail.user)}
                                onError={(e) => console.log('Could not log in!')}
                            />
                        )
                    }

                    {
                        (isSessionLoading || isUserLoading) && <p>Loading...</p>
                    }

                    {!isUserLoading && isAuthenticated &&
                        (
                            <>
                                <div className={"row"}>
                                    <div className={"col-6"}>
                                        <p className={"h1 mb-2"}>Hello {user.name} </p>
                                        <div className={"lead"}>My Private Component</div>
                                    </div>
                                    <div className={"col-6 text-end"}>
                                        <button onClick={handleLogout}>Logout</button>
                                    </div>
                                </div>
                                <Dashboard />
                            </>
                        )
                    }
                </div>
            </div>
        </main>
    </>;
}

export default Login;