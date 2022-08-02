import { useState } from 'react'
import './style.css'
import logo from '../../assets/logo.svg'
import { HighlightText } from '../../components/HighlightText'

export function Home() {
  return (
    <div className="wrapper">
      <div id="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#navbar"><img src={logo} alt="Logo" /></a>
          </li>
          <li className="nav-item">
            <a href="#1">SOBRE</a>
          </li>
          <li className="nav-item">
            <a href="#2">PROJETOS</a>
          </li>
          <li className="nav-item">
            <a href="#3">CONTATO</a>
          </li>
        </ul>
      </div>   

      <div className="header-content">
        <div className="blob">
          <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"  width="100%">
            <g transform="translate(145.69458770751953, 4.216714859008789)">
              <path fill="#a2013f">
                <animate attributeName="d"
                  dur="120s"
                  repeatCount="indefinite"

                  values="M454.5,283.5Q456,317,436.5,344Q417,371,385,381.5Q353,392,326.5,397.5Q300,403,275,431.5Q250,460,212.5,471Q175,482,157.5,441.5Q140,401,115.5,383.5Q91,366,62,343.5Q33,321,45,285.5Q57,250,58,219Q59,188,72,159Q85,130,99,95.5Q113,61,148,52.5Q183,44,216.5,25Q250,6,286,17Q322,28,332.5,75.5Q343,123,378.5,127Q414,131,435,157Q456,183,454.5,216.5Q453,250,454.5,283.5Z;
                  M462.5,281Q442,312,420,335Q398,358,383,385.5Q368,413,343,435.5Q318,458,284,436Q250,414,223,415.5Q196,417,178,395Q160,373,125,369.5Q90,366,67,341.5Q44,317,44,283.5Q44,250,44,216.5Q44,183,72,162Q100,141,112,108.5Q124,76,154.5,62.5Q185,49,217.5,26Q250,3,280,35Q310,67,340,76Q370,85,372.5,122Q375,159,409,173Q443,187,463,218.5Q483,250,462.5,281Z;
                  M455,285.5Q470,321,461,359Q452,397,408,401.5Q364,406,343,439Q322,472,286,461Q250,450,216,454Q182,458,162,428.5Q142,399,99,395Q56,391,56.5,352Q57,313,59,281.5Q61,250,68,221.5Q75,193,79,160.5Q83,128,110.5,112Q138,96,158.5,63.5Q179,31,214.5,57.5Q250,84,276.5,85.5Q303,87,336.5,86Q370,85,409,95.5Q448,106,437.5,149.5Q427,193,433.5,221.5Q440,250,455,285.5Z;
                  M434.42572,276.75593Q413.42072,303.51186,430.65293,348.71286Q447.88514,393.91386,419.31586,418.47378Q390.74657,443.03371,356.37329,458.03121Q322,473.02871,286,453.799Q250,434.56929,212.3995,458.11486Q174.799,481.66043,156.34207,442.902Q137.88514,404.14357,120.603,380.598Q103.32085,357.05243,67.81586,339.14107Q32.31086,321.22971,63.11486,285.61486Q93.91886,250,58.22721,213.27029Q22.53557,176.54057,46.5955,148.15543Q70.65543,119.77029,99.6985,101.71286Q128.74157,83.65543,151.81336,51.66979Q174.88514,19.68414,212.44257,56.98564Q250,94.28714,275.47129,93.21536Q300.94257,92.14357,320.55493,108.63171Q340.16729,125.11986,388.42572,119.67478Q436.68414,114.22971,427.21286,154.64357Q417.74157,195.05743,436.58614,222.52871Q455.43071,250,434.42572,276.75593Z;
                  M473.5,285Q466,320,451,352.5Q436,385,398,393Q360,401,337.5,425Q315,449,282.5,431.5Q250,414,213.5,444.5Q177,475,154,444Q131,413,120,383Q109,353,85,332.5Q61,312,66.5,281Q72,250,44,212Q16,174,71,167Q126,160,119,110Q112,60,153.5,70.5Q195,81,222.5,62Q250,43,277,63.5Q304,84,332,91.5Q360,99,366.5,129.5Q373,160,427,167.5Q481,175,481,212.5Q481,250,473.5,285Z;
                  M454.5,283.5Q456,317,436.5,344Q417,371,385,381.5Q353,392,326.5,397.5Q300,403,275,431.5Q250,460,212.5,471Q175,482,157.5,441.5Q140,401,115.5,383.5Q91,366,62,343.5Q33,321,45,285.5Q57,250,58,219Q59,188,72,159Q85,130,99,95.5Q113,61,148,52.5Q183,44,216.5,25Q250,6,286,17Q322,28,332.5,75.5Q343,123,378.5,127Q414,131,435,157Q456,183,454.5,216.5Q453,250,454.5,283.5Z">
                </animate>
              </path>
            </g>
          </svg>
        </div>
        <h1> <span className="big-header-content-text" style={{fontSize: "102px", color:"#a0003e"}}> EXCELÊNCIA </span> <br />
        é um <span className="big-header-content-text" style={{color:"#ac2459"}}> HÁBITO </span>
        </h1>
      </div>

    </div>
  )
}