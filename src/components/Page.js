/**
 * Created by dp-ptcstd-34 on 10/5/2016.
 */

import React, { PropTypes, Component } from 'react'

export default class Page extends Component {

    onYearBtnClick(e) {
        this.props.setYear( + e.target.innerText);
        this.props.getPhotos( + e.target.innerText);
    }

    render() {
        const { year, photos, fetching} = this.props;
        return <div>
            <p>
                <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
                <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
                <button onClick={this.onYearBtnClick.bind(this)}>2014</button>
            </p>
            <h3>{year} год</h3>
            <p>У тебя {photos.length} фото.</p>
            {
                fetching ? <p>Loading...</p> : <p>{photos}</p>
            }
        </div>
    }
}
Page.propTypes = {
    setYear: PropTypes.func.isRequired,
    getPhotos: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired
};