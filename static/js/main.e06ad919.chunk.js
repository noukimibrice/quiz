(this["webpackJsonpmarvel-quiz"]=this["webpackJsonpmarvel-quiz"]||[]).push([[0],{84:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var n=s(3),i=s.n(n),a=s(26),r=s.n(a),o=s(15),c=s(8),l=s(2),u=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"banner-container",children:Object(l.jsx)("h1",{children:Object(l.jsx)("a",{href:"/",children:"Quiz stagiaire Matgenie"})})})})},d=s(7),j=s(27),b=s(29),p=(s(58),s(86),{apiKey:"AIzaSyC8w2fmSKkoT0JF7Vvv9bX7AWZgI-j0AgE",authDomain:"marvel-quiz-11258.firebaseapp.com",projectId:"marvel-quiz-11258",storageBucket:"marvel-quiz-11258.appspot.com",messagingSenderId:"508455620388",appId:"1:508455620388:web:5ffc423f41bb73cf006db1"}),h=function e(){var t=this;Object(j.a)(this,e),this.signupUser=function(e,s){return t.auth.createUserWithEmailAndPassword(e,s)},this.loginUser=function(e,s){return t.auth.signInWithEmailAndPassword(e,s)},this.signoutUser=function(){return t.auth.signOut()},this.passwordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.user=function(e){return t.db.doc("users/".concat(e))},b.a.initializeApp(p),this.auth=b.a.auth(),this.db=b.a.firestore()},A=i.a.createContext(null),m=h,O=s(44),x=function(){var e=Object(n.useContext)(A),t=Object(n.useState)(!1),s=Object(d.a)(t,2),i=s[0],a=s[1];Object(n.useEffect)((function(){i&&e.signoutUser()}),[i,e]);return Object(l.jsxs)("div",{className:"logoutContainer",children:[Object(l.jsxs)("label",{className:"switch",children:[Object(l.jsx)("input",{onChange:function(e){a(e.target.checked)},type:"checkbox",checked:i}),Object(l.jsx)("span",{className:"slider round","data-tip":"D\xe9connexion"})]}),Object(l.jsx)(O.a,{place:"left",effect:"solid"})]})},g=s(18),f=s(51),v=s(45),q=s(52),C=s(50),w=s(23),I=(s(62),[{fournisseur:"Brice Noukimi (https://www.digital19.net)",sujet:"Application test stagiaire MATGENIE en informatique",quizz:{debutant:[{id:0,question:"Quel est le secteur d'activit\xe9 du MATGENIE ?",options:["L'exploitation foresti\xe8re","B\xe2timents et travaux publics","Fabrication des engins de g\xe9nie civil","L'agriculture"],answer:"B\xe2timents et travaux publics",heroId:1009362},{id:1,question:"Le MATGENIE compte combien d'agences commerciales ?",options:[8,10,11,9],answer:10,heroId:1009718},{id:2,question:"A la t\xeate de chaque agence commerciale du MATGENIE nous avons un ...",options:["Chef d'agence","Responsable d'agence","D\xe9l\xe9gu\xe9 d'agence","Directeur d'agence"],answer:"Directeur d'agence",heroId:1009610},{id:3,question:"Selon vous, le MATGENIE compte combien d'employ\xe9s ?",options:[387,122,407,210],answer:387,heroId:1009718},{id:4,question:"Quelle est l'unit\xe9 au MATGENIE en charge des stagiaires ?",options:["Cellule des ressources humaines et de la politique sociale","Direction des finances et du recouvrement","Cellule de la formation technique","Cabinet du Directeur G\xe9n\xe9ral "],answer:"Cellule de la formation technique",heroId:1009664},{id:5,question:"Comment appelle t-on le Directeur G\xe9n\xe9ral du MATGENIE ?",options:["EONGUE Gustave","ABOGO NTANG D\xe9sir\xe9","EBO Dani\xe8le Roland","ABENGA EBOKO D\xe9rick"],answer:"ABOGO NTANG D\xe9sir\xe9",heroId:1009351},{id:6,question:"L'installation d'une imprimante \xe0 un ordinateur passe au pr\xe9alable par ...",options:["Le test de connexion entre les deux p\xe9riph\xe9riques par un ping","L'installation d'un pilote","La connexion du c\xe2ble d'imprimante \xe0 l'ordinateur","La validation du mod\xe8le de l'imprimante dans l'ordinateur"],answer:"L'installation d'un pilote",heroId:1009662},{id:7,question:"Quel est le prestataire qui loue sa bande passante au MATGENIE pour assurer l'interconnexion r\xe9seau ?",options:["MTN","Nexttel","Orange","Camtel"],answer:"Orange",heroId:1009368},{id:8,question:"Quel est le prestataire de fourniture de connexion internet par fibre optique au MATGENIE ?",options:["Nexttel","Camtel","Orange","MTN"],answer:"Camtel",heroId:1009220},{id:9,question:"Quel est le nom du progiciel de GMAO que le MATGENIE a utilis\xe9 pour la gestion de sa maintenance ?",options:["Sage","Maximo","Coswin","OpenGST"],answer:"Coswin",heroId:1009662}],confirme:[{id:0,question:"Lequel de ces logiciels n'est pas un logiciel de visioconf\xe9rence ?",options:["Microsoft Teams","TeamViewer","Thunderbird","Zoom"],answer:"Thunderbird",heroId:1009718},{id:1,question:"Quelle adresse IP est de classe C ?",options:["10.0.2.10","172.14.18.1","192.168.10.1","126.68.1.10"],answer:"192.168.10.1",heroId:1009466},{id:2,question:"Quelle est la commande dos qui permet de v\xe9rifier et de r\xe9parer un disque dur ?",options:["Chdir","Chkdsk","Chkntfs","Cls"],answer:"Chkdsk",heroId:1009368},{id:3,question:"Quelle est la commande dos qui permet d'afficher la configuration IP de windows ?",options:["Ipconfig","Mkdir","Mklink ","Pathping"],answer:"Ipconfig",heroId:1014985},{id:4,question:"Identifiez l'intrus ?",options:["Mysql","Firebird","Progress","Mailbird"],answer:"Mailbird",heroId:1009318},{id:5,question:"Dans le jargon du d\xe9veloppement, c'est quoi le front-end ?",options:["D\xe9signe ce que voit l'internaute en navigant sur un site internet","D\xe9signe ce que voit l'administrateur du site quand il se connecte \xe0 l'administration","Se concentre davantage sur la robustesse et la s\xe9curit\xe9 du site.","Permet de cr\xe9er les bases de donn\xe9es"],answer:"D\xe9signe ce que voit l'internaute en navigant sur un site internet",heroId:1009526},{id:6,question:"Il n'est pas un langage de d\xe9veloppement back-end ...",options:["React JS","PHP","Ruby","C++"],answer:"React JS",heroId:1009262},{id:7,question:"WinMend Folder Hidden est un logiciel qui permet de ...",options:["R\xe9parer un disque dur","D'interroger une base de donn\xe9es","Crypter un mot de passe","D'installer un serveur local"],answer:"Crypter un mot de passe",heroId:1010952},{id:8,question:"Quel connecteur est utilis\xe9 pour les raccordement de paires torsad\xe9es de r\xe9seau ethernet ?",options:["Rj11","Rj22","Rj45","Rj30"],answer:"Rj45",heroId:1009303},{id:9,question:"Quel est l\u2019\xe9l\xe9ment mat\xe9riel d\u2019un r\xe9seau qu\u2019on appelle \xab passerelle \xbb ?",options:["Switch","Commutateur","Serveur","Routeur"],answer:"Routeur",heroId:1009281}],expert:[{id:0,question:"La technologie ADSL est une ...",options:["Norme de c\xe2bles t\xe9l\xe9phoniques","Technologie Internet sans fil","Technologie Internet Haut D\xe9bit utilisant le r\xe9seau t\xe9l\xe9phonique","Liaison satellite"],answer:"Technologie Internet Haut D\xe9bit utilisant le r\xe9seau t\xe9l\xe9phonique",heroId:1009608},{id:1,question:"O\xf9 utilise t-on une adresse IP publique ?",options:["Dans le LAN local","Par les entreprises","Par gmail","Sur Internet"],answer:"Sur Internet",heroId:1009626},{id:2,question:"Dans un protocole UDP ...",options:["Le destinataire ne connait pas l'\xe9metteur des donn\xe9es hormis son IP","Le mode connexion est valid\xe9","On a une garantie que les paquets sont bien arriv\xe9s","Il existe un syst\xe8me d'aller-retour pour v\xe9rifier la bonne livraison des paquets"],answer:"Le destinataire ne connait pas l'\xe9metteur des donn\xe9es hormis son IP",heroId:1009610},{id:3,question:"Les balises <audio> et <video> sont disponibles dans ...",options:["HTML3","HTML4","HTML5","HTML6"],answer:"HTML5",heroId:1009288},{id:4,question:"D\xe9tectez l'intrus ?",options:["Sublime text","Visual studio code","SeaMonkey","Notepad++"],answer:"SeaMonkey",heroId:1009421},{id:5,question:"Quelle propri\xe9t\xe9 de Flexbox existe vraiment ?",options:["flex-wrap","re-flex","circon-flex","corn-flex"],answer:"flex-wrap",heroId:1010788},{id:6,question:"La technologie RAID permet ...",options:["D'am\xe9liorer la s\xe9curit\xe9 et/ou la performance des disques d'un serveur","D'am\xe9liorer la performance des processeurs","D'am\xe9liorer l'\xe9x\xe9cution rapide des requ\xeates dans la base de donn\xe9es","De configurer les routeurs"],answer:"D'am\xe9liorer la s\xe9curit\xe9 et/ou la performance des disques d'un serveur",heroId:1011007},{id:7,question:"Quel protocole est d\xe9di\xe9 \xe0 la transmission de fichiers sur Internet ?",options:["HTTP","FTP","SMTP","TCP"],answer:"FTP",heroId:1010338},{id:8,question:"Concernant le r\xe9f\xe9rencement, trouvez l'affirmation fausse ?",options:["Les liens internes permettent de fluidifier la navigation entre vos pages web","Les liens internes sont pris dans dans nos propres articles","Il faut inclure un maximum de liens internes dans le contenu de vos pages","Les liens internes am\xe9liorent le r\xe9f\xe9rencement naturel de votre site"],answer:"Il faut inclure un maximum de liens internes dans le contenu de vos pages",heroId:1009239},{id:9,question:"Qu'est-ce qu'un cookie ?",options:["L'historique de navigation des internautes","Une annonce Google Ads","Un fichier stockant nos informations de navigation en m\xe9moire","Un lien d'Affiliation"],answer:"Un fichier stockant nos informations de navigation en m\xe9moire",heroId:1009629}]}}]),N=s(46),B=i.a.forwardRef((function(e,t){var s=e.levelNames,i=e.score,a=e.maxQuestion,r=e.quizLevel,o=e.percent,c=e.loadLevelQuestions,u=Object(n.useState)([]),j=Object(d.a)(u,2),b=j[0],p=j[1];console.log(b),Object(n.useEffect)((function(){p(t.current)}),[t]);var h=a/2+2;console.log(h);var A=i>=h?Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"stepsBtnContainer",children:r<s.length?Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("p",{className:"successMsg",children:"Bravo, passez au niveau suivant !"}),Object(l.jsx)("button",{className:"btnResult success",onClick:function(){return c(r)},children:"Niveau suivant"})]}):Object(l.jsxs)(n.Fragment,{children:[Object(l.jsxs)("p",{className:"successMsg",children:[Object(l.jsx)(N.a,{size:"45px"})," Bravo, vous \xeates un expert !"]}),Object(l.jsx)("button",{className:"btnResult gameOver",onClick:function(){return c(0)},children:"Accueil"})]})}),Object(l.jsxs)("div",{className:"percentage",children:[Object(l.jsxs)("div",{className:"progressPercent",children:["R\xe9ussite : ",o," %"]}),Object(l.jsxs)("div",{className:"progressPercent",children:["Note : ",i,"/",a]})]})]}):Object(l.jsxs)(n.Fragment,{children:[Object(l.jsxs)("div",{className:"stepsBtnContainer",children:[Object(l.jsx)("p",{className:"failureMsg",children:"Vous avez \xe9chou\xe9 !"}),Object(l.jsx)("button",{className:"btnResult gameOver",onClick:function(){return c(r)},children:"Reprendre le Quiz"})]}),Object(l.jsxs)("div",{className:"percentage",children:[Object(l.jsxs)("div",{className:"progressPercent",children:["R\xe9ussite : ",o,"%"]}),Object(l.jsxs)("div",{className:"progressPercent",children:["Note : ",i,"/",a]})]})]}),m=i>=h?b.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.question}),Object(l.jsx)("td",{children:e.answer}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{className:"btnInfo",children:"Infos"})})]},e.id)})):Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colSpan:"3",children:Object(l.jsx)("p",{style:{textAlign:"center",color:"#EBA610"},children:"Pas de r\xe9ponses disponibles"})})});return Object(l.jsxs)(n.Fragment,{children:[A,Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:"Les r\xe9ponses aux questions pos\xe9es :"}),Object(l.jsx)("div",{className:"answerContainer",children:Object(l.jsxs)("table",{className:"answers",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Questions"}),Object(l.jsx)("th",{children:"R\xe9ponses"}),Object(l.jsx)("th",{children:"Infos"})]})}),Object(l.jsx)("tbody",{children:m})]})})]})})),Q=i.a.memo(B),E=s(47),R=s.n(E),F=function(e){var t=e.levelNames,s=e.quizLevel,i=Object(n.useState)([]),a=Object(d.a)(i,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){var e=t.map((function(e){return{title:e.toUpperCase()}}));o(e)}),[t]),Object(l.jsx)("div",{className:"levelsContainer",style:{background:"transparent"},children:Object(l.jsx)(R.a,{steps:r,activeStep:s,circleTop:0,activeTitleColor:"black",activeColor:"black",completeTitleColor:"#e0e0e0",defaultTitleColor:"#e0e0e0",completeColor:"#e0e0e0",completeBarColor:"#e0e0e0",size:40,circleFontSize:20})})},P=i.a.memo(F),M=function(e){var t=e.idQuestion,s=e.maxQuestions,i=t+1,a=100/s*i;return console.log(a),Object(l.jsxs)(n.Fragment,{children:[Object(l.jsxs)("div",{className:"percentage",children:[Object(l.jsx)("div",{className:"progressPercent",children:"Question : ".concat(i,"/").concat(s)}),Object(l.jsx)("div",{className:"progressPercent",children:"Progression ".concat(a,"%")})]}),Object(l.jsx)("div",{className:"progressBar",children:Object(l.jsx)("div",{className:"progressBarChange",style:{width:"".concat(a,"%")}})})]})},z=i.a.memo(M),D=s(48),L=["answer"];w.a.configure();var U=function(e){Object(q.a)(s,e);var t=Object(C.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).loadQuestions=function(e){var t=I[0].quizz[e];if(t.length>=n.state.maxQuestions){n.storedDataRef.current=t;var s=t.map((function(e){e.answer;return Object(f.a)(e,L)}));n.setState({sotredQuestions:s})}else console.log("Pas assez de questions !!!")},n.showWelcomeMsg=function(e){n.state.showWelcomeMsg||(n.setState({showWelcomeMsg:!0}),w.a.dark("Bienvenue ".concat(e," et Bonne chance"),{position:"top-right",autoClose:4500,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,bodyClassName:"toastify-color-welcome"}))},n.componentDidMount=function(){n.loadQuestions(n.state.levelNames[n.state.quizLevel])},n.nextQuestion=function(){n.state.idQuestion===n.state.maxQuestions-1?n.setState({quizEnd:!0}):n.setState((function(e){return{idQuestion:e.idQuestion+1}}));var e=n.storedDataRef.current[n.state.idQuestion].answer;n.state.userAnswer===e?(n.setState((function(e){return{score:e.score+1}})),w.a.success("Bravo : +1",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,bodyClassName:"toastify-color"})):w.a.error("Rat\xe9 : 0",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,bodyClassName:"toastify-color"})},n.componentDidUpdate=function(e,t){if(n.state.sotredQuestions!==t.sotredQuestions&&n.state.sotredQuestions.length&&n.setState({question:n.state.sotredQuestions[n.state.idQuestion].question,options:n.state.sotredQuestions[n.state.idQuestion].options}),n.state.idQuestion!==t.idQuestion&&n.state.sotredQuestions&&n.setState({question:n.state.sotredQuestions[n.state.idQuestion].question,options:n.state.sotredQuestions[n.state.idQuestion].options,userAnswer:null,btnSubmit:!0}),n.state.quizEnd!==t.quizEnd){var s=n.getpercentage(n.state.maxQuestions,n.state.score);n.gameOver(s)}n.props.userData.pseudo&&(n.showWelcomeMsg(n.props.userData.pseudo),console.log("Bienvenue ".concat(n.props.userData.pseudo)))},n.getpercentage=function(e,t){return t/e*100},n.gameOver=function(e){n.getpercentage(n.state.maxQuestions,n.state.score);e>=70?n.setState({quizLevel:n.state.quizLevel+1,percent:e}):n.setState({percent:e})},n.loadLevelQuestions=function(e){n.setState(Object(g.a)(Object(g.a)({},n.initialState),{},{quizLevel:e})),n.loadQuestions(n.state.levelNames[e])},n.initialState={levelNames:["debutant","confirme","expert"],quizLevel:0,maxQuestions:10,sotredQuestions:[],question:null,options:[],idQuestion:0,btnSubmit:!0,userAnswer:null,score:0,showWelcomeMsg:!1,quizEnd:!1,percent:0},n.state=n.initialState,n.storedDataRef=i.a.createRef(),n}return Object(v.a)(s,[{key:"render",value:function(){var e=this,t=this.state.options.map((function(t,s){return Object(l.jsxs)("p",{onClick:function(){return s=t,e.setState({userAnswer:s,btnSubmit:!1}),void console.log(s);var s},className:"answerOptions ".concat(e.state.userAnswer===t?"selected":null),children:[Object(l.jsx)(D.a,{}),"  ",t]},s)})),s=this.state.idQuestion<this.state.maxQuestions-1?"Suivant":"Terminer";return this.state.quizEnd?Object(l.jsx)(Q,{ref:this.storedDataRef,levelNames:this.state.levelNames,score:this.state.score,maxQuestion:this.state.maxQuestions,quizLevel:this.state.quizLevel,percent:this.state.percent,loadLevelQuestions:this.loadLevelQuestions,showWelcomeMsg:this.state.showWelcomeMsg}):Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)(P,{levelNames:this.state.levelNames,quizLevel:this.state.quizLevel}),Object(l.jsx)(z,{idQuestion:this.state.idQuestion,maxQuestions:this.state.maxQuestions}),Object(l.jsx)("h2",{children:this.state.question}),t,Object(l.jsx)("button",{disabled:this.state.btnSubmit,className:"btnSubmit",onClick:this.nextQuestion,children:s})]})}}]),s}(n.Component),H=function(e){var t=Object(n.useContext)(A),s=Object(n.useState)(null),i=Object(d.a)(s,2),a=i[0],r=i[1],o=Object(n.useState)({}),c=Object(d.a)(o,2),u=c[0],j=c[1];return Object(n.useEffect)((function(){var s=t.auth.onAuthStateChanged((function(t){t?r(t):e.history.push("/")}));return a&&t.user(a.uid).get().then((function(e){if(e&&e.exists){var t=e.data();j(t)}})).catch((function(e){})),function(){s()}}),[a]),null===a?Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{className:"loader"}),Object(l.jsx)("p",{style:{textAlign:"center",color:"white"},children:"Authentification ..."})]}):Object(l.jsx)("div",{className:"quiz-bg",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(x,{}),Object(l.jsx)(U,{userData:u})]})})},S=function(e){var t=Object(n.useContext)(A),s=Object(n.useState)(""),i=Object(d.a)(s,2),a=i[0],r=i[1],c=Object(n.useState)(""),u=Object(d.a)(c,2),j=u[0],b=u[1],p=Object(n.useState)(""),h=Object(d.a)(p,2),m=h[0],O=h[1],x=Object(n.useState)(!1),g=Object(d.a)(x,2),f=g[0],v=g[1];Object(n.useEffect)((function(){j.length>5&&""!==a?v(!0):f&&v(!1)}),[j,a,f]);var q=""!==m&&Object(l.jsx)("span",{children:m.message});return Object(l.jsx)("div",{className:"signUpLoginBox",children:Object(l.jsxs)("div",{className:"slContainer",children:[Object(l.jsx)("div",{className:"formBoxLeftSignup"}),Object(l.jsx)("div",{className:"formBoxRight",children:Object(l.jsxs)("div",{className:"formContent",children:[q,Object(l.jsx)("h2",{children:"Connexion"}),Object(l.jsxs)("form",{onSubmit:function(s){s.preventDefault(),t.loginUser(a,j).then((function(t){console.log(t),r(""),b(""),e.history.push("/welcome")})).catch((function(e){r(""),b(""),O(e)}))},children:[Object(l.jsxs)("div",{className:"inputBox",children:[Object(l.jsx)("input",{onChange:function(e){r(e.target.value)},value:a,type:"mail",id:"email",autoComplete:"off",required:!0}),Object(l.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(l.jsxs)("div",{className:"inputBox",children:[Object(l.jsx)("input",{onChange:function(e){b(e.target.value)},value:j,type:"password",id:"password",autoComplete:"off",required:!0}),Object(l.jsx)("label",{htmlFor:"password",children:"Mot de passe"})]}),f?Object(l.jsx)("button",{children:"Connexion"}):Object(l.jsx)("button",{disabled:!0,children:"Connexion"})]}),Object(l.jsx)("div",{className:"linkContainer",children:Object(l.jsx)(o.b,{className:"simpleLink",to:"/forgetpassword",children:"Mot de passe oubli\xe9 ? R\xe9cup\xe9rer votre mot de passe"})}),Object(l.jsx)("div",{className:"linkContainer",children:Object(l.jsx)(o.b,{className:"simpleLink",to:"/signup",children:"Pas encore de compte ? Inscrivez vous d'abord"})})]})})]})})},Y=s(28),T=function(e){var t=Object(n.useContext)(A),s={pseudo:"",email:"",password:"",confirmPassword:""},i=Object(n.useState)(s),a=Object(d.a)(i,2),r=a[0],c=a[1],u=Object(n.useState)(""),j=Object(d.a)(u,2),b=j[0],p=j[1],h=function(e){c(Object(g.a)(Object(g.a)({},r),{},Object(Y.a)({},e.target.id,e.target.value)))},m=r.pseudo,O=r.email,x=r.password,f=r.confirmPassword,v=""===m||""===O||""===x||x!==f?Object(l.jsx)("button",{disabled:!0,children:"Inscription"}):Object(l.jsx)("button",{children:"Inscription"}),q=""!==b&&Object(l.jsx)("span",{children:b.message});return Object(l.jsx)("div",{className:"signUpLoginBox",children:Object(l.jsxs)("div",{className:"slContainer",children:[Object(l.jsx)("div",{className:"formBoxLeftSignup"}),Object(l.jsx)("div",{className:"formBoxRight",children:Object(l.jsxs)("div",{className:"formContent",children:[q,Object(l.jsx)("h2",{children:"Inscription"}),Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var i=r.email,a=r.password,o=r.pseudo;t.signupUser(i,a).then((function(e){return t.user(e.user.uid).set({pseudo:o,email:i})})).then((function(){c(Object(g.a)({},s)),e.history.push("/welcome")})).catch((function(e){p(e),c(Object(g.a)({},s))}))},children:[Object(l.jsxs)("div",{className:"inputBox",children:[Object(l.jsx)("input",{onChange:h,value:m,type:"text",id:"pseudo",autoComplete:"off",required:!0}),Object(l.jsx)("label",{htmlFor:"pseudo",children:"Pseudo"})]}),Object(l.jsxs)("div",{className:"inputBox",children:[Object(l.jsx)("input",{onChange:h,value:O,type:"email",id:"email",autoComplete:"off",required:!0}),Object(l.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(l.jsxs)("div",{className:"inputBox",children:[Object(l.jsx)("input",{onChange:h,value:x,type:"password",id:"password",autoComplete:"off",required:!0}),Object(l.jsx)("label",{htmlFor:"password",children:"Mot de passe"})]}),Object(l.jsxs)("div",{className:"inputBox",children:[Object(l.jsx)("input",{onChange:h,value:f,type:"password",id:"confirmPassword",autoComplete:"off",required:!0}),Object(l.jsx)("label",{htmlFor:"confirmPassword",children:"Confirmer le mot de passe"})]}),v]}),Object(l.jsx)("div",{className:"linkContainer",children:Object(l.jsx)(o.b,{className:"simpleLink",to:"/login",children:"D\xe9j\xe0 inscrit? Connectez-vous."})})]})})]})})},K=function(){return Object(l.jsx)("div",{className:"quiz-bg",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{style:{textAlign:"center",marginTop:"50"},children:"Ouff cette page n'existe pas !"}),Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"Error page"})]})})},G=function(){var e=Object(n.useRef)(null);console.log(e);var t=Object(n.useState)(!1),s=Object(d.a)(t,2),i=s[0],a=s[1];Object(n.useEffect)((function(){e.current.classList.add("startingImg"),setTimeout((function(){e.current.classList.remove("startingImg"),a(!0)}),1e3)}),[]);var r=function(){e.current.classList.contains("leftImg")?e.current.classList.remove("leftImg"):e.current.classList.contains("rightImg")&&e.current.classList.remove("rightImg")},c=i&&Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("div",{onMouseOver:function(){e.current.classList.add("leftImg")},onMouseOut:r,className:"leftBox",children:Object(l.jsx)(o.b,{className:"btn-welcome",to:"/signup",children:"Inscription"})}),Object(l.jsx)("div",{onMouseOver:function(){e.current.classList.add("rightImg")},onMouseOut:r,className:"rightBox",children:Object(l.jsx)(o.b,{className:"btn-welcome",to:"/login",children:"Connexion"})})]});return Object(l.jsx)("main",{ref:e,className:"welcomePage",children:c})},y=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("div",{className:"footer-container",children:Object(l.jsxs)("p",{children:["Application web r\xe9alis\xe9e par ",Object(l.jsx)("a",{href:"https://www.digital19.net",className:"site",children:"Digital19"})," - copyright \xa9 2021 Tous droits reserv\xe9s"]})})})},k=function(e){var t=Object(n.useContext)(A),s=Object(n.useState)(""),i=Object(d.a)(s,2),a=i[0],r=i[1],c=Object(n.useState)(null),u=Object(d.a)(c,2),j=u[0],b=u[1],p=Object(n.useState)(null),h=Object(d.a)(p,2),m=h[0],O=h[1],x=""===a;return Object(l.jsx)("div",{className:"signUpLoginBox",children:Object(l.jsxs)("div",{className:"slContainer",children:[Object(l.jsx)("div",{className:"formBoxLeftSignup"}),Object(l.jsx)("div",{className:"formBoxRight",children:Object(l.jsxs)("div",{className:"formContent",children:[j&&Object(l.jsx)("span",{style:{border:"1px solid green",background:"green",color:"#ffffff"},children:j}),m&&Object(l.jsx)("span",{style:{border:"1px solid red",background:"red",color:"#ffffff"},children:m.message}),Object(l.jsx)("h2",{children:"Mot de passe oubli\xe9 ?"}),Object(l.jsxs)("form",{onSubmit:function(s){s.preventDefault(),t.passwordReset(a).then((function(){O(""),b("Consultez votre email ".concat(a," pour changer votre mot de passe")),r(""),setTimeout((function(){e.history.push("/login")}),5e3)})).catch((function(e){O(e),r("")}))},children:[Object(l.jsxs)("div",{className:"inputBox",children:[Object(l.jsx)("input",{onChange:function(e){r(e.target.value)},value:a,type:"mail",autoComplete:"off",required:!0}),Object(l.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(l.jsx)("button",{disabled:x,children:"R\xe9cup\xe9rer"})]}),Object(l.jsx)("div",{className:"linkContainer",children:Object(l.jsx)(o.b,{className:"simpleLink",to:"/signup",children:"D\xe9j\xe0 inscrit ? connectez-vous"})})]})})]})})},V=(s(84),s(0));var X=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)(V.b.Provider,{value:{style:{verticalAlign:"middle"}},children:[Object(l.jsx)(u,{}),Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{exact:!0,path:"/",component:G}),Object(l.jsx)(c.a,{path:"/welcome",component:H}),Object(l.jsx)(c.a,{path:"/login",component:S}),Object(l.jsx)(c.a,{path:"/signup",component:T}),Object(l.jsx)(c.a,{path:"/forgetpassword",component:k}),Object(l.jsx)(c.a,{component:K})]}),Object(l.jsx)(y,{})]})})},W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,89)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),i(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(A.Provider,{value:new m,children:Object(l.jsx)(X,{})}),document.getElementById("root")),W()}},[[85,1,2]]]);
//# sourceMappingURL=main.e06ad919.chunk.js.map