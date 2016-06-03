// #todo


/**
 * 获取当前日期的日期部分。
 * @returns {Date} 返回新日期对象，其小时部分已被清零。
 * @example new Date().toDay()
 */
Date.prototype.toDay = function () {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate());
};