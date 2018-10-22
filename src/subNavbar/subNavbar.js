import React, { Component } from 'react';
import './subnavbar.css';
class Subnavbar extends Component {
  render() {
    return (
      <div className="subNavbar">
          <div class="home-container_section home-container_section--top-long">
            <h2 class="u-text-centered">Yelp Akoka</h2>
            <div class="location-bar">
            <div class="tab-nav-container">
            <ul class="tab-nav js-tab-nav tab-nav--center js-tab-nav--center" role="tablist">    
            <li class="tab-nav_item" role="presentation">
                <a aria-selected="false" class="tab-link tab-link--nav" href="/?location=nyc" role="tab">
                            <span class="tab-link_label">Lagos</span>
                </a>
            </li>
            <li class="tab-nav_item" role="presentation">
                <a aria-selected="false" class="tab-link tab-link--nav" href="/?location=san-jose" role="tab">
                            <span class="tab-link_label">Enugu</span>
                </a>
            </li>
            <li class="tab-nav_item" role="presentation">
                <a aria-selected="false" class="tab-link tab-link--nav" href="/?location=la" role="tab">
                            <span class="tab-link_label">Akoka</span>
                </a>
            </li>
            <li class="tab-nav_item" role="presentation">
                <a aria-selected="false" class="tab-link tab-link--nav" href="/?location=chicago" role="tab">
                  <span class="tab-link_label">Oshodi</span>
                </a>
            </li>
            <li class="tab-nav_item" role="presentation">
                <a aria-selected="false" class="tab-link tab-link--nav" href="/?location=palo-alto" role="tab">
                    <span class="tab-link_label">Abuja</span>
                </a>
            </li>
            <li class="tab-nav_item" role="presentation">
                <a aria-selected="false" class="tab-link tab-link--nav" href="/?location=oakland" role="tab">
                            <span class="tab-link_label">Ikeja</span>
                </a>
            </li>
            <li class="tab-nav_item tab-nav_item--last" role="presentation">
                <a aria-selected="false" class="tab-link tab-link--nav" href="/locations" role="tab">
                        <span aria-hidden="true" style={{width:'18px', height: '18px'}} class="icon icon--18-search-small icon--size-18 icon--currentColor tab-link_icon js-tab-link_icon tab-link_icon-wrap">
                            <svg role="img" class="icon_svg">
                            
                            </svg>
                        </span>
                        <span class="tab-link_label">More Cities</span>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </div>
      </div>
    );
  }
}

export default Subnavbar;
