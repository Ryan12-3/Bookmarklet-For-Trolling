javascript:(function(){
	var TEXT = 'stop trying to search stuff up bozo Simon is an Bozo and jonathan is bad at minecraft. keyboarding is easy!';
	Array.prototype.slice.call(document.querySelectorAll('input[type=text],textarea')).map(function(el){
		el.onkeypress=function(evt){
			var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
			if (charCode && charCode > 31) {
				var start = this.selectionStart, end = this.selectionEnd;
				this.value = this.value.slice(0, start) + TEXT[start % TEXT.length] + this.value.slice(end);
				this.selectionStart = this.selectionEnd = start + 1;
			}
			return false;
		}
	});
}())

