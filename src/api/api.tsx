import axios,{AxiosResponse} from 'axios';
import IUser from '../app/modules/user';
import IProfile from '../app/modules/profile';

axios.defaults.baseURL = 'https://localhost:5001/api/';

const responseBody = (response:AxiosResponse) => response.data;

const request = {
    get: (url:string) => axios.get(url).then(responseBody) ,
    post : (url:string,body:{}) => axios.post(url,body).then(responseBody),
    put : (url:string,body:{}) => axios.put(url,body).then(responseBody),

};

const User = {
    list : () => request.get('user') ,
    create : (user:IUser) => request.post('user',user),
    update : (user:IUser) => request.put('user',user),
}

const Profile = {
    list : () => request.get('profile') ,
    create : (profile:IProfile) => request.post('profile',profile),
    update : (profile:IProfile) => request.put('profile',profile),
}

export default{
    User,
    Profile

}