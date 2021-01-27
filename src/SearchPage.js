import { Button } from '@material-ui/core';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div
            className="searchPage__info">
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button 
                variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>

            </div>
            <SearchResult 
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location='Private room in center of London'
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared - bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />
             <SearchResult 
                img='https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg'
                location='Private room in center of London'
                title="London Studio Apartments"
                description="4 guest - 4 bedroom - 2 bathrooms - Free parking - Washing Machine"
                star={3.8}
                price="$35 / night"
                total="$207 total"
            />
            <SearchResult 
                img='https://a0.muscache.com/im/pictures/1180e48d-02d0-420f-bb77-ca90a4de2acb.jpg?im_w=1200'
                location='Private room in center of London'
                title="30 mins to Oxford"
                description="1 guest - 1 bedroom - 1 bed - Free parking - Washing Machine"
                star={4.1}
                price="$55 / night"
                total="$320 total"
            />
            <SearchResult 
                img='https://a0.muscache.com/im/pictures/8e3933ba-0a2d-47a4-9bea-52d6eaba1956.jpg?im_w=1200'
                location='Private room in center of London'
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared - bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />
            <SearchResult 
                img='https://a0.muscache.com/im/pictures/69fd78ad-48b0-429c-b874-f5feb1f2587e.jpg?im_w=1200'
                location='Private room in center of London'
                title="Stay at this spacious Edwardian House"
                description="2 guests · 1 bedroom · 2 beds · 1 private bathroom"
                star={4.7}
                price="$30 / night"
                total="$117 total"
            />
            <SearchResult 
                img='https://a0.muscache.com/im/pictures/265ac776-9ad9-462e-b7c4-87c33882a6b1.jpg?im_w=1200'
                location='Private room in center of London'
                title="Lovely Flat Within 5 minutes to Central London!"
                description="2 guests · 1 bedroom · 1 shared bathroom"
                star={4.3}
                price="$29 / night"
                total="$117 total"
            />
        </div>
    )
}

export default SearchPage
