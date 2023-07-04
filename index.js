function Header() {
    let [expanded, setExpanded] = React.useState(false);
    let [toggled, setToggled] = React.useState(false);
    const onClick = () => {
        if (!toggled) {
            setToggled(true);
        }
        setExpanded(!expanded);
    };
    return /*#__PURE__*/_jsxs("header", {
        className: "header",
        children: [/*#__PURE__*/_jsx("a", {
            href: "/",
            className: "header__logo",
            "aria-label": "\u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u043E\u043C"
        }), /*#__PURE__*/_jsx("button", {
            className: "header__menu",
            "aria-expanded": expanded ? 'true' : 'false',
            onClick: onClick,
            children: /*#__PURE__*/_jsx("span", {
                className: "header__menu-text a11y-hidden",
                children: expanded ? 'Закрыть меню' : 'Открыть меню'
            })
        }), /*#__PURE__*/_jsxs("ul", {
            className: 'header__links' + (expanded ? ' header__links_opened' : '') + (toggled ? ' header__links-toggled' : ''),
            children: [/*#__PURE__*/_jsx("li", {
                className: "header__item",
                children: /*#__PURE__*/_jsx("a", {
                    className: "header__link header__link_current",
                    href: "/",
                    "aria-current": "page",
                    children: "\u0421\u0432\u043E\u0434\u043A\u0430"
                })
            }), /*#__PURE__*/_jsx("li", {
                className: "header__item",
                children: /*#__PURE__*/_jsx("a", {
                    className: "header__link",
                    href: "/devices",
                    children: "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
                })
            }), /*#__PURE__*/_jsx("li", {
                className: "header__item",
                children: /*#__PURE__*/_jsx("a", {
                    className: "header__link",
                    href: "/scripts",
                    children: "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"
                })
            })]
        })]
    });
}
function Event(props) {
    const ref = React.useRef();
    const {
        onSize
    } = props;
    React.useEffect(() => {
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        if (onSize) {
            onSize({
                width,
                height
            });
        }
    });
    return /*#__PURE__*/_jsx("li", {
        ref: ref,
        className: 'event' + (props.slim ? ' event_slim' : ''),
        children: /*#__PURE__*/_jsxs("button", {
            className: "event__button",
            children: [/*#__PURE__*/_jsx("span", {
                className: `event__icon event__icon_${props.icon}`,
                role: "img",
                "aria-label": props.iconLabel
            }), /*#__PURE__*/_jsx("h4", {
                className: "event__title",
                children: props.title
            }), props.subtitle && /*#__PURE__*/_jsx("span", {
                className: "event__subtitle",
                children: props.subtitle
            })]
        })
    });
}
const TABS = {
    all: {
        title: 'Все',
        items: [{
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Yeelight LED Smart Bulb',
            subtitle: 'Включено'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'D-Link Omna 180 Cam',
            subtitle: 'Включится в 17:00'
        }, {
            icon: 'temp',
            iconLabel: 'Температура',
            title: 'Elgato Eve Degree Connected',
            subtitle: 'Выключено до 17:00'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'LIFX Mini Day & Dusk A60 E27',
            subtitle: 'Включится в 17:00'
        }, {
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Mi Air Purifier 2S',
            subtitle: 'Включено'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'Philips Zhirui',
            subtitle: 'Включено'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'Philips Zhirui',
            subtitle: 'Включено'
        }, {
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Mi Air Purifier 2S',
            subtitle: 'Включено'
        }]
    },
    kitchen: {
        title: 'Кухня',
        items: [{
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Yeelight LED Smart Bulb',
            subtitle: 'Включено'
        }, {
            icon: 'temp',
            iconLabel: 'Температура',
            title: 'Elgato Eve Degree Connected',
            subtitle: 'Выключено до 17:00'
        }]
    },
    hall: {
        title: 'Зал',
        items: [{
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'Philips Zhirui',
            subtitle: 'Выключено'
        }, {
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Mi Air Purifier 2S',
            subtitle: 'Выключено'
        }]
    },
    lights: {
        title: 'Лампочки',
        items: [{
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'D-Link Omna 180 Cam',
            subtitle: 'Включится в 17:00'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'LIFX Mini Day & Dusk A60 E27',
            subtitle: 'Включится в 17:00'
        }, {
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Mi Air Purifier 2S',
            subtitle: 'Включено'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'Philips Zhirui',
            subtitle: 'Включено'
        }]
    },
    cameras: {
        title: 'Камеры',
        items: [{
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Mi Air Purifier 2S',
            subtitle: 'Включено'
        }]
    }
};
for (let i = 0; i < 6; ++i) {
    TABS.all.items = [...TABS.all.items, ...TABS.all.items];
}
const TABS_KEYS = Object.keys(TABS);
function Main() {
    const ref = React.useRef();
    const initedRef = React.useRef(false);
    const [activeTab, setActiveTab] = React.useState('');
    const [hasRightScroll, setHasRightScroll] = React.useState(false);
    React.useEffect(() => {
        if (!activeTab && !initedRef.current) {
            initedRef.current = true;
            setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
        }
    });
    const onSelectInput = event => {
        setActiveTab(event.target.value);
    };
    let sizes = [];
    const onSize = size => {
        sizes = [...sizes, size];
    };
    React.useEffect(() => {
        const sumWidth = sizes.reduce((acc, item) => acc + item.width, 0);
        const sumHeight = sizes.reduce((acc, item) => acc + item.height, 0);
        const newHasRightScroll = sumWidth > ref.current.offsetWidth;
        if (newHasRightScroll !== hasRightScroll) {
            setHasRightScroll(newHasRightScroll);
        }
    });
    const onArrowCLick = () => {
        const scroller = ref.current.querySelector('.section__panel:not(.section__panel_hidden)');
        if (scroller) {
            scroller.scrollTo({
                left: scroller.scrollLeft + 400,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/_jsxs("main", {
        className: "main",
        children: [/*#__PURE__*/_jsxs("section", {
            className: "section main__general",
            children: [/*#__PURE__*/_jsx("h2", {
                className: "section__title section__title-header section__main-title",
                children: "\u0413\u043B\u0430\u0432\u043D\u043E\u0435"
            }), /*#__PURE__*/_jsxs("div", {
                className: "hero-dashboard",
                children: [/*#__PURE__*/_jsxs("div", {
                    className: "hero-dashboard__primary",
                    children: [/*#__PURE__*/_jsx("h3", {
                        className: "hero-dashboard__title",
                        children: "\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439!"
                    }), /*#__PURE__*/_jsx("p", {
                        className: "hero-dashboard__subtitle",
                        children: "\u0414\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430."
                    }), /*#__PURE__*/_jsxs("ul", {
                        className: "hero-dashboard__info",
                        children: [/*#__PURE__*/_jsxs("li", {
                            className: "hero-dashboard__item",
                            children: [/*#__PURE__*/_jsx("div", {
                                className: "hero-dashboard__item-title",
                                children: "\u0414\u043E\u043C\u0430"
                            }), /*#__PURE__*/_jsxs("div", {
                                className: "hero-dashboard__item-details",
                                children: ["+23", /*#__PURE__*/_jsx("span", {
                                    className: "a11y-hidden",
                                    children: "\xB0"
                                })]
                            })]
                        }), /*#__PURE__*/_jsxs("li", {
                            className: "hero-dashboard__item",
                            children: [/*#__PURE__*/_jsx("div", {
                                className: "hero-dashboard__item-title",
                                children: "\u0417\u0430 \u043E\u043A\u043D\u043E\u043C"
                            }), /*#__PURE__*/_jsxs("div", {
                                className: "hero-dashboard__item-details",
                                children: ["+19", /*#__PURE__*/_jsx("span", {
                                    className: "a11y-hidden",
                                    children: "\xB0"
                                }), /*#__PURE__*/_jsx("div", {
                                    className: "hero-dashboard__icon hero-dashboard__icon_rain",
                                    role: "img",
                                    "aria-label": "\u0414\u043E\u0436\u0434\u044C"
                                })]
                            })]
                        })]
                    })]
                }), /*#__PURE__*/_jsxs("ul", {
                    className: "hero-dashboard__schedule",
                    children: [/*#__PURE__*/_jsx(Event, {
                        icon: "temp",
                        iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
                        title: "Philips Cooler",
                        subtitle: "\u041D\u0430\u0447\u043D\u0435\u0442 \u043E\u0445\u043B\u0430\u0436\u0434\u0430\u0442\u044C \u0432 16:30"
                    }), /*#__PURE__*/_jsx(Event, {
                        icon: "light",
                        iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
                        title: "Xiaomi Yeelight LED Smart Bulb",
                        subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
                    }), /*#__PURE__*/_jsx(Event, {
                        icon: "light",
                        iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
                        title: "Xiaomi Yeelight LED Smart Bulb",
                        subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
                    })]
                })]
            })]
        }), /*#__PURE__*/_jsxs("section", {
            className: "section main__scripts",
            children: [/*#__PURE__*/_jsx("h2", {
                className: "section__title section__title-header",
                children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"
            }), /*#__PURE__*/_jsxs("ul", {
                className: "event-grid",
                children: [/*#__PURE__*/_jsx(Event, {
                    slim: true,
                    icon: "light2",
                    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
                    title: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u0432 \u0434\u043E\u043C\u0435 \u0438 \u0432\u043E \u0434\u0432\u043E\u0440\u0435"
                }), /*#__PURE__*/_jsx(Event, {
                    slim: true,
                    icon: "schedule",
                    iconLabel: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                    title: "\u042F \u0443\u0445\u043E\u0436\u0443"
                }), /*#__PURE__*/_jsx(Event, {
                    slim: true,
                    icon: "light2",
                    iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
                    title: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435"
                }), /*#__PURE__*/_jsx(Event, {
                    slim: true,
                    icon: "temp2",
                    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
                    title: "\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0443\u044E \u0432\u0430\u043D\u043D\u0443",
                    subtitle: "\u041D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0432 18:00"
                }), /*#__PURE__*/_jsx(Event, {
                    slim: true,
                    icon: "temp2",
                    iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
                    title: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B \u0442\u0451\u043F\u043B\u044B\u043C \u0432\u043E \u0432\u0441\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435"
                })]
            })]
        }), /*#__PURE__*/_jsxs("section", {
            className: "section main__devices",
            children: [/*#__PURE__*/_jsxs("div", {
                className: "section__title",
                children: [/*#__PURE__*/_jsx("h2", {
                    className: "section__title-header",
                    children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
                }), /*#__PURE__*/_jsx("select", {
                    className: "section__select",
                    defaultValue: "all",
                    onInput: onSelectInput,
                    children: TABS_KEYS.map(key => /*#__PURE__*/_jsx("option", {
                        value: key,
                        children: TABS[key].title
                    }, key))
                }), /*#__PURE__*/_jsx("ul", {
                    role: "tablist",
                    className: "section__tabs",
                    children: TABS_KEYS.map(key => /*#__PURE__*/_jsx("li", {
                        role: "tab",
                        "aria-selected": key === activeTab ? 'true' : 'false',
                        tabIndex: key === activeTab ? '0' : undefined,
                        className: 'section__tab' + (key === activeTab ? ' section__tab_active' : ''),
                        id: `tab_${key}`,
                        "aria-controls": `panel_${key}`,
                        onClick: () => setActiveTab(key),
                        children: TABS[key].title
                    }, key))
                })]
            }), /*#__PURE__*/_jsxs("div", {
                className: "section__panel-wrapper",
                ref: ref,
                children: [TABS_KEYS.map(key => /*#__PURE__*/_jsx("div", {
                    role: "tabpanel",
                    className: 'section__panel' + (key === activeTab ? '' : ' section__panel_hidden'),
                    "aria-hidden": key === activeTab ? 'false' : 'true',
                    id: `panel_${key}`,
                    "aria-labelledby": `tab_${key}`,
                    children: /*#__PURE__*/_jsx("ul", {
                        className: "section__panel-list",
                        children: TABS[key].items.map((item, index) => /*#__PURE__*/_jsx(Event, {
                            ...item,
                            onSize: onSize
                        }, index))
                    })
                }, key)), hasRightScroll && /*#__PURE__*/_jsx("div", {
                    className: "section__arrow",
                    onClick: onArrowCLick
                })]
            })]
        })]
    });
}
setTimeout(() => {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    root.render( /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Header, {}), /*#__PURE__*/_jsx(Main, {})]
    }));
}, 100);
