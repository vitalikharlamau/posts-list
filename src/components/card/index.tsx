import { FunctionComponent } from 'react';
import './style.css';

export const Card: FunctionComponent<{postData: PostData}> = ({postData}) => {
    const dataObj = postData;

    return (
        <div className='Card'>
            <div className='CardInfo'>
                <p className='CardData'>{dataObj.date}</p>
                <h2 className='CardTitle'>{dataObj.title}</h2>
                <p className='CardText'>{dataObj.text}</p>
            </div>
            <div className='CardPicture'>
                <img className='CardImage' src={dataObj.image} alt={dataObj.title} />
            </div>
        </div>
    );
}
