import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.less';


class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <h1> درباره کاما </h1>
        </div>


        <div className={styles.developersPart}>
          <div>
            <h1 className={styles.developerRole}>توسعه دهنده</h1>
              <div className={styles.developerInfo}>
                <img
                  src='/static/images/developers/mm.jpg'
                  className={`${styles.developerImage} ${styles.msm}`}
                />
                <h1>محمد سیفی مرندی</h1>
                <p>طراح وب</p>
                <div className={styles.icons}>
                  <Link to='https://github.com/msm79'>
                    <div
                      className={`icon icon-github ${styles.icon}`}
                    />
                  </Link>

                  <Link to='https://telegram.me/msm79'>
                    <div
                      className={`icon icon-telegram ${styles.icon}`}
                    />
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
