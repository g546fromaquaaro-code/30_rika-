// 図表問題専用ステージ：ワーク「動物の体の共通点と相違点（4）」の（3）対策
const classificationDiagram = `
<div class="classification-diagram" aria-label="脊椎動物の分類図">
  <div class="diagram-head">脊椎動物の分類図</div>
  <div class="diagram-grid">
    <div class="diagram-row mammal"><b>A</b><span>胎生</span><span>肺</span><span>毛</span><strong>哺乳類</strong></div>
    <div class="diagram-row bird"><b>B</b><span>陸上に卵</span><span>肺</span><span>羽毛</span><strong>鳥類</strong></div>
    <div class="diagram-row reptile"><b>C</b><span>陸上に卵</span><span>肺</span><span>かたいうろこ・こうら</span><strong>は虫類</strong></div>
    <div class="diagram-row amphibian"><b>D</b><span>水中に卵</span><span>幼生：えらと皮膚<br>成体：肺と皮膚</span><span>しめった皮膚</span><strong>両生類</strong></div>
    <div class="diagram-row fish"><b>E</b><span>水中に卵</span><span>えら</span><span>うろこ</span><strong>魚類</strong></div>
  </div>
  <div class="diagram-key">A〜Eの位置と特徴を見て答えよう</div>
</div>`;

const diagramStage = {
  title:'図でA〜Eに分類する',
  desc:'ワーク（3）対策｜動物を分類図に振り分ける',
  lesson:`
    <div class="rule"><b>A〜Eを先に固定しよう</b><br>
    A＝哺乳類　B＝鳥類　C＝は虫類　D＝両生類　E＝魚類</div>
    ${classificationDiagram}
    <p><b>見分ける順番：</b>①毛・胎生 → A、②羽毛 → B、③かたいうろこ・こうら → C、④しめった皮膚 → D、⑤えら・うろこ → E</p>`,
  qs:[
    {id:'fig-a-set',topic:'Aのグループ',q:'図のAに入る動物の組み合わせはどれ？',v:classificationDiagram,c:['シマウマ・ネズミ・ヒト・クジラ','ハト・ペンギン・ニワトリ','トカゲ・ヘビ・カメ','タイ・コイ・メダカ'],a:'シマウマ・ネズミ・ヒト・クジラ',h:'Aは「毛・胎生」のグループ。',e:'Aは哺乳類です。シマウマ、ネズミ、ヒト、クジラが入ります。'},
    {id:'fig-b-set',topic:'Bのグループ',q:'図のBに入る動物の組み合わせはどれ？',v:classificationDiagram,c:['ハト・ペンギン・ニワトリ','カエル・イモリ','トカゲ・ヘビ・カメ','シマウマ・ヒト・クジラ'],a:'ハト・ペンギン・ニワトリ',h:'Bは羽毛でおおわれるグループ。',e:'Bは鳥類です。ハト、ペンギン、ニワトリが入ります。'},
    {id:'fig-c-set',topic:'Cのグループ',q:'図のCに入る動物の組み合わせはどれ？',v:classificationDiagram,c:['トカゲ・ヘビ・カメ','カエル・イモリ','タイ・コイ・メダカ','ハト・ペンギン'],a:'トカゲ・ヘビ・カメ',h:'Cは、かたいうろこやこうら。',e:'Cは、は虫類です。トカゲ、ヘビ、カメが入ります。'},
    {id:'fig-d-set',topic:'Dのグループ',q:'図のDに入る動物の組み合わせはどれ？',v:classificationDiagram,c:['カエル・イモリ','タイ・コイ・メダカ','トカゲ・カメ','ネズミ・ヒト'],a:'カエル・イモリ',h:'Dは、しめった皮膚をもつグループ。',e:'Dは両生類です。カエルとイモリが入ります。'},
    {id:'fig-e-set',topic:'Eのグループ',q:'図のEに入る動物の組み合わせはどれ？',v:classificationDiagram,c:['タイ・コイ・メダカ','カエル・イモリ','ハト・ニワトリ','ヘビ・カメ'],a:'タイ・コイ・メダカ',h:'Eは一生えらで呼吸します。',e:'Eは魚類です。タイ、コイ、メダカが入ります。'},
    {id:'fig-whale',topic:'動物→記号',q:'クジラは図のどこに入る？',v:classificationDiagram+'<div class="animal-card">🐋 クジラ</div>',c:['A','B','C','D','E'],a:'A',h:'水中で生活していても、肺呼吸・胎生です。',e:'クジラは哺乳類なのでAです。'},
    {id:'fig-penguin',topic:'動物→記号',q:'ペンギンは図のどこに入る？',v:classificationDiagram+'<div class="animal-card">🐧 ペンギン</div>',c:['A','B','C','D','E'],a:'B',h:'飛べなくても羽毛があります。',e:'ペンギンは鳥類なのでBです。'},
    {id:'fig-turtle',topic:'動物→記号',q:'カメは図のどこに入る？',v:classificationDiagram+'<div class="animal-card">🐢 カメ</div>',c:['A','B','C','D','E'],a:'C',h:'肺呼吸で、こうらがあります。',e:'カメは、は虫類なのでCです。'},
    {id:'fig-newt',topic:'動物→記号',q:'イモリは図のどこに入る？',v:classificationDiagram+'<div class="animal-card">イモリ</div>',c:['A','B','C','D','E'],a:'D',h:'幼生と成体で呼吸のしかたが変わります。',e:'イモリは両生類なのでDです。'},
    {id:'fig-medaka',topic:'動物→記号',q:'メダカは図のどこに入る？',v:classificationDiagram+'<div class="animal-card">🐟 メダカ</div>',c:['A','B','C','D','E'],a:'E',h:'えらで呼吸し、うろこがあります。',e:'メダカは魚類なのでEです。'},
    {id:'fig-mixed1',topic:'総合',q:'「ハト・カメ・カエル・メダカ」の並びをA〜Eで表すと？',v:classificationDiagram,c:['B・C・D・E','A・B・C・D','B・D・C・E','C・B・D・E'],a:'B・C・D・E',h:'ハト＝鳥類、カメ＝は虫類、カエル＝両生類、メダカ＝魚類。',e:'ハトB、カメC、カエルD、メダカEです。'},
    {id:'fig-mixed2',topic:'総合',q:'「ヒト・ペンギン・ヘビ・イモリ・コイ」の並びをA〜Eで表すと？',v:classificationDiagram,c:['A・B・C・D・E','A・C・B・D・E','B・A・C・E・D','A・B・D・C・E'],a:'A・B・C・D・E',h:'5種類がAからEの順に1つずつ並んでいます。',e:'ヒトA、ペンギンB、ヘビC、イモリD、コイEです。'}
  ]
};

// 「特徴から5分類を決める」の直後に追加
stages.splice(5,0,diagramStage);
