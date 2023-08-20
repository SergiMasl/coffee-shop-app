import Header from "./Header";
import Catalog from './Catalog';
import SeasonItems from './body/SeasonItems/SeasonItems';

import './styles/home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <SeasonItems />
        </div>
    )
}

export default Home;