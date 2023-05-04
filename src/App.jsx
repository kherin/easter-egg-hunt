import React, { useState, useEffect } from "react";

// components
import Grid from "./components/Grid/Grid";

// styles
import "./styles.css";

function App() {
  const [widthInPx, setWidthInPx] = useState(0);
  const [heightInPx, setHeightInPx] = useState(0);
  const [clickCount, onSetClickCount] = useState(0);
  const hints = ["l", "u", "e", "c"];
  const hintsCount = hints.length + 6;
  const hintsResult = hints[3] + hints[0] + hints[1] + hints[2] + hintsCount;

  function prettyConsoleOutput() {
    console.log(
      "%cc%cl%cu%ce%c4",
      "font-size: 2px; color: blue;",
      "font-size: 2px; color: lightblue;",
      "font-size: 2px; color: lightgreen;",
      "font-size: 2px; color: green",
      "font-size: 2px; color: yellow;"
    );
  }

  function setStorage() {
    // localStorage
    localStorage.setItem("found_me", "clue5");
    // sessionStorage
    sessionStorage.setItem("here_i_am", "clue6");

    //cookie
    document.cookie = "oreo=clue7";
  }

  function multipleConsoleOutputs() {
    console.log(
      `var _0x1daf0d=_0x294d;function _0x294d(_0xbfa6b2,_0x11951d){var _0x433320=_0x2f4f();return _0x294d=function(_0x4aa1e9,_0x4a3089){_0x4aa1e9=_0x4aa1e9-(-0x33d+-0x1f1b+0x23c7);var _0x2fe21f=_0x433320[_0x4aa1e9];return _0x2fe21f;},_0x294d(_0xbfa6b2,_0x11951d);}function _0x2f4f(){var _0x1e90df=['83260QaUMvp','5164518iRubKS','5506438GLolgo','66828jzRvRX','log','nope','125YuzeHf','5861072gvytCI','6PnWPnr','23196339rtFUMB','232714FiYmnM'];_0x2f4f=function(){return _0x1e90df;};return _0x2f4f();}(function(_0x2ca057,_0x195f94){var _0x3eee14=_0x294d,_0xd91a2=_0x2ca057();while(!![]){try{var _0x164a2c=parseInt(_0x3eee14(0x172))/(0x1*0x1dc2+-0x2216+0x455)+parseInt(_0x3eee14(0x179))/(-0xbd*-0x2b+-0x1c55+0x2*-0x1b4)*(-parseInt(_0x3eee14(0x177))/(-0x2ad+-0x45*0x8d+0xb*0x3b3))+parseInt(_0x3eee14(0x16f))/(-0x1900+-0xe66+0x276a)*(parseInt(_0x3eee14(0x175))/(0x226b+0x1bb8+-0x3e1e))+-parseInt(_0x3eee14(0x170))/(0x1*-0x1ca3+0x1*-0x222d+0x3ed6)+-parseInt(_0x3eee14(0x171))/(-0x19b9*0x1+0x10c0+0x2*0x480)+-parseInt(_0x3eee14(0x176))/(-0x1*0x1615+-0xf86*0x2+0x1*0x3529)+parseInt(_0x3eee14(0x178))/(-0x1388+0x1dfc+-0xa6b);if(_0x164a2c===_0x195f94)break;else _0xd91a2['push'](_0xd91a2['shift']());}catch(_0x45fa1e){_0xd91a2['push'](_0xd91a2['shift']());}}}(_0x2f4f,0x117+-0xb02d5+0x136d5d),console[_0x1daf0d(0x173)](_0x1daf0d(0x174)));`
    );
    console.warn(
      `function _0x16af(_0x3c3db6,_0x4788a6){var _0x295ac2=_0x365f();return _0x16af=function(_0x2ce3da,_0xdaec7d){_0x2ce3da=_0x2ce3da-(-0x301*-0x3+0x20d3+-0x2897);var _0x4b0976=_0x295ac2[_0x2ce3da];return _0x4b0976;},_0x16af(_0x3c3db6,_0x4788a6);}var _0x1a4a7d=_0x16af;(function(_0x3691d7,_0x14a1b9){var _0x50628a=_0x16af,_0x52eb36=_0x3691d7();while(!![]){try{var _0x15d5d5=parseInt(_0x50628a(0x13f))/(-0xceb+0xeed+-0xab*0x3)+-parseInt(_0x50628a(0x145))/(0x709*-0x2+0x639+-0x1*-0x7db)+parseInt(_0x50628a(0x142))/(-0x30a+0x32c*0x2+0x3*-0x119)*(parseInt(_0x50628a(0x143))/(0x1*0xed1+0x1475+-0x2*0x11a1))+parseInt(_0x50628a(0x149))/(-0x9c3*-0x1+0x2578+-0x2f36*0x1)+parseInt(_0x50628a(0x146))/(-0x1*0x115a+-0x7a4+0x1904)+parseInt(_0x50628a(0x148))/(-0xb37+-0x26f*0x5+0x1769)+-parseInt(_0x50628a(0x141))/(-0x1be4+-0x1*-0x1fd7+-0x3eb);if(_0x15d5d5===_0x14a1b9)break;else _0x52eb36['push'](_0x52eb36['shift']());}catch(_0x81f4ec){_0x52eb36['push'](_0x52eb36['shift']());}}}(_0x365f,-0x1a04+0x3e232*0x1+-0x5*0xeb1),console[_0x1a4a7d(0x147)](_0x1a4a7d(0x140)+_0x1a4a7d(0x144)+'e'));function _0x365f(){var _0x3a0310=['124ljunUk','k\x20next\x20tim','671770ScTgPX','581196JYXvwv','log','504994NxWrwj','778765WEdlHt','262764VlsHVJ','better\x20luc','3763584DbPVus','43341jSLbNL'];_0x365f=function(){return _0x3a0310;};return _0x365f();}`
    );
    console.warn(
      `const _0x519c1f=_0x33bb;(function(_0x22599e,_0x2b27af){const _0x225f38=_0x33bb,_0x138ee0=_0x22599e();while(!![]){try{const _0x4e4640=parseInt(_0x225f38(0x1da))/(0x1*-0x15a9+0x6ff+0xeab*0x1)+parseInt(_0x225f38(0x1db))/(0x1486*-0x1+0xe1b+0x66d)+-parseInt(_0x225f38(0x1dc))/(0x13*0x1cb+-0x51*0xd+-0x1df1*0x1)*(-parseInt(_0x225f38(0x1d7))/(0x1e93*0x1+-0x1*0x1964+-0x3f*0x15))+-parseInt(_0x225f38(0x1d9))/(0x5*0x68d+-0x89f*0x2+0x3*-0x52a)*(parseInt(_0x225f38(0x1d3))/(-0x3*-0x88b+-0x4*-0x332+-0x1*0x2663))+-parseInt(_0x225f38(0x1d5))/(-0x1a6e+0x2*-0xd0a+0x3489)+parseInt(_0x225f38(0x1d6))/(-0x1*0x2195+0x12*0x11e+-0xd81*-0x1)+-parseInt(_0x225f38(0x1d4))/(-0xd51*0x2+0x1251+-0x2*-0x42d);if(_0x4e4640===_0x2b27af)break;else _0x138ee0['push'](_0x138ee0['shift']());}catch(_0x2977e5){_0x138ee0['push'](_0x138ee0['shift']());}}}(_0x1ee9,-0x20*0x7a39+-0x10c25e+0x2be930));function conrad(){return'c';}function lauren(){return'l';}function ultron(){return'u';}function elanga(){return'e';}function eight(){return'8';}const result=conrad()+lauren()+ultron()+elanga()+eight();function _0x1ee9(){const _0xb926be=['5115040Jkdabp','164WFVOcZ','log','5WqLMvj','1202201fyJVAv','649928QrAdvi','106035pyAhEz','4377054eybvLU','14472873rxTBdH','3499454KcxjUi'];_0x1ee9=function(){return _0xb926be;};return _0x1ee9();}function _0x33bb(_0x5019ae,_0x30dd09){const _0x123c3b=_0x1ee9();return _0x33bb=function(_0x5f1fff,_0x25be7e){_0x5f1fff=_0x5f1fff-(-0x227+0xa54*-0x1+0xe4e);let _0x1c7c15=_0x123c3b[_0x5f1fff];return _0x1c7c15;},_0x33bb(_0x5019ae,_0x30dd09);}console[_0x519c1f(0x1d8)](result);`
    );
    console.error(
      `var _0x1daf0d=_0x294d;function _0x294d(_0xbfa6b2,_0x11951d){var _0x433320=_0x2f4f();return _0x294d=function(_0x4aa1e9,_0x4a3089){_0x4aa1e9=_0x4aa1e9-(-0x33d+-0x1f1b+0x23c7);var _0x2fe21f=_0x433320[_0x4aa1e9];return _0x2fe21f;},_0x294d(_0xbfa6b2,_0x11951d);}function _0x2f4f(){var _0x1e90df=['83260QaUMvp','5164518iRubKS','5506438GLolgo','66828jzRvRX','log','nope','125YuzeHf','5861072gvytCI','6PnWPnr','23196339rtFUMB','232714FiYmnM'];_0x2f4f=function(){return _0x1e90df;};return _0x2f4f();}(function(_0x2ca057,_0x195f94){var _0x3eee14=_0x294d,_0xd91a2=_0x2ca057();while(!![]){try{var _0x164a2c=parseInt(_0x3eee14(0x172))/(0x1*0x1dc2+-0x2216+0x455)+parseInt(_0x3eee14(0x179))/(-0xbd*-0x2b+-0x1c55+0x2*-0x1b4)*(-parseInt(_0x3eee14(0x177))/(-0x2ad+-0x45*0x8d+0xb*0x3b3))+parseInt(_0x3eee14(0x16f))/(-0x1900+-0xe66+0x276a)*(parseInt(_0x3eee14(0x175))/(0x226b+0x1bb8+-0x3e1e))+-parseInt(_0x3eee14(0x170))/(0x1*-0x1ca3+0x1*-0x222d+0x3ed6)+-parseInt(_0x3eee14(0x171))/(-0x19b9*0x1+0x10c0+0x2*0x480)+-parseInt(_0x3eee14(0x176))/(-0x1*0x1615+-0xf86*0x2+0x1*0x3529)+parseInt(_0x3eee14(0x178))/(-0x1388+0x1dfc+-0xa6b);if(_0x164a2c===_0x195f94)break;else _0xd91a2['push'](_0xd91a2['shift']());}catch(_0x45fa1e){_0xd91a2['push'](_0xd91a2['shift']());}}}(_0x2f4f,0x117+-0xb02d5+0x136d5d),console[_0x1daf0d(0x173)](_0x1daf0d(0x174)));`
    );
  }

  useEffect(() => {
    const handleResize = () => {
      setWidthInPx(window.innerWidth);
      setHeightInPx(window.innerHeight);
    };

    prettyConsoleOutput();
    multipleConsoleOutputs();
    setStorage();
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Grid widthInPx={widthInPx} heightInPx={heightInPx}></Grid>
      <div id="hidden_in_plain_sight">
        <img
          hidden={true}
          src="data:image/png;base64,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"
          alt="find me if you can"
        />
      </div>
      <div>
        <img hidden={true} src="../img/not_bad.png" />
      </div>
      <div
        className="banner"
        title="count to ten"
        onClick={() => onSetClickCount(clickCount + 1)}
      >
        Find me if you can
        <span
          style={{ color: "white", paddingLeft: "5px" }}
          hidden={clickCount != hintsCount}
        >
          {hintsResult}
        </span>
      </div>
    </>
  );
}
export default App;
