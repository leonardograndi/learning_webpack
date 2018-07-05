import React, { Component } from 'react'
import style from './Search.css';


class Search extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.clasButtonSearch}>
                Hello Search Component :)
            </div>
        );
    }

}

export default Search;

