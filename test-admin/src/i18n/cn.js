import chineseMessages from 'ra-language-chinese';

export default {
    ...chineseMessages,
    pos: {
        search: '搜索',
        configuration: '配置',
        language: '语言',
        theme: {
            name: 'Theme',
            light: 'Clair',
            dark: 'Obscur',
        },
        dashboard: {
            monthly_revenue: 'CA à 30 jours',
            new_orders: 'Nouvelles commandes',
            pending_reviews: 'Commentaires à modérer',
            new_customers: 'Nouveaux clients',
            pending_orders: 'Commandes à traiter',
            order: {
                items:
                    'par %{customer_name}, un poster |||| par %{customer_name}, %{nb_items} posters',
            },
            welcome: {
                title: '欢迎使用辽宁博物馆小程序管理系统',
                subtitle:
                    "辽宁省博物馆，是中国辽宁省内规模最大的综合性博物馆，国家一级博物馆、中央地方共建国家级博物馆。博物馆馆内现有馆藏文物近120000件（套），收藏范围以辽宁地区考古出土文物和传世的历史艺术类文物为主体，藏品包含珍贵文物数万件，分考古、书法、绘画、丝绣、青铜、陶瓷等17个门类。",
                aor_button: 'Site web de react-admin',
                demo_button: '查看详细信息',
            },
        },
        menu: {
            home: '首页设置',
            map: '地图参数',
            collection: '藏品管理',
        },
    },
    resources: {
        map: {
            name: 'Map |||| 地图设置',
            title: '地图设置',
            nickname: '藏品布展',
            fields: {
                id: '序号',
                address: 'Rue',
                birthday: 'Anniversaire',
                city: 'Ville',
                commands: 'Commandes',
                first_name: 'Prénom',
                first_seen: 'Première visite',
                groups: 'Segments',
                has_newsletter: 'Abonné à la newsletter',
                has_ordered: 'A commandé',
                last_name: 'Nom',
                last_seen: 'Vu le',
                last_seen_gte: 'Vu depuis',
                latest_purchase: 'Dernier achat',
                name: 'Nom',
                total_spent: 'Dépenses',
                zipcode: 'Code postal',
            },
            tabs: {
                identity: 'Identité',
                address: 'Adresse',
                orders: 'Commandes',
                reviews: 'Commentaires',
                stats: 'Statistiques',
            },
            page: {
                delete: 'Supprimer le client',
            },
        },
        about: {
            name: 'About |||| 关于配置',
            title: 'Commande n°%{reference}',
            fields: {
                basket: {
                    delivery: 'Frais de livraison',
                    reference: 'Référence',
                    quantity: 'Quantité',
                    sum: 'Sous-total',
                    tax_rate: 'TVA',
                    total: 'Total',
                    unit_price: 'P.U.',
                },
                id: '序号',
                LargeImage: '',
                Title: '标题',
                Content: '内容',
                nb_items: 'Nb articles',
                reference: 'Référence',
                returned: 'Annulée',
                status: 'Etat',
                total_gte: 'Montant minimum',
            },
        },
        notifications: {
            name: 'notifications |||| 首页公告',
            fields: {
                id: '序号',
                Title: '标题',
                Author: '发布者',
                LargeImage: '图片地址',
                Content: '详细内容',
                IssueTime: '发布时间',
                date_lte: 'Emises avant',
                address: 'Adresse',
                total_ex_taxes: 'Montant HT',
                delivery_fees: 'Frais de livraison',
                taxes: 'TVA',
            },
        },
        stations: {
            name: 'stations |||| 蓝牙信标',
            fields: {
                id: '序号',
                uuid: 'uuid',
                title: '标题',
                x: '横坐标',
                y: '纵坐标',
                content: '详细内容'
            },
        },
        collections: {
            title: '藏品管理',
            name: 'Poster |||| 藏品管理',
            fields: {
                id: '序号',
                Title: '标题',
                Dynasty: '朝代',
                Category: '分类',
                Content: '详细说明',
                LargeImage: '图片',
                Status: '展览状态',
                DisplayArea: '展示区域',
                price: 'Prix',
                reference: 'Référence',
                stock_lte: 'Stock faible',
                stock: 'Stock',
                thumbnail: 'Aperçu',
                width_gte: 'Largeur mini',
                width_lte: 'Margeur maxi',
                width: 'Largeur',
            },
            tabs: {
                image: '基本信息',
                details: '详细信息',
                description: '描述',
                reviews: '审查',
            },
        },
        splashes: {
            name: 'Splashes |||| 轮播图片',
            title: '轮播图片',
            fields: {
                id: '序号',
                LargeImage: '图片',
                Title: '标题',
                Author:'作者',
                Content:'详情',
                IssueTime: '发布时间'
            },
        },
    },
};
