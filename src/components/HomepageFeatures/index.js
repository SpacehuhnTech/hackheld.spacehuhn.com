import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cool',
    src: 'img/hackheld.png',
    description: (
      <>
        Draught hogshead quarterdeck clap of thunder Pieces of Eight ye gunwalls run a rig driver six pounders. Dead men tell no tales Chain Shot hail-shot man-of-war furl reef sails snow yawl take a caulk Nelsons folly. Spanker gangway reef lookout driver bilge grog capstan dead men tell no tales weigh anchor. 
      </>
    ),
  },
  {
    title: 'Fun',
    src: 'img/hackheld.png',
    description: (
      <>
        Strike colors reef sails quarter cackle fruit jolly boat walk the plank bilge water matey spanker hempen halter. Killick swing the lead draught bounty line port dead men tell no tales careen ahoy heave down. Topgallant nipperkin Barbary Coast careen jib mutiny gally capstan black jack scallywag. 
      </>
    ),
  },
  {
    title: 'Fancy',
    src: 'img/hackheld.png',
    description: (
      <>
        Red ensign bilge water scallywag sheet scurvy gun line snow bilge parrel. Gabion pirate American Main red ensign fluke heave to scallywag boatswain pressgang smartly. Loot gaff sutler yawl barkadeer schooner draught grog holystone Letter of Marque. 
      </>
    ),
  },
];

function Feature({src, title, description, alt}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} className={styles.featureImg} alt={alt} />
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
