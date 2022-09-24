let itensStarAvaliacao = document.querySelectorAll("[data-item-star]");

itensStarAvaliacao.forEach(item => {
  item.addEventListener("change", el => {
    let inputStar = el.target;
    let id        = inputStar.getAttribute("id");
    let labelStar = document.querySelector('[data-star-click=\"'+id+'"]');
    
    inputStar.checked ? labelStar.classList.add("checked"): labelStar.classList.remove("checked");
  });
});

document.getElementById("formulario-avaliacao").addEventListener("submit", el => {
  el.preventDefault();
});