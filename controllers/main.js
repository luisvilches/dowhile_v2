exports.main = (req,res) => {
	let tmp = `<section class="flex-center"> <style> @import url('https://fonts.googleapis.com/css?family=Comfortaa');* {margin: 0px;padding: 0px; font-family: 'Comfortaa', cursive;}hr {border: .2em solid #1abc9c;margin-left: 20px;margin-right: 20px;}.hr2 {border: .2em solid #fc9;margin-left: 40px;margin-right: 40px;}section {display: flex;padding-top: 5em;padding-bottom: 5em;}.flex-container {background: #fff;min-width: 350px;width: 350px;/* border: 0.1em solid #ccc;box-shadow: -8px 8px 0px #777; */border-radius: 15%;}.desc {padding: 1em;}.flex-center {justify-content: center;}.flex-align-center {align-items: center;}.text-center {text-align: center;}.circular {border-radius: 50%;border: .3em solid #fc9;}.color {color: #1abc9c;}.content-social {display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-between;align-content: space-around;}.item-social {width: 150px;}.colum-item-social {height: 50px;margin: .5em;display: flex;flex-direction: column;justify-content: space-between;}a {color: black;text-decoration: none;}a:hover {text-decoration: underline;color: teal;}h1 span { color: #1abc9c;}h1 {font-size: 36px;}h3 {font-size: 15px !important;}h4 {font-size: 12px;} </style><div class="flex-container text-center"><div class="sig "><h1><span>></span>dowhile</h1><div class="desc"><h3>Estas intentando acceder a la API de dowhile, por favor ponte en contacto con nuestro equipo tecnico para que te asesore</h3></div><hr /> <br> dev@dowhile.cl</div></div></section>`;
	res.status(200).send(tmp);
}