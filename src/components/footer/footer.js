import React from 'react';

export default class Footer extends React.Component{

render() {

  return (
    <footer className="ht-footer">
    <div className="ft-copyright">
      <div className="ft-left">
        <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
      </div>
      <div className="backtotop">
        <p><a href="#" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up" /></a></p>
      </div>
    </div>
  </footer>
  );
}
}

