const questions = [
  {
    id: 'q1', chapter: 7, category: '脊椎動物',
    question: 'この動物のなかまは何類ですか？',
    diagram: animalSvg('frog'), choices: ['魚類','両生類','は虫類','哺乳類'], answer: '両生類',
    hint: '子どものころはえら、成長すると肺と皮ふで呼吸します。',
    explanation: 'カエルは、子は水中でえら呼吸、成体は肺と皮ふで呼吸する両生類です。'
  },
  {
    id: 'q2', chapter: 7, category: '脊椎動物',
    question: 'イルカが魚類ではなく哺乳類である根拠として最も適切なものは？',
    diagram: animalSvg('dolphin'), choices: ['えらで呼吸する','肺で呼吸し、子を母乳で育てる','うろこがある','卵を水中に産む'], answer: '肺で呼吸し、子を母乳で育てる',
    hint: '呼吸方法と子の育て方に注目。',
    explanation: 'イルカは肺呼吸をし、胎生で、子を母乳で育てるため哺乳類です。'
  },
  {
    id: 'q3', chapter: 7, category: '脊椎動物',
    question: '鳥類と哺乳類に共通する特徴はどれですか？',
    diagramTemplate: 'classification', choices: ['体温が外気で大きく変わる','一生えら呼吸をする','体温をほぼ一定に保つ','必ず水中に卵を産む'], answer: '体温をほぼ一定に保つ',
    hint: '恒温動物という言葉を思い出そう。',
    explanation: '鳥類と哺乳類は恒温動物で、外気温が変わっても体温をほぼ一定に保ちます。'
  },
  {
    id: 'q4', chapter: 7, category: '草食・肉食',
    question: '草食動物の目が、顔の横側についている主な利点は？',
    diagram: headSvg('herbivore'), choices: ['獲物との距離を正確に測れる','広い範囲を見渡せる','暗闇だけでよく見える','色を見分けられない'], answer: '広い範囲を見渡せる',
    hint: '敵を早く発見するために有利です。',
    explanation: '草食動物は目が横向きで視野が広く、周囲の敵を発見しやすいです。'
  },
  {
    id: 'q5', chapter: 8, category: '節足動物',
    question: 'バッタのあしがついている部分はどこですか？',
    diagram: grasshopperSvg(), choices: ['頭','胸','腹','はね'], answer: '胸',
    hint: '昆虫のあしはすべて同じ体の部分から出ています。',
    explanation: '昆虫のあしは胸に3対、合計6本ついています。'
  },
  {
    id: 'q6', chapter: 8, category: '節足動物',
    question: 'バッタの体の表面をおおう、かたい殻のようなものは？',
    diagram: grasshopperSvg(), choices: ['内骨格','外骨格','背骨','貝殻'], answer: '外骨格',
    hint: '体の「外側」にある骨格です。',
    explanation: '節足動物は体の外側を外骨格でおおわれています。'
  },
  {
    id: 'q7', chapter: 8, category: '軟体動物',
    question: 'イカやアサリに共通し、内臓を包んでいる膜は？',
    diagram: molluskSvg(), choices: ['外とう膜','横隔膜','細胞膜','鼓膜'], answer: '外とう膜',
    hint: '軟体動物の重要語句です。',
    explanation: '軟体動物では外とう膜が内臓を包んでいます。'
  },
  {
    id: 'q8', chapter: 8, category: '無脊椎動物',
    question: '次のうち、軟体動物はどれですか？',
    diagram: animalCardsSvg(), choices: ['ミミズ','エビ','マイマイ','クラゲ'], answer: 'マイマイ',
    hint: '体がやわらかく、外とう膜をもちます。',
    explanation: 'マイマイは軟体動物です。エビは節足動物、ミミズとクラゲはその他の無脊椎動物です。'
  },
  {
    id: 'q9', chapter: 8, category: '動物の分類',
    question: '動物を脊椎動物と無脊椎動物に分ける基準は？',
    diagram: spineSvg(), choices: ['肺があるか','背骨があるか','卵を産むか','水中にすむか'], answer: '背骨があるか',
    hint: '「脊椎」は背骨のことです。',
    explanation: '背骨をもつ動物が脊椎動物、もたない動物が無脊椎動物です。'
  },
  {
    id: 'q10', chapter: 8, category: '節足動物',
    question: '昆虫類の体の分かれ方として正しいものは？',
    diagram: grasshopperSvg(), choices: ['頭・胸・腹','頭・胴','胸・腹','頭・胸・尾'], answer: '頭・胸・腹',
    hint: '3つの部分に分かれます。',
    explanation: '昆虫類の体は、頭・胸・腹の3つに分かれています。'
  },
  {
    id: 'q11', chapter: 7, category: '子の生まれ方',
    question: '殻のある卵を陸上に産む脊椎動物の組み合わせは？',
    diagramTemplate: 'classification', choices: ['魚類と両生類','は虫類と鳥類','両生類と哺乳類','魚類と哺乳類'], answer: 'は虫類と鳥類',
    hint: '乾燥から胚を守れる卵です。',
    explanation: 'は虫類と鳥類は、乾燥に強い殻のある卵を陸上に産みます。'
  },
  {
    id: 'q12', chapter: 7, category: '体表',
    question: '哺乳類の体表をおおっているものは？',
    diagram: animalSvg('rabbit'), choices: ['うろこ','しめった皮ふ','羽毛','毛'], answer: '毛',
    hint: 'ウサギやヒトを思い浮かべよう。',
    explanation: '哺乳類の体表は毛でおおわれています。'
  }
];

