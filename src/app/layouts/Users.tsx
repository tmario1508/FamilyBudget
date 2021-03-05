import React, { Component, Fragment, useState, useEffect } from "react";
import UserDashboard from '../../feactures/users/UsersDashboard';
import IUser from '../modules/user';
import api from '../../api/api';
import {Loader} from 'semantic-ui-react'

/* interface IState{
    users:IUser[],
    loaded:boolean,

} */

const Users = () =>{

    const [selectedUser,setSelectedUser] = useState<IUser|null>(null);
    const [users,setUsers] = useState<IUser[]>([]);
    const [loaded,setLoaded] = useState<boolean>(false);
    const [editUser,setEditUser] = useState<boolean>(false);

    useEffect(() => {
        if(loaded == false){
            api.User.list().then((users) =>{
                setUsers(users);
                setLoaded(true);
            });
        }
        
    });


    const handleEditEvent = (user: IUser|null) =>{

        setEditUser(true);
        setSelectedUser(user);
    };

    const handleCancelEvent = () =>{
        setSelectedUser(null);
        setEditUser(false);
    }

    const handleSaveEvent = (user: IUser)=>{
        if(user.id==0){
            api.User.create(user).then((userResponse) =>{
                users.push(userResponse);
                setUsers(users);
                setSelectedUser(null);
                setEditUser(false);

            });
        }else{
            api.User.update(user).then((userResponse) =>{
                let index = users.findIndex( u => u.id == user.id);
                users[index] = userResponse;

                setUsers(users);
                setSelectedUser(null);
                setEditUser(false);

            });

        }

        console.log(user);
    }

    if(loaded == false){
        return(
            <Loader active inline="centered"  />
        )
    }


    return(
        <Fragment>
            <UserDashboard 
                selectedUser = {selectedUser}
                editUser = {editUser}
                editUserEvent = {handleEditEvent}
                saveUserEvent = {handleSaveEvent}
                cancelEvent = {handleCancelEvent}
                users={users} />
        </Fragment>
    );
};

export default Users;




/*
export default class Users extends Component{
    readonly state:IState = {
        users : [],
        loaded : false,
    }

    componentDidMount(){
        api.User.list().then((users) =>{
            this.setState({
                users: users,
                loaded: true
            });
        });
        /*
        let users = [{id:1, firstName:'Mario', lastName:'Torres',userName:'tmario1508', password:'12345'}];
        this.setState({
            users: users,
            loaded: true
        });
        
    }

    render(){
        if(this.state.loaded == false){
            return(
                <Loader activeinline="contered" />
            )
        }
        return(
            <Fragment>
                <UserDashboard users={this.state.users}/>

            </Fragment>
        );
    } 
} */