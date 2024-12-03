import React from "react";

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count:0,
        count2:2
    }
  }

  render() {
    const {name, location, description} = this.props;
    return (
      <>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <p>{description}</p>
      </>
    );
  }
}

export default ProfileCard;