import React, { Component } from 'react';
import Firstreview from '../Firstreviewblock/Firstreview';
import Viewlanding from '../Landingviews/Landingviews';
import Cardsview from '../Cards/cards';
import Subnav from '../subNavbar/subNavbar';
import './thoraxLanding.css';
class ThoraxLanding extends Component {
  render() {
    return (
      <div className="thoraxLanding">
        <div class="y-container ">
            <div class="y-container_content">
                <div class="home-container home-container--first-top-short">
                <div class="home-container_section education-banner js-education-banner home-container_section--bottom-short" data-component-bound="true">
                    <Firstreview/>
                </div>
                <Subnav/>
                {/* <Viewlanding/> */}
            </div>
            <Cardsview/>
            </div>
            </div>
      </div>
    );
  }
}

export default ThoraxLanding;