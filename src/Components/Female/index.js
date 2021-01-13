import Template from '../Template/index';

const Female = () => {
    const url="https://randomuser.me/api/?gender=female&results=15";
    return(
        <Template
            header="Female Users"
            url={url}
		/>
    )
}

export default Female;
