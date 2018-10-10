import React, { Component } from 'react';
import Background from '../img/background.jpg';
import Searchbar from '../Search/search';
import ThoraxLanding from '../thoraxLanding/thoraxlanding';
import './landing.css';
class Landing extends Component {
  render() {
    return (
      <div className="y-container homepage-hero">
         <div className="y-container_content">
            <div className="hero-header js-main-header">
                <div className="arrange arrange--18">
                    <div className="arrange_unit arrange_unit--fill">
                        <div className="hero-header_nav hero-header_nav--main nowrap">
                            <ul className="header-nav" id="header-nav">
                                <li id="write-review" className="header-nav_item js-analytics-click" data-analytics-label="write-review">
                                <a className="header-nav_link" href="/writeareview">Write a Review</a></li>
                                <li id="events" className="header-nav_item js-analytics-click" data-analytics-label="events">
                                <a className="header-nav_link" href="/events">Events</a>
                                </li>
                                <li id="talk" className="header-nav_item js-analytics-click" data-analytics-label="talk">
                                <a className="header-nav_link" href="/talk">Talk</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    <div className="arrange_unit nowrap">
                        <ul className="header-nav hero-header_nav main-header_account">
                            <li className="header-nav_item u-space-r2" id="header-log-in">
                            <a className="header-nav_link header-nav_link--log-in js-analytics-click" href="/login" data-analytics-label="login">
                                Log In
                            </a>
                            </li>
                            <li className="header-nav_item u-space-r0 js-analytics-click" id="header-sign-up" data-analytics-label="signup">
                            <a href="/signup" className="ybtn ybtn--primary header-nav_button nowrap">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
            <div className="homepage-hero_inner">
                <div className="u-text-centered">
                    <h1 className="homepage-hero_logo" id="logo">
                        <a href="/">Yelp</a>
                    </h1>
                </div>
                
                <Searchbar/>

            <ul className="homepage-hero_categories js-header-nav text-centered">
                <li className="homepage-hero_category js-analytics-click" data-analytics-label="home cleaners">
                    <div>
                        <span aria-hidden="true" style={{width: '18px', height: '18px'}} className="icon icon--18-home-cleaning icon--size-18 icon--inverse icon--fallback-inverted">
                        <svg role="img" className="icon_svg">
                        </svg>
                    </span>
                    <a className="homepage-hero_link" href="/search?cflt=homecleaning&amp;find_loc=Westminster%2C+London%2C+United+Kingdom">Home Cleaners</a>
                </div>
            </li>
            <li className="homepage-hero_category js-analytics-click" data-analytics-label="restaurants">
                <div>
                    <span aria-hidden="true" style={{width: '18px', height: '18px'}} className="icon icon--18-food icon--size-18 icon--inverse icon--fallback-inverted">
                        <svg role="img" className="icon_svg">
                        </svg>
                    </span>
                        <a className="homepage-hero_link" href="/search?cflt=restaurants&amp;find_loc=Westminster%2C+London%2C+United+Kingdom">Restaurants</a>
                </div>
            </li>

        <li className="homepage-hero_category dropdown js-category-dropdown dropdown--arrow dropdown--fade fade-initial-load" data-analytics-label="home services">
                <div className="js-dropdown-toggle dropdown_toggle">
                    <span aria-hidden="true" style={{width: '18px', height: '18px'}} className="icon icon--18-tools icon--size-18 icon--inverse icon--fallback-inverted">
                        <svg role="img" className="icon_svg">
       
                        </svg>
                    </span>
                        <a className="homepage-hero_link">Home Services</a>
                    <span aria-hidden="true" style={{width: '14px', height: '14px'}} className="icon icon--14-triangle-down icon--size-14 icon--inverse icon--fallback-inverted u-triangle-direction-down dropdown_arrow">
                        <svg role="img" className="icon_svg">
                        </svg>
                    </span>
                </div>
        <div className="dropdown_menu-container js-dropdown_menu-container">
            <div className="dropdown_menu js-dropdown-menu">
                <div className="dropdown_menu-inner">
                    <ul className="dropdown_menu-group" role="menu" aria-hidden="false">
                        <li className="dropdown_item js-analytics-click" data-analytics-label="air conditioning &amp; heating" role="presentation">
                            <a className="dropdown_link js-dropdown-link" href="/search?cflt=hvac&amp;find_loc=Westminster%2C+London%2C+United+Kingdom" role="menuitem">
                                <span className="dropdown_label">
                                    Air Conditioning &amp; Heating
                                </span>
                            </a>

                            </li>
                            <li className="dropdown_item js-analytics-click" data-analytics-label="contractors" role="presentation">
                                        <a className="dropdown_link js-dropdown-link" href="/search?cflt=contractors&amp;find_loc=Westminster%2C+London%2C+United+Kingdom" role="menuitem">
                                            <span className="dropdown_label">
                                                Contractors
                                            </span>
                                        </a>

                            </li>
                            <li className="dropdown_item js-analytics-click" data-analytics-label="electricians" role="presentation">
                                        <a className="dropdown_link js-dropdown-link" href="/search?cflt=electricians&amp;find_loc=Westminster%2C+London%2C+United+Kingdom" role="menuitem">
                                            <span className="dropdown_label">
                                                Electricians
                                            </span>
                                        </a>
                            </li>
                            <li className="dropdown_item js-analytics-click" data-analytics-label="home cleaners" role="presentation">
                                        <a className="dropdown_link js-dropdown-link" href="/search?cflt=homecleaning&amp;find_loc=Westminster%2C+London%2C+United+Kingdom" role="menuitem">
                                            <span className="dropdown_label">
                                                Home Cleaners
                                            </span>
                                        </a>

                            </li>
                            <li className="dropdown_item js-analytics-click" data-analytics-label="landscapers" role="presentation">
                                        <a className="dropdown_link js-dropdown-link" href="/search?cflt=landscaping&amp;find_loc=Westminster%2C+London%2C+United+Kingdom" role="menuitem">
                                            <span className="dropdown_label">
                                                    Landscapers
                                            </span>
                                        </a>

                            </li>
                            <li className="dropdown_item js-analytics-click" data-analytics-label="locksmiths" role="presentation">
                                        <a className="dropdown_link js-dropdown-link" href="/search?cflt=locksmiths&amp;find_loc=Westminster%2C+London%2C+United+Kingdom" role="menuitem">
                                            <span className="dropdown_label">
                                                    Locksmiths
                                            </span>
                                        </a>
                            </li>
                            <li className="dropdown_item js-analytics-click" data-analytics-label="movers" role="presentation">
                                        <a className="dropdown_link js-dropdown-link" href="/search?cflt=movers&amp;find_loc=Westminster%2C+London%2C+United+Kingdom" role="menuitem">
                                            <span className="dropdown_label">
                                                 Movers
                                            </span>
                                        </a>
                            </li>
                            <li className="dropdown_item js-analytics-click" data-analytics-label="painters" role="presentation">
                                        <a className="dropdown_link js-dropdown-link" href="/search?cflt=painters&amp;find_loc=Westminster%2C+London%2C+United+Kingdom" role="menuitem">
                                            <span className="dropdown_label">
                                                Painters
                                            </span>
                                        </a>
                            </li>
                            <li className="dropdown_item js-analytics-click" data-analytics-label="plumbers" role="presentation">
                                <a className="dropdown_link js-dropdown-link" href="/search?cflt=plumbing&amp;find_loc=Westminster%2C+London%2C+United+Kingdom" role="menuitem">
                                    <span className="dropdown_label">
                                            Plumbers
                                    </span>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li className="homepage-hero_category js-analytics-click" data-analytics-label="delivery">
                <div>
                    <span aria-hidden="true" style={{width: '18px',height: '18px'}} className="icon icon--18-order icon--size-18 icon--inverse icon--fallback-inverted">
                    <svg role="img" className="icon_svg">
                    </svg>
                    </span>
                        <a className="homepage-hero_link" href="/search?find_desc=Delivery&amp;find_loc=Westminster%2C+London%2C+United+Kingdom">Delivery</a>
                    </div>
            </li>
            </ul>
            

        <div className="u-text-centered homepage-hero_biz u-size-full">
            <div className="business-link-hovercard js-business-link-hovercard business-link-hovercard--strong business-link-hovercard--inline">
                <span className="business-link-hovercard_business-link js-business-link">
                    <a className="biz-name js-analytics-click" data-analytics-label="biz-name" href="/biz/briarpatch-restaurant-winter-park">
                        <span>Ojodu's Restaurant</span>
                    </a>
                </span>
            </div>
        </div>
        <div className="u-text-centered homepage-hero_photo-owner u-size-full">
            <div data-hypernova-key="homepage__63a014b70e569cfcb9099baf56a19c5011e808af__homepage__PhotoAuthorText__dynamic" data-hypernova-id="f09b5cb2-ef8b-449c-a9ca-b9f8815afebd">
                <p data-reactroot="" data-reactid="1" data-react-checksum="-1830732769">Photo by <a className="homepage-hero_photo-owner-link" href="/user_details?userid=qONCLpLmt3-gtTYuBfNM1A"><strong>Ojodu.Kolawole.</strong></a></p></div>
                <script type="application/json" data-hypernova-key="homepage__63a014b70e569cfcb9099baf56a19c5011e808af__homepage__PhotoAuthorText__dynamic" data-hypernova-id="f09b5cb2-ef8b-449c-a9ca-b9f8815afebd"></script>
        </div>
        </div>
        <ThoraxLanding/>
        </div>
    );
  }
}

export default Landing;
