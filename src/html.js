generateHTML = (engineer, manager, intern) => {
    `
    <!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<title>Team Generator</title>
</head>

<body>
<header>
    <h1>
    My Team       
    </h1>
</header>

<main>
<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">${manager.managerName} 
/n<i class="fa-solid fa-mug-hot"></i>${answers.addMembers}
</h5>
<p class="card-text">
ID:${answers.managerId} 
/nEmail:<a href="mailto:${answers.managerEmail} class="card-link">${answers.managerEmail}</a>
/nOffice number:${answers.managerOfficeNumber}
</p>
</div>
</div>

<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">${answers.engineerName} 
/n<i class="fa-solid fa-glasses"></i>${answers.addMembers}
</h5>
<p class="card-text">
ID:${answers.engineerId} 
/nEmail:<a href="mailto:${answers.engineerEmail} class="card-link">${answers.engineerEmail}</a>
/nGithub:${answers.engineerGithub}
</p>
<a href="#" class="card-link">Card link</a>
</div>
</div>

<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">${answers.internName} 
/n<i class="fa-solid fa-graduation-cap"></i>${answers.addMembers}
</h5>
<p class="card-text">
ID:${answers.internId} 
/nEmail:<a href="mailto:${answers.internEmail} class="card-link">${answers.internEmail}</a>
/nSchool:${answers.internSchool}
</p>
</div>
</div>
</main>

<footer>

</footer>
<script>a href="./index.js"</script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>
    `;

}

module.exports = generateHTML;