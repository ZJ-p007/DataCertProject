webpackJsonp([39],{2082:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(419),o=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(e){l(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={show:a.props.show},a}return s(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({show:e.show})}},{key:"render",value:function(){return o.default.createElement("div",{className:"view-image"},this.state.show?o.default.createElement("div",{className:"model-image"},o.default.createElement("div",{className:"pic-box"},o.default.createElement("div",{className:"spinner-loading"},o.default.createElement("div",{className:"spinner-container container1"},o.default.createElement("div",{className:"circle1"}),o.default.createElement("div",{className:"circle2"}),o.default.createElement("div",{className:"circle3"}),o.default.createElement("div",{className:"circle4"})),o.default.createElement("div",{className:"spinner-container container2"},o.default.createElement("div",{className:"circle1"}),o.default.createElement("div",{className:"circle2"}),o.default.createElement("div",{className:"circle3"}),o.default.createElement("div",{className:"circle4"})),o.default.createElement("div",{className:"spinner-container container3"},o.default.createElement("div",{className:"circle1"}),o.default.createElement("div",{className:"circle2"}),o.default.createElement("div",{className:"circle3"}),o.default.createElement("div",{className:"circle4"}))),o.default.createElement("p",null,this.props.title?this.props.title:"正在取证中..."))):"")}}]),t}(i.Component);t.default=c},2083:function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l,n,s=(n=l=function e(){a(this,e)},l.fileType={allType:{file:[".ac3",".au",".mp2",".ogg",".flac",".ape",".wav",".mp3",".aac",".wma",".3gpp",".mp4",".mpeg",".mpg",".3gp",".wmv",".asf",".asx",".rm",".rmvb",".3gp",".mov",".m4v",".avi",".dat","mkv",".flv",".vob",".3gpp",".mp4",".mpeg",".mpg",".3gp",".wmv",".asf",".asx",".rm",".rmvb",".3gp",".mov",".m4v",".avi",".dat","mkv",".flv",".vob",".dwg",".dxf",".gif",".jp2",".jpe",".jpeg",".jpg",".png",".svf",".tif",".tiff",".bmp",".webp",".bmp",".pcx",".tif",".tga",".exif",".fpx",".svg",".psd",".cdr",".ico",".doc",".docx",".dot",".dtd",".js",".json",".mpp",".pdf",".pot",".pps",".ppt",".pptx",".rtf",".wdb",".wps",".xhtml",".xlc",".xlm",".xls",".xlt",".xlw",".xml",".css",".csv",".htm",".html",".txt",".rar",".zip",".arj",".z",".iso",".jar",".bz2",".gz",".tar",".ace",".lzh",".cab",".arj"]},audio:{file:[".ac3",".au",".mp2",".ogg",".flac",".ape",".wav",".mp3",".aac",".wma"],size:500},video:{file:[".3gpp",".mp4",".mpeg",".mpg",".3gp",".wmv",".asf",".asx",".rm",".rmvb",".3gp",".mov",".m4v",".avi",".dat","mkv",".flv",".vob"],size:500},pic:{file:[".dwg",".dxf",".gif",".jp2",".jpe",".jpeg",".jpg",".png",".svf",".tif",".tiff",".bmp",".webp",".bmp",".pcx",".tif",".tga",".exif",".fpx",".svg",".psd",".cdr",".ico"],size:100},txt:{file:[".doc",".docx",".dot",".dtd",".js",".json",".mpp",".pdf",".pot",".pps",".ppt",".pptx",".rtf",".wdb",".wps",".xhtml",".xlc",".xlm",".xls",".xlt",".xlw",".xml",".css",".csv",".htm",".html",".txt"],size:20},rar:{file:[".rar",".zip",".arj",".z",".iso",".jar",".bz2",".gz",".tar",".ace",".lzh",".cab",".arj"],size:200}},l.showType=function(e){var t=[".ac3",".au",".mp2",".ogg",".flac",".ape",".wav",".mp3",".aac",".wma"],a=[".3gpp",".mp4",".mpeg",".mpg",".3gp",".wmv",".asf",".asx",".rm",".rmvb",".3gp",".mov",".m4v",".avi",".dat","mkv",".flv",".vob"],l=[".dwg",".dxf",".gif",".jp2",".jpe",".jpeg",".jpg",".png",".svf",".tif",".tiff",".bmp",".webp",".bmp",".pcx",".tif",".tga",".exif",".fpx",".svg",".psd",".cdr",".ico"],n=[".doc",".docx",".dot",".dtd",".js",".json",".mpp",".pdf",".pot",".pps",".ppt",".pptx",".rtf",".wdb",".wps",".xhtml",".xlc",".xlm",".xls",".xlt",".xlw",".xml",".css",".csv",".htm",".html",".txt"],s=[".rar","zip","arj",".z",".iso",".jar",".bz2",".gz",".tar",".ace",".lzh",".cab",".arj"];return t.indexOf(e)>=0?"音频":a.indexOf(e)>=0?"视频":l.indexOf(e)>=0?"图片":n.indexOf(e)>=0?"文档":s.indexOf(e)>=0?"压缩包":"其他"},l.showFileType=function(e){switch(e){case"AUDIO":return"音频";case"VIDEO":return"视频";case"IMAGE":return"图片";case"DOC":return"文档";case"PACKAGES":return"其他";case"OTHER":return"其他";default:return"——"}},n);t.default=s},2610:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(419),d=l(u),f=a(658),p=a(2611),m=l(p),h=a(2336),b=l(h),g=a(869),E=a(869),y=a(2292),v=l(y),w=a(2246),x=l(w),A=a(728),N=l(A),O=a(865),T=l(O),S=void 0,L=(i=(0,f.connect)(function(e){return{user:e.user.kycs,balanceHolder:e.user.balanceHolder,activityTime:e.user.activityTime}}))(o=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={file:"",fileName:"",isHelp:!1},a.file="",a.fileName="",a.openHelp=function(){a.setState({isHelp:!0})},a.closeHelp=function(){a.setState({isHelp:!1})},a.textNodes=d.default.createElement("div",{className:"toolTip"},d.default.createElement("span",{className:"arrow att-arrow"}),d.default.createElement("i",{className:"iconfont font-console"}),d.default.createElement("div",{className:"context"},d.default.createElement("p",{className:"title"},"数据保全"),d.default.createElement("p",{className:"tipText"},"数据保全是保全网针对原创人员推出的防止侵权利器，保全网通过对接国家授时中心，在您上传原创作品的同时，进行作品实时固化，以方便您的作品在日后发生侵权时，及时证明您的作品优先时间。"),d.default.createElement("hr",null),d.default.createElement("p",{className:"tipsMore att-tips-more"},"数据保全的功能优势"),d.default.createElement("p",{className:"tips"},"时间戳证明"),d.default.createElement("p",{className:"tipsText"},"对接中国国家授时中心、苹果NTP服务，可靠的高精度的授时服务，保障时间的精准性。"),d.default.createElement("p",{className:"tips"},"作品保全"),d.default.createElement("p",{className:"tipsText"},"结合区块链技术，对上传的作品打散分布存储，保证作品的安全性与私密性。"),d.default.createElement("p",{className:"tips"},"司法出证"),d.default.createElement("p",{className:"tipsText"},"联合司法鉴定机构，可在线快速申请出具公平公正的司法鉴定书。"))),a}return r(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.dispatch((0,E.getActivityTime)()),this.props.dispatch((0,g.currentUser)()),this.props.dispatch((0,g.getUserKycs)()),S="TEAM_SON"!==T.default.userIdentity&&"CLIENT_SON"!==T.default.userIdentity}},{key:"render",value:function(){var e={maxWidth:1514,width:"calc(100vw - 416px)",minHeight:32,height:542,background:"#fff",boxShadow:"0 0 7px 3px rgba(0,0,0,0.05)",marginLeft:-667,padding:"30px 50px 60px",borderRadius:"3px",marginTop:-6},t={borderBottom:"10px solid #fff",left:658},a={marginLeft:"20px",color:"#1d8dfb",cursor:"pointer"},l={position:"absolute",top:5,left:200},n=this.props.balanceHolder;return d.default.createElement("div",{className:"container-wrapper"},d.default.createElement("div",{className:"container member-container"},d.default.createElement("p",{className:"table-name",style:{display:"block"}},d.default.createElement(v.default,{title:"新增存证确权"}),d.default.createElement("span",{className:"price-tip",style:l},"（当前剩余存证容量 ",d.default.createElement("span",{className:"count",style:{color:"#fe9e00"}},n&&n.attestation?""+n.attestation.total:"0"),d.default.createElement("span",null,"G"),S?d.default.createElement(N.default,{to:"/capacity?productType="+x.default.attestatton},d.default.createElement("span",{className:"to-buy",style:a},"立即购买")):"","）")),d.default.createElement("div",{className:"description back-ctn"},d.default.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:0}},d.default.createElement("span",null,"自行上传原创内容存证，由保全网为您进行区块链数据固定。保全网不对您上传内容的真实性作验证。"),d.default.createElement("div",{onMouseOver:this.openHelp,onMouseOut:this.closeHelp,style:{position:"relative"}},d.default.createElement("span",{className:"help",style:{color:"#0a6dee"}},"了解更多"),d.default.createElement("span",{className:"iconHelp"},"?"),d.default.createElement(b.default,{style:e,borderBottom:t,children:this.textNodes,show:this.state.isHelp})))),d.default.createElement("hr",{className:"back-hr"}),d.default.createElement("div",{className:"ctn back-ctn"},d.default.createElement("div",{className:"attestations-profile main-container"},d.default.createElement("div",{className:"attestations-profile-content upload-content"},d.default.createElement(m.default,null))))))}}]),t}(u.Component))||o;t.default=L},2611:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(709),d=a(419),f=l(d),p=a(658),m=a(708),h=l(m),b=a(2295),g=l(b),E=a(869),y=a(2612),v=a(870),w=(l(v),a(2107)),x=a(2233),A=l(x),N=a(2082),O=l(N),T=a(2083),S=l(T),L=a(1087),P=a(869),j=a(867),_=l(j),I=a(865),M=l(I),U=a(2298),C=l(U),z=a(1084),K=l(z),k=!1,R=!1,D=0,B=!1,F=!1,H={showError:{display:"flex"}},V=(i=(0,p.connect)(function(e){return{user:e.user.kycs,orgInfo:e.organization.orgInfo,attLabels:e.user.attLabels,productSummary:e.attestation.productSummary}}))(o=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={showDeleteModal:!1,showLoading:!1,showAddLoading:!1},a.fileList=[],a.index=0,a.deleteId="",a.label="",a.processLabel=[],a.getLabels=function(){a.props.dispatch((0,E.getAttLabels)())},a.bytesToSize=function(e){if(0===e)return 0;return e/1024/1024},a.showError=function(){var e=a.props,t=e.user,l=e.orgInfo;"PASS"!==t.isKycPass&&"PERSONAL"===M.default.userType?u.toastr.error("请先完成个人实名认证"):"PASS"!==l.organizationStatus&&"ENTERPRISE"===M.default.userType?u.toastr.error("请先完成企业实名认证"):""===a.label?(R=!0,a.forceUpdate()):B?u.toastr.error("上传文件总计超过210M，请修改后重新上传!"):u.toastr.error("请上传需存证的文件")},a.selectProduct=function(e){a.productId=e,a.forceUpdate()},a.handleUploadFile=function(e){var t=e.target.files,l=a.props,n=l.user,s=l.orgInfo,r=0,i=0,o=S.default.fileType.allType;if("PASS"!==n.isKycPass&&"PERSONAL"===M.default.userType)u.toastr.error("请先完成个人实名认证");else if("PASS"!==s.organizationStatus&&"ENTERPRISE"===M.default.userType)u.toastr.error("请先完成企业实名认证");else{for(var c=0;c<t.length;c++){var d=t[c].name.substr(t[c].name.lastIndexOf(".")),f=a.bytesToSize(t[c].size);D+=f,a.forceUpdate();var p=t[c].name.substr(0,t[c].name.lastIndexOf("."));if(o&&o.file.indexOf(d.toLowerCase())<0)r+=1,1===t.length&&u.toastr.error("不支持该文件类型");else if(p.indexOf("/")>-1||p.indexOf(":")>-1||p.indexOf("*")>-1||p.indexOf("?")>-1||p.indexOf("#")>-1||p.indexOf("”")>-1||p.indexOf("<")>-1||p.indexOf(">")>-1||p.indexOf("|")>-1||p.indexOf("；")>-1)i+=1,1===t.length&&u.toastr.error("上传文件名称存在特殊字符，请修改后重新上传!");else if(p.length>50)i+=1,1===t.length&&u.toastr.error("上传文件名称最多可以有50个字符，请修改后重新上传!");else if(0===p.length)i+=1,1===t.length&&u.toastr.error("上传文件名称不能为空，请修改后重新上传!");else if(a.index++,t[c].id=a.index,a.fileList.push(t[c]),a.fileList.length>=10&&c<t.length-1){!0;break}}D>=210&&(B=!0,u.toastr.error("上传文件总计超过210M，请修改后重新上传!")),a.forceUpdate()}document.getElementById("uploadOne")&&(document.getElementById("uploadOne").value=""),document.getElementById("uploadTwo")&&(document.getElementById("uploadTwo").value="")},a.deleteFile=function(){a.fileList=a.fileList.filter(function(e){return e.id!==a.deleteId}),a.forceUpdate(),a.closeDeleteModal()},a.showEdit=function(e){"none"===a.refs[e+"name"].style.display?a.refs[e+"name"].style.display="flex":a.refs[e+"name"].style.display="none","flex"===a.refs[e].style.display?a.refs[e].style.display="none":a.refs[e].style.display="flex","none"===a.refs["edit"+e].style.display?a.refs["edit"+e].style.display="block":a.refs["edit"+e].style.display="none"},a.changeFile=function(e){var t=a.refs["name"+e].value;if(t.indexOf("/")>-1||t.indexOf(":")>-1||t.indexOf("*")>-1||t.indexOf("?")>-1||t.indexOf("#")>-1||t.indexOf("”")>-1||t.indexOf("<")>-1||t.indexOf(">")>-1||t.indexOf("|")>-1||t.indexOf("；")>-1)u.toastr.error("文件名称存在特殊字符，请修改后重新保存!");else if(t.length>50)u.toastr.error("上传文件名称最多可以有50个字符，请修改后重新上传!");else if(0===t.length)u.toastr.error("上传文件名称不能为空，请修改后重新上传!");else{for(var l=void 0,n=0;n<a.fileList.length;n++)a.fileList[n].id===e&&(l=new File([a.fileList[n]],t+a.fileList[n].name.substr(a.fileList[n].name.lastIndexOf(".")),{type:a.fileList[n].type}),l.id=e,a.fileList[n]=l);a.forceUpdate(),a.showEdit(e)}},a.setDefault=function(){a.fileList=[],a.index=0,a.label="",a.forceUpdate(),a.setState({showLoading:!1})},a.uploadFiles=function(){var e=a.props.user;""===a.label?(R=!0,a.forceUpdate()):(R=!1,F||("ENTERPRISE"===M.default.userType?(a.setState({showLoading:!0}),a.props.dispatch((0,y.uploadFileProduct)(a.productId,a.fileList,a.label,function(){a.setDefault(),a.props.dispatch((0,_.default)("/org-attestations/list"))},function(e){a.setState({showLoading:!1,showAddLoading:!0})}))):"PERSONAL"===M.default.userType&&(a.setState({showLoading:!0}),a.props.dispatch((0,E.uploadFile)(e.id,a.fileList,a.label,function(e){a.setDefault(),a.props.dispatch((0,_.default)("/attestations-list"))},function(e){a.setState({showLoading:!1,showAddLoading:!0})})))))},a.showDeleteModal=function(e){a.deleteId=e.id,a.setState({showDeleteModal:!0}),D-=a.bytesToSize(e.size),B&&D<210&&(B=!1),a.forceUpdate()},a.closeDeleteModal=function(){a.deleteId="",a.setState({showDeleteModal:!1}),a.forceUpdate()},a.setAddLoading=function(e){a.setState({showAddLoading:e})},a.createFilter=function(e){var t=0;return function(l){if(0===l.value.toLowerCase().indexOf(e.toLowerCase()))return t+=1,a.newTag="",a.forceUpdate(),0===l.value.toLowerCase().indexOf(e.toLowerCase());0===t&&(a.newTag=e,a.forceUpdate())}},a.handleSelect=function(e){a.label=e.value,k=!1,a.forceUpdate(),""!==a.label&&a.validateLabel("select")},a.changeTag=function(e){var t=e.replace(/\s*/g,"");a.label=t,k=!1,a.forceUpdate(),""!==a.label&&a.validateLabel()},a.changeWebTag=function(){},a.validateLabel=function(e){R=!1,a.forceUpdate(),K.default.isSpecialWord(a.label)?(F=!0,a.forceUpdate()):(F=!1,a.forceUpdate(),"select"!==e&&""!==a.label&&(k=!0,setTimeout(function(){k=!1,a.forceUpdate()},3e3)))},a.toPay=function(){a.props.dispatch((0,_.default)("/pay"))},a.toCapacity=function(){a.props.dispatch((0,_.default)("/capacity?productType=ATTESTATION"))},a.productId="__private_system_upload",a}return r(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.dispatch((0,P.getActivityTime)()),this.props.dispatch((0,P.getBalance)()),this.getLabels(),"ENTERPRISE"===M.default.userType&&this.props.dispatch((0,w.findAllSummaryProduct)()),this.forceUpdate()}},{key:"querySearch",value:function(e,t){if(this.processLabel&&this.processLabel.length>0){t(e?this.processLabel.filter(this.createFilter(e)):this.processLabel)}else{t(e?this.processLabel.filter(this.createFilter(e)):this.processLabel),this.newTag=e}}},{key:"render",value:function(){var e=this,t=this.props,l=t.productSummary,n=t.attLabels;return n.length>0&&(this.processLabel=n),f.default.createElement("section",{className:"file-content"},"PERSONAL"===M.default.userType?"":f.default.createElement("div",{className:"select-product"},f.default.createElement("span",null,f.default.createElement("span",{style:{marginRight:"6px",fontSize:"14px",color:"#ea2c2c"}},"*"),"请选择产品"),f.default.createElement(L.Select,{value:this.productId,placeholder:"",onChange:function(t){return e.selectProduct(t)}},l&&l.length>0?l.map(function(e){return f.default.createElement(L.Select.Option,{key:e.id,label:e.name,value:e.id})}):f.default.createElement(L.Select.Option,{label:"暂无标签"}))),f.default.createElement("div",{className:"files-container"},f.default.createElement("div",{className:"files-box"},f.default.createElement("div",{className:"tag"},f.default.createElement("p",null,f.default.createElement("span",{className:"musts"},"*"),f.default.createElement("span",null,"文件标签")),f.default.createElement("div",{className:"input-tag",style:{position:"relative"}},f.default.createElement(L.AutoComplete,{className:"my-autocomplete",placeholder:"请输入标签名选择或新增",value:this.label,fetchSuggestions:this.querySearch.bind(this),onSelect:function(t){return e.handleSelect(t)},onChange:function(t){return e.changeTag(t)},onBlur:function(){return e.changeWebTag()}}),F?f.default.createElement("span",{className:"show-error"},"输入的",f.default.createElement("b",null,"取证标签"),"不得包含特殊字符\"'<>","[]"):"",f.default.createElement("p",{className:"new-tag",style:this.label&&k?H.showError:null},"已创建新标签“",f.default.createElement("span",{className:"label"},this.label),"”，提交成功后收录标签库"),R?f.default.createElement("span",{className:"show-error"},"请输入标签名选择或新增"):"")),f.default.createElement("div",{className:"files"},0===this.fileList.length?f.default.createElement("div",{className:"upload-icon"},f.default.createElement("i",{className:"iconfont font-upload"}),f.default.createElement("p",{className:"click-upload"},h.default.translate("kyc.upload")),f.default.createElement("input",{type:"file",title:" ",multiple:"multiple",id:"uploadOne",onChange:this.handleUploadFile})):f.default.createElement("div",{className:"file-lists"},this.fileList.map(function(t){return f.default.createElement("div",{className:"file-item"},f.default.createElement("div",{className:"name-box",ref:t.id+"name"},f.default.createElement("span",{className:"file-name"},t.name.substr(0,t.name.lastIndexOf("."))),f.default.createElement("span",{style:{whiteSpace:"nowrap"}},t.name.substr(t.name.lastIndexOf(".")))),f.default.createElement("p",null,e.bytesToSize(t.size).toFixed(4),"M"),f.default.createElement("div",{ref:t.id,style:{display:"none",alignItems:"center"}},f.default.createElement("input",{ref:"name"+t.id,type:"text",defaultValue:t.name.substr(0,t.name.lastIndexOf("."))}),f.default.createElement("span",null,t.name.substr(t.name.lastIndexOf("."))),f.default.createElement("img",{src:a(2613),style:{margin:"0 20px"},onClick:function(a){return e.changeFile(t.id)}}),f.default.createElement("img",{src:a(2614),onClick:function(a){return e.showEdit(t.id)}})),f.default.createElement("div",{className:"options",ref:"edit"+t.id},f.default.createElement("button",{className:"blue-operate",style:{marginRight:"18px"},onClick:function(a){return e.showEdit(t.id)}},"重命名"),f.default.createElement("button",{className:"blue-operate",onClick:function(a){return e.showDeleteModal(t)}},"删除")))}),this.fileList.length<10?f.default.createElement("div",{className:"add-file"},f.default.createElement("span",{className:"add"},"+"),f.default.createElement("span",null,"点击上传文件"),f.default.createElement("input",{type:"file",title:" ",multiple:"multiple",id:"uploadTwo",onChange:this.handleUploadFile})):"")),f.default.createElement(g.default,{className:"blueButton",type:"button",onClick:this.fileList.length>0&&!B?this.uploadFiles:this.showError,label:h.default.translate("attestation.to-attestation"),loadingLabel:h.default.translate("common.uploading")})),f.default.createElement("div",{className:"files-tip"},f.default.createElement("h3",{className:"title"},"温馨提示"),f.default.createElement("p",null,"1、信息安全，人人有责，严禁上传违法、反动、危害社会公共安全等不良信息；"),f.default.createElement("p",null,"2、文件名最多可设置50个字符，超过上限后可能会存证失败；"),f.default.createElement("p",null,"3、支持单次最多10个文件批量上传，归属于同一标签（可重置）；"),f.default.createElement("p",null,"4、单次上传文件总计不超过210M，超过上限后可能会存证失败。"))),f.default.createElement(O.default,{show:this.state.showLoading,title:"上传存证中..."}),this.state.showDeleteModal?f.default.createElement(A.default,{hideModel:this.closeDeleteModal,confirm:this.deleteFile,title:"删除文件",tip:"确定要删除这个文件？"}):"",this.state.showAddLoading?"CLIENT_SON"===M.default.userIdentity?f.default.createElement(C.default,{hideModel:function(){return e.setAddLoading(!1)}}):f.default.createElement(A.default,{hideModel:function(){return e.setAddLoading(!1)},confirm:"TEAM_SON"===M.default.userIdentity?null:this.toCapacity,confirmWord:"购买套餐",title:"容量不足",tip:"您的存证容量已用完，请购买套餐扩容。"}):"")}}]),t}(d.Component))||o;t.default=V},2612:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){return function(a){return new h.default(a).destroy("/products/"+e,function(){b.toastr.success(E.default.translate("actions.destroy-product")),a({type:p.default.DESTROY_PRODUCT,id:e}),t()})}}function s(e,t,a,l){return function(n){new h.default(n).post("/products/"+e+"/switch",{live:t},function(l){n({type:p.default.SWITCH_PRODUCT,live:t,id:e}),t?b.toastr.success("产品上线成功"):t||b.toastr.success("产品下线成功"),a&&a()},function(e){l&&l()})}}function r(e,t){return function(a){new h.default(a).getWithParams("/products/update",e,function(){b.toastr.success(E.default.translate("actions.update-product")),t&&t()})}}function i(e,t,a,l,n){return function(s){new h.default(s).post("/attestations/products/"+e+"/files",{file:t,label:a},function(e){b.toastr.success(E.default.translate("attestation.upload-file-success")),l&&l()},function(e){n&&n(),b.toastr.error(e.message)})}}function o(e,t){return function(a){new h.default(a).post("/sys/maxFileWarn",e,function(e){t&&t()})}}function c(e,t,a){return function(l){new h.default(l).post("/organizations/"+e+"/products",t,function(e){a&&a(),b.toastr.success(E.default.translate("actions.create-product")),l({type:p.default.NEW_PRODUCT,info:e})})}}function u(){return function(e){new h.default(e).get("/products",function(t){e({type:p.default.LIST_PRODUCTS,all:t})})}}function d(e){return function(t){new h.default(t).get("/products/"+e,function(e){t({type:p.default.GET_PRODUCT,info:e})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.destroyProduct=n,t.switchProduct=s,t.updateProductName=r,t.uploadFileProduct=i,t.postTypeSize=o,t.createProduct=c,t.listProducts=u,t.getProduct=d;var f=a(861),p=l(f),m=a(862),h=l(m),b=a(709),g=a(708),E=l(g)},2613:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAALVBMVEVHcEwKbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe7I6RGJAAAADnRSTlMA44gklr3S830yE0qnBU/VTeUAAAB0SURBVAjXY2BgsAgUVWYAAo53QKAAZJwDMd5cgAiAhNaBabnHDH0g+tW+JwxxIIat3DMGuSd57x5ff/ecQe414zuDuncPgVITMtnfARl6715z1b1794TB7t07daDyxzADHRh4wVY8BdrFBBEAgkmJYp4MDAAs/05mIBFIsAAAAABJRU5ErkJggg=="},2614:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEUKbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe5HcEwKbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe4Kbe7OvCi1AAAAEXRSTlPyP65cnNMqAI3gw3sz5gIWEM4G6/AAAAB8SURBVBjTVU9BEsQgCItVjLbK1P9/dhGdbZtDzASEABpakQ4pTU2D1GtslGWc44/TjKe+epDHBw3JGNm+Sa4mD0xGYAUzTFbAO+N9RxfYxiDrNvytjJEyVV9DabsC19C5FsUzdKMAlneMpFB9RRf149JT9+PIkASQI0z9A5WWDCbiUkMdAAAAAElFTkSuQmCC"}});