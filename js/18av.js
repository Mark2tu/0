const Apollo = {
    version: 20241012,
    empty: "hiker://empty",
    url: getItem('link', "https://18av.mm-cg.com"),
    d: [],
    data: {
        category: getMyVar('Apo.category', '0'),
        subCate: getMyVar('Apo.subCate', '0'),
    },
    getRangeColors: function() {
        return '#' + ('00000' + (Math.random() * 0x1000000 << 0)
                .toString(16))
            .substr(-6);
    }, //随机颜色
    baseParse: () => {
        const page = parseInt(MY_URL.split('##')[2])
        let categoryList = [{
            "title": "首页",
            "path": "/zh/",
            "type": "video",
            "sub": ""
        }, {
            "title": "中文字幕AV",
            "path": "/zh/chinese_random/all/index.html",
            "type": "video",
            "sub": [{
                "title": "中文字幕AV",
                "path": "/zh/chinese_list/all/1.html"
            }, {
                "title": "隨機近作",
                "path": "/zh/chinese_random/all/index.html"
            }, {
                "title": "隨機All",
                "path": "/zh/chinese_randomall/all/index.html"
            }, {
                "title": "類別清單",
                "path": "/zh/chinese_category/1/企畫/1.html"
            }]
        }, {
            "title": "無碼AV",
            "path": "/zh/uncensored_random/all/index.html",
            "type": "video",
            "sub": [{
                "title": "無碼AV",
                "path": "/zh/uncensored_list/all/1.html"
            }, {
                "title": "無碼隨機",
                "path": "/zh/uncensored_random/all/index.html"
            }, {
                "title": "一本道(1pondo)",
                "path": "/zh/uncensored_makersr/32/一本道(1pondo)/1.html"
            }, {
                "title": "カリビアンコム(Caribbeancom)",
                "path": "/zh/uncensored_makersr/30/カリビアンコム(Caribbeancom)/1.html"
            }, {
                "title": "カリビアンコム PPV(Caribbeancompr)",
                "path": "/zh/uncensored_makersr/40/カリビアンコムPPV(Caribbeancompr)/1.html"
            }, {
                "title": "天然むすめ(10musume)",
                "path": "/zh/uncensored_makersr/31/天然むすめ(10musume)/1.html"
            }, {
                "title": "HEYZO",
                "path": "/zh/uncensored_makersr/17/HEYZO/1.html"
            }, {
                "title": "東京熱(Tokyo Hot)",
                "path": "/zh/uncensored_makersr/29/東京熱(Tokyo Hot)/1.html"
            }, {
                "title": "ガチん娘！(Gachinco)",
                "path": "/zh/uncensored_makersr/35/ガチん娘！(Gachinco)/1.html"
            }, {
                "title": "パコパコママ(pacopacomama)",
                "path": "/zh/uncensored_makersr/36/パコパコママ(pacopacomama)/1.html"
            }, {
                "title": "エッチな4610",
                "path": "/zh/uncensored_makersr/34/エッチな4610/1.html"
            }, {
                "title": "人妻斬り0930",
                "path": "/zh/uncensored_makersr/38/人妻斬り0930/1.html"
            }, {
                "title": "エッチな0930",
                "path": "/zh/uncensored_makersr/39/エッチな0930/1.html"
            }, {
                "title": "トリプルエックス (XXX-AV)",
                "path": "/zh/uncensored_makersr/126/トリプルエックス (XXX-AV)/1.html"
            }]
        }, {
            "title": "H動畫",
            "path": "/zh/animation_random/all/index.html",
            "type": "video",
            "sub": [{
                "title": "H動畫",
                "path": "/zh/animation_list/all/1.html"
            }, {
                "title": "H動畫隨機",
                "path": "/zh/animation_random/all/index.html"
            }, {
                "title": "H有碼動畫随机",
                "path": "/zh/CensoredAnimation_random/all/index.html"
            }, {
                "title": "H有碼動畫",
                "path": "/zh/CensoredAnimation_list/all/1.html"
            }, {
                "title": "H無碼動畫随机",
                "path": "/zh/UncensoredAnimation_random/all/index.html"
            }, {
                "title": "H無碼動畫",
                "path": "/zh/UncensoredAnimation_list/all/1.html"
            }, {
                "title": "H_3D動畫随机",
                "path": "/zh/tdAnimation_random/all/index.html"
            }, {
                "title": "H_3D動畫",
                "path": "/zh/tdAnimation_list/all/1.html"
            }]
        }, {
            "title": "國產自拍",
            "path": "/zh/dt_random/all/index.html",
            "type": "video",
            "sub": [{
                "title": "國產自拍",
                "path": "/zh/dt_list/all/1.html"
            }, {
                "title": "國產自拍随机",
                "path": "/zh/dt_random/all/index.html"
            }]
        }, {
            "title": "寫真圖片",
            "path": "/zh/cg_random/all/index.html",
            "type": "video",
            "sub": [{
                "title": "寫真圖片",
                "path": "/zh/cg_list/all/1.html"
            }, {
                "title": "寫真隨機",
                "path": "/zh/cg_random/all/index.html"
            }, {
                "title": "國產寫真",
                "path": "/zh/cwp_random/all/index.html"
            }, {
                "title": "國產隨機",
                "path": "/zh/cwp_list/all/1.html"
            }, {
                "title": "Bejean On Line",
                "path": "/zh/cg_search/all/Bejean On Line/1.html"
            }, {
                "title": "Bomb.tv",
                "path": "/zh/cg_search/all/Bomb.tv/1.html"
            }, {
                "title": "DGC",
                "path": "/zh/cg_search/all/DGC/1.html"
            }, {
                "title": "Graphis Gals",
                "path": "/zh/cg_search/all/Graphis Gals/1.html"
            }, {
                "title": "Graphis Hatsunugi",
                "path": "/zh/cg_search/all/Graphis Hatsunugi/1.html"
            }, {
                "title": "image.tv",
                "path": "/zh/cg_search/all/image.tv/1.html"
            }, {
                "title": "Sabra.net",
                "path": "/zh/cg_search/all/Sabra.net/1.html"
            }, {
                "title": "S-Cute",
                "path": "/zh/cg_search/all/S-Cute/1.html"
            }, {
                "title": "X-City",
                "path": "/zh/cg_search/all/X-City/1.html"
            }, {
                "title": "YS Web",
                "path": "/zh/cg_search/all/YS Web/1.html"
            }, {
                "title": "3AGirl AAA女郎",
                "path": "/zh/cwp_search/all/3AGirl AAA女郎/1.html"
            }, {
                "title": "ROSI寫真",
                "path": "/zh/cwp_search/all/ROSI寫真/1.html"
            }, {
                "title": "RU1MM 如壹寫真",
                "path": "/zh/cwp_search/all/RU1MM 如壹寫真/1.html"
            }, {
                "title": "DISI第四印象",
                "path": "/zh/cwp_search/all/DISI第四印象/1.html"
            }]
        }, {
            "title": "小說",
            "path": "/zh/novel_random/all/index.html",
            "type": "video",
            "sub": [{
                "title": "小說",
                "path": "/zh/novel_list/all/1.html"
            }, {
                "title": "小說隨機",
                "path": "/zh/novel_random/all/index.html"
            }, {
                "title": "學生校園",
                "path": "/zh/novel_search/all/學生校園/1.html"
            }, {
                "title": "職場激情",
                "path": "/zh/novel_search/all/職場激情/1.html"
            }, {
                "title": "經驗故事",
                "path": "/zh/novel_search/all/經驗故事/1.html"
            }, {
                "title": "暴力虐待",
                "path": "/zh/novel_search/all/暴力虐待/1.html"
            }, {
                "title": "不倫戀情",
                "path": "/zh/novel_search/all/不倫戀情/1.html"
            }, {
                "title": "群體換伴",
                "path": "/zh/novel_search/all/群體換伴/1.html"
            }, {
                "title": "人妻熟女",
                "path": "/zh/novel_search/all/人妻熟女/1.html"
            }, {
                "title": "科學幻想",
                "path": "/zh/novel_search/all/科學幻想/1.html"
            }, {
                "title": "其他故事",
                "path": "/zh/novel_search/all/其他故事/1.html"
            }, {
                "title": "玄幻仙俠",
                "path": "/zh/novel_search/all/玄幻仙俠/1.html"
            }, {
                "title": "動漫修改",
                "path": "/zh/novel_search/all/動漫修改/1.html"
            }, {
                "title": "長篇連載",
                "path": "/zh/novel_search/all/長篇連載/1.html"
            }]
        }]
        const currentCate = categoryList[Apollo.data.category]
        let url
        let type = currentCate.type
        let path = currentCate.path
        if (currentCate.sub.length > 0) {
            url = Apollo.url + getMyVar("url", currentCate.sub[Apollo.data.subCate].path)
            path = currentCate.sub[Apollo.data.subCate].path
        } else {
            url = Apollo.url + getMyVar("url", currentCate.path)
        }
        url = url.replace(/https?.*(https?.*)/, "$1")
        if (page === 1) {
            categoryList.forEach((cate, index) => {
                Apollo.d.push({
                    title: parseInt(Apollo.data.category) === index ? '““””' + cate.title.fontcolor(Apollo.getRangeColors()) : cate.title,
                    url: $(Apollo.empty + "#noLoading#")
                        .lazyRule((index) => {
                            putMyVar("Apo.category", index.toString())
                            putMyVar("Apo.subCate", '0')
                            clearMyVar("url")
                            clearMyVar("sort")
                            clearMyVar("yurl");
                            refreshPage(true)
                            return "hiker://empty"
                        }, index),
                    col_type: 'scroll_button',
                })
            })
            if (currentCate.sub.length > 0) {
                Apollo.d.push({
                    col_type: 'blank_block',
                })
                currentCate.sub.forEach((cate, index) => {
                    Apollo.d.push({
                        title: parseInt(Apollo.data.subCate) === index ? '““””' + cate.title.fontcolor(Apollo.getRangeColors()) : cate.title,
                        url: $(Apollo.empty + "#noLoading#")
                            .lazyRule((index) => {
                                putMyVar("Apo.subCate", index.toString())
                                clearMyVar("url")
                                clearMyVar("sort")
                                clearMyVar("yurl");
                                refreshPage(true)
                                return "hiker://empty"
                            }, index),
                        col_type: 'scroll_button',
                    })
                })
            }
        }
        if (MY_PAGE == 1 && !/category/.test(url)) {
            Apollo.d.push({
                title: "🔍",
                url: $.toString((url) => {
                    putMyVar('keyword', input);
                    var searchUrl = getHome(url) + "/zh/fc_search/all/" + input + "/1.html"
                    putMyVar("url", searchUrl);
                    refreshPage();
                    return "hiker://empty"
                }, url),
                desc: '搜索...',
                col_type: "input",
                extra: {
                    defaultValue: getMyVar('keyword', '') || "",
                }
            });
        }
        //翻页
        /*
        if (page !== 1) {
            url = url.includes("?") ? url + "&page=" + page : url + "?&page=" + page
        }
        const html = fetch(url, {
            headers: {
                "Cookie": fetchPC('hiker://files/rules/Apollo/Cookie/javlibrary_cookie.txt') || '',
                "User-Agent": "Mozilla/5.0 (Linux; Android 12; SM-G9750 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046279 Mobile Safari/537.36",
            }
        })*/
        let nextPage = getMyVar("nextPage", "");
        if (nextPage && MY_PAGE > 1) {
            if (url.includes("random")) {
                url = url
            } else {
                url = nextPage;
            };
        } else if (MY_PAGE > 1) {
            if (url.endsWith("/zh/")) {
                url = url
            } else {
                url = "没有下一页哦😑"
            };
        }

        var html = fetch(url, {
            headers: {
                "user-agent": "Mozilla/5.0 (Linux; Android 12; SM-G9750 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046285 Mobile Safari/537.36"
            }
        })

        Apollo.HostParse(url, html)
        log(url)
        try {
            var next = pdfh(html, "body&&.pagination-row&&.previous-next:matches(>)&&a&&href")
            putMyVar("nextPage", next);
        } catch {
            clearMyVar("nextPage");
            //log("可能不存在下一页或者下一页定位有问题");
        }

        if (url.includes("searchbyid")) {
            Apollo.d.push({
                title: '““””' + "识别码搜寻结果".fontcolor("#67E0FA"),
                url: "hiker://empty",
                col_type: "text_1",
                extra: {
                    lineVisible: false
                }
            })
        }

        switch (type) {
            case 'video':
                if (url.includes("category")) {
                    Apollo.seriesType(url, html)
                } else {
                    Apollo.videoType(url, html)
                }
                break
            case 'actress':
                //Apollo.avatarType(html)
                break
            case 'series':
                Apollo.seriesType(html)
                break
            default:
                Apollo.videoType(url, html)
        }
        setResult(Apollo.d)
    },

    //一级视频列表
    videoType: (url, html) => {
        if (url.includes("cg_") || url.includes("cwp_")) {
            col = "movie_3";
            lazy = $('#noHistory#')
                .lazyRule(() => {
                    var html = fetch(input)
                    var script = pdfh(html, "body&&script[language]&&Html")
                    eval(script)
                    var pics = Large_cgurl.join("&&")
                    return "pics://" + pics
                })
        } else if (url.includes("novel_")) {
            col = "avatar";
            lazy = $('#noHistory#')
                .rule(() => {
                    var d = []
                    var html = fetch(MY_URL)
                    var title = pdfh(html, '.archive-title&&Text');
                    if (title !== null) {
                        d.push({
                            title: '““””<middle><font color=#FFA500>' + title + '</font></middle>',
                            url: MY_URL,

                            col_type: 'text_center_1',
                            extra: {
                                lineVisible: false
                            }
                        })
                    }
                    var content = pdfh(html, 'body&&#novel_content_txtsize&&Html')
                    d.push({
                        title: "<middle><font color=grey>" + content + "</font></middle>",
                        col_type: 'rich_text',
                        extra: {
                            lineVisible: false
                        }
                    })
                    setResult(d)
                })
        } else {
            col = "movie_2";
            lazy = $('#noHistory#')
                .rule(() => {
                    const Apollo = $.require('hiker://page/Apollo')
                    Apollo.videoParse(MY_URL)
                    setResult(Apollo.d)
                })
        }
        try {
            var currpagenum = pdfh(html, "body&&.pagination-row&&.current&&Text")
        } catch {
            var currpagenum = "1"
        }
        try {
            if (currpagenum.includes("隨機")) {
                var lastpagenum = 1
            } else {
                var lastpagenum = pdfh(html, "body&&.pagination-row&&.previous-next:matches(>)+li&&a&&Text")
                if (lastpagenum == "") {
                    lastpagenum = pdfh(html, "body&&.pagination-row&&li:nth-last-child(2)&&Text")
                }
                if (lastpagenum == ">") {
                    lastpagenum = pdfh(html, "body&&.pagination-row&&li:nth-last-child(3)&&Text")
                }
            }
        } catch {
            var lastpagenum = currpagenum
        }
        var list = pdfa(html, ".posts&&.post");
        list.forEach(item => {
            var vurl = pdfh(item, 'a&&href');
            Apollo.d.push({
                title: pdfh(item, "h3&&a&&Text"),
                desc: pdfh(item, ".meta&&Text"),
                img: pdfh(item, "img&&src") ? pdfh(item, "img&&src").replace("/s/", "/b/") : "https://thumbsnap.com/i/wxDcxfJH.png",
                url: vurl + lazy,
                col_type: col,
                extra: {
                    pageTitle: pdfh(item, "h3&&a&&Text"),
                    longClick: !url.includes("content") ? [{
                        title: '【跳页】【当前第>' + currpagenum + '<页】【尾页=>' + lastpagenum + '页】',
                        js: $.toString((lastpagenum, url) => {
                                return $('', '正确的页码：1=>' + lastpagenum + "页")
                                    .input((url, lastpagenum) => {
                                            if (input > 0 && input % 1 == 0 && input <= parseInt(lastpagenum)) {
                                                var jumpu = url.replace(/\d+\.html/, input + ".html")
                                                putMyVar("url", jumpu);
                                                putMyVar("yurl", jumpu);
                                                refreshPage();
                                                return 'toast://你已经穿越到了' + input + '页'
                                            } else {
                                                return "toast://请输入正确的页码"
                                            }
                                        },
                                        url, lastpagenum)
                            },
                            lastpagenum, url)
                    }] : ""
                }
            })
        })
    },

    //一级系列
    seriesType: (url, html) => {
        if (MY_PAGE == 1) {
            Apollo.videoSort(html)
        }
        Apollo.videoType(url, html)
    },

    //一级sort
    videoSort: (html) => {
        Apollo.d.push({
            col_type: "blank_block",
        })
        var chtml = fetch("https://18av.mm-cg.com/zh/chinese_categorylist/list/index.html")
        const sort = pdfa(chtml, 'body&&.posts&&.post')
        sort.forEach((item, index) => {
            var title = pdfh(item, 'Text');
            Apollo.d.push({
                title: getMyVar('sort', '0') == index ? '‘‘’’<strong><font color="#ff1493">' + title + '</font></strong>' : title,
                url: pdfh(item, 'a&&href') + $('#noLoading#')
                    .lazyRule((index) => {
                        putMyVar('sort', index);
                        putMyVar("url", input);
                        refreshPage();
                        return 'hiker://empty'
                    }, index),
                col_type: 'scroll_button'
            })
            if (index == 54 || index == 123 || index == 189 || index == 294) {
                Apollo.d.push({
                    col_type: "blank_block",
                })
            }
        })
    },
    //一级页面.简
    avatarParse: (url) => {
        addListener("onClose", $.toString(() => {
            clearMyVar("yurl");
            clearMyVar("ysort");
            clearMyVar("nextPage1");
        }));
        url = url.replace(/(.*?)#.*/, "$1");
        url = getMyVar("yurl", url)
            .replace(/(.*?)#.*/, "$1");
        /*
        if (MY_PAGE !== 1) {
    
