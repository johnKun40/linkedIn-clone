import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {


    const newsArticle = (heading, subtitle) => {

        return <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    }

  return (
    <div className='widgets'>

        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle('John Adesina', 'First React-Redux App')}
        {newsArticle('Coronavirus: NG updates', 'Top News - 678 readers')}
        {newsArticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
        {newsArticle('Bitcoin Breaks $33k', 'Crypto - 3998 readers')}
        {newsArticle('Is Redux the best?', 'Code - 987 readers')}
        {newsArticle('Adesina react amazon clone', 'Top news - 3429 readers')}
        

    </div>
  );
}

export default Widgets;