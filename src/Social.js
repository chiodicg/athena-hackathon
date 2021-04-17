import React from "react";
import Feed from './Feed'

export default function Social() {
  const ciscoLogo = `https://www.vortex6.com/wp-content/uploads/2019/07/cisco-logo.png`
  const lloydsLogo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyi08wAFrxozdS_YKZyw-RD5A0TJr3TUc63JLXML3X41dFWiRnBD8Pv0emJzIAaV73dE&usqp=CAU`
  const nationwideLogo = `https://pbs.twimg.com/profile_images/1289211316448657408/05SjVIel_400x400.jpg`
  const ciscoText = "Leading the IT Industry in Combating Climate Change – Cisco Achieves 100% Renewable Energy in U.S."
  const lloydsText = "Whether it’s funding, refurbishment or investment in other sustainability initiatives, we can support you."
  const nationwideText = "Ultimately, as a building society, we do not believe sustainability should be something extra we do, we believe it should characterise everything we do."
  const ciscoFeedImage = `https://mk0futurumreseabr7pm.kinstacdn.com/wp-content/uploads/2019/12/Cisco-The-Future-of-the-Internet-is-Now.jpg`
  const lloydsImage = `https://ft.com/partnercontent/images/lloyds-banking-group-plc/02/hero-4.jpg`
  const nationwideImage = `data:image/jpeg;base64,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`

  return (
    <div className="social-media">
      <Feed company="Cisco" logo={ciscoLogo} text={ciscoText} image={ciscoFeedImage} />
      <Feed company="Lloyds Bank" logo={lloydsLogo} text={lloydsText} image={lloydsImage} />
      <Feed company="Nationwide" logo={nationwideLogo} text={nationwideText} image={nationwideImage} />
    </div>
  )
}