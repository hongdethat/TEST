import React from 'react';
import ReactTooltip from "react-tooltip";
import "./Tooltip.css";
import ElementPlanet from '../landing/components/functions/ElementPlanet/ElementPlanet';

import { useTranslation } from 'react-i18next';
const Tooltip = function(props) {
const { t } = useTranslation()
  return (
      <div>

{/*3 điểm định vị*/}
        <ReactTooltip className="test_tt" id="locate_one" place="right" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" data-offset="{'top': 10, 'left': 10}">
          <span className="mau_nen_tt">Coming soon</span>
        </ReactTooltip>

        <ReactTooltip className="test_tt" id="locate_two" place="right" effect="solid" backgroundColor="rgb(37, 54, 78, 0.6)" data-offset="{'top': 10, 'left': 10}">
          <span className="mau_nen_tt">Coming soon</span>
        </ReactTooltip>

        <ReactTooltip className="test_ttt yesaa_Aa" id="locate_three" eventOff="String" place="left" effect="solid" arrowColor="rgb(0, 0, 0, 0)" data-offset="{'top': 10, 'left': 10}" clickable={true} globalEventOff="click">
          <div className="tooltiptext traia">

             <ElementPlanet />

            <p className="amau">
              <i>{t('Click')}</i>
            </p>
          </div>
        </ReactTooltip>
{/*kết thúc 3 điểm định vị*/}
      </div>
  );
}
export default Tooltip;