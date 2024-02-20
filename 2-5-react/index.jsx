function Header({ title }) {
	return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
	const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
	const [inputValue, setInputValue] = React.useState("init")

	function inputChange(e) {
		console.log(e)
		setInputValue(e.target.value)
	}

	return (
		<div>
			<Header title="Develop. Preview. Ship." />
			<ul>
				{names.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<Header title={inputValue} />

			<input value={inputValue} onChange={inputChange} />
		</div>
	);
}

const domNode = document.getElementById("app")
const root = ReactDOM.createRoot(domNode);
root.render(<HomePage />);