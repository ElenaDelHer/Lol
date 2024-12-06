class e{constructor(e){this.name=e.name,this.title=e.title,this.image=e.image.full,this.tags=e.tags}}var t=[];document.querySelector("button").addEventListener("click",()=>{document.querySelector("#button").style.visibility="hidden",document.querySelector("#champion-list").style.visibility="visible",a()});const a=async()=>{try{let i=await fetch("https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json"),o=await i.json();for(let n in o.data){var a;let i=o.data[n];a=new e(i),t.push(a)}await n()}catch(e){console.error("Error al obtener los campeones:",e),alert("Hubo un problema al cargar los campeones. Intenta más tarde.")}},n=async()=>{let e=document.getElementById("champion-list");t.forEach(t=>{e.innerHTML+=`
            <div class="card">
                <img src="https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${t.image}" alt="${t.name}">
                <h2>${t.name}</h2>
                <p>${t.title}</p>
                <p>Roles: ${t.tags.join(", ")}</p>
            </div>
        `})};
//# sourceMappingURL=index.acb7d10f.js.map