let state = {
  mode: 'diagram',
  quiz: [], index: 0, correct: 0, responses: [], currentAnswered: false
};

const storageKey = 'rika-ch7-8-progress-v1';
function loadProgress(){
  return JSON.parse(localStorage.getItem(storageKey) || '{"answered":0,"correct":0,"wrongIds":[]}');
}
function saveProgress(p){ localStorage.setItem(storageKey, JSON.stringify(p)); }

const screens = {
  home: document.getElementById('homeScreen'),
  quiz: document.getElementById('quizScreen'),
  result: document.getElementById('resultScreen')
};
function showScreen(name){ Object.values(screens).forEach(s=>s.classList.remove('active')); screens[name].classList.add('active'); }

function updateHome(){
  const p = loadProgress();
  const accuracy = p.answered ? Math.round(p.correct / p.answered * 100) : 0;
  const learned = Math.min(100, Math.round((p.answered / 30) * 100));
  document.getElementById('answeredStat').textContent = p.answered;
  document.getElementById('correctStat').textContent = p.correct;
  document.getElementById('accuracyStat').textContent = accuracy + '%';
  document.getElementById('reviewCount').textContent = p.wrongIds.length + '問';
  document.getElementById('progressPercent').textContent = learned + '%';
  document.querySelector('.progress-ring').style.setProperty('--progress', learned + '%');
}

function startMode(mode){
  state.mode = mode;
  const progress = loadProgress();
  if(mode === 'review'){
    state.quiz = questions.filter(q => progress.wrongIds.includes(q.id));
    if(!state.quiz.length){ alert('復習する問題はまだありません。まず図問題かテストに挑戦しよう。'); return; }
  } else if(mode === 'test'){
    state.quiz = shuffle([...questions]).slice(0, 10);
  } else {
    state.quiz = shuffle([...questions]);
  }
  state.index = 0; state.correct = 0; state.responses = []; state.currentAnswered = false;
  document.getElementById('modeLabel').textContent = mode === 'test' ? '10問テスト' : mode === 'review' ? '間違い復習' : '図だけ見て答える';
  showScreen('quiz'); renderQuestion();
}

