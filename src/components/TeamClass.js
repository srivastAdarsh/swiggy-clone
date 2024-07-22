import React from "react";

class TeamClass extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count : 0,
            user : null
        }

        console.log("component constructed");
    }

    async componentDidMount(){
        const userData = await fetch("https://api.github.com/users/srivastAdarsh");
        const json = await userData.json();
        this.setState({
            user : json
        })
        console.log("component mounted");
    }
    
    componentDidUpdate(){
        console.log("component updated");
    }

    componentWillUnmount(){
        console.log("component unmounted");
    }

    render() {
        console.log("component rendered");
        const { position, email } = this.props;  
        const { count, user } = this.state; 
        if(user == null){
            return (<h1>Loading...</h1>)
        }
        const { name, avatar_url } = user;
        return (
            <div>
                <img src={avatar_url} style={{"width" : "100px", "height" : "100px"}} alt="avatar"/>
                <h1>{name}</h1>
                <p>{position}</p>
                <p>{email}</p>
                <div>
                    <p>Count : {count}</p>
                    <button onClick={()=>{
                        this.setState({
                            count : count + 1
                        })
                    }}>Increase</button>
                </div>
            </div>
        )
    }
}

export default TeamClass;