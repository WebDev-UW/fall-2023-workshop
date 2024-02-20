const app = document.getElementById("app")
const root = ReactDOM.createRoot(app);


function Header({ title }) {

	return (
		<>
			<h1>{`Cool ${title ? title : 'Default title'}`}</h1>
		</>
	)
}

function HomePage() {
	const [clicks, setClicks] = React.useState(0)

	function handleClick() {
		setClicks(clicks + 1)
	}

	const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

	return (
		<div>
			<Header title={`First Header ${clicks}`} />
			<ul>
				{
					names.map((name) => (
						<li key={name}>{name}</li>
					))
				}
			</ul>
			<button onClick={handleClick}>Likes: {clicks}</button>
		</div>
	)
}

root.render(
	<>
		<HomePage />
	</>

);