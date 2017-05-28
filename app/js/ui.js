import $ from 'jquery';
import List from './list';
class Ui {
	/**
	 * @DateTime 2017-05-28
	 *检测是否含有下一步;
	 * @param    {obj}   obj      [需要检测的对象名]
	 * @param    {Function} callback [回调函数]
	 */
	static ChNext(obj, callback) {
		// 检测是否List中是否存在obj对象 List Map对象;
		if (List.has(obj)) {
			// 如果存在obj对象 获取该对象的属性
			let ListName = List.get(obj);
			//检测该对象是否存在下一步 
			if (ListName.next) {
				// 存在时候执行callback函数
				callback && callback(ListName);
			} else {
				// 不存在时 todo 
				console.log(ListName.function);
			}
		}
	}

	/**
	 * @DateTime 2017-05-28
	 * @param    {[obj]}   ListName [创建那些元素]
	 */
	static Great(ListName) {
		// 获取对象的下一步数组
		let LArr = ListName.next;
		// 创建一个div标签
		let aDiv = $('<div></div>');
		// 遍历循环每next数组
		LArr.forEach(item => {
			// 检测map对象中是否存在该对象并获取该对象
			if (List.has(item)) {
				let greatitem = List.get(item);
				let _value = greatitem.value ? greatitem.value : '';
				// 创建input标签和属性并插入Div标签中
				$('<input></input>', {
					type: 'radio',
					value: _value,
					name: ListName.sign,
				}).appendTo(aDiv);
				// 创建label标签和属性并插入Div标签中
				$('<label></label>', {
					text: greatitem.name
				}).appendTo(aDiv);
			}
			// 检测该标签是否存在子标签 如果存在的话继续
			Ui.ChNext(item, Ui.Great);
		})
		$('#main').after(aDiv);
	}

	init(obj) {
		Ui.ChNext(obj, Ui.Great);
	}
}

export default Ui;