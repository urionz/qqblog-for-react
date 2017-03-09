import React, {Component} from 'react';

export default class Search extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section className="widget widget_search">
                <form className="form-inline" id="search" method="post" action="" role="search">
                    <div className="input-group">
                        <input type="text" placeholder="搜索" className="form-control" name="s"/>
                        <span className="input-group-btn">
                                    <button className="btn btn-primary" id="search-btn" type="submit">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </span>
                    </div>
                </form>
            </section>
        );
    }
}