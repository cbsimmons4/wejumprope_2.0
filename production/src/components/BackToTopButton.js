import React, { useEffect, useState } from "react";
import BackToTopIcon from './assets/backToTop.png';
import Tooltip from '@material-ui/core/Tooltip';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top back-to-top-button">
      {isVisible && 
        <Tooltip title="Go to top " aria-label="add">
            <div onClick={scrollToTop}>
                <img src={BackToTopIcon} alt='Go to top'/>
            </div>
        </Tooltip>}
    </div>
  );
}