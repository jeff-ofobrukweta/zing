import React, { Component } from 'react';
import Writereview from '../img/write_review.png';
import './Firstreview.css';
class Firstreview extends Component {
  render() {
    return (
        <div class="island island--blue">
        <div class="arrange arrange--middle">
            <div class="arrange_unit education-banner_badge">
                <div class="u-space-l2">
                    <img src={Writereview} srcSet={Writereview} width="141"/>
                </div>
            </div>
            <div class="arrange_unit arrange_unit--fill education-banner_text">
                <div class="u-space-l4">
                    <h2 class="alternate u-space-b3">Hjälp communityt</h2>

                    <p class="u-space-b3">Tycker du Yelp-recensioner är bra? Börja hjälpa andra genom att dela med dig av din upplevelse.</p>

                        <a href="/writeareview" class="ybtn ybtn--primary education-banner_button js-education-banner_button">make first review</a>
                </div>
            </div>
        </div>
</div>
    );
  }
}

export default Firstreview;