function renderQuestion(){
  const q = state.quiz[state.index];
  state.currentAnswered = false;
  document.getElementById('currentNumber').textContent = state.index + 1;
  document.getElementById('totalNumber').textContent = state.quiz.length;
  document.getElementById('quizProgress').style.width = `${(state.index / state.quiz.length) * 100}%`;
  document.getElementById('chapterBadge').textContent = `単元${q.chapter}`;
  document.getElementById('categoryLabel').textContent = q.category;
  document.getElementById('questionText').textContent = q.question;
  const diagram = document.getElementById('diagramArea');
  diagram.innerHTML = '';
  if(q.diagramTemplate === 'classification'){
    diagram.appendChild(document.getElementById('animalClassDiagram').content.cloneNode(true));
  } else diagram.innerHTML = q.diagram;
  const choiceArea = document.getElementById('choiceArea');
  choiceArea.innerHTML = '';
  shuffle([...q.choices]).forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn'; btn.textContent = choice;
    btn.onclick = () => answerQuestion(choice, btn);
    choiceArea.appendChild(btn);
  });
  document.getElementById('feedback').className = 'feedback hidden';
  document.getElementById('nextBtn').classList.add('hidden');
}

function answerQuestion(choice, button){
  if(state.currentAnswered) return;
  state.currentAnswered = true;
  const q = state.quiz[state.index];
  const correct = choice === q.answer;
  if(correct) state.correct++;
  state.responses.push({id:q.id, category:q.category, correct});
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.disabled = true;
    if(btn.textContent === q.answer) btn.classList.add('correct');
  });
  if(!correct) button.classList.add('wrong');
  const fb = document.getElementById('feedback');
  fb.className = `feedback ${correct ? 'correct':'wrong'}`;
  fb.innerHTML = `<strong>${correct ? '正解！':'おしい！'}</strong><br>${q.explanation}`;
  document.getElementById('nextBtn').classList.remove('hidden');
  recordProgress(q.id, correct);
}

function recordProgress(id, correct){
  const p = loadProgress(); p.answered++; if(correct) p.correct++;
  const set = new Set(p.wrongIds);
  if(correct) set.delete(id); else set.add(id);
  p.wrongIds = [...set]; saveProgress(p); updateHome();
}

function nextQuestion(){
  if(state.index < state.quiz.length - 1){ state.index++; renderQuestion(); }
  else showResults();
}

function showResults(){
  showScreen('result');
  const score = Math.round(state.correct / state.quiz.length * 100);
  document.getElementById('scoreValue').textContent = score;
  document.getElementById('resultMessage').textContent = score >= 90 ? 'すばらしい！図から正確に判断できています。' : score >= 70 ? 'よくできました。間違えた問題を復習するとさらに安定します。' : 'まずは間違い復習で、図と特徴を結びつけよう。';
  const grouped = {};
  state.responses.forEach(r => { grouped[r.category] ??= {c:0,t:0}; grouped[r.category].t++; if(r.correct) grouped[r.category].c++; });
  document.getElementById('categoryResults').innerHTML = Object.entries(grouped).map(([k,v]) => `<div class="category-row"><span>${k}</span><strong>${v.c}/${v.t}</strong></div>`).join('');
}

function shuffle(arr){ return arr.sort(()=>Math.random()-.5); }

