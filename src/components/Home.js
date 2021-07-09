import {useSelector} from "react-redux";

const Home = () => {
    const state = useSelector(state => state)
    console.log(state)
    return(
        <div>
            <h1>{state.username}</h1>
            <h1>{state.adminReducer.name} ==== Muhammad Moiz Ajaz</h1>
            <h1>{state.userReducer.name} ===== Muhammad Moiz Ajaz</h1>
        </div>
    )
}

export default Home;