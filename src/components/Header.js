import React from 'react'
import PropTypes from 'prop-types'

import foltaIcon from '../images/folta.svg'
import idCard from '../images/id-card.svg'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <img className="icon" src={foltaIcon} alt="fa-id-card" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Folta's Portfolio</h1>
                <p>これまでの略歴</p>
                <p>強み</p>
                <p>今後の展望</p>
            </div>
            <ul className="icons">
                <li><a href="https://twitter.com/Faultun" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/folt-a" className="icon fa-github"><span className="label">GitHub</span></a></li>
            </ul>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('skill') }}>Skill</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Work</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
