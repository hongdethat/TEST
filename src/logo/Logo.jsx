import React from 'react';
import { Link } from 'react-router-dom';
import { iconlogo } from '../images/images';
import './Logo.css';

import { useTranslation } from 'react-i18next';
function Logo(props) {
const { t } = useTranslation()
  return (
     <div className="logo">
        <Link to="/">
          <div className="Flex__logo">
            <span className="text-test">
              <img src={iconlogo} height={35} width={40} alt={t('alt_img') + "'" + "Logo" + "'"} className="text" />
            </span>
            <span className="text l__text__color">WORLD <strong className="F__Logo__text">SINGULARITY</strong>
            </span>
          </div>
        </Link>
      </div>
  )
}
export default Logo;