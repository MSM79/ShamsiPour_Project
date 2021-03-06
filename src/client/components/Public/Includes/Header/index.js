import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import bind from 'Root/js/bind';

import SlideOut from 'Root/components/Utils/SlideOut';
import NLink from 'Root/components/Utils/NLink';

import styles from './index.less';


class Header extends Component {
  state = {
    isOpen: false
  };

  @bind
  showSlideOut() {
    this.setState({ isOpen: true });
  }

  @bind
  hideSlideOut() {
    this.setState({ isOpen: false });
  }

  render() {
    const links = [
      {
        to: '/conferences',
        text:  'رویداد ها'
      },
      {
        to: '/articles',
        text: 'مقالات'
      },
      {
        to: '/about',
        text: 'درباره'
      }
    ];

    if (this.props.logged) {
      links.push(
        {
          to: '/panel',
          text: 'داشبورد'
        }
      );
    } else {
      links.push(
        {
          to: '/login',
          text: 'ورود'
        },
        {
          to: '/signup',
          text: 'ثبت نام'
        }
      );
    }

    return (
      <header className={styles.header}>
        <div className={styles.headerlogo}>
          <img src='/static/images/logo3.png' />
          <Link to='/'>کاما</Link>
        </div>

        <ul>
          {links.map((v, i) =>
            <li key={i}><NLink {...v} /></li>
          )}
        </ul>

        <div
          className={`icon icon-bars ${styles.linksButton}`}
          onClick={this.showSlideOut} />

        <SlideOut isOpen={this.state.isOpen}>
          <div className={styles.slideOutContainer}>
            <div
              className={`icon icon-exit ${styles.linksButton}`}
              onClick={this.hideSlideOut} />

            <ul>
              {links.map((v, i) =>
                <li key={i} onClick={this.hideSlideOut}><NLink {...v} /></li>
              )}
            </ul>
          </div>
        </SlideOut>
      </header>
    );
  }
}

export default withRouter(connect(
  state => ({
    logged: state.user.logged
  })
)(Header));
