import React, { Suspense, useEffect, useState } from "react";
import "./homePage.styles.scss";
// import PreviewItem from "../../components/previewItem/previewItem.component";
import Slider from "../../components/slider/slider.component";
const PreviewItem = React.lazy(() => import("../../components/previewItem/previewItem.component"));

function Home() {
  const removeListener = () => {
    window.removeEventListener("scroll", divLoading);
  };
  const [view, setView] = useState({ action: null, adventure: null, comedy: null });
  const divLoading = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 380) {
      setView({ ...view, action: true });
    }
    if (window.scrollY > 900) {
      setView({ ...view, adventure: true });
    }
    if (window.scrollY > 1165) {
      setView({ ...view, comedy: true });
    }
  };

  useEffect(() => {
    console.log("call");
    window.addEventListener("scroll", divLoading);
    return () => {
      console.log("remove");
      removeListener();
    };
  }, [view.action, view.adventure, view.comedy]);
  return (
    <div id="home">
      <Slider />
      <div className="center">
        <Suspense fallback="<div>is Loading</div>">
          <PreviewItem title="Popular" order_by="popularity" min_score="8.5" />
          {view.action ? <PreviewItem title="Action" genres="1" min_score="8" order_by="popularity" /> : null}
          {view.adventure ? <PreviewItem title="Adventure" genres="2" min_score="8" order_by="popularity" /> : null}
          {view.comedy ? <PreviewItem title="Comedy" genres="4" min_score="8.5" order_by="popularity" /> : null}
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
