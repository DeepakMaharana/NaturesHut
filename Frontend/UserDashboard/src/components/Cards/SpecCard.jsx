
import '../../css/card.css';
import { CDN_URL } from '../../utils/constants';

export default function SpecCards({resData})
{


    return <div className="card">
        <div className='card-img'>
            <img src={resData['images'][0]} alt="Logo" />
        </div>

        <div className="card-details">
            <ul className='list-disc text-sm text-gray-500'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, doloremque natus accusamus totam, aliquam, explicabo neque aspernatur ullam pariatur suscipit odio error inventore hic iste sint asperiores. Quisquam, quia incidunt.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            </ul>
        </div>
    </div>;
}


