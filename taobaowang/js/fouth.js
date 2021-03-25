// 选项卡
$('#u_1').find('li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#zanshang').find('div').eq( $(this).index() ).addClass('show').siblings().removeClass('show');
});
// 便民选项卡
$('.u_2').find('li').on('click',function(){
    $(this).addClass('bm_active').siblings().removeClass('bm_active');
    $('#bm_bottom').find('div').eq( $(this).index() ).addClass('phone').siblings().removeClass('phone');
});









