
import '../../css/card.css';
import { CDN_URL } from '../../utils/constants';

export default function Cards({resData})
{
    // const {
    //     cloudinaryImageId,
    //     name,
    //     cuisines,
    //     avgRating,
    //     costForTwo,
    //     deliveryTime,
    // } = resData?.data;

    return <div className="card">
        <div className='card-img'>
            <img src={resData["images"][1]} alt="Logo" />
        </div>

        <div className="card-details">
            <h2>{name}</h2>
            <p className='location-details'>Location:  {resData["location"]}</p>

            <p className='card-descp'>
            {resData["description"]}
            </p>
        </div>
    </div>;
}

const withPromotedCard = (Card)=>{
    return (props)=>{
        return (
            <>
                {/* <label htmlFor="">Promoted</label> */}
                <Card {...props}/>
            </>
        )
    } 
}

export {withPromotedCard};
