// diagram-questions.js の図表をHTMLとして表示するための追加UI
const diagramStyle=document.createElement('style');
diagramStyle.textContent=`
.classification-diagram{width:100%;background:#fff;border:2px solid #c9d9d2;border-radius:16px;padding:12px;text-align:left;font-size:14px;color:#17211c}
.diagram-head{text-align:center;font-weight:800;font-size:17px;margin-bottom:9px;color:#176b51}
.diagram-grid{display:grid;gap:6px}
.diagram-row{display:grid;grid-template-columns:42px minmax(90px,1fr) minmax(90px,1.1fr) minmax(110px,1.4fr) 82px;align-items:stretch;border:1px solid #cfdad4;border-radius:10px;overflow:hidden;background:#fafcfb}
.diagram-row>*{padding:9px 7px;border-right:1px solid #d8e1dc;display:flex;align-items:center;justify-content:center;text-align:center;line-height:1.35}
.diagram-row>*:last-child{border-right:0}
.diagram-row b{font-size:20px;background:#e8f6ef;color:#176b51}
.diagram-row strong{background:#f0f5f2}
.diagram-key{text-align:center;margin-top:9px;font-weight:700;color:#52675c}
.animal-card{margin:10px auto 0;padding:12px 18px;border-radius:13px;background:#fff8df;width:max-content;max-width:100%;font-size:24px;font-weight:800}
.visual:has(.classification-diagram){padding:10px;background:#eef5f1;display:block;min-height:0}
@media(max-width:680px){.classification-diagram{font-size:11px;padding:7px}.diagram-row{grid-template-columns:30px .9fr 1fr 1.25fr 58px}.diagram-row>*{padding:7px 3px}.diagram-row b{font-size:17px}.diagram-head{font-size:15px}.animal-card{font-size:20px}.choices{grid-template-columns:1fr}}
`;
document.head.appendChild(diagramStyle);

// 既存の問題描画を、通常テキストと図表HTMLの両方に対応させる
renderQuestion=function(){
  locked=false;
  const q=list[index];
  $('counter').textContent=`${index+1}/${list.length}`;
  $('barFill').style.width=`${index/list.length*100}%`;
  $('stageLabel').textContent=`STAGE ${q.stage+1}`;
  $('topicLabel').textContent=q.topic;
  $('questionText').textContent=q.q;
  const v=$('visual');
  if(q.v&&q.v.trim().startsWith('<')) v.innerHTML=q.v;
  else v.textContent=q.v||'';
  v.classList.toggle('hidden',!q.v);
  $('choices').innerHTML='';
  shuffle(q.c).forEach(c=>{
    const b=document.createElement('button');
    b.className='choice';
    b.textContent=c;
    b.onclick=()=>answer(c,b);
    $('choices').appendChild(b);
  });
  $('feedback').className='feedback hidden';
  $('nextBtn').classList.add('hidden');
};

// 追加ステージをホーム画面に反映
renderHome();
