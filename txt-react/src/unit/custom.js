let tytTool = {
	openWinAuto: (appurl, winName, iWidth, iHeight, iTop, iLeft) => {
		var winWidth,
			winHeight,
			winTop,
			winLeft,
			waH = window.screen.availHeight,
			wsW = window.screen.availWidth;

		(!iWidth) ? winWidth = '800': winWidth = iWidth;
		(!iHeight) ? winHeight = '600': winHeight = iHeight;

		// 获得窗口的垂直位置
		if (iTop < 1) {
			winTop = waH * iTop;
		} else {
			if (!iTop && iTop != 0) {
				winTop = (waH - 30 - iHeight) / 2
			} else {
				winTop = iTop;
			}
		}

		//获得窗口的水平位置
		if (iLeft < 1) {
			winLeft = wsW * iLeft;
		} else {
			if (!iLeft && iLeft != 0) {
				winLeft = (wsW - 10 - iWidth) / 2
			} else {
				winLeft = iLeft;
			}
		}

		window.open(appurl, winName, 'height=' + winHeight + ',,innerHeight=' + winHeight + ',width=' + winWidth + ',innerWidth=' + winWidth + ',top=' + winTop + ',left=' + winLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=yes,titlebar=no');
	}
}

export default tytTool;