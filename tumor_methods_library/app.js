const STORE='tumorMethodLibraryStateV1';
let state=JSON.parse(localStorage.getItem(STORE)||'{}');
const save=()=>localStorage.setItem(STORE,JSON.stringify(state));
const s=(id)=>state[id]||{status:'unread',favorite:false,note:''};
function setState(id,patch){state[id]={...s(id),...patch};save();render();}
const esc=x=>String(x??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
function render(){
 document.getElementById('lastUpdated').textContent=LIB_META.updated;document.getElementById('paperCount').textContent=PAPERS.length;const vl=document.getElementById('versionLabel');if(vl)vl.textContent=LIB_META.version;
 const modules=['all',...new Set(PAPERS.map(p=>p.module))]; const mf=document.getElementById('moduleFilter');if(!mf.dataset.ready){mf.innerHTML=modules.map(m=>`<option value="${esc(m)}">${m==='all'?'全部模块':esc(m)}</option>`).join('');mf.dataset.ready=1}
 document.getElementById('methodMap').innerHTML=METHOD_MAP.map(x=>`<div class="method-item"><strong>${esc(x[0])}</strong><span>${esc(x[1])}</span></div>`).join('');
 document.getElementById('learningPath').innerHTML=LEARNING_PATH.map(x=>`<span>${esc(x)}</span>`).join('');
 const q=document.getElementById('searchInput').value.trim().toLowerCase(),mod=mf.value,pri=document.getElementById('priorityFilter').value,stf=document.getElementById('statusFilter').value;
 const rows=PAPERS.filter(p=>{const x=s(p.id),text=[p.id,p.title,p.authors,p.journal,p.module,p.question,p.methods.join(' ')].join(' ').toLowerCase();return(!q||text.includes(q))&&(mod==='all'||p.module===mod)&&(pri==='all'||p.priority==pri)&&(stf==='all'||(stf==='favorite'?x.favorite:x.status===stf));});
 document.getElementById('resultCount').textContent=`显示 ${rows.length} / ${PAPERS.length}`;
 document.getElementById('paperList').innerHTML=rows.map(p=>{const x=s(p.id);return `<article class="paper-card" onclick="location.href='detail.html?id=${encodeURIComponent(p.id)}'">
 <div class="paper-top"><div><div class="paper-id">${p.id} · ${esc(p.module)}</div><div class="paper-title">${esc(p.title)}</div><div class="paper-meta">${esc(p.authors)} · ${esc(p.journal)} · ${p.year}</div></div><div class="stars">${'★'.repeat(p.priority)}${'☆'.repeat(5-p.priority)}</div></div>
 <div class="paper-desc">${esc(p.question)}</div><div class="tags">${p.methods.slice(0,5).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
 <div class="paper-actions" onclick="event.stopPropagation()"><select style="width:auto" onchange="setState('${p.id}',{status:this.value})"><option value="unread" ${x.status==='unread'?'selected':''}>未读</option><option value="reading" ${x.status==='reading'?'selected':''}>在读</option><option value="done" ${x.status==='done'?'selected':''}>已读</option></select><button class="btn ghost favorite-btn ${x.favorite?'active':''}" onclick="setState('${p.id}',{favorite:${!x.favorite}})">${x.favorite?'★ 已收藏':'☆ 收藏'}</button><button class="btn">查看详细方法学</button></div></article>`}).join('');
 const vals=PAPERS.map(p=>s(p.id));document.getElementById('doneCount').textContent=vals.filter(x=>x.status==='done').length;document.getElementById('readingCount').textContent=vals.filter(x=>x.status==='reading').length;document.getElementById('favoriteCount').textContent=vals.filter(x=>x.favorite).length;document.getElementById('mustReadLeft').textContent=PAPERS.filter(p=>p.priority===5&&s(p.id).status!=='done').length;
}
['searchInput','moduleFilter','priorityFilter','statusFilter'].forEach(id=>document.getElementById(id).addEventListener(id==='searchInput'?'input':'change',render));
document.getElementById('exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify({exported:new Date().toISOString(),state},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='肿瘤方法学文献库_学习记录.json';a.click();URL.revokeObjectURL(a.href)};
document.getElementById('importInput').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result).state||{};save();render()}catch{alert('导入文件格式不正确')}};r.readAsText(f)};
document.getElementById('resetBtn').onclick=()=>{if(confirm('确定清空学习状态、收藏和笔记吗？')){state={};save();render()}};
render();
