import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="skill" className={`${this.props.article === 'skill' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Skill</h2>
          <h3>aaa</h3>
          <ul>
            <li>
              sa
              <ul>
                <li>
                  da
              </li>
              </ul>
            </li>
          </ul>

          <h3>実案件</h3>
          <ul>
            <li>
              C#.NET, VB.NET
              <ul>
                <li>
                  WPF
              </li>
                <li>
                  Windows Form
              </li>
                <li>
                  ASP.NET
              </li>
              </ul>
            </li>
            <li>
              Java
              <ul>
                <li>
                  Struts
              </li>
              </ul>
            </li>
            <li>
              JavaScript
              <ul>
                <li>
                  jQuery
              </li>
              </ul>
            </li>
          </ul>
          <h3>DB</h3>
          <ul>
            <li>
              SQL Server
              </li>
            <li>
              Oracle
              </li>
            <li>
              MySQL
              </li>
          </ul>
          <h3>資格</h3>
          <ul>
            <li>
              基本情報技術者試験
              </li>
            <li>
              Oracle Database Bronze SQL
              </li>
            <li>
              HTML5 Professional Certification Level.1
              </li>
          </ul>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Work</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <h3>案件</h3>
          <h4>なんか</h4>
          <p>内容</p>
          <h3>案件</h3>
          <h4>なんか</h4>
          <p>内容</p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main