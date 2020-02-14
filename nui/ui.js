$(function(){
    
    $("#menu").hide();
    window.model = "m"; //hombre por defecto
    window.typeOfShop = true; //clotheshop por defecto

    window.addEventListener('message', function(event){ //event viene compuesto por showmenu y masc (true = hombre, false = mujer)
        var item = event.data;

        if(item.showMenu == true){
            showMenu(true); //abrir menu
        } else {
            showMenu(false); //cerrar menu
        }

        if (item.masc !== true){
            window.model = "f"; //sino menu para mujeres
        }
        $('#mascaras').show();
        $('#mascara').show();
        $('#corbata').show();
        $('#mochilas').show();
        $('#manos').show();
        $('#pantalon').show();
        $('#polera').show();
        $('#zapato').show();
        $('#chaqueta').show();
        $('#chaleco').show();
        $('#muñeca').show();
        $('#pulsera').show();
        $('#sombrero').show();
        $('#gafas').show();
        $('#oreja').show();

        if (item.type == "clotheshop"){
            window.typeOfShop = true;
            $('#mascaras').hide();
            $('#mascara').hide();
            $('#sombrero').hide();
            $('#gafas').hide();
            $('#oreja').hide();
            //$('#muñeca').hide();
            //$('#pulsera').hide();
        }
        else if (item.type == "ears"){
            window.typeOfShop = false;
            $.post('http://esx_np_skinshop_v2/zoom', JSON.stringify("cara"));
            $('#mascaras').hide();
            $('#mascara').hide();
            $('#corbata').hide();
            $('#mochilas').hide();
            $('#manos').hide();
            $('#pantalon').hide();
            $('#polera').hide();
            $('#zapato').hide();
            $('#chaqueta').hide();
            $('#chaleco').hide();
            $('#muñeca').hide();
            $('#pulsera').hide();
            $('#sombrero').hide();
            $('#gafas').hide();

            if (model == "m"){
                $('#orelham').show();
            }
            else{
                $('#orelhaf').show();
            }
    
        }
        else if (item.type == "mask"){
            window.typeOfShop = false;
            $.post('http://esx_np_skinshop_v2/zoom', JSON.stringify("cara"));
            $('#oreja').hide();
            $('#corbata').hide();
            $('#mochilas').hide();
            $('#manos').hide();
            $('#pantalon').hide();
            $('#polera').hide();
            $('#zapato').hide();
            $('#chaqueta').hide();
            $('#chaleco').hide();
            $('#muñeca').hide();
            $('#pulsera').hide();
            $('#sombrero').hide();
            $('#gafas').hide();
        }
        else if (item.type == "helmet"){
            window.typeOfShop = false;
            $.post('http://esx_np_skinshop_v2/zoom', JSON.stringify("cara"));
            $('#mascaras').hide();
            $('#mascara').hide();
            $('#oreja').hide();
            $('#corbata').hide();
            $('#mochilas').hide();
            $('#manos').hide();
            $('#pantalon').hide();
            $('#polera').hide();
            $('#zapato').hide();
            $('#chaqueta').hide();
            $('#chaleco').hide();
            $('#muñeca').hide();
            $('#pulsera').hide();
            $('#gafas').hide();

            if (model == "m"){
                $('#chapeum').show();
            }
            else{
                $('#chapeuf').show();
            }
            
        }
        else if (item.type == "glasses"){
            window.typeOfShop = false;
            $.post('http://esx_np_skinshop_v2/zoom', JSON.stringify("cara"));
            $('#mascaras').hide();
            $('#mascara').hide();
            $('#oreja').hide();
            $('#corbata').hide();
            $('#mochilas').hide();
            $('#manos').hide();
            $('#pantalon').hide();
            $('#polera').hide();
            $('#zapato').hide();
            $('#chaqueta').hide();
            $('#chaleco').hide();
            $('#muñeca').hide();
            $('#pulsera').hide();
            $('#sombrero').hide();

            if (model == "m"){
                $('#oculosm').show();
            }
            else{
                $('#oculosf').show();
            }

        }

    });

    menu(); //LLAMAMOS A LA FUNCION MENU


    // Fechar NUI no Esc
    document.onkeydown = function(data){ // document.onkeyup
        if(data.which == 27){
            if (typeOfShop == true) {
                $.post('http://esx_np_skinshop_v2/exit', JSON.stringify("clothes"));
            }
            else{
                $.post('http://esx_np_skinshop_v2/exit', JSON.stringify("accessory"));
            }
            
        }
        if(data.which == 65 || (data.which == 65 && data.repeat)){ //a if
            //lastTime = Date.now();
            $.post('http://esx_np_skinshop_v2/rotate', JSON.stringify("left"));
        }
        if(data.which == 68 || (data.which == 68 && data.repeat)) { //d if
            //lastTime = Date.now();
            $.post('http://esx_np_skinshop_v2/rotate', JSON.stringify("right"));
        }
        if(data.which == 39) { // right
            //alert("Teste")
            $.post('http://esx_np_skinshop_v2/color', JSON.stringify("right"));
        }
        if(data.which == 37) { // left
            //alert("Teste")
            $.post('http://esx_np_skinshop_v2/color', JSON.stringify("left"));
        }
    }

});

function showMenu(bool){
    if (bool) {
        $("div").each(function(i,obj){
            var element = $(this);

            if (element.attr("data-parent")){
                element.hide();
            } else {
                element.fadeIn(500);
            }
        });
    }
    else{
        $("#menu").fadeOut(500);
    }
}

function menu(){
    $(".classes").each(function(i, ojb){
        var menu = $(this).data("sub");
        var element = $("#"+menu);
        
        $(this).click(function(){       
            if (menu == "mascara" || menu == "chapeu" || menu == "oculos" || menu == "orelha"){
                $.post('http://esx_np_skinshop_v2/zoom', JSON.stringify("cara"));
            }
            else if (menu == "sapato"){
                $.post('http://esx_np_skinshop_v2/zoom', JSON.stringify("zapatos"));
            }
            else if (menu == "gravata" || menu == "blusa" || menu == "jaqueta" || menu == "colete"){
                $.post('http://esx_np_skinshop_v2/zoom', JSON.stringify("tops"));
            }
            else if (menu == "calca"){
                $.post('http://esx_np_skinshop_v2/zoom', JSON.stringify("pants"));
            }
            else{
                $.post('http://esx_np_skinshop_v2/zoom', JSON.stringify("ropa"));
            }
            if (menu != "mascara" && menu != "mochila"){
                if (typeof model !== 'undefined') { // POR EJEMPLO
                    var element = $("#"+menu+model); //#calcaf ??
                } else {
                    var element = $("#"+menu+"m"); //#calcam ??
                }
            } else {
                var element = $("#"+menu);        // MENUS UNISEX             
            }

            $(".item").each(function(i, ojb){
                $(this).hide()
            });
            
            element.fadeIn(500);
        });
    });


    $("#confirm").each(function(i, ojb){
        $(this).click(function(){
           // $.post('http://esx_np_skinshop/endDialog', typeOfShop);
            if (typeOfShop == true){
                $.post('http://esx_np_skinshop_v2/endDialog', JSON.stringify("clothes"));
            }      
            else{
                $.post('http://esx_np_skinshop_v2/endDialog', JSON.stringify("accessory"));
            }
        });
    });


    $(".botao").each(function(i, ojb){
        $(this).click(function(){
            if($(this).parent().attr("id") == "mascara"){
                var dados = 1;
            }
            if($(this).parent().attr("id") == "maosf" || $(this).parent().attr("id") == "maosm"){
                var dados = 3;
            }
            if($(this).parent().attr("id") == "calcaf" || $(this).parent().attr("id") == "calcam"){
                var dados = 4;
            }
            if($(this).parent().attr("id") == "mochila"){
                var dados = 5;
            }
            if($(this).parent().attr("id") == "sapatof" || $(this).parent().attr("id") == "sapatom"){
                var dados = 6;
            }
            if($(this).parent().attr("id") == "gravataf" || $(this).parent().attr("id") == "gravatam"){
                var dados = 7;
            }
            if($(this).parent().attr("id") == "blusaf" || $(this).parent().attr("id") == "blusam"){
                var dados = 8;
            }
            if($(this).parent().attr("id") == "coletef" || $(this).parent().attr("id") == "coletem"){
                var dados = 9;
            }
            if($(this).parent().attr("id") == "jaquetaf" || $(this).parent().attr("id") == "jaquetam"){
                var dados = 11;
            }
            if($(this).parent().attr("id") == "chapeuf" || $(this).parent().attr("id") == "chapeum"){
                var dados = 100;
            }
            if($(this).parent().attr("id") == "oculosf" || $(this).parent().attr("id") == "oculosm"){
                var dados = 101;
            }
            if($(this).parent().attr("id") == "orelhaf" || $(this).parent().attr("id") == "orelham"){
                var dados = 102;
            }
            if($(this).parent().attr("id") == "relojf" || $(this).parent().attr("id") == "relojm"){
                var dados = 106;
            }
            if($(this).parent().attr("id") == "braceletf" || $(this).parent().attr("id") == "braceletm"){
                var dados = 107;
            }


            var tipo = $(this).data("action");
            $.post("http://esx_np_skinshop_v2/update", JSON.stringify([dados, tipo]));
        })
    })
}