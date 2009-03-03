document.open();document.write("\u003C!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\"\u003E\r\n\u003Chtml xmlns=\"http://www.w3.org/1999/xhtml\"\u003E\r\n\u003Chead\u003E\r\n\t\u003Ctitle\u003E{#advimage_dlg.dialog_title}\u003C/title\u003E\r\n\t\u003Cscript type=\"text/javascript\" src=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/tsimage/../../tiny_mce_popup.js\"\u003E\u003C/script\u003E\r\n\t\u003Cscript type=\"text/javascript\" src=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/tsimage/../../utils/mctabs.js\"\u003E\u003C/script\u003E\r\n\t\u003Cscript type=\"text/javascript\" src=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/tsimage/../../utils/form_utils.js\"\u003E\u003C/script\u003E\r\n\t\u003Cscript type=\"text/javascript\" src=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/tsimage/../../utils/validate.js\"\u003E\u003C/script\u003E\r\n\t\u003Cscript type=\"text/javascript\" src=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/tsimage/../../utils/editable_selects.js\"\u003E\u003C/script\u003E\r\n\t\u003Cscript type=\"text/javascript\" src=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/tsimage/js/image.js\"\u003E\u003C/script\u003E\r\n\t\u003Clink href=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/tsimage//css/advimage.css\" rel=\"stylesheet\" type=\"text/css\" /\u003E\r\n\t\u003Cbase target=\"_self\" /\u003E\r\n\u003C/head\u003E\r\n\u003Cbody id=\"advimage\" style=\"display: none\"\u003E\r\n  \r\n  \u003Cform id='upload_panel_form' enctype=\"multipart/form-data\" method=\"post\" style=\"margin:0;padding:0;\" \r\n    onsubmit=\"ImageDialog.insert();return false;\" target=\"tinymce_image_upload_frame\" action=\"#\"\u003E\r\n    \r\n\t\t\u003Cdiv class=\"tabs\"\u003E\r\n\t\t\t\u003Cul\u003E\r\n\t\t\t\t\u003Cli id=\"gallery_tab\" class=\"current\"\u003E\u003Cspan\u003E\u003Ca href=\"javascript:mcTabs.displayTab('gallery_tab','gallery_panel');\" onmousedown=\"return false;\"\u003E{#advimage_dlg.tab_gallery}\u003C/a\u003E\u003C/span\u003E\u003C/li\u003E\r\n\t\t\t\t\u003Cli id=\"general_tab\"\u003E\u003Cspan\u003E\u003Ca href=\"javascript:mcTabs.displayTab('general_tab','general_panel');\" onmousedown=\"return false;\"\u003E{#advimage_dlg.tab_general}\u003C/a\u003E\u003C/span\u003E\u003C/li\u003E\r\n\t\t\t\t\u003Cli id=\"appearance_tab\"\u003E\u003Cspan\u003E\u003Ca href=\"javascript:mcTabs.displayTab('appearance_tab','appearance_panel');\" onmousedown=\"return false;\"\u003E{#advimage_dlg.tab_appearance}\u003C/a\u003E\u003C/span\u003E\u003C/li\u003E\r\n\t\t\t\t\u003Cli id=\"advanced_tab\"\u003E\u003Cspan\u003E\u003Ca href=\"javascript:mcTabs.displayTab('advanced_tab','advanced_panel');\" onmousedown=\"return false;\"\u003E{#advimage_dlg.tab_advanced}\u003C/a\u003E\u003C/span\u003E\u003C/li\u003E\r\n\t\t\t\u003C/ul\u003E\r\n\t\t\u003C/div\u003E\r\n\r\n\t\t\u003Cdiv class=\"panel_wrapper\"\u003E\r\n\t\t  \r\n\t\t\t\u003Cdiv id=\"gallery_panel\" class=\"panel current\"\u003E\r\n\t\t\t\t\u003Cfieldset\u003E\r\n\t\t\t\t\t\t\u003Clegend\u003E{#advimage_dlg.upload_section}\u003C/legend\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctable class=\"properties\"\u003E\r\n\t\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel for=\"upload\"\u003E{#advimage_dlg.upload}\u003C/label\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd colspan=\"2\"\u003E\r\n\t\t\t\t\t\t\t\t  \u003Cinput name=\"authenticity_token\" type=\"hidden\" id=\"authenticity_token\" /\u003E\r\n\t\t\t\t\t\t\t    \u003Cinput class=\"input-file\" id=\"image_uploaded_data\" name=\"picture[image]\" type=\"file\" /\u003E\r\n\t\t\t\t\t\t\t  \u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel for=\"upload_title\"\u003E{#advimage_dlg.upload_title}\u003C/label\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd colspan=\"2\"\u003E\r\n\t\t\t\t\t\t\t    \u003Cinput id=\"image_uploaded_title\" name=\"picture[title]\" type=\"text\" /\u003E\r\n\t\t\t\t\t\t\t  \u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd colspan=\"3\" style=\"text-align:center\"\u003E\r\n\t\t\t\t\t\t\t\t  \u003Cdiv class=\"upload-btn\"\u003E\r\n\t\t\t\t\t\t\t\t    \u003Cinput class=\"button\" name=\"commit\" type=\"button\" value=\"Upload\" onclick=\"ImageDialog.TS.upload();\" /\u003E \r\n\t\t\t\t\t\t\t\t    \u003Cspan id=\"loading_alert\" style=\"display:none\"\u003E\u003Cimg src=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/tsimage//img/loading.gif\" style=\"vertical-align:middle\"/\u003E\u003C/span\u003E\r\n\t\t\t\t\t\t\t\t  \u003C/div\u003E\r\n\t\t\t\t\t\t\t\t\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\u003C/table\u003E\r\n\t\t\t\t\u003C/fieldset\u003E\r\n\r\n\t\t\t\t\u003Cfieldset\u003E\r\n\t\t\t\t\t\u003Clegend\u003E{#advimage_dlg.image_list}\u003C/legend\u003E\r\n\t\t\t\t\t\u003Cdiv id=\"preview\" style=\"overflow:auto;height:175px\"\u003ELoading...\u003C/div\u003E\r\n\t\t\t\t\u003C/fieldset\u003E\r\n\t\t\t\t\r\n\t\t\t\u003C/div\u003E\r\n\t\t  \r\n\t\t\t\u003Cdiv id=\"general_panel\" class=\"panel\"\u003E\r\n\t\t\t\t\u003Cfieldset\u003E\r\n\t\t\t\t\t\t\u003Clegend\u003E{#advimage_dlg.general}\u003C/legend\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctable class=\"properties\"\u003E\r\n\t\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"srclabel\" for=\"src\"\u003E{#advimage_dlg.src}\u003C/label\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd colspan=\"2\"\u003E\u003Ctable border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Ctr\u003E \r\n\t\t\t\t\t\t\t\t\t  \u003Ctd\u003E\u003Cinput name=\"src\" type=\"text\" id=\"src\" value=\"\" class=\"mceFocus\" onchange=\"ImageDialog.showPreviewImage(this.value);\" /\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\t\t  \u003Ctd id=\"srcbrowsercontainer\"\u003E\u0026nbsp;\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\t  \u003C/table\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd\u003E\u003Clabel for=\"src_list\"\u003E{#advimage_dlg.image_list}\u003C/label\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd\u003E\u003Cselect id=\"src_list\" name=\"src_list\" onchange=\"document.getElementById('src').value=this.options[this.selectedIndex].value;document.getElementById('alt').value=this.options[this.selectedIndex].text;document.getElementById('title').value=this.options[this.selectedIndex].text;ImageDialog.showPreviewImage(this.options[this.selectedIndex].value);\"\u003E\u003C/select\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\u003Ctr\u003E \r\n\t\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"altlabel\" for=\"alt\"\u003E{#advimage_dlg.alt}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\t\u003Ctd colspan=\"2\"\u003E\u003Cinput id=\"alt\" name=\"alt\" type=\"text\" value=\"\" /\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003C/tr\u003E \r\n\t\t\t\t\t\t\t\u003Ctr\u003E \r\n\t\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"titlelabel\" for=\"title\"\u003E{#advimage_dlg.title}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\t\u003Ctd colspan=\"2\"\u003E\u003Cinput id=\"title\" name=\"title\" type=\"text\" value=\"\" /\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\u003C/table\u003E\r\n\t\t\t\t\u003C/fieldset\u003E\r\n\r\n\t\t\t\t\u003Cfieldset\u003E\r\n\t\t\t\t\t\u003Clegend\u003E{#advimage_dlg.preview}\u003C/legend\u003E\r\n\t\t\t\t\t\u003Cdiv id=\"prev\"\u003E\u003C/div\u003E\r\n\t\t\t\t\u003C/fieldset\u003E\r\n\t\t\t\u003C/div\u003E\r\n\r\n\t\t\t\u003Cdiv id=\"appearance_panel\" class=\"panel\"\u003E\r\n\t\t\t\t\u003Cfieldset\u003E\r\n\t\t\t\t\t\u003Clegend\u003E{#advimage_dlg.tab_appearance}\u003C/legend\u003E\r\n\r\n\t\t\t\t\t\u003Ctable border=\"0\" cellpadding=\"4\" cellspacing=\"0\"\u003E\r\n\t\t\t\t\t\t\u003Ctr\u003E \r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"alignlabel\" for=\"align\"\u003E{#advimage_dlg.align}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003Ctd\u003E\u003Cselect id=\"align\" name=\"align\" onchange=\"ImageDialog.updateStyle('align');ImageDialog.changeAppearance();\"\u003E \r\n\t\t\t\t\t\t\t\t\t\u003Coption value=\"\"\u003E{#not_set}\u003C/option\u003E \r\n\t\t\t\t\t\t\t\t\t\u003Coption value=\"baseline\"\u003E{#advimage_dlg.align_baseline}\u003C/option\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Coption value=\"top\"\u003E{#advimage_dlg.align_top}\u003C/option\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Coption value=\"middle\"\u003E{#advimage_dlg.align_middle}\u003C/option\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Coption value=\"bottom\"\u003E{#advimage_dlg.align_bottom}\u003C/option\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Coption value=\"text-top\"\u003E{#advimage_dlg.align_texttop}\u003C/option\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Coption value=\"text-bottom\"\u003E{#advimage_dlg.align_textbottom}\u003C/option\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Coption value=\"left\"\u003E{#advimage_dlg.align_left}\u003C/option\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Coption value=\"right\"\u003E{#advimage_dlg.align_right}\u003C/option\u003E\r\n\t\t\t\t\t\t\t\t\u003C/select\u003E \r\n\t\t\t\t\t\t\t\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003Ctd rowspan=\"6\" valign=\"top\"\u003E\r\n\t\t\t\t\t\t\t\t\u003Cdiv class=\"alignPreview\"\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Cimg id=\"alignSampleImg\" src=\"" + document.location.protocol +"//s3.amazonaws.com/tinymce-cdn/plugins/tsimage//img/sample.gif\" alt=\"{#advimage_dlg.example_img}\" /\u003E\r\n\t\t\t\t\t\t\t\t\tLorem ipsum, Dolor sit amet, consectetuer adipiscing loreum ipsum edipiscing elit, sed diam\r\n\t\t\t\t\t\t\t\t\tnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Loreum ipsum\r\n\t\t\t\t\t\t\t\t\tedipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam\r\n\t\t\t\t\t\t\t\t\terat volutpat.\r\n\t\t\t\t\t\t\t\t\u003C/div\u003E\r\n\t\t\t\t\t\t\t\u003C/td\u003E\r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"widthlabel\" for=\"width\"\u003E{#advimage_dlg.dimensions}\u003C/label\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003Ctd nowrap=\"nowrap\"\u003E\r\n\t\t\t\t\t\t\t\t\u003Cinput name=\"width\" type=\"text\" id=\"width\" value=\"\" size=\"5\" maxlength=\"5\" class=\"size\" onchange=\"ImageDialog.changeHeight();\" /\u003E x \r\n\t\t\t\t\t\t\t\t\u003Cinput name=\"height\" type=\"text\" id=\"height\" value=\"\" size=\"5\" maxlength=\"5\" class=\"size\" onchange=\"ImageDialog.changeWidth();\" /\u003E px\r\n\t\t\t\t\t\t\t\u003C/td\u003E\r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd\u003E\u0026nbsp;\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003Ctd\u003E\u003Ctable border=\"0\" cellpadding=\"0\" cellspacing=\"0\"\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\t\t\t\u003Ctd\u003E\u003Cinput id=\"constrain\" type=\"checkbox\" name=\"constrain\" class=\"checkbox\" /\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\t\t\u003Ctd\u003E\u003Clabel id=\"constrainlabel\" for=\"constrain\"\u003E{#advimage_dlg.constrain_proportions}\u003C/label\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\t\u003C/table\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"vspacelabel\" for=\"vspace\"\u003E{#advimage_dlg.vspace}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003Ctd\u003E\u003Cinput name=\"vspace\" type=\"text\" id=\"vspace\" value=\"\" size=\"3\" maxlength=\"3\" class=\"number\" onchange=\"ImageDialog.updateStyle('vspace');ImageDialog.changeAppearance();\" onblur=\"ImageDialog.updateStyle('vspace');ImageDialog.changeAppearance();\" /\u003E\r\n\t\t\t\t\t\t\t\u003C/td\u003E\r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E \r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"hspacelabel\" for=\"hspace\"\u003E{#advimage_dlg.hspace}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003Ctd\u003E\u003Cinput name=\"hspace\" type=\"text\" id=\"hspace\" value=\"\" size=\"3\" maxlength=\"3\" class=\"number\" onchange=\"ImageDialog.updateStyle('hspace');ImageDialog.changeAppearance();\" onblur=\"ImageDialog.updateStyle('hspace');ImageDialog.changeAppearance();\" /\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"borderlabel\" for=\"border\"\u003E{#advimage_dlg.border}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003Ctd\u003E\u003Cinput id=\"border\" name=\"border\" type=\"text\" value=\"\" size=\"3\" maxlength=\"3\" class=\"number\" onchange=\"ImageDialog.updateStyle('border');ImageDialog.changeAppearance();\" onblur=\"ImageDialog.updateStyle('border');ImageDialog.changeAppearance();\" /\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd\u003E\u003Clabel for=\"class_list\"\u003E{#class_name}\u003C/label\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003Ctd colspan=\"2\"\u003E\u003Cselect id=\"class_list\" name=\"class_list\" class=\"mceEditableSelect\"\u003E\u003C/select\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"stylelabel\" for=\"style\"\u003E{#advimage_dlg.style}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003Ctd colspan=\"2\"\u003E\u003Cinput id=\"style\" name=\"style\" type=\"text\" value=\"\" onchange=\"ImageDialog.changeAppearance();\" /\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003C!-- \u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"classeslabel\" for=\"classes\"\u003E{#advimage_dlg.classes}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003Ctd colspan=\"2\"\u003E\u003Cinput id=\"classes\" name=\"classes\" type=\"text\" value=\"\" onchange=\"selectByValue(this.form,'classlist',this.value,true);\" /\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\u003C/tr\u003E --\u003E\r\n\t\t\t\t\t\u003C/table\u003E\r\n\t\t\t\t\u003C/fieldset\u003E\r\n\t\t\t\u003C/div\u003E\r\n\r\n\t\t\t\u003Cdiv id=\"advanced_panel\" class=\"panel\"\u003E\r\n\t\t\t\t\u003Cfieldset\u003E\r\n\t\t\t\t\t\u003Clegend\u003E{#advimage_dlg.swap_image}\u003C/legend\u003E\r\n\r\n\t\t\t\t\t\u003Cinput type=\"checkbox\" id=\"onmousemovecheck\" name=\"onmousemovecheck\" class=\"checkbox\" onclick=\"ImageDialog.setSwapImage(this.checked);\" /\u003E\r\n\t\t\t\t\t\u003Clabel id=\"onmousemovechecklabel\" for=\"onmousemovecheck\"\u003E{#advimage_dlg.alt_image}\u003C/label\u003E\r\n\r\n\t\t\t\t\t\u003Ctable border=\"0\" cellpadding=\"4\" cellspacing=\"0\" width=\"100%\"\u003E\r\n\t\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"onmouseoversrclabel\" for=\"onmouseoversrc\"\u003E{#advimage_dlg.mouseover}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\t\u003Ctd\u003E\u003Ctable border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\u003E \r\n\t\t\t\t\t\t\t\t\t\u003Ctr\u003E \r\n\t\t\t\t\t\t\t\t\t  \u003Ctd\u003E\u003Cinput id=\"onmouseoversrc\" name=\"onmouseoversrc\" type=\"text\" value=\"\" /\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\t\t  \u003Ctd id=\"onmouseoversrccontainer\"\u003E\u0026nbsp;\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\t  \u003C/table\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd\u003E\u003Clabel for=\"over_list\"\u003E{#advimage_dlg.image_list}\u003C/label\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd\u003E\u003Cselect id=\"over_list\" name=\"over_list\" onchange=\"document.getElementById('onmouseoversrc').value=this.options[this.selectedIndex].value;\"\u003E\u003C/select\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\u003Ctr\u003E \r\n\t\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"onmouseoutsrclabel\" for=\"onmouseoutsrc\"\u003E{#advimage_dlg.mouseout}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\t\u003Ctd class=\"column2\"\u003E\u003Ctable border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\u003E \r\n\t\t\t\t\t\t\t\t\t\u003Ctr\u003E \r\n\t\t\t\t\t\t\t\t\t  \u003Ctd\u003E\u003Cinput id=\"onmouseoutsrc\" name=\"onmouseoutsrc\" type=\"text\" value=\"\" /\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\t\t  \u003Ctd id=\"onmouseoutsrccontainer\"\u003E\u0026nbsp;\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\t\u003C/tr\u003E \r\n\t\t\t\t\t\t\t\t  \u003C/table\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd\u003E\u003Clabel for=\"out_list\"\u003E{#advimage_dlg.image_list}\u003C/label\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\u003Ctd\u003E\u003Cselect id=\"out_list\" name=\"out_list\" onchange=\"document.getElementById('onmouseoutsrc').value=this.options[this.selectedIndex].value;\"\u003E\u003C/select\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\u003C/table\u003E\r\n\t\t\t\t\u003C/fieldset\u003E\r\n\r\n\t\t\t\t\u003Cfieldset\u003E\r\n\t\t\t\t\t\u003Clegend\u003E{#advimage_dlg.misc}\u003C/legend\u003E\r\n\r\n\t\t\t\t\t\u003Ctable border=\"0\" cellpadding=\"4\" cellspacing=\"0\"\u003E\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"idlabel\" for=\"id\"\u003E{#advimage_dlg.id}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003Ctd\u003E\u003Cinput id=\"id\" name=\"id\" type=\"text\" value=\"\" /\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"dirlabel\" for=\"dir\"\u003E{#advimage_dlg.langdir}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003Ctd\u003E\r\n\t\t\t\t\t\t\t\t\u003Cselect id=\"dir\" name=\"dir\" onchange=\"ImageDialog.changeAppearance();\"\u003E \r\n\t\t\t\t\t\t\t\t\t\t\u003Coption value=\"\"\u003E{#not_set}\u003C/option\u003E \r\n\t\t\t\t\t\t\t\t\t\t\u003Coption value=\"ltr\"\u003E{#advimage_dlg.ltr}\u003C/option\u003E \r\n\t\t\t\t\t\t\t\t\t\t\u003Coption value=\"rtl\"\u003E{#advimage_dlg.rtl}\u003C/option\u003E \r\n\t\t\t\t\t\t\t\t\u003C/select\u003E\r\n\t\t\t\t\t\t\t\u003C/td\u003E \r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"langlabel\" for=\"lang\"\u003E{#advimage_dlg.langcode}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003Ctd\u003E\r\n\t\t\t\t\t\t\t\t\u003Cinput id=\"lang\" name=\"lang\" type=\"text\" value=\"\" /\u003E\r\n\t\t\t\t\t\t\t\u003C/td\u003E \r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"usemaplabel\" for=\"usemap\"\u003E{#advimage_dlg.map}\u003C/label\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\t\u003Ctd\u003E\r\n\t\t\t\t\t\t\t\t\u003Cinput id=\"usemap\" name=\"usemap\" type=\"text\" value=\"\" /\u003E\r\n\t\t\t\t\t\t\t\u003C/td\u003E \r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\r\n\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\u003Ctd class=\"column1\"\u003E\u003Clabel id=\"longdesclabel\" for=\"longdesc\"\u003E{#advimage_dlg.long_desc}\u003C/label\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\u003Ctd\u003E\u003Ctable border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\u003E\r\n\t\t\t\t\t\t\t\t\t\u003Ctr\u003E\r\n\t\t\t\t\t\t\t\t\t  \u003Ctd\u003E\u003Cinput id=\"longdesc\" name=\"longdesc\" type=\"text\" value=\"\" /\u003E\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\t  \u003Ctd id=\"longdesccontainer\"\u003E\u0026nbsp;\u003C/td\u003E\r\n\t\t\t\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\t\t\t\u003C/table\u003E\u003C/td\u003E \r\n\t\t\t\t\t\t\u003C/tr\u003E\r\n\t\t\t\t\t\u003C/table\u003E\r\n\t\t\t\t\u003C/fieldset\u003E\r\n\t\t\t\u003C/div\u003E\r\n\t\t\u003C/div\u003E\r\n\r\n\t\t\u003Cdiv class=\"mceActionPanel\"\u003E\r\n\t\t\t\u003Cdiv style=\"float: left\"\u003E\r\n\t\t\t\t\u003Cinput type=\"submit\" id=\"insert\" name=\"insert\" value=\"{#insert}\" /\u003E\r\n\t\t\t\u003C/div\u003E\r\n\r\n\t\t\t\u003Cdiv style=\"float: right\"\u003E\r\n\t\t\t\t\u003Cinput type=\"button\" id=\"cancel\" name=\"cancel\" value=\"{#cancel}\" onclick=\"tinyMCEPopup.close();\" /\u003E\r\n\t\t\t\u003C/div\u003E\r\n\t\t\u003C/div\u003E\r\n\r\n  \u003C/form\u003E\r\n\r\n  \u003Cdiv id=\"image-upload\"\u003E\u003C/div\u003E\r\n  \r\n\u003C/body\u003E \r\n\u003C/html\u003E \r\n");document.close();