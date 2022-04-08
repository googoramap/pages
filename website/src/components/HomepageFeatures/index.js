import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ゴルフ場を簡単検索',
    png: require('@site/static/img/home_feature_1.png').default,
    description: (
      <>
        現在位置からの半径で指定することで、指定範囲内のゴルフ場を検索できます。
      </>
    ),
  },
  {
    title: '距離・時間や価格を確認',
    png: require('@site/static/img/home_feature_2.png').default,
    description: (
      <>
        現在位置からの推定距離や移動時間を確認したり、現在在庫があるプランの平日・休日の最安値が確認できます。
      </>
    ),
  },
  {
    title: 'プレー日を指定してプランを確認',
    png: require('@site/static/img/home_feature_3.png').default,
    description: (
      <>
        プレー日を指定してプランを確認することができ、アプリ経由で予約をすることもできます。
      </>
    ),
  },
];

function Feature({png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={png} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
