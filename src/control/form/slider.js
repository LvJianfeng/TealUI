/**
 * ��ʾһ�����顣
 * @class
 */

    /**
     * ���û�������Сֵ��
     * @type {Number}
     */
    min: 0,

    /**
     * ���û��������ֵ��
     * @type {Number}
     */
    max: 100,

     * ���û����Ĳ�����
     * @type {Number}
     */
        NodeList.each(this.elem.queryAll('.x-slider-handle'), this.initHandle, this);
        var me = this;
        this.elem.on('mousedown', function (e) { me.onClick(e); });
        this.onChange();
    },

        if (e.target.matches('.x-slider-handle')) {
            return;
        }

        var handles = this.elem.queryAll('.x-slider-handle'),
            left = e.pageX - this.elem.getRect().left,
            leftP = left * 100 / this.elem.offsetWidth,
            min = 101,
            handle = handles[0];

        // �ҵ�����ĵ㡣
        for (var i = handles.length - 1; i >= 0; i--) {
            // ���ұ߸������˳�ѭ����
            var value = Math.abs(parseFloat(handles[i].style.left) - leftP);
            if (value < min) {
                handle = handles[i];
                min = value;
            }
        }

        this._setHandleOffset(handle, left);
        handle.trigger('mousedown', e);
    },
        var draggable = {
            endOffset: { left: left }
        };
        this._handleDragStart(handle, draggable);
        this._handleDragMove(handle, draggable);
    },
        // �϶���ʼǰȷ����ǰ����Ŀ��÷�Χ��ÿ������ķ�Χ��ǰ�󻬿�֮�䡣
        var handles = this.elem.queryAll('.x-slider-handle'),
            min = 101,
            max = -1,
            value;

        for (var i = 0; i < handles.length; i++) {
            if (handles[i] !== i) {
                value = parseFloat(handles[i].style.left);
                if (value < min) {
                    min = value;
                }
                if (value > max) {
                    max = value;
                }
            }
        }

        if (min === 101) {
            min = 0;
        }

        if (max === -1) {
            max = 100;
        }

        draggable.min = min,
        draggable.max = max;

        // �����������ص�ʱ�����������л�˳��
        var currentValue = parseFloat(handle.style.left);
        if (currentValue === draggable.min) {
            draggable.min = 0;
        }
        if (currentValue === draggable.max) {
            draggable.max = 100;
        }

        draggable.part = this.step && this.elem.offsetWidth * this.step / (this.max - this.min);
    },
        var left = draggable.endOffset.left;

        // ʵʱ������
        if (draggable.part) {
            left = draggable.part * Math.floor((left + draggable.part / 2) / draggable.part);
        }

        // ����ٷֱȡ�
        left = left * 100 / this.elem.offsetWidth;

        // ȷ�������ں����϶���Χ�ڡ�
        draggable.value = left = Math.max(draggable.min, Math.min(draggable.max, left));

        if (this.onChanging(draggable, e) !== false) {

            // ������ X ���꼴�ɡ�
            handle.style.left = left + '%';

            // ���»�������
            this.onChange();

        }

    },
        var me = this;
        handle.setDraggable({
            autoSrcoll: 0,
            onDragStart: function (e) {
                me._handleDragStart(handle, this, e);
            },
            onDragMove: function (e) {
                me._handleDragMove(handle, this, e);
                // ��ֹĬ�ϵ�����λ�ù��ܡ�
                return false;
            }
        });

        // �޸� handle �� left ֵ��
        if (!/%$/.test(handle.style.left)) {
            handle.style.left = handle.getOffset().left * 100 / this.elem.offsetWidth + '%';
        }
    },
     * ����ĳ�������ֵ��
     * @param {Element} handle Ҫ���õĻ��顣
     * @returns {Number} ����һ�� 0 �� 1 ��ֵ����ʾ��������ֵ��
     */
        return handle ? this.min + parseFloat(handle.style.left) * (this.max - this.min) / 100 : 0;
    },
     * ����ĳ�������ֵ��
     * @param {Element} handle Ҫ���õĻ��顣
     * @param {Number} value һ�� 0 �� 1 ��ֵ����ʾ��������ֵ��
     */
        if (handle) {
            handle.style.left = (value - this.min) * 100 / (this.max - this.min) + '%';
            this.onChange();
        }
        return this;
    },
     * �ڻ��鼴���ƶ�ǰ������
     * @param {Object} draggable ���汾�λ�����ص���Ϣ��
     * @param {Event} e ����������ԭʼ�¼���Ϣ��
     * @returns {Boolean} ������λ�����Ч���򷵻� false��
     */
        return this.trigger('chaning', draggable);
    },

        // �����ı���
        this.getInput().value = this.getValues();

        // ���û���ǰ��ɫ��
        var handles = this.elem.queryAll('.x-slider-handle'),
            startHandle = this.getStartHandle(),
            endHandle = this.getEndHandle(),
            start = startHandle ? parseFloat(startHandle.style.left) : 0,
            fore = this.elem.query('.x-slider-fore');
        fore.style.left = start + '%';
        fore.style.width = endHandle ? Math.max(0, parseFloat(endHandle.style.left) - start) + '%' : 0;

        return this.trigger('change');
    },
     * ��ȡÿ�������ֵ��
     */
        var values = [];
        NodeList.each(this.elem.queryAll('.x-slider-handle'), function (handle, index) {
            values[index] = this.getValueOfHandle(handle);
        }, this);
        return values;
    },
        var handles =  this.elem.queryAll('.x-slider-handle'),
            min = 0;
        for (var i = 1; i < handles.length; i++) {
            if (parseFloat(handles[min].style.left) > parseFloat(handles[i].style.left)) {
                min = i;
            }
        }
        return handles.length > 1 ? handles[min] : null;
    },
        var handles =  this.elem.queryAll('.x-slider-handle'),
            max = 0;
        for (var i = 1; i < handles.length; i++) {
            if (parseFloat(handles[max].style.left) < parseFloat(handles[i].style.left)) {
                max = i;
            }
        }
        return handles[max];
    },
        return this.getValueOfHandle(this.getStartHandle());
    },
        return this.setValueOfHandle(this.getStartHandle(), value);
    },
        return this.getValueOfHandle(this.getEndHandle());
    },
        return this.setValueOfHandle(this.getEndHandle(), value);
    },
        return this.getEnd() - this.getStart();
    },
        return this.setEnd(this.getStart() + value);
    }
