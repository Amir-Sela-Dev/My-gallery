console.log('Starting up');


function onInit() {
    renderProjects()
}

function renderProjects() {
    var projs = getProjects()
    var strHtmls = projs.map(proj => `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a data-proj-id="${proj.id}" class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="onOpenProj('${proj.id}')"">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/${proj.url}.png" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
    </div>
  </div>
  `
    )
    $('.portfolio').html(strHtmls)

}


function onOpenProj(projId) {
    var proj = getProjById(projId)
    var elModal = document.querySelector('.modal-content')
    elModal.querySelector('h2').innerText = proj.name
    document.querySelector('.item-intro').innerText = proj.title
    document.querySelector('.desc').innerText = proj.desc
    var date = new Date(proj.publishedAt)
    document.querySelector('.date span').innerText = (date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear())
    document.querySelector('.img').innerHTML = `<img class="img-fluid d-block mx-auto" src="img/${proj.url}.png" alt="">`
}


function onSubmit() {
    var mail = document.querySelector('input[name="e-mail"]').value
    var subject = document.querySelector('input[name="subject"]').value
    var message = document.querySelector('textarea[name="message"]').value
    window.open`https://mail.google.com/mail/?view=cm&fs=1&to=amirsela10@gmail.com&su=${subject}&body=${message}`
}