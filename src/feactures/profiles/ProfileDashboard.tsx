import React from 'react';
import {Grid, GridColumn} from 'semantic-ui-react';
import { isPropertySignature } from 'typescript';
import IProfile from '../../app/modules/profile';
import ProfileList from './ProfileList';


import ProfilesForm from './ProfilesForm';

interface IProps{
    selectedProfile:IProfile|null,
    profiles:IProfile[],
    editProfile:boolean,
    editProfileEvent : (profile: IProfile|null) => void,
    cancelEvent: ()=>void,
    saveProfileEvent: (user:IProfile)=>void
}


const ProfileDashboard = ({selectedProfile,profiles,editProfile,editProfileEvent,cancelEvent,saveProfileEvent}:IProps) =>{
    return(
        <Grid>
            <Grid.Column width={16}>
                <h1>Family</h1>
                {
                    editProfile == false &&
                    <ProfileList 
                        editProfileEvent ={editProfileEvent}
                        profiles = {profiles}
                    />
                }
                {
                    editProfile && <ProfilesForm
                        selectedProfile = {selectedProfile}
                        cancelEvent = {cancelEvent}
                        saveProfileEvent = {saveProfileEvent} />
                    
                }
                

            </Grid.Column>
        </Grid>
    );
}

export default ProfileDashboard;