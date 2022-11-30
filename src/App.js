import { useState } from "react";
import "./App.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa";
import { useFetch } from "./component/useFetch";
const url = "https://jsonplaceholder.typicode.com/comments";

const App = () => {
	const { loading, people } = useFetch(url);

	const [index, setIndex] = useState(0);
	const handleLeftMove = () => {
		setIndex((prevState) => {
			if (prevState == 0) {
				return people.length - 1;
			} else {
				return prevState - 1;
			}
		});
	};
	const handleRightMove = () => {
		setIndex((prevState) => {
			if (prevState == people.length - 1) {
				return 0;
			} else return prevState + 1;
		});
	};
	const randomSwipe = () => {
		let newIndex = Math.floor(Math.random() * people.length);
		if (index == newIndex) {
			return setIndex(newIndex + 1);
		} else return setIndex(newIndex);
	};

	return (
		<div className="App">
			<div className="header">
				<h1>Our Reviews</h1>
				<div className="border"></div>
			</div>

			{loading && (
				<h3 className="loading">
					<AiOutlineLoading3Quarters />
				</h3>
			)}
			{!loading && (
				<div>
					<div className="person">
						<div className="img-cont">
							<img
								src={`https://picsum.photos/200/300?random=${people[index].id}`}
								alt={people[index].name}
							/>
							<h3 className="quote">
								<FaQuoteRight />
							</h3>
						</div>
						<h4 className="name">{people[index].name}</h4>
						<p className="email">{people[index].email}</p>
						<p className="body">{people[index].body}</p>
						<div className="angles">
							<h4 onClick={handleLeftMove} className="sub-angles">
								<FaAngleLeft />
							</h4>
							<h4 onClick={handleRightMove} className="sub-angles">
								<FaAngleRight />
							</h4>
						</div>
						<button onClick={randomSwipe}>Get Random Profile</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
