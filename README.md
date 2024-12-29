TypeScript React AntDesign PopOver Tooltip Demo
=================================

Popover的zIndex默认比Tooltip小,所以点击显示Popover时，Tooltip会显示在popover之上。

- Popover zIndex: 1030, https://ant.design/components/popover
- Tooltip zIndex: 1070, https://ant.design/components/tooltip

如果想让Popover覆盖Tooltip，需要设置popover的zIndex比tooltip大。

需要手动设置Popover的zIndex，大于等于1070即可。注意是Popover的zIndex，不是其style中的zIndex。

## 注意：

上面办法在antd 5.0.5可以，新版本5.22.7就不行了。

解决办法：同时指定Popover和Tooltip的zIndex，让Popover大一点


```
npm install
npm start
```

It will open page on browser automatically.
