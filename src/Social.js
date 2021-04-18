import React from "react";
import Feed from './Feed';
import { NavLink } from "react-router-dom";
import './Social.css';


export default function Social() {
  const ciscoLogo = `https://www.vortex6.com/wp-content/uploads/2019/07/cisco-logo.png`
  const lloydsLogo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyi08wAFrxozdS_YKZyw-RD5A0TJr3TUc63JLXML3X41dFWiRnBD8Pv0emJzIAaV73dE&usqp=CAU`
  const nationwideLogo = `https://pbs.twimg.com/profile_images/1289211316448657408/05SjVIel_400x400.jpg`
  const ciscoText = "Leading the IT Industry in Combating Climate Change – Cisco Achieves 100% Renewable Energy in U.S."
  const lloydsText = "Whether it’s funding, refurbishment or investment in other sustainability initiatives, we can support you."
  const nationwideText = "Nationwide partners with leading business sustainability ratings provider, EcoVadis, to create more sustainable supply chains."
  const ciscoImage = `https://mk0futurumreseabr7pm.kinstacdn.com/wp-content/uploads/2019/12/Cisco-The-Future-of-the-Internet-is-Now.jpg`
  const ciscoImageAlt = "Earth with a network mesh and cisco logo on top"
  const lloydsImage = `https://ft.com/partnercontent/images/lloyds-banking-group-plc/02/hero-4.jpg`
  const lloydsImageAlt = "Buildings with a tree"
  const nationwideImage = `https://www.fintechf.com/wp-content/uploads/2021/04/Nationwide-Partners-With-EcoVadis-to-Build-More-Sustainable-Supply-Chains-288x180.jpg`
  const nationwideImageAlt = "Green field with Nationwide and Ecovadis logos on top"

  return (
    <div className="social-media">
      <NavLink to="/company/cisco">
        <Feed company="Cisco" logo={ciscoLogo} text={ciscoText} image={ciscoImage} alt={ciscoImageAlt} />
      </NavLink>
      <NavLink to="/company/lloyds">
        <Feed company="Lloyds Bank" logo={lloydsLogo} text={lloydsText} image={lloydsImage} alt={lloydsImageAlt} />
      </NavLink>
      <NavLink to="/company/nationwide">
        <Feed company="Nationwide" logo={nationwideLogo} text={nationwideText} image={nationwideImage} alt={nationwideImageAlt} />
      </NavLink>
    </div>
  )
}