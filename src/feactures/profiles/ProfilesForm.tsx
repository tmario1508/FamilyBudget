import React,{Fragment,useEffect,useState} from 'react';
import {Grid,Segment,Form,Button} from 'semantic-ui-react';
import IProfile from '../../app/modules/profile';

interface IProps{
    selectedProfile:IProfile|null,
    cancelEvent: ()=>void,
    saveProfileEvent: (profile:IProfile)=>void
}


const ProfileForm = ({selectedProfile,cancelEvent,saveProfileEvent}:IProps)=>{
    let defaultProfile = {
        id : 0,
        name : '',
        description : '',
    }

    let profileValue:IProfile = (selectedProfile !=null) ?selectedProfile : defaultProfile;

    const [profile,setProfile] = useState<IProfile>(profileValue);

    const handleImputChanges = (event:any) =>{
        const {name,value} = event.target;

        setProfile({...profile,[name]:value});
    }

    return(
        <Fragment>
            <Segment clearing>
                <Form>
                    <Form.Input
                        name="name"
                        onChange={handleImputChanges}
                        placeholder= "Name"
                        value={profile.name}
                    />
                    <Form.Input
                        name="description"
                        onChange={handleImputChanges}
                        placeholder= "Description"
                        value={profile.description}
                    />
                    <Button floated='right' onClick={() => saveProfileEvent(profile)} positive type="submit" content="Save"></Button>
                    <Button floated='right' onClick={() => cancelEvent()} type="submit" content="Cancel"></Button>
                </Form>

            </Segment>
        </Fragment>
    )
};

export default ProfileForm;