function animalSvg(type){
  const labels = {frog:'カエル', dolphin:'イルカ', rabbit:'ウサギ'};
  const emoji = {frog:'🐸', dolphin:'🐬', rabbit:'🐇'};
  return `<div class="simple-animal" style="text-align:center"><div style="font-size:110px">${emoji[type]}</div><strong style="font-size:22px">${labels[type]}</strong></div>`;
}
function headSvg(){ return `<div class="simple-animal"><svg viewBox="0 0 600 280" role="img" aria-label="草食動物の顔"><ellipse cx="300" cy="150" rx="120" ry="90" fill="#dcc6a0"/><ellipse cx="205" cy="130" rx="28" ry="18" fill="#fff" stroke="#333" stroke-width="5"/><ellipse cx="395" cy="130" rx="28" ry="18" fill="#fff" stroke="#333" stroke-width="5"/><circle cx="205" cy="130" r="8"/><circle cx="395" cy="130" r="8"/><path d="M270 190 Q300 215 330 190" fill="none" stroke="#333" stroke-width="6"/><text x="300" y="45" text-anchor="middle" font-size="28" font-weight="700">目が顔の横側についている</text></svg></div>`; }
function grasshopperSvg(){ return `<div class="simple-animal"><svg viewBox="0 0 700 300" role="img" aria-label="バッタの模式図"><ellipse cx="120" cy="150" rx="70" ry="60" fill="#7bae44" stroke="#365d24" stroke-width="5"/><ellipse cx="285" cy="150" rx="110" ry="72" fill="#8bb84d" stroke="#365d24" stroke-width="5"/><ellipse cx="510" cy="150" rx="170" ry="65" fill="#b2c95d" stroke="#365d24" stroke-width="5"/><line x1="250" y1="190" x2="190" y2="270" stroke="#365d24" stroke-width="12"/><line x1="305" y1="195" x2="290" y2="280" stroke="#365d24" stroke-width="12"/><line x1="350" y1="190" x2="450" y2="275" stroke="#365d24" stroke-width="14"/><line x1="340" y1="100" x2="550" y2="40" stroke="#365d24" stroke-width="10"/><text x="120" y="55" text-anchor="middle" font-size="26" font-weight="700">頭</text><text x="285" y="55" text-anchor="middle" font-size="26" font-weight="700">胸</text><text x="510" y="55" text-anchor="middle" font-size="26" font-weight="700">腹</text></svg></div>`; }
function molluskSvg(){ return `<div class="simple-animal"><svg viewBox="0 0 700 300" role="img" aria-label="イカとアサリの模式図"><text x="170" y="45" text-anchor="middle" font-size="28" font-weight="700">イカ</text><path d="M170 70 Q90 160 170 230 Q250 160 170 70" fill="#e8d6c3" stroke="#7b6758" stroke-width="5"/><path d="M135 220 q-30 55 -50 65 M155 225 q-10 55 -5 65 M185 225 q10 55 5 65 M205 220 q30 55 50 65" fill="none" stroke="#7b6758" stroke-width="8"/><text x="500" y="45" text-anchor="middle" font-size="28" font-weight="700">アサリ</text><path d="M400 210 Q420 80 500 75 Q580 80 600 210 Q500 260 400 210" fill="#e5c9a5" stroke="#7b6758" stroke-width="5"/><path d="M500 78 V230" stroke="#7b6758" stroke-width="4" stroke-dasharray="8 8"/><text x="350" y="285" text-anchor="middle" font-size="22">どちらも外とう膜をもつ</text></svg></div>`; }
function animalCardsSvg(){ return `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;width:100%">${[['ミミズ','🪱'],['エビ','🦐'],['マイマイ','🐌'],['クラゲ','🪼']].map(x=>`<div style="background:white;border:1px solid #dfe7e2;border-radius:14px;padding:18px;text-align:center"><div style="font-size:60px">${x[1]}</div><strong>${x[0]}</strong></div>`).join('')}</div>`; }
function spineSvg(){ return `<div class="simple-animal"><svg viewBox="0 0 650 260"><path d="M80 130 Q190 30 310 130 T570 130" fill="none" stroke="#444" stroke-width="14"/><g fill="#f4e6c8" stroke="#6d5f48" stroke-width="3">${[110,150,190,230,270,310,350,390,430,470,510,550].map(x=>`<rect x="${x}" y="105" width="22" height="50" rx="8"/>`).join('')}</g><text x="325" y="220" text-anchor="middle" font-size="28" font-weight="700">背骨（脊椎）</text></svg></div>`; }

document.querySelectorAll('.mode-card').forEach(btn => btn.addEventListener('click', () => startMode(btn.dataset.mode)));
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('backHome').addEventListener('click', () => { showScreen('home'); updateHome(); });
document.getElementById('resultHomeBtn').addEventListener('click', () => { showScreen('home'); updateHome(); });
document.getElementById('retryBtn').addEventListener('click', () => startMode(state.mode));
document.getElementById('hintBtn').addEventListener('click', () => alert(state.quiz[state.index].hint));
document.getElementById('resetProgress').addEventListener('click', () => { if(confirm('学習記録をリセットしますか？')){ localStorage.removeItem(storageKey); updateHome(); } });
updateHome();
