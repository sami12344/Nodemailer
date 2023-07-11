import nodemailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/json-transport'
import { UserData } from './types'

const Email = (options: MailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ssaammiiiissllaamm@gmail.com',
      pass: 'vhdibguojdjwebaa',
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log(error)
      return
    }
  })
}
const EmailSender = ({ name, email, phone }: UserData) => {
  const mailOptions: MailOptions = {
    from: 'Sami Islam',
    to: email,
    subject: 'hi',
    text: 'hi',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>New Template</title><!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
.rollover:hover .rollover-first {
max-height:0px!important;
display:none!important;
}
.rollover:hover .rollover-second {
max-height:none!important;
display:inline-block!important;
}
.rollover div {
font-size:0px;
}
u ~ div img + div > div {
display:none;
}
#outlook a {
padding:0;
}
span.MsoHyperlink,
span.MsoHyperlinkFollowed {
color:inherit;
mso-style-priority:99;
}
a.es-button {
mso-style-priority:100!important;
text-decoration:none!important;
}
a[x-apple-data-detectors] {
color:inherit!important;
text-decoration:none!important;
font-size:inherit!important;
font-family:inherit!important;
font-weight:inherit!important;
line-height:inherit!important;
}
.es-desk-hidden {
display:none;
float:left;
overflow:hidden;
width:0;
max-height:0;
line-height:0;
mso-hide:all;
}
.es-header-body a:hover {
color:#2cb543!important;
}
.es-content-body a:hover {
color:#2cb543!important;
}
.es-footer-body a:hover {
color:#ffffff!important;
}
.es-infoblock a:hover {
color:#cccccc!important;
}
.es-button-border:hover {
border-color:#42d159 #42d159 #42d159 #42d159!important;
background:#56d66b!important;
}
.es-button-border:hover a.es-button,
.es-button-border:hover button.es-button {
background:#56d66b!important;
}
td .es-button-border-3232:hover {
border-color:#ffffff!important;
background:#dd3f52!important;
}
td .es-button-border:hover a.es-button-5766 {
background:#dd3f52!important;
border-color:undefined!important;
color:#fff!important;
}
@media only screen and (max-width:600px) {*[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } .es-header-body p { } .es-content-body p { } .es-footer-body p { } .es-infoblock p { } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img, .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } a.es-button, button.es-button { display:inline-block!important } .es-button-border { display:inline-block!important } }
</style>
</head>
<body style="width:100%;height:100%;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#F6F6F6"><!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
<v:fill type="tile" color="#f6f6f6"></v:fill>
</v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
<tr>
<td valign="top" style="padding:0;Margin:0">
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
<tr>
<td align="center" style="padding:0;Margin:0">
<table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr class="es-visible-simple-html-only">
<td class="es-struct-html" align="left" style="padding:20px;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td valign="top" align="center" style="padding:0;Margin:0;width:560px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0"><img class="adapt-img" src="https://qolofc.stripocdn.email/content/guids/CABINET_2f70fef711522118a47f02169bd6c7fc8179b5595abb3928c47553d2aadfcfac/images/logo.png" alt="" width="112" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0"><img class="adapt-img" src="https://qolofc.stripocdn.email/content/guids/CABINET_2f70fef711522118a47f02169bd6c7fc8179b5595abb3928c47553d2aadfcfac/images/word_mark_logo.png" alt="" width="112" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://qolofc.stripocdn.email/content/guids/CABINET_2f70fef711522118a47f02169bd6c7fc8179b5595abb3928c47553d2aadfcfac/images/studio.png" alt="" width="112" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
<tr>
<td align="center" style="padding:0;Margin:0">
<table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr class="es-visible-simple-html-only">
<td class="es-struct-html" align="left" style="padding:20px;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td valign="top" align="center" style="padding:0;Margin:0;width:560px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px !important;letter-spacing:0;color:#333333;font-size:14px">Dear Sir,<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur libero a eleifend dignissim. Suspendisse tellus nisl, pretium non dui semper, gravida tempor leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ultricies orci a risus condimentum sollicitudin. Curabitur ullamcorper nibh sed ligula lobortis tristique. Praesent orci mi, euismod id lorem in, tincidunt tincidunt ligula. Quisque leo mi, dignissim vitae nisl sit amet, varius tempus augue.<br><br>Best Regards<br>-Xenone Studio Team.n its text styles, add merge tags and lists</p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
<tr>
<td align="center" bgcolor="transparent" style="padding:0;Margin:0">
<table class="es-content-body" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr>
<td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-bottom:50px;padding-left:20px">
<table cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="left" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="https://chat.openai.com/" target="_blank" hidden>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://chat.openai.com/"
style="height:39px; v-text-anchor:middle; width:165px" arcsize="0%" stroke="f" fillcolor="#d33b4b">
<w:anchorlock></w:anchorlock>
<center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:400; line-height:14px; mso-text-raise:1px'>Learn More</center>
</v:roundrect></a>
<![endif]--><!--[if !mso]--><!-- --><span class="es-button-border es-button-border-3232 msohide" style="border-style:solid;border-color:#2CB543;background:#D33B4B;border-width:0;display:inline-block;border-radius:0;width:auto;mso-hide:all"><a href="https://chat.openai.com/" class="es-button es-button-5766" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;padding:10px 41px 10px 42px;display:inline-block;background:#D33B4B;border-radius:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #D33B4B">Learn More</a></span><!--<![endif]--></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
<tr>
<td align="center" bgcolor="transparent" style="padding:0;Margin:0">
<table class="es-content-body" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr>
<td align="left" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="left" style="padding:0;Margin:0;width:600px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;position: relative;">
<tr>
<td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#ffffff;font-size:13px; position: absolute; z-index:1; padding: 1rem;"><strong>XENONE STUDIO LIMITED</strong> <br><br>Why am I getting these emails?<br>You’re receiving these emails because you opted in to an offer on our website.<br><br>Want to change how you get these emails?<br>Opt out of marketing emails or Unsubscribe.<br><br>We include affiliate links in our emails for products and resources we love that we think you will too. There’s no extra cost for you. It’s just a little way you can help support us.</p></td>
</tr>
<tr>
<td align="center" class="esd-block-image" style="font-size: 0">
    <a target="_blank">
        <img class="adapt-img" src="https://qolofc.stripocdn.email/content/guids/CABINET_2f70fef711522118a47f02169bd6c7fc8179b5595abb3928c47553d2aadfcfac/images/group_2_LTY.png" alt="" width="600">
    </a>
</td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr>
<td align="left" style="padding:0;margin:-100px;">
<table cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="left" style="padding:0;Margin:0;width:600px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0;padding-right:100px;padding-left:100px;padding-bottom:50px;padding-top:16px;"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px !important;letter-spacing:0;color:#333333;font-size:14px">Xenone Studio 1702 Olympic Blvd., Santa Monica, CA 90404 Copyright © 2023 Xenone Studio Limited. All rights reserved. Unsubscribe</p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
</div>
</body>
</html>`,
  }
  Email(mailOptions)
}
export default EmailSender
