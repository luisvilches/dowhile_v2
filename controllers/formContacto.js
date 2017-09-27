const NodeMailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');




exports.enviaMail = (req,res) => {

	let template = `<html>
						<head>
						  <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">

						  <style>

						  	@import url('https://fonts.googleapis.com/css?family=Comfortaa');
						  	
						    TD {
						    font-family: Arial; 
						    font-size: 12pt;
						    color: #373737 !important;
						    background-color: #f4f4f4;
						    }
						    
						    TD p {
						    margin: 10px 40px;
						    text-align: left;
						    line-height: 14px;
						    font-family: Arial;
						    color: #373737 !important;
						    font-size: 11pt;
						    }
						    
						    TD p a {
						    text-decoration: none;
						    margin: 10px 15px;
						    text-align: left;
						    line-height: 14px;
						    font-family: Arial;
						    color: #373737 !important;
						    font-size: 11pt;
						    }
						    
						    a:link,
						    a link,
						    p a:link,
						    p a link {
						    font-family: Arial;
						    color: #373737 !important;
						    font-size: 11pt;
						    text-decoration: none;
						    }
						    
						    a:hover,
						    a hover,
						    p a:hover,
						    p a hover {
						    font-family: Arial;
						    color: #373737 !important;
						    font-size: 11pt;
						    text-decoration: none;
						    }
						    
						    .ii a[href] {
						    color: #373737 !important;
						    }
						  </style>

						</head>

						<body data-pinterest-extension-installed="cr1.39.1" cz-shortcut-listen="true">
						  <table border="0" cellpadding="0" cellspacing="0" width="540" align="center" background-color="#f4f4f4" style="border:1px solid #E9ECF1;">
						    <tbody>
						      <tr>
						        <td>
						          <a href="@linkhelpdesk@"><img src="https://lck.com.br/wp-content/uploads/2016/05/e-mail-02.jpg" border="0"></a>
						        </td>
						      </tr>
						      <tr>
						        <td style="background:#f4f4f4; clear:both; color:#373737;"><br>
						          <p style="font-weight:bold;">Nombre: ${req.body.name}</p>
						          <p style="font-weight:bold;">Correo electronico: ${req.body.mail}</p>
						          <p style="font-weight:bold;">Teléfono: ${req.body.telefono}</p>
						        </td>
						      </tr>
						      <tr>
						        <td>
						          <hr width="85%" style="background:#f4f4f4;">
						        </td>
						      </tr>
						      <tr>
						        <td style="background:#f4f4f4; clear:both;"><br>
						          <p>${req.body.mensaje}</p>
						        </td>
						      </tr>
						    </tbody>
						  </table>
						</body>

						</html>`;

	let mailOptions = {
        from: req.body.mail,
        to: "hola@dowhile.cl, lvilches21@gmail.com",
        subject: 'Mensaje desde el formulario de contacto web',
        html: template
    };

    let transporter = NodeMailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: 'dowhile.chile@gmail.com',
            pass: 'andres2230'
        }
    }));

    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        res.status(500).json({
        	message:error
        })
    } else {
        enviarCorreoRespuest(req.body.mail,req.body.name,req.body.telefono,req.body.mensaje);
        res.status(200).json({
        	message:"success",
        	data: info
        });
    }});
}



function enviarCorreoRespuest(mail,name,telefono,mensaje){
	let template = `
			<html>
    <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">

    </head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Comfortaa');
	</style>
    <body style="box-sizing:border-box;font-size:14px;width:100%!important;height:100%;line-height:1.6;background-color:#f4f4f4;">

        <table style="background-color:#f4f4f4;width:100%;">
            <tr>
                <td></td>
                <td width="600" style="display:block!important;max-width:600px!important;margin:0 auto!important;clear:both!important;">
                    <div style="max-width:600px;margin:0 auto;display:block;padding:20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #e9e9e9;border-radius:3px;">
                            <tr>
                                <td style="padding: 20px;">
                                    <table  cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td>
                                                <a href="http://compucentro.co/" style="font-family: 'Comfortaa', cursive; font-size:60px; color:#000; text-decoration:none; text-align:center;">
                                                    <span style="color:#1abc9c;">></span>dowhile
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0 0 20px;">
                                                <h1>Gracias por contactarnos</h1>
                                                <p style="text-align: justify">
												Su mensaje es muy imporante para nosotros, la persona idonea será encargada de darle curso a este mensaje. Si es necesario nos pondremos en contacto con usted en el menor tiempo posible.
												</p>
												<h4 style="text-align: justify">
												Los datos que nos suministró son:
												</h4>
																							

                                                <h3>Datos de contacto</h3>
                                                <p><strong>Nombre: </strong> ${name}</p>
                                                <p><strong>Teléfono: </strong> ${telefono}</p>
                                                <p><strong>Correo electrónico: </strong> ${mail}</p>

                                                <h3>Mensaje</h3>
                                                <p style="text-align:justify">${mensaje}</p>
												
												<h4 style="text-align: justify">
												Si considera que necesita ampliar la información suministrada en este mensaje, puede realizarlo por los distintos canales que ofrece la empresa, en nuestras oficinas, por telefono o correo electrónico. Gracias.
												</h4>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <div style="width:100%;clear:both;color:#999;padding:20px;font-size:12px;">
                            <table width="100%">
                                <tr>
                                    <td style="padding:0 0 20px;text-align:center;">
										<a href="http://compucentro.co" style="color:#999;font-family: 'Comfortaa', cursive;" target="_blank">>dowhile</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </td>
                <td></td>
            </tr>
        </table>

    </body>
</html>
	`;
	let mailOptions = {
        from: "hola@dowhile.cl",
        to: mail,
        subject: '>dowhile',
        html: template
    };

    let transporter = NodeMailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: 'dowhile.chile@gmail.com',
            pass: 'andres2230'
        }
    }));

    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    } else {
        console.log("Email sent");
    }})
}