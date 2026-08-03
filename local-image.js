const $=id=>document.getElementById(id);
const KEY='animalClassificationProgressV2';
const stages=[
{title:'背骨で大きく分ける',desc:'脊椎動物と無脊椎動物',lesson:`<div class="rule"><b>最初の分かれ道</b><br>背骨がある動物＝脊椎動物<br>背骨がない動物＝無脊椎動物</div><p>ヒト、ヘビ、フナなどは脊椎動物。ザリガニ、イカ、クモ、ミミズなどは無脊椎動物です。</p>`,qs:[
{id:'1a',topic:'基本',q:'背骨がある動物を何といいますか？',c:['脊椎動物','無脊椎動物','節足動物','軟体動物'],a:'脊椎動物',h:'「せきつい」は背骨のこと。',e:'背骨がある動物は脊椎動物です。'},
{id:'1b',topic:'基本',q:'背骨がない動物を何といいますか？',c:['無脊椎動物','脊椎動物','哺乳類','魚類'],a:'無脊椎動物',h:'「無」は、ないという意味。',e:'背骨がない動物は無脊椎動物です。'},
{id:'1c',topic:'分類',q:'イカはどちらですか？',v:'🦑',c:['脊椎動物','無脊椎動物'],a:'無脊椎動物',h:'イカに背骨はありません。',e:'イカは背骨がないので無脊椎動物です。'},
{id:'1d',topic:'分類',q:'ヘビはどちらですか？',v:'🐍',c:['脊椎動物','無脊椎動物'],a:'脊椎動物',h:'細長くても背骨があります。',e:'ヘビは背骨がある脊椎動物です。'},
{id:'1e',topic:'分類',q:'クモはどちらですか？',v:'🕷️',c:['脊椎動物','無脊椎動物'],a:'無脊椎動物',h:'体の外側に外骨格があります。',e:'クモは背骨がない無脊椎動物です。'}]},
{title:'脊椎動物の5分類',desc:'魚類・両生類・は虫類・鳥類・哺乳類',lesson:`<div class="rule"><b>脊椎動物は5つ</b><br>魚類 → 両生類 → は虫類 → 鳥類 → 哺乳類</div><p>まずは5つの名称と代表例を結びつけます。</p>`,qs:[
{id:'2a',topic:'5分類',q:'フナやメダカのなかまは？',v:'🐟',c:['魚類','両生類','は虫類','鳥類'],a:'魚類',h:'ひれがあり、えらで呼吸します。',e:'フナやメダカは魚類です。'},
{id:'2b',topic:'5分類',q:'カエルやイモリのなかまは？',v:'🐸',c:['両生類','魚類','は虫類','哺乳類'],a:'両生類',h:'幼生と成体で呼吸のしかたが変わります。',e:'カエルやイモリは両生類です。'},
{id:'2c',topic:'5分類',q:'カメやトカゲのなかまは？',v:'🐢',c:['は虫類','両生類','鳥類','魚類'],a:'は虫類',h:'体表はかたいうろこやこうら。',e:'カメやトカゲは、は虫類です。'},
{id:'2d',topic:'5分類',q:'ハトやニワトリのなかまは？',v:'🐦',c:['鳥類','哺乳類','は虫類','魚類'],a:'鳥類',h:'羽毛でおおわれています。',e:'ハトやニワトリは鳥類です。'},
{id:'2e',topic:'5分類',q:'ヒトやイヌのなかまは？',v:'🐕',c:['哺乳類','鳥類','は虫類','両生類'],a:'哺乳類',h:'子に乳を与えて育てます。',e:'ヒトやイヌは哺乳類です。'}]},
{title:'呼吸と体表で見分ける',desc:'えら・肺・皮膚・うろこ・羽毛・毛',lesson:`<table><tr><th>分類</th><th>呼吸</th><th>体表</th></tr><tr><td>魚類</td><td>えら</td><td>うろこ</td></tr><tr><td>両生類</td><td>幼生：えらと皮膚<br>成体：肺と皮膚</td><td>しめった皮膚</td></tr><tr><td>は虫類</td><td>肺</td><td>かたいうろこ・こうら</td></tr><tr><td>鳥類</td><td>肺</td><td>羽毛</td></tr><tr><td>哺乳類</td><td>肺</td><td>毛</td></tr></table>`,qs:[
{id:'3a',topic:'呼吸',q:'一生、えらで呼吸する脊椎動物は？',c:['魚類','両生類','は虫類','鳥類'],a:'魚類',h:'フナやメダカを思い出そう。',e:'魚類はえらで呼吸します。'},
{id:'3b',topic:'両生類',q:'カエルの幼生は、どこで呼吸しますか？',c:['えらと皮膚','肺だけ','肺と皮膚','気管'],a:'えらと皮膚',h:'オタマジャクシの時期です。',e:'両生類の幼生は、えらと皮膚で呼吸します。'},
{id:'3c',topic:'両生類',q:'カエルの成体は、どこで呼吸しますか？',c:['肺と皮膚','えらだけ','えらと皮膚','気門'],a:'肺と皮膚',h:'陸上で生活する成体です。',e:'両生類の成体は、肺と皮膚で呼吸します。'},
{id:'3d',topic:'体表',q:'体の表面が羽毛でおおわれるのは？',c:['鳥類','哺乳類','は虫類','魚類'],a:'鳥類',h:'ハトやニワトリ。',e:'鳥類の体表は羽毛です。'},
{id:'3e',topic:'体表',q:'体の表面が、かたいうろこやこうらでおおわれるのは？',c:['は虫類','魚類','両生類','哺乳類'],a:'は虫類',h:'カメやトカゲ。',e:'は虫類の体表は、かたいうろこやこうらです。'},
{id:'3f',topic:'体表',q:'体の表面が毛でおおわれるのは？',c:['哺乳類','鳥類','両生類','魚類'],a:'哺乳類',h:'イヌやウサギ。',e:'哺乳類の体表は毛です。'}]},
{title:'子のうまれ方と卵',desc:'胎生・卵生と、卵を産む場所',lesson:`<div class="rule"><b>胎生</b>：母親の体内である程度育った子をうむ。<br><b>卵生</b>：親が卵をうみ、卵から子がかえる。</div><p>魚類と両生類は水中に卵をうみ、は虫類と鳥類は陸上に殻のある卵をうみます。哺乳類は胎生です。</p>`,qs:[
{id:'4a',topic:'うまれ方',q:'母親の体内である程度育った子をうむことを何といいますか？',c:['胎生','卵生','変態','脱皮'],a:'胎生',h:'哺乳類のうまれ方。',e:'母体内で育った子をうむことを胎生といいます。'},
{id:'4b',topic:'うまれ方',q:'親が卵をうみ、卵から子がかえることを何といいますか？',c:['卵生','胎生','出芽','分裂'],a:'卵生',h:'「卵」から生まれます。',e:'卵から子がかえるうまれ方は卵生です。'},
{id:'4c',topic:'卵',q:'水中に殻のない卵をうむのは？',c:['魚類','鳥類','哺乳類','は虫類'],a:'魚類',h:'フナやメダカ。',e:'魚類は水中に殻のない卵をうみます。'},
{id:'4d',topic:'卵',q:'水中に寒天状のものに包まれた卵をうむのは？',c:['両生類','魚類','鳥類','哺乳類'],a:'両生類',h:'カエルの卵を思い出そう。',e:'両生類は水中に寒天状のものに包まれた卵をうみます。'},
{id:'4e',topic:'卵',q:'陸上に柔らかい殻のある卵をうむのは？',c:['は虫類','鳥類','魚類','哺乳類'],a:'は虫類',h:'カメやトカゲ。',e:'は虫類は陸上に柔らかい殻のある卵をうみます。'},
{id:'4f',topic:'卵',q:'陸上にかたい殻のある卵をうむのは？',c:['鳥類','は虫類','両生類','哺乳類'],a:'鳥類',h:'親が卵をあたためます。',e:'鳥類は陸上にかたい殻のある卵をうみます。'}]},
{title:'特徴から5分類を決める',desc:'複数の特徴を組み合わせる',lesson:`<div class="rule"><b>判断の順番</b><br>①胎生なら哺乳類<br>②卵生で、えらなら魚類<br>③幼生と成体で呼吸が変われば両生類<br>④肺呼吸で羽毛なら鳥類<br>⑤肺呼吸でかたいうろこ・こうらなら、は虫類</div>`,qs:[
{id:'5a',topic:'検索',q:'「えらで呼吸・うろこ・水中に殻のない卵」何類？',c:['魚類','両生類','は虫類','鳥類'],a:'魚類',h:'一生えら呼吸です。',e:'この特徴は魚類です。'},
{id:'5b',topic:'検索',q:'「幼生はえらと皮膚、成体は肺と皮膚・しめった皮膚」何類？',c:['両生類','魚類','は虫類','哺乳類'],a:'両生類',h:'幼生と成体で呼吸が変わります。',e:'この特徴は両生類です。'},
{id:'5c',topic:'検索',q:'「肺呼吸・かたいうろこ・陸上に殻のある卵」何類？',c:['は虫類','鳥類','魚類','両生類'],a:'は虫類',h:'羽毛はありません。',e:'この特徴は、は虫類です。'},
{id:'5d',topic:'検索',q:'「肺呼吸・羽毛・陸上にかたい殻のある卵」何類？',c:['鳥類','は虫類','哺乳類','魚類'],a:'鳥類',h:'羽毛が決め手です。',e:'この特徴は鳥類です。'},
{id:'5e',topic:'検索',q:'「肺呼吸・毛・胎生・子に乳を与える」何類？',c:['哺乳類','鳥類','は虫類','両生類'],a:'哺乳類',h:'乳を与える動物。',e:'この特徴は哺乳類です。'},
{id:'5f',topic:'ひっかけ',q:'イルカは何類？',v:'🐬',c:['哺乳類','魚類','両生類','は虫類'],a:'哺乳類',h:'水中生活でも肺呼吸・胎生です。',e:'イルカは肺で呼吸し、胎生なので哺乳類です。'}]},
{title:'無脊椎動物の分類',desc:'節足動物・軟体動物・その他',lesson:`<div class="rule"><b>節足動物</b>：外骨格をもち、からだやあしに節がある。<br><b>軟体動物</b>：骨格がなく、内臓が外とう膜でおおわれる。</div><p>ミミズ、ヒトデ、ウニ、クラゲなどは、どちらにも入らない「その他」の無脊椎動物です。</p>`,qs:[
{id:'6a',topic:'節足動物',q:'外骨格をもち、からだやあしに多くの節がある動物は？',c:['節足動物','軟体動物','脊椎動物','哺乳類'],a:'節足動物',h:'バッタやザリガニ。',e:'外骨格と節をもつ動物は節足動物です。'},
{id:'6b',topic:'外骨格',q:'外骨格のはたらきとして正しいものは？',c:['体を支え、体内を保護する','内臓を消化する','酸素をつくる','体温を一定にする'],a:'体を支え、体内を保護する',h:'丈夫な殻のようなつくり。',e:'外骨格は体を支え、体内を保護します。'},
{id:'6c',topic:'軟体動物',q:'内臓が外とう膜でおおわれている動物は？',c:['軟体動物','節足動物','魚類','両生類'],a:'軟体動物',h:'イカやアサリ。',e:'外とう膜をもつ動物は軟体動物です。'},
{id:'6d',topic:'分類',q:'タコは何動物？',v:'🐙',c:['軟体動物','節足動物','脊椎動物','昆虫類'],a:'軟体動物',h:'内臓が外とう膜でおおわれます。',e:'タコは軟体動物です。'},
{id:'6e',topic:'分類',q:'ミミズはどの分類？',v:'🪱',c:['その他の無脊椎動物','節足動物','軟体動物','脊椎動物'],a:'その他の無脊椎動物',h:'外骨格も外とう膜もありません。',e:'ミミズはその他の無脊椎動物です。'}]},
{title:'節足動物をさらに分ける',desc:'昆虫類・甲殻類・クモ類・多足類',lesson:`<table><tr><th>分類</th><th>特徴・例</th></tr><tr><td>昆虫類</td><td>頭部・胸部・腹部、胸部に3対のあし</td></tr><tr><td>甲殻類</td><td>エビ・カニ・ザリガニなど</td></tr><tr><td>クモ類</td><td>クモ・サソリなど</td></tr><tr><td>多足類</td><td>ムカデなど</td></tr></table>`,qs:[
{id:'7a',topic:'昆虫類',q:'頭部・胸部・腹部に分かれ、胸部に3対のあしがあるのは？',c:['昆虫類','甲殻類','クモ類','軟体動物'],a:'昆虫類',h:'バッタやカブトムシ。',e:'この体のつくりをもつのは昆虫類です。'},
{id:'7b',topic:'昆虫類',q:'昆虫類のあしは何本？',c:['6本','8本','10本','4本'],a:'6本',h:'3対です。',e:'3対＝6本です。'},
{id:'7c',topic:'甲殻類',q:'エビやカニのなかまは？',v:'🦐',c:['甲殻類','昆虫類','クモ類','多足類'],a:'甲殻類',h:'水中で生活するものが多いです。',e:'エビやカニは甲殻類です。'},
{id:'7d',topic:'クモ類',q:'クモのなかまは？',v:'🕷️',c:['クモ類','昆虫類','甲殻類','軟体動物'],a:'クモ類',h:'昆虫類ではありません。',e:'クモはクモ類です。'},
{id:'7e',topic:'多足類',q:'ムカデのなかまは？',c:['多足類','昆虫類','甲殻類','軟体動物'],a:'多足類',h:'多くのあしがあります。',e:'ムカデは多足類です。'}]},
{title:'検索表・総合問題',desc:'特徴を順番にたどって分類する',lesson:`<div class="rule"><b>検索表の進み方</b><br>背骨の有無 → 子のうまれ方 → 呼吸 → 体表<br>無脊椎動物は、節の有無 → あしの数 → 外とう膜の有無</div><p>一つの特徴だけで決めず、分かれ道を順番にたどりましょう。</p>`,qs:[
{id:'8a',topic:'検索表',q:'背骨あり → 卵生 → 肺呼吸 → 羽毛あり。何類？',c:['鳥類','は虫類','哺乳類','魚類'],a:'鳥類',h:'最後の「羽毛」が決め手。',e:'この順にたどると鳥類です。'},
{id:'8b',topic:'検索表',q:'背骨あり → 卵生 → 幼生はえらと皮膚、成体は肺と皮膚。何類？',c:['両生類','魚類','は虫類','鳥類'],a:'両生類',h:'呼吸の変化に注目。',e:'幼生と成体で呼吸が変わるので両生類です。'},
{id:'8c',topic:'検索表',q:'背骨なし → 節あり → 胸部に3対のあし。何類？',c:['昆虫類','甲殻類','クモ類','軟体動物'],a:'昆虫類',h:'3対＝6本。',e:'胸部に3対のあしがあるので昆虫類です。'},
{id:'8d',topic:'検索表',q:'背骨なし → 節なし → 外とう膜あり。何動物？',c:['軟体動物','節足動物','脊椎動物','昆虫類'],a:'軟体動物',h:'イカやアサリの特徴。',e:'外とう膜をもつので軟体動物です。'},
{id:'8e',topic:'総合',q:'次のうち、脊椎動物だけの組み合わせは？',c:['カエル・カメ・ハト','クモ・エビ・タコ','ミミズ・ウニ・メダカ','イカ・フナ・ヒト'],a:'カエル・カメ・ハト',h:'3匹すべてに背骨があるか確認。',e:'カエル、カメ、ハトはすべて脊椎動物です。'},
{id:'8f',topic:'総合',q:'次のうち、節足動物だけの組み合わせは？',c:['バッタ・クモ・エビ','タコ・アサリ・イカ','カエル・カメ・ハト','ミミズ・ウニ・クラゲ'],a:'バッタ・クモ・エビ',h:'外骨格と節をもつ動物。',e:'バッタ、クモ、エビはすべて節足動物です。'}]}
];
let currentStage=0,list=[],index=0,score=0,mode='stage',misses=[],locked=false;
function load(){return JSON.parse(localStorage.getItem(KEY)||'{"unlocked":1,"stars":{},"wrong":[]}')}
function save(p){localStorage.setItem(KEY,JSON.stringify(p))}
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));scrollTo(0,0)}
function allQuestions(){return stages.flatMap((s,i)=>s.qs.map(q=>({...q,stage:i})))}
function renderHome(){const p=load(),box=$('stageList');box.innerHTML='';stages.forEach((s,i)=>{const open=i<p.unlocked,stars=p.stars[i]||0,d=document.createElement('article');d.className='stage card '+(open?'':'locked')+(stars>=80?' done':'');d.innerHTML=`<div class="stage-num">${i+1}</div><div><h3>${s.title}</h3><p>${s.desc}</p><div class="stage-status">${open?(stars?`最高 ${stars}点`:'未挑戦'):'🔒 前のステージに合格すると開放'}</div></div><button class="${open?'primary':'ghost'}" ${open?'':'disabled'}>${stars?'復習する':'始める'}</button>`;if(open)d.querySelector('button').onclick=()=>openLesson(i);box.appendChild(d)});const completed=Object.values(p.stars).filter(v=>v>=80).length;$('totalProgress').textContent=Math.round(completed/stages.length*100)+'%';$('reviewBtn').textContent=`間違えた問題だけ（${p.wrong.length}問）`}
function openLesson(i){currentStage=i;$('lessonNumber').textContent=`STAGE ${i+1}`;$('lessonTitle').textContent=stages[i].title;$('lessonBody').innerHTML=stages[i].lesson;show('lesson')}
function startStage(){mode='stage';list=stages[currentStage].qs.map(q=>({...q,stage:currentStage}));begin()}
function startMixed(){mode='mixed';list=shuffle(allQuestions()).slice(0,15);begin()}
function startReview(){const ids=load().wrong;if(!ids.length){alert('間違えた問題はまだありません。');return}mode='review';list=shuffle(allQuestions().filter(q=>ids.includes(q.id)));begin()}
function begin(){index=0;score=0;misses=[];show('quiz');renderQuestion()}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function renderQuestion(){locked=false;const q=list[index];$('counter').textContent=`${index+1}/${list.length}`;$('barFill').style.width=`${index/list.length*100}%`;$('stageLabel').textContent=`STAGE ${q.stage+1}`;$('topicLabel').textContent=q.topic;$('questionText').textContent=q.q;const v=$('visual');v.textContent=q.v||'';v.classList.toggle('hidden',!q.v);$('choices').innerHTML='';shuffle(q.c).forEach(c=>{const b=document.createElement('button');b.className='choice';b.textContent=c;b.onclick=()=>answer(c,b);$('choices').appendChild(b)});$('feedback').className='feedback hidden';$('nextBtn').classList.add('hidden')}
function answer(choice,button){if(locked)return;locked=true;const q=list[index],ok=choice===q.a;if(ok)score++;else misses.push(q);document.querySelectorAll('.choice').forEach(b=>{b.disabled=true;if(b.textContent===q.a)b.classList.add('correct')});if(!ok)button.classList.add('wrong');$('feedback').className='feedback '+(ok?'ok':'ng');$('feedback').innerHTML=`<b>${ok?'正解！':'おしい！ 正解は「'+q.a+'」'}</b><br>${q.e}`;$('nextBtn').classList.remove('hidden');const p=load(),w=new Set(p.wrong);ok?w.delete(q.id):w.add(q.id);p.wrong=[...w];save(p)}
function finish(){const pct=Math.round(score/list.length*100),p=load();if(mode==='stage'){p.stars[currentStage]=Math.max(p.stars[currentStage]||0,pct);if(pct>=80)p.unlocked=Math.max(p.unlocked,currentStage+2);save(p)}$('resultTitle').textContent=mode==='stage'?`STAGE ${currentStage+1} 結果`:mode==='review'?'復習結果':'総合結果';$('score').textContent=pct+'点';$('resultText').textContent=pct>=90?'すばらしい！特徴を使って分類できています。':pct>=80?'合格！次のステージへ進めます。':pct>=60?'あと少し。間違えた特徴を確認しよう。':'ミニ解説を見直して、もう一度挑戦しよう。';$('resultReview').innerHTML=misses.length?'<h3>間違えた問題</h3>'+misses.map(q=>`<div class="review-item"><b>${q.q}</b>正解：${q.a}<br><small>${q.e}</small></div>`).join(''):'<p>全問正解です！</p>';show('result')}
$('startStageBtn').onclick=startStage;$('skipLesson').onclick=startStage;$('nextBtn').onclick=()=>index<list.length-1?(index++,renderQuestion()):finish();$('hintBtn').onclick=()=>alert(list[index].h);$('mixedBtn').onclick=startMixed;$('reviewBtn').onclick=startReview;$('retryBtn').onclick=()=>mode==='stage'?startStage():mode==='review'?startReview():startMixed();$('homeBtn').onclick=$('resultHomeBtn').onclick=()=>{renderHome();show('home')};$('resetBtn').onclick=()=>{if(confirm('学習記録をすべてリセットしますか？')){localStorage.removeItem(KEY);renderHome()}};renderHome();