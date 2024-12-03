import React from "react";
import ProfileCard from "./ProfileCard";
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props)
    {
        super(props);


        this.state = {
            userInfo:{
                // name: '',                                 
                email: '',
                phone: ''
            }
        }; 

    }

    async componentDidMount()
    {
        console.log("About component mounted");
        const data = await fetch("https://api.github.com/users/DeepakMaharana");
        const response = await data.json();
        console.log(response);
        this.setState({
            userInfo:response
        })
    }

    render()
    {
        const {name, location, login, bio} = this.state.userInfo; 
        return <>
        <UserContext.Consumer>
            {
                ()=>{
                    console.log(data)
                }
            }
        </UserContext.Consumer>
            <h1>About</h1>
            <ProfileCard name={login} location={location} description={bio}/>
        </>
    }
}

export default About;

