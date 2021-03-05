import React, { Fragment } from 'react';
import IProfile from '../../app/modules/profile';
import {Button,Card,Container,Image,List} from 'semantic-ui-react';
import { profile } from 'console';

interface IPprops{
    profiles:IProfile[],
    editProfileEvent : (profile: IProfile|null) => void;
}


const ProfileList = (props:IPprops) =>{
    return(
        <Fragment>
            <h1>Profiles Members</h1>
            <Container>
                <Button onClick ={ () => props.editProfileEvent(null)} primary>New Profile Member</Button>
            </Container>
            <br/>
        <Card.Group>
            {
                props.profiles.map((profile:IProfile) =>(
                    <Card key={profile.id}>
                    <Card.Content>
                        <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com//images/avatar/large/elliot.jpg'
                        />
                        <Card.Header>{profile.name} </Card.Header>
                        <Card.Meta>{profile.description}</Card.Meta>
                        <Card.Description>
                        Jenny requested permission to view your contact details
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button onClick={() => props.editProfileEvent(profile)} basic color='green'>
                            Edit
                        </Button>
                        <Button basic color='red'>
                            View
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
                ))
            }
        </Card.Group>

        </Fragment>
    );
};

export default ProfileList;