import React from 'react'
import { withRouter } from 'react-router-dom';
import userService from '../../Services/UserService';

const Admin = (props) => {

    React.useEffect(()=> {
        if(!userService.isAdmin())
        {
            props.history.push('/products');
        }
    })
    return <>{props.children}</>;
}
 
export default withRouter(Admin);