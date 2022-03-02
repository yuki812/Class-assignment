setTimeout(function () {
    $('#mainimg').vegas({
        slides: [
            { src: '/static/img/slide1.jpeg' },	//1枚目の写真指定
            { src: '/static/img/slide2.jpeg' },	//2枚目の写真指定
            { src: '/static/img/slide3.jpeg' },	//3枚目の写真指定
        ],
		overlay: true,			//写真上にドットを重ねる。不要ならこの１行を削除して下さい。
		transition: 'blur',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',	//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 5000,			//次の画像を表示するまでの時間
		animationDuration: 20000,	//アニメーション間の引き継ぎタイミング。
    });
}, 3000);	//3秒遅れてスライドショーがスタート