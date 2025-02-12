
function dayNightHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackColor('#1f1f1f');
        Body.setColor('#cccccc')
        self.value = 'day';

        Links.setColor('#92add6');

    } else {
        Body.setBackColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('#2667cb');

    }
}

var Body = {
    setColor:function(pColor){
        document.querySelector('body').style.color = pColor;
    },
    setBackColor:function(pColor){
        document.querySelector('body').style.backgroundColor = pColor;
    }

}

var Links = {
    setColor:function(pColor){
        var alist = document.querySelectorAll('a'); //�߰���忡 ��� a �±� ���� �ٲٱ�
        var i = 0;
        while(i<alist.length){
            alist[i].style.color= pColor;
            i=i+1;
        }
    },
}