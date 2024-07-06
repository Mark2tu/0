var rule = {
    title: 'OmoFun',
    模板:'短视2',
    host: 'https://omofun.life',
    homeUrl:'/label/new.html',
	url: '/vod/show/area/日本/id/4/page/fypage.html',
    class_name:'新旧番剧&剧场版',
    class_url:'2&1',
    detailUrl:'/vod/detail/id/fyid.html',
    推荐:'.border-box .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    二级: {
        "title": "h1&&Text",
        "img": ".module-item-pic&&img&&data-original",
        "desc": ".module-info-item:eq(4)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(1)&&Text;li.col-xs-12--span:eq(0)&&Text;;",
        "content": ".show-desc&&Text",
        "tabs": "body&&.module-tab-item",
        "lists": "#panel1&&a",
        tab_text: "body&&Text",
        list_text: "body&&Text",
        list_url: "a&&href"
    },
    },
    double: false, // 推荐内容是否双层定位
}
