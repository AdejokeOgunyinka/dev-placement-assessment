import Template from '../Template/index';

const All = () => {
	const url = 'https://randomuser.me/api/?results=15';
	return (
		<Template
            header="User List"
			url={url}
		/>
	);
}

export default All;
