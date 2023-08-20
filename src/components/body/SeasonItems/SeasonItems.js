import '../../styles/seasonItems.css';
import Carousel from './carousel/Carousel'


const SeasonItems = () => {
    return (
        <section className='new_items_wrapper'>
            <div className='new_items_description'>
                <h1 className='new_items_description_title'>The happiest hour<br></br> of the year</h1>
                <p className='new_items_description_text'>Try our season menu!</p>
            </div>
            <Carousel /> 
        </section>
    )
}

export default SeasonItems