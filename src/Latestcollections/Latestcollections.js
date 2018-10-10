import React, { Component } from 'react';
import './Latestcollections.css';
class Latestcollections extends Component {
  render() {
    return (
      <div>
          <div class="main-header main-content-wrap js-main-header webview-hidden main-header--lsat is-searching">
            <div class="main-header_wrapper">
                <div class="content-container">
                    <div class="arrange arrange--18 arrange--middle main-header_arrange">
                            <div class="arrange_unit main-header--full_arrange_unit">
                                <div class="main-header_logo js-analytics-click" id="logo" data-analytics-label="logo">
                                    <a href="/">
                                    <font style={{verticalAlign: 'inherit'}}>
                                    <font style={{verticalAlign: 'inherit'}}>Owners
                                    </font>
                                    </font>
                                    </a>
                                </div>
                            </div>
                        <div class="arrange_unit arrange_unit--fill align-middle main-header--full_arrange_unit main-header_search-container">
                    <div class="main-header_search responsive-hidden-medium-only">
                <form method="get" action="/search" id="header_find_form" class="main-search yform u-space-b0" role="search" data-component-bound="true">
        <div class="arrange arrange--stack">
            <div class="arrange_unit arrange_unit--fill">
                <div class="arrange arrange--equal arrange--stack">
                    <div class="arrange_unit main-search_search-field-arrange">
                            <div class="main-search_suggestions-field search-field-container find-decorator">
        <label class="main-search_pseudo-input main-search_pseudo-input--find pseudo-input" for="find_desc">
            <span class="pseudo-input_text">
            <font style={{verticalAlign: 'inherit'}}>
            <font style={{verticalAlign: 'inherit'}}>Find
            </font>
            </font>
            </span>
            <span class="pseudo-input_field-holder" data-component-bound="true" style={{position: 'relative', display: 'block'}}>
                <input disabled="" autocomplete="off" spellcheck="false" tabindex="-1" style={{position: 'absolute', color: 'rgb(200, 200, 200)', width: '100%', boxSizing: 'border-box', top: '0px', right: '0px', bottom: '0px', left: '0px', display: 'none',fontSize: '14px', fontStyle: 'normal', lineHeight: '20px', fontweight: '400', letterSpacing: '0px', backgroundColor: 'rgba(0, 0, 0, 0)', fontkerning: 'auto', verticalAlign: 'baseline', padding: '0px', borderWidth: '0px'}}/>
                <input maxlength="64" id="find_desc" autocomplete="off" value="" placeholder="kebab, fika, Peppes" class="main-search_field pseudo-input_field" aria-autocomplete="list" tabindex="1" data-component-bound="true" style={{display: 'inline-block', background: 'transparent', position: 'relative', width: '100%', boxSizing: 'border-box'}}/>
                <input type="hidden" maxlength="64" data-component-bound="true" name="find_desc" value=""/>
            </span>
        </label>
        <div class="main-search_suggestions suggestions-list-container search-suggestions-list-container hidden" data-component-bound="true">
            <ul class="suggestions-list" role="listbox" aria-label="Sökresultat"></ul>
        </div>
    </div>
</div>
    <div class="arrange_unit main-search_near-field-arrange  main-search_search-field-arrange arrange_unit--stack-12">
        <div class="main-search_suggestions-field search-field-container near-decorator">
        <label class="main-search_pseudo-input main-search_pseudo-input--near pseudo-input">
            <span class="pseudo-input_text">
            <font style={{verticalAlign: 'inherit'}}>
            <font style={{verticalAlign: 'inherit'}}>
                Close
            </font>
            </font>
            </span>

            <span class="main-search_field-holder pseudo-input_field-holder">
                <input maxlength="80" id="dropperText_Mast" autocomplete="off" value="Stockholm" placeholder="adress, stadsdel, stad, län, eller postnummer" data-query="Stockholm" class="main-search_field pseudo-input_field" aria-autocomplete="list" tabindex="2" data-component-bound="true"/>
                <input type="hidden" maxlength="80" data-component-bound="true" name="find_loc" value=""/>
                <input type="hidden" name="ns" value="1"/>
            </span>

        </label>
        <div class="main-search_suggestions suggestions-list-container location-suggestions-list-container hidden" data-component-bound="true">
            <ul class="suggestions-list" role="listbox" aria-label="Sökresultat">
            <li class="item suggestion suggestions-list-item suggest-button menu-pane-selected-node" role="option" tabindex="0" aria-label="geolocation" data-suggestion-type="geolocation" data-param-type="l" data-suggest-query="Current Location">
            <div class="media-block"><div aria-hidden="true" class="media-avatar">
            <span class="icon icon--24-location icon--size-24 icon--blue-dark" aria-hidden="true" style={{width: '24px', height: '24px'}}><svg class="icon_svg">
            
            </svg>
            </span>
            </div><div class="media-story">
            <span class="suggestion-detail">
            <span class="suggestion-detail suggestion-title suggestion-name">
            <font  style={{verticalAlign: 'inherit'}}>
            <font style={{verticalAlign: 'inherit'}}>Current location</font></font></span></span>
            <small class="suggestion-detail suggestion-subtitle suggestion-location">
            </small>
            </div>
            </div>
            </li>
            <li class="item suggestion suggestions-list-item " role="option" tabindex="0" aria-label="location" data-suggestion-type="location" data-param-type="find_loc" data-suggest-query="Stockholm, Stockholms län" data-ajax-data="null">
            <div class="media-block"><div class="media-story">
            <span class="suggestion-detail"><span class="suggestion-detail suggestion-title suggestion-name">
            <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Stockholm, Stockholm County</font></font></span></span>
            <small class="suggestion-detail suggestion-subtitle suggestion-location"></small></div></div></li></ul>
        </div>
    </div>

</div>
</div>
</div>
<div class="arrange_unit main-search_actions arrange_unit--stack-12">
<div class="arrange arrange--wrap arrange--6">
<div class="arrange_unit hidden-non-responsive-inline-block responsive-visible-small-inline-block main-search_action">
<a class="ybtn ybtn--primary main-header_button js-search-close main-search_close">
<font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
    Cancel
</font>
</font>
</a>
</div>
<div class="arrange_unit main-search_action arrange_unit--stack-12">
<button class="ybtn ybtn--primary main-search_submit main-header_button" id="header-search-submit" tabindex="3" title="search" type="submit" value="submit">
<span class="main-search_action-icon-wrap js-search-icon-wrap" style={{display:'inline'}}>
<span aria-hidden="true" style={{width: '24px', height: '24px'}} class="icon icon--24-search icon--size-24 icon--inverse icon--fallback-inverted">
<svg role="img" class="icon_svg">
    <use>
        hello
    </use>
</svg>
</span>
<span class="u-offscreen"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>search</font></font></span>
</span>
<div class="circle-spinner js-circle-spinner hidden">
<div class="circle-spinner_segment container1">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
        </div>
        <div class="circle-spinner_segment container2">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
        </div>
        <div class="circle-spinner_segment container3">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
        </div>
    </div>
</button>
</div> 
</div>
</div>
</div>
</form>
</div>
</div>
<div class="arrange_unit main-header--full_arrange_unit">
                                <div class="arrange arrange--6">
                                    <div class="arrange_unit u-nowrap">
                                        <div class="main-header_account webview-hidden">
                                                        <ul class="header-nav">
            <li class="header-nav_item responsive-hidden-small js-analytics-click" data-analytics-label="signup">

    <a class="ybtn ybtn--primary main-header_button header-nav_button--sign-up js-sign-up-button" href="/signup" id="header-sign-up"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                    Register
    </font></font></a>
            </li>
        <li class="header-nav_item">
                    <a class="header-nav_link header-nav_link--log-in js-log-in-button" href="https://www.yelp.se/login?return_url=%2Fsearch%3Fcflt%3Dauto%26find_loc%3DStockholm"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
            Sign in
        </font></font></a>

        </li>
    </ul>
        
    <div id="topbar-account-item" class="user-account clearfix drop-menu-origin hidden-non-responsive-block responsive-visible-small-block" data-component-bound="true">

    <a class="ybtn ybtn--primary drop-menu-link user-account_button" href="javascript:;" id="topbar-account-link" data-component-bound="true">
            <span aria-hidden="true" style={{width: '14px', height: '14px'}} class="icon icon--14-triangle-down icon--size-14 icon--inverse icon--fallback-inverted u-triangle-direction-down user-account_button-arrow responsive-visible-large-inline-block">
            <svg role="img" class="icon_svg">
                
            </svg>
            </span>
            <span aria-hidden="true" style={{width: '24px', height: '24px'}} class="icon icon--24-hamburger icon--size-24 icon--inverse icon--fallback-inverted drop-menu-link_open">
            <svg role="img" class="icon_svg">
                
            </svg>
            </span>
            <span aria-hidden="true" style={{width: '24px', height: '24px'}} class="icon icon--24-close icon--size-24 icon--inverse icon--fallback-inverted drop-menu-link_close">
                <svg role="img" class="icon_svg">
                    
                </svg>
            </span>
    </a>
        <div id="topbar-account-wrap" class="drop-menu drop-menu-has-arrow" data-component-bound="true">
            <div class="drop-menu-arrow responsive-hidden-small"></div>

                <div class="arrange arrange--6 arrange--equal drop-menu_auth-buttons">
                    <div class="arrange_unit">

                    <a class="ybtn ybtn-full" href="https://www.yelp.se/login?return_url=%2Fsearch%3Fcflt%3Dauto%26find_loc%3DStockholm">
                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                            Sign in
                    </font>
                    </font>
                    </a>
                    </div>
                    <div class="arrange_unit">

    <a class="ybtn ybtn--primary ybtn-full" href="/signup"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                            Register
    </font></font></a>
                    </div>
                </div>

                <ul class="drop-menu-group--nav drop-menu-group">
                            <li class="drop-down-menu-link" role="none">
        <a class="js-analytics-click arrange arrange--middle arrange--6" href="/user_details" data-analytics-label="" role="menuitem" tabindex="0">
            <strong class="arrange_unit">
                    <span aria-hidden="true" style={{width: '24px', height: '24px'}} class="icon icon--24-profile icon--size-24 u-space-r1">
                    <svg role="img" class="icon_svg">
                        
                    </svg>
        </span>
        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>My profile
            </font></font></strong>
            <span class="arrange_unit arrange_unit--fill u-text-right">
                <span aria-hidden="true" style={{width: '24px', height: '24px'}} class="icon icon--24-chevron-right icon--size-24 hidden-non-responsive-inline-block responsive-visible-medium-inline-block">
                <svg role="img" class="icon_svg">
                    
                </svg>
            </span>
            </span>
        </a>
    </li>
    <li class="drop-down-menu-link hidden-non-responsive-block responsive-visible-medium-block" role="none">
        <a class="js-analytics-click arrange arrange--middle arrange--6" href="/talk" data-analytics-label="" role="menuitem" tabindex="0">
            <strong class="arrange_unit">
                    <span aria-hidden="true" style={{width: '24px', height: '24px'}} class="icon icon--24-talk icon--size-24 u-space-r1">
                    <svg role="img" class="icon_svg">
                        
                    </svg>
                    </span>
                    <font style={{verticalAlign: 'inherit'}}>
                    <font style={{verticalAlign: 'inherit'}}>Talk</font></font></strong>
            <span class="arrange_unit arrange_unit--fill u-text-right">
                <span aria-hidden="true" style={{width: '24px', height: '24px'}} class="icon icon--24-chevron-right icon--size-24 hidden-non-responsive-inline-block responsive-visible-medium-inline-block">
                <svg role="img" class="icon_svg">
                    
                </svg>
                </span>
            </span>
        </a>
    </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    );
  }
}

export default Latestcollections;
