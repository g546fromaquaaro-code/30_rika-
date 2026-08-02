(() => {
  const diagram = (showLetters = true) => `
  <div class="textbook-figure grasshopper-book">
    <svg viewBox="0 0 920 500" role="img" aria-label="バッタの体のつくり">
      <defs>
        <linearGradient id="abdomenGreen" x1="0" x2="1">
          <stop offset="0" stop-color="#b7b36b"/>
          <stop offset="1" stop-color="#d7cb83"/>
        </linearGradient>
        <linearGradient id="wingGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e1dda2" stop-opacity=".9"/>
          <stop offset="1" stop-color="#a7a55d" stop-opacity=".75"/>
        </linearGradient>
      </defs>

      <g fill="none" stroke="#30352d" stroke-linecap="round" stroke-linejoin="round">
        <path d="M135 205 Q70 92 28 86" stroke-width="5"/>
        <path d="M155 195 Q115 73 92 45" stroke-width="5"/>
      </g>

      <g id="head">
        <path d="M112 186 Q125 140 177 142 Q223 149 236 197 Q226 243 177 253 Q126 248 108 213 Z"
          fill="#7f9f4c" stroke="#30352d" stroke-width="6"/>
        <ellipse cx="151" cy="181" rx="21" ry="27" fill="#332d1e"/>
        <circle cx="145" cy="173" r="6" fill="#d9e2b2"/>
        <path d="M120 220 Q150 236 184 224" fill="none" stroke="#4b5d2f" stroke-width="5"/>
      </g>

      <g id="thorax">
        <path d="M225 162 Q300 124 375 151 L397 245 Q310 277 222 236 Z"
          fill="#6e9342" stroke="#30352d" stroke-width="6"/>
        <path d="M250 175 Q306 150 357 171" fill="none" stroke="#9db36a" stroke-width="7"/>
      </g>

      <g id="abdomen">
        <path d="M383 158 Q575 124 787 184 Q758 268 390 244 Z"
          fill="url(#abdomenGreen)" stroke="#30352d" stroke-width="6"/>
        <g stroke="#8d894e" stroke-width="3">
          <path d="M445 151 L450 250"/><path d="M505 146 L514 255"/><path d="M565 145 L578 255"/>
          <path d="M625 150 L642 251"/><path d="M684 159 L704 239"/>
        </g>
        <circle cx="439" cy="225" r="6" fill="#30352d"/><circle cx="486" cy="232" r="6" fill="#30352d"/>
        <circle cx="535" cy="235" r="6" fill="#30352d"/><circle cx="584" cy="235" r="6" fill="#30352d"/>
      </g>

      <g id="wings">
        <path d="M302 160 Q510 54 747 158 Q610 195 380 210 Z"
          fill="url(#wingGreen)" stroke="#525b38" stroke-width="5"/>
        <path d="M342 166 Q500 112 672 157" fill="none" stroke="#858650" stroke-width="3"/>
        <path d="M389 151 L438 196 M454 129 L504 185 M527 117 L577 177 M604 124 L647 169"
          stroke="#98975d" stroke-width="2.5"/>
      </g>

      <g id="legs" fill="none" stroke="#536d37" stroke-linecap="round" stroke-linejoin="round">
        <path d="M253 235 L204 320 L159 364" stroke-width="13"/>
        <path d="M302 248 L324 337 L295 395" stroke-width="13"/>
        <path d="M358 239 L513 359 L640 414" stroke-width="17"/>
        <path d="M379 224 L553 322 L723 350" stroke-width="13"/>
        <path d="M207 231 L143 298 L93 308" stroke-width="11"/>
      </g>
      <g stroke="#30352d" stroke-width="3">
        <path d="M151 364 l-18 14 M295 395 l-12 18 M640 414 l24 11 M723 350 l24 5 M93 308 l-18 3"/>
      </g>

      ${showLetters ? `
        <g class="book-labels">
          <line x1="171" y1="108" x2="171" y2="139"/><text x="171" y="84">A</text>
          <line x1="305" y1="94" x2="305" y2="130"/><text x="305" y="70">B</text>
          <line x1="585" y1="89" x2="585" y2="126"/><text x="585" y="65">C</text>
        </g>` : `
        <g class="book-labels words">
          <text x="171" y="82">頭</text><text x="305" y="68">胸</text><text x="585" y="63">腹</text>
        </g>`}

      <g class="detail-labels">
        <line x1="770" y1="184" x2="855" y2="145"/><text x="860" y="148">はね</text>
        <line x1="535" y1="234" x2="795" y2="280"/><text x="803" y="286">気門</text>
        <line x1="143" y1="299" x2="63" y2="341"/><text x="14" y="350">あし</text>
        <line x1="88" y1="45" x2="25" y2="25"/><text x="10" y="23">触角</text>
      </g>
    </svg>
    <div class="figure-caption">バッタの体のつくり</div>
  </div>`;

  const style = document.createElement('style');
  style.textContent = `
    .grasshopper-book{background:#fffdf8;border:1px solid #ddd7c6;padding:10px 12px 4px}
    .grasshopper-book svg{width:100%;max-height:430px;display:block}
    .grasshopper-book .book-labels line,.grasshopper-book .detail-labels line{stroke:#333;stroke-width:2.5}
    .grasshopper-book .book-labels text{font-size:34px;font-weight:800;text-anchor:middle;fill:#1d1d1d}
    .grasshopper-book .book-labels.words text{font-size:28px}
    .grasshopper-book .detail-labels text{font-size:23px;font-weight:700;fill:#242424}
    .grasshopper-book .figure-caption{text-align:center;font-weight:700;font-size:18px;margin-top:-4px;color:#333}
    @media(max-width:640px){.grasshopper-book .detail-labels text{font-size:27px}.grasshopper-book .book-labels text{font-size:38px}}
  `;
  document.head.appendChild(style);

  if (typeof questions !== 'undefined') {
    questions.filter(q => ['q5','q6','q10'].includes(q.id)).forEach(q => {
      q.diagram = diagram(q.id === 'q5');
    });
  }
})();
