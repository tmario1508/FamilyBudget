import React, { Component, Fragment, useState, useEffect } from "react";
import ProfileDashboard from '../../feactures/profiles/ProfileDashboard';
import IProfile from '../modules/profile';
import api from '../../api/api';
import {Loader} from 'semantic-ui-react'


const Profiles = () =>{

    const [selectedUser,setSelectedProfile] = useState<IProfile|null>(null);
    const [profiles,setProfiles] = useState<IProfile[]>([]);
    const [loaded,setLoaded] = useState<boolean>(false);
    const [editProfile,setEditProfile] = useState<boolean>(false);

    useEffect(() => {
        if(loaded == false){
            api.Profile.list().then((profiles) =>{
                setProfiles(profiles);
                setLoaded(true);
            });
        }
        
    });


    const handleEditEvent = (profile: IProfile|null) =>{

        setEditProfile(true);
        setSelectedProfile(profile);
    };

    const handleCancelEvent = () =>{
        setSelectedProfile(null);
        setEditProfile(false);
    }

    const handleSaveEvent = (profile: IProfile)=>{
        if(profile.id==0){
            api.Profile.create(profile).then((profileResponse) =>{
                profiles.push(profileResponse);
                setProfiles(profiles);
                setSelectedProfile(null);
                setEditProfile(false);

            });
        }else{
            api.Profile.update(profile).then((profileResponse) =>{
                let index = profiles.findIndex( u => u.id == profile.id);
                profiles[index] = profileResponse;

                setProfiles(profiles);
                setSelectedProfile(null);
                setEditProfile(false);

            });

        }

    }

    if(loaded == false){
        return(
            <Loader active inline="centered"  />
        )
    }


    return(
        <Fragment>
            <ProfileDashboard 
                selectedProfile = {selectedUser}
                editProfile = {editProfile}
                editProfileEvent = {handleEditEvent}
                saveProfileEvent = {handleSaveEvent}
                cancelEvent = {handleCancelEvent}
                profiles={profiles} />
        </Fragment>
    );
};

export default Profiles;