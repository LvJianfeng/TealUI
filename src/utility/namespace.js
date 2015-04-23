/** * @author xuld *//** * 定义名字空间。 * @param {String} ns 名字空间。 */function namespace(ns) {	// 取值，创建。	ns = ns.split('.');	// 如果第1个字符是 ., 则表示内置使用的名字空间。	var current = window, i = -1;	// 依次创建对象。	while (++i < ns.length) {
	    current = current[ns[i]] || (current[ns[i]] = {});
	}	// 如果对象已存在，则拷贝成员到最后一个对象。	return current;}