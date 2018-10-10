import React, { Component } from 'react';
import './search.css';
class Search extends Component {
  render() {
    return (
    <form method="get" action="/search" id="header_find_form" className="business-search-form main-search yform u-space-b0 js-business-search-form" role="search" data-component-bound="true" style={{width:'960px',margin:'0 auto'}}>
        <div className="arrange arrange--equal arrange--stack-small">
            <div className="arrange_unit">
                <div className="main-search_suggestions-field search-field-container find-decorator">
                    <label className="pseudo-input business-search-form_input business-search-form_input--find" for="find_desc" data-component-bound="true">
                        <div className="pseudo-input_wrapper">
                            <span className="pseudo-input_text business-search-form_input-text">Find</span>
                            <span className="pseudo-input_field-holder" data-component-bound="true">
                                <input autocomplete="off" id="find_desc" maxlength="64" name="find_desc" placeholder="home cleaners, burgers, spas…" value="" className="pseudo-input_field business-search-form_input-field" aria-autocomplete="list" tabindex="1"/>
                            </span>
                        </div>
                    </label>
                    <div className="main-search_suggestions suggestions-list-container search-suggestions-list-container hidden" data-component-bound="true">
                        <ul className="suggestions-list" role="listbox" aria-label="Search results"></ul>
                    </div>
                </div>
            </div>

            <div className="arrange_unit">
                <div className="arrange">
                    <div className="arrange_unit arrange_unit--fill">
                        <div className="main-search_suggestions-field search-field-container near-decorator">
                            <label className="pseudo-input business-search-form_input business-search-form_input--near">
                                <div className="pseudo-input_wrapper">
                                <span className="pseudo-input_text business-search-form_input-text">Near</span>
                                    <span className="pseudo-input_field-holder">
                                        <input autocomplete="off" id="dropperText_Mast" maxlength="80" placeholder="address, neighborhood, city, state or zip" value="Lagos, Nigeria, West Africa" className="pseudo-input_field business-search-form_input-field" aria-autocomplete="list" tabindex="2" data-component-bound="true"/>
                                        <input type="hidden" maxlength="80" data-component-bound="true" name="find_loc" value="Lagos, Nigeria, West Africa"/>
                                        <input type="hidden" name="ns" value="1"/>
                                    </span>
                                </div>
                            </label>
                            <div className="main-search_suggestions suggestions-list-container location-suggestions-list-container hidden" data-component-bound="true">
                                <ul className="suggestions-list" role="listbox" aria-label="Search results">
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="arrange_unit">

    <button className="ybtn ybtn--primary ybtn--small business-search-form_button" id="header-search-submit" tabindex="3" title="Search" type="submit" value="submit">
                            <span className="main-search_action-icon-wrap js-search-icon-wrap">
                                <span aria-hidden="true" style={{width: '24px', height:' 24px'}} className="icon icon--24-search icon--size-24 icon--currentColor">
                                    <svg role="img" className="icon_svg">
                                    </svg>
                                </span>
                                <span className="u-offscreen">Search</span>
                            </span>
                    <div className="circle-spinner js-circle-spinner hidden">
                        <div className="circle-spinner_segment container1">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                        </div>
                        <div className="circle-spinner_segment container2">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                        </div>
                        <div className="circle-spinner_segment container3">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                        </div>
                    </div>
    </button>
    </div>
</div>
</div>
</div>
</form>
    );
  }
}

export default Search;
