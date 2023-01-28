import React, { useState, useEffect } from "react";
import "./MainComponent.scss";
import alignCenter from "../images/alignCenter.png";
import alignJustify from "../images/alignJustify.png";
import alignLeft from "../images/alignLeft.png";
import alignRight from "../images/alignRight.png";
import arrowDown from "../images/arrowDown.png";
import fontSize from "../images/fontSize.png";
import letterSpacing from "../images/letterSpacing.png";
import lineHeight from "../images/lineHeight.png";
import percent from "../images/percent.png";
import px from "../images/px.png";
import {
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
} from "../mockData/mockData";

const MainComponent = () => {
  const [font, setFont] = useState<string>("Fira Sans");
  const [fontWeight, setFontWeight] = useState<string>("normal");
  const [lH, setLH] = useState<string>("100");
  const [letterSpace, setLetterSpace] = useState<string>("0.6");
  const [color, setColor] = useState<string>("");
  const [fS, setFS] = useState<string>("12");
  const [tAlign, setTAlign] = useState<string | any>("left");

  useEffect(() => {
    let settings: any = localStorage.getItem("settings");
    const parsedSettings = JSON.parse(settings);
 
    if (parsedSettings) {
      setFont(parsedSettings.font);
      setFontWeight(parsedSettings.fontWeight);
      setLH(parsedSettings.lH);
      setLetterSpace(parsedSettings.letterSpace);
      setColor(parsedSettings.color);
      setFS(parsedSettings.fS);
      setTAlign(parsedSettings.tAlign);
    }
  }, []);

  const fontSizes = Array.from({ length: 15 }, (_, i) => i + 10);

  const setSettings = () => {
    let settings = { font, fontWeight, lH, letterSpace, color, fS, tAlign };
    localStorage.setItem("settings", JSON.stringify(settings));
  };

  return (
    <>
      <div className="container">
        <div className="textareabox">
          <textarea
            style={{
              fontFamily: font && font,
              fontWeight: fontWeight && fontWeight,
              fontStyle: fontWeight === "italic" ? "italic" : "",
              fontSize: fS && `${fS}px`,
              lineHeight: lH && `${Number(lH) / 100}`,
              letterSpacing: letterSpace && `${letterSpace}px`,
              color: color && color,
              textAlign: tAlign && tAlign,
            }}
            className="textareabox__textarea"
            // type="text"
            placeholder="Type here..."
          ></textarea>
        </div>
      </div>

      <div className="sidepanel">
        <div className="sidepanel__header">
          <p>Text</p>
        </div>

        <div className="selectorbox">
          <select
            onChange={(e) => setFont(e.target.value)}
            className="selectorbox__selectorcontent"
            value={font}
          >
            {fonts.map((font, i) => (
              <option key={i}>{font}</option>
            ))}
          </select>
          <img src={arrowDown} className="selectorbox__arrowicon" alt="arrowIcon" />
        </div>

        <div className="selectorbox sidepanel__fontsize_weight">
          <select
            onChange={(e) => setFontWeight(e.target.value)}
            className="selectorbox__selectorcontent"
            value={fontWeight}
          >
            {fontWeights.map((fontWeight, i) => (
              <option key={i}>{fontWeight}</option>
            ))}
          </select>

          <img src={arrowDown} className="selectorbox__arrowicon2" alt="arrowIcon" />
          <img src={fontSize} className="selectorbox__fontsize" alt="arrowIcon" />

          <select
            onChange={(e) => setFS(e.target.value)}
            className="selectorbox__selectorcontent selectorbox__selector_fontsize"
            value={fS}
          >
            {fontSizes.map((fontSize, i) => (
              <option key={i}>{fontSize}</option>
            ))}
          </select>
        </div>

        <div className="selectorbox">
          <div className="selectorbox__squarecolor" style={{ background: color ? color : "#B0171F" }}></div>
          <select
            onChange={(e) => setColor(e.target.value)}
            className="selectorbox__selectorcontent selectorbox__selectorcolor"
            value={color}
          >
            {colors.map((color, i) => (
              <option key={i}>{color.code.hex}</option>
            ))}
          </select>
          <img src={arrowDown} className="selectorbox__arrowicon" alt="arrowIcon" />
        </div>

        <div className="selectorbox sidepanel__gaps">
          <img src={lineHeight} className="selectorbox__lineheight" alt="line height" />
          <img src={percent} className="selectorbox__percent" alt="percent" />
          <select
            onChange={(e) => setLH(e.target.value)}
            className="selectorbox__selectorcontent selectorbox__selector_verticalgap"
            value={lH}
          >
            {lineHeights.map((lineHeight, i) => (
              <option key={i}>{lineHeight}</option>
            ))}
          </select>
          <img
            src={letterSpacing}
            className="selectorbox__letterspacing"
            alt="letter spacing"
          />
          <img src={px} className="selectorbox__px" alt="pixels" />
          <select
            onChange={(e) => setLetterSpace(e.target.value)}
            className="selectorbox__selectorcontent selectorbox__selector_gorizontalgap"
            value={letterSpace}
          >
            {letterSpacings.map((letterSpacing, i) => (
              <option key={i}>{letterSpacing}</option>
            ))}
          </select>
        </div>
        <div className="selectorbox">
          <div className="selectorbox__selectorcontent selectorbox__aligns">
            <div
              onClick={() => setTAlign("left")}
              className="selectorbox__aligns-alignbox"
            >
              <img
                src={alignLeft}
                className={tAlign === "left" ? "selectorbox__aligns-alignbox--chosen" : "selectorbox__aligns-alignbox--notchosen"}
                alt="align left"
              />
            </div>

            <div onClick={() => setTAlign("center")} className="selectorbox__aligns-alignbox">
              <img
                src={alignCenter}
                className={tAlign === "center" ? "selectorbox__aligns-alignbox--chosen" : "selectorbox__aligns-alignbox--notchosen"}
                alt="align center"
              />
            </div>

            <div onClick={() => setTAlign("right")} className="selectorbox__aligns-alignbox">
              <img
               src={alignRight} 
               className={tAlign === "right" ? "selectorbox__aligns-alignbox--chosen" : "selectorbox__aligns-alignbox--notchosen"}
               alt="align right"
                />
            </div>

            <div onClick={() => setTAlign("justify")} className="selectorbox__aligns-alignbox">
              <img
                src={alignJustify}
                className={tAlign === "justify" ? "selectorbox__aligns-alignbox--chosen" : "selectorbox__aligns-alignbox--notchosen"}
                alt="align justify"
              />
            </div>
          </div>
        </div>
        <div className="sidepanel__button selectorbox" onClick={setSettings}>
          Apply Changes
        </div>
      </div>
    </>
  );
};

export default MainComponent;
