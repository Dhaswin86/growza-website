const menu=document.querySelector('.mobile-menu'),panel=document.querySelector('.mobile-panel');if(menu&&panel){menu.addEventListener('click',()=>{const open=panel.classList.toggle('open');menu.setAttribute('aria-expanded',open)});panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>panel.classList.remove('open')))}

const filters=document.querySelector('#filters');if(filters){const cards=[...document.querySelectorAll('#talent-grid .talent')],note=document.querySelector('#empty-note');filters.addEventListener('click',e=>{const chip=e.target.closest('.chip');if(!chip)return;const want=chip.dataset.filter;filters.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c===chip));let shown=0;cards.forEach(c=>{const on=want==='all'||c.dataset.cat===want;c.hidden=!on;if(on)shown++});if(note)note.style.display=shown?'none':'block'})}

/* The "most popular" card carries a permanent green border. Hovering a sibling
   gives it a green border too, so two plans read as highlighted at once. Make
   the featured card yield while any sibling is hovered. Done in JS rather than
   with :has() alone so it does not depend on selector support. */
document.querySelectorAll('.plan-grid').forEach(grid=>{
  const featured=grid.querySelector('.plan.featured');
  if(!featured)return;
  grid.querySelectorAll('.plan').forEach(plan=>{
    if(plan===featured)return;
    plan.addEventListener('mouseenter',()=>featured.classList.add('is-yield'));
    plan.addEventListener('mouseleave',()=>featured.classList.remove('is-yield'));
  });
});
