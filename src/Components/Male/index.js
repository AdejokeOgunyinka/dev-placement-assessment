import Template from '../Template/index';

const Male = () => {
    const url = "https://randomuser.me/api/?gender=male&results=15";
    return (
        <Template
            header="Male Users"
            url={url}
		/>
    )
}

export default Male;
