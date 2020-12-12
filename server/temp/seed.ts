import * as dotenv from "dotenv";
dotenv.config();

import { connectDatabase } from "../src/database";
import { Listing, User } from "../src/lib/types";

const listings: Listing[] = [
  {
    _id: "5fcbb8408534855b3ecb033d",
    id: "F074LkX6zr4",
    etag: "sksbTWuY-Sk2xf39D0-ioi2vvkE",
    kind: "youtube#video",
    snippet: {
      title: "MIN x VINCOM - HOÀ NHỊP GIÁNG SINH | OFFICIAL MUSIC VIDEO",
      description:
        "HOÀ NHỊP GIÁNG SINH | MIN x VINCOM | OFFICIAL MUSIC VIDEO\n#Min #Vincom #HoaNhipDonGiangSinh #LungLinhMuaLeHoi \n❤️ Mùa Noel năm nay, MIN và Vincom sẽ gửi tặng đến các Miniacs một bài hát giáng sinh vô cùng đặc biệt được sáng tác bởi nhạc sĩ Khắc Hưng. Chúc các Miniacs một giáng sinh vui vẻ an lành với món quà âm nhạc giáng sinh tuyệt vời này nhé. Merry Christmas!!!\n\n\nLink beat Hòa Nhịp Giáng Sinh: https://youtu.be/Kl09twLrr8k\n\n\n 👉https://www.facebook.com/vincom.com.vn/\n👉https://vincom.com.vn/ .\nAll issues related to copyright please contact: support@metub.net\n———\n►More about MIN\nhttps://MIN.lnk.to/ABOUTMIN\nFacebook: https://www.facebook.com/min.official...\nInstagram: http://instagram.com/minminmin0712\nTiktok: https://www.tiktok.com/@minminmin0712\n\n© Bản quyền thuộc về MIN\n© Copyright by MIN - Do not re-upload",
      publishedAt: "2019-12-13T12:30:11Z",
      channelId: "UCLFOZcEUPlwdc02FHkOpqkA",
      channelTitle: "MIN OFFICIAL",
      categoryId: "10",
      liveBroadcastContent: "none",
      tags: [
        "min",
        "min mv",
        "min 2019",
        "hòa nhịp giáng sinh",
        "hoa nhip giang sinh",
        "giáng sinh",
        "nhạc giáng sinh",
        "min vincom",
        "VINCOM",
        "nhạc noel",
        "min nhạc giáng sinh",
        "min nhạc noel",
        "min hòa nhịp giáng sinh",
        "min hoa nhip g",
      ],
    },
    contentDetails: {
      dimension: "2d",
      definition: "hd",
    },
    status: {
      license: "youtube",
    },
    player: {
      embedHtml:
        '<iframe width="539" height="224" src="https://www.youtube.com/embed/F074LkX6zr4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  },
  {
    _id: "5fcbb93fecfd8662c656b2c2",
    id: "lY2yjAdbvdQ",
    etag: "AKxPBTA7EPqQKdy1sYyc-Ed-1to",
    kind: "youtube#video",
    snippet: {
      title: "Shawn Mendes - Treat You Better",
      description:
        "New album WONDER available now\nListen here: https://wonder.lnk.to/OutNow\n\nFollow Shawn Mendes\nInstagram | https://www.instagram.com/shawnmendes/\nTwitter | https://twitter.com/ShawnMendes\nFacebook | https://www.facebook.com/ShawnMendesOfficial\nSnap | https://www.snapchat.com/add/shawnmendes1\nTikTok | https://www.tiktok.com/@shawnmendes\nWebsite | http://www.shawnmendesofficial.com/\n\nSubscribe to YouTube\nhttps://ShawnMendes.lnk.to/Subscribe-OnYouTube",
      publishedAt: "2016-07-12T17:00:05Z",
      channelId: "UC4-TgOSMJHn-LtY4zCzbQhw",
      channelTitle: "ShawnMendesVEVO",
      categoryId: "10",
      liveBroadcastContent: "none",
      tags: [
        "Shawn Mendes",
        "Treat You Better",
        "I Know What You Did Last Summer",
        "Stitches",
        "shawn mendes mercy",
        "shawn mendes treat you better lyrics",
        "shawn mendes stitches",
        "shawn mendes lyrics",
        "treat you better shawn mendes lyrics",
        "treat you better lyrics",
        "treat you better karaoke",
        "treat you better live",
        "treat you better shawn mendes",
        "Tratá-lo melhor",
        "Tratá-lo melhor Shawn Mendes",
      ],
    },
    contentDetails: {
      dimension: "2d",
      definition: "hd",
    },
    status: {
      license: "youtube",
    },
    player: {
      embedHtml:
        '<iframe width="539" height="303" src="https://www.youtube.com/embed/lY2yjAdbvdQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  },
  {
    _id: "5fcbb9dbecfd8662c656b2c3",
    id: "tt2k8PGm-TI",
    etag: "k2EsCjkO18bXjjWWhSSiqPtGy4o",
    kind: "youtube#video",
    snippet: {
      title: "ZAYN - Dusk Till Dawn ft. Sia (Official Music Video)",
      description:
        'ZAYN\'s "Dusk Till Dawn" ft. Sia on iTunes: http://smarturl.it/ZDTD/itunes?IQid=yt\nStream/Add on Spotify: http://smarturl.it/ZDTD/spotify?IQid=yt\nGet it on Amazon Music: http://smarturl.it/ZDTD/amazon?IQid=yt\nStream on Apple Music: http://smarturl.it/ZDTD/applemusic?IQid=yt\nGet it on Google Play: http://smarturl.it/ZDTD/googleplay?IQid=yt\nStream on Deezer: http://smarturl.it/ZDTD/deezer?IQid=yt\n \nFollow ZAYN -\nFacebook: http://www.facebook.com/ZAYN\nTwitter: https://twitter.com/zaynmalik\nInstagram: http://www.instagram.com/ZAYN\nSnapchat: https://www.snapchat.com/add/ZAYN\nYouTube Subscribe: http://smarturl.it/ZAYNxVEVO\nSpotify: http://smarturl.it/ZAYNSpotify\nSite: http://www.inZAYN.com\n\n#Zayn #DuskTillDawn #Vevo #Pop #OfficialMusicVideo',
      publishedAt: "2017-09-07T12:00:09Z",
      channelId: "UCy5FUarBYUHFpPtYVuvzgcA",
      channelTitle: "ZaynVEVO",
      categoryId: "10",
      liveBroadcastContent: "none",
      tags: [
        "Dusk Till Dawn",
        "Pop",
        "RCA Records Label",
        "ZAYN feat. Sia",
        "ZAYN Vevo",
        "Vevo Music",
      ],
    },
    contentDetails: {
      dimension: "2d",
      definition: "hd",
    },
    status: {
      license: "youtube",
    },
    player: {
      embedHtml:
        '<iframe width="539" height="303" src="https://www.youtube.com/embed/tt2k8PGm-TI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  },
  {
    _id: "5fcd217fc13f440366324030",
    id: "7jQipab-Ddc",
    etag: "W2itnswAhnDH9oMXmqWAOHaa3r4",
    kind: "youtube#video",
    snippet: {
      title: "WOWY - THIÊN ĐÀNG ft JOLIPOLI ( tại ELLE SHOW ) Full version",
      description:
        "Link nghe Zing MP3: http://bit.ly/ZingMP3TD\n#WOWY - THIÊN ĐÀNG ft #JOLIPOLI ( #ELLE SHOW ) #new #rap #rapviet #rap_việt #thiendang\nWowy sáng tác một bài nhạc tên Thiên Đàng lấy cảm hứng từ sau khi dự tiệc cưới private của anh Phạm Trần Nhật Minh (Minh Nhựa) năm 2013, vô tình gặp luôn nhà thiết kế nổi tiếng Phạm Đăng Anh Thư (chủ JoliPoli) tại tiệc kín đó, và bẵng đi thời gian khá xa. Sau 7-8 năm, Wowy vừa vô tình gặp và kết nối lại với anh Minh Nhựa, Thư JoliPoli, anh Diep Anh Tuan cùng uống trà đàm đạo. Sau khi về Thư gọi hỏi muốn Wowy mở màn cho show của Thư tại Elle show, chủ đề là “Kiss from the Cloud”, vừa nghe xong đề xuất Wowy nhớ tới bài Thiên Đàng demo năm nào của mình vẫn bỏ trống, quá hợp khung cảnh, thay hết chữ mày tao thành anh em xong nghe cái khác hoàn toàn, ngọt ngào dã man. Trong 4 ngày, làm beat lại từ đầu, thu âm, sáng tác mới thêm cùng Phạm Hải Âu, hoàn thành xong thành 1 bài nhạc hoàn toàn mới để đưa các thiên sứ Hoa Hậu, Á Hậu, Siêu Mẫu như Hoàng Thuỳ, Lan Khuê, Lý Quý Khánh, Huyền My, Lương Thuỳ Linh, Kiều Loan, ... cùng Wowy lên thiên đàng.\nMong bài nhạc ngọt ngào này đem đến tình yêu say đắm cho các cặp đôi yêu nhau và muốn cùng nhau lên thiên đàng. Rất vui nếu bài nhạc có thể góp một phần cho chứng kiến hạnh phục ngọt ngào của các bạn bởi Wowy.\n\nFollow Wowy:\r\nhttp://facebook.com/artistwowy\r\nhttp://instagram.com/wowynguyen\r\nhttp://youtube.com/wowysg\r\nhttp://wowynguyen.com\r\n🎤🎹🎧🎵\r\nWowy is a Vietnamese rapper, composer, actor, contemporary artist.\r\nContact booking: wowynguyen@gmail.com",
      publishedAt: "2020-10-05T23:30:13Z",
      channelId: "UC4epxz9TwShqMzkmm28nh2w",
      channelTitle: "Wowy",
      categoryId: "10",
      liveBroadcastContent: "none",
      tags: [
        "Wowy",
        "rap",
        "wowy elle",
        "wowy rapviet",
        "wowy jolipoli",
        "wowy rap việt elle",
        "wowy elle show",
        "jolipoli elle",
        "wowy rap elle",
        "wowy thiên đàng",
        "wowy love",
        "wowy rap love",
        "wowy rap việt",
        "wowy dế choắt elle",
        "elle show wowy",
        "wowy elle man",
        "rapper wowy",
        "wowy hoa hậu",
        "wowy á hậu",
        "rap love wowy",
        "rap việt",
        "rap việt wowy",
        "rapviet",
        "wowy ròm",
        "ròm wowy",
        "wowy rap",
        "lão đại wowy",
        "wowy 2020",
        "wowy rap 2020",
        "rap viet",
        "JOLIPOLI",
        "THIÊN ĐÀNG",
        "thien dang",
        "thien dang rap",
      ],
    },
    contentDetails: {
      dimension: "2d",
      definition: "hd",
    },
    status: {
      license: "youtube",
    },
    player: {
      embedHtml:
        '<iframe width="539" height="360" src="https://www.youtube.com/embed/7jQipab-Ddc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  },
  {
    _id: "5fcd21a9c13f440366324031",
    id: "CK0FTKoestE",
    etag: "FyqK7NqFIJ8zFrLJuN87SOrVtyo",
    kind: "youtube#video",
    snippet: {
      title: "Money Weekly: Vị tiền trên từng ngón tay? | VTV24",
      description:
        '"Ngón tay dịch chuyển, bạn sẽ có tiền”? Tuy nhiên nếu để “tay” nhanh hơn “não” thì tiền không những mất, mà tay không chừng cũng sẽ bị tật!\n----------\nĐồng hành cùng VTV Digital tại:\n\nỨng dụng VTVgo\nAndroid: https://bit.ly/305aQLs\niOS: https://apple.co/3g8yMTS\nhoặc xem trực tiếp trên https://vtvgo.vn/\n\nBáo điện tử: https://VTV.vn\n\nFanpage:\nTin tức, Xã hội: https://fb.com/tintucvtv24\nChuyên trang Tài Chính: https://fb.com/vtv24money\nBáo điện tử VTV: https://fb.com/baodientuvtv\n\nYoutube: https://youtube.com/vtv24\nZalo: https://zalo.me/1571891271885013375\nInstagram: https://instagram.com/vtv24news/\nTiktok : https://vt.tiktok.com/D2V2CK/',
      publishedAt: "2020-12-06T13:00:10Z",
      channelId: "UCabsTV34JwALXKGMqHpvUiA",
      channelTitle: "VTV24",
      categoryId: "25",
      liveBroadcastContent: "none",
      tags: [
        "chuyển động 24h",
        "tin tức vtv24",
        "thời sự vtv24",
        "tin tức",
        "VTV24",
        "Tin tức mới nhất",
        "tin tức trong ngày",
        "tin tức VTV1",
        "MONEY WEEKLY",
        "LỪA ĐẢO",
        "TIKTOK",
        "LIKE DẠO KIẾM TIỀN",
      ],
    },
    contentDetails: {
      dimension: "2d",
      definition: "hd",
    },
    status: {
      license: "youtube",
    },
    player: {
      embedHtml:
        '<iframe width="539" height="303" src="https://www.youtube.com/embed/CK0FTKoestE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  },
  {
    _id: "5fcd21bfc13f440366324032",
    id: "F3049Ko-5nY",
    etag: "Wl1na8g0vPrE-LRTmwiKQh49G7A",
    kind: "youtube#video",
    snippet: {
      title: "Đánh giá iPhone 12 Pro sau 1 tháng: Dư Thừa?",
      description:
        'Đánh giá iPhone 12 Pro sau 1 tháng: Dư Thừa? \nNếu các bạn muốn lên đời iPhone 12 series thì tham khảo ngay nhé: https://tintuc.shopdunk.com/mua-iphone-12-series-khong-can-coc.html\nNăm ngoái mình đã chọn nâng cấp thì hãy chọn iPhone 11 Pro vì nó có đầy đủ công nghệ như một chiếc iPhone 11 Pro Max mà lại rất nhỏ gọn tuy nhiên năm nay với iPhone 12 Pro thì không. Về cơ bản nó giống với iPhone 12 về thiết kế, màn hình và chỉ nâng cấp một chút về camera như ống kính lidar trong khi đó giá chênh lên đến 5 triệu. Còn so với iPhone 12 Pro Max thì nó chênh quá nhiều từ màn hình, camera cũng nâng cấp mạnh mẽ về cảm biến. \n\n#vatvostudio #iphone12pro #iphone12promax\n★ Xem deal sản phẩm giá tốt: https://vatvostudio.vn/\n\n✩ Group "kèo thơm" sản phẩm sale giá shock: https://www.facebook.com/groups/keothomvatvo\n✩ Follow Facebook chính thức của mình ở đây nhé: https://www.facebook.com/RealVinhVatVo/\n✩ Nộp CV gia nhập Vật Vờ Studio: https://forms.gle/wwfNymv1PUd7BKX96\n✩ Mua tai nghe, cáp sạc iPhone, Android chính hãng: https://www.facebook.com/DoChoiCongNgheSeve7/\nhttps://seve7.vn/\n✩ Ốp lưng Pikapi cho iPhone: https://www.facebook.com/phukienpikapi\n\n=================================\n🎵 Music:\n- Matt Cherne http://smarturl.it/MATTCHERNE\n- Artlist https://artlist.io/TRAN-340721\n=================================\nCÁC KÊNH YOUTUBE KHÁC\n✩ The Review: http://youtube.com/c/THEREVIEW96\n✩ Vật Vờ Vlog: http://www.youtube.com/c/VậtVờVlog\n✩ MÊ XE: https://tinyurl.com/kenhmexe\n\n=================================\n✌️FOLLOW TEAM VẬT VỜ STUDIO✌️\n★ FANPAGE: https://www.facebook.com/VatVoStudio69\n★ INSTAGRAM: https://www.instagram.com/vatvostudio\n★ GROUP: https://www.facebook.com/groups/vatvostudio\n► Email liên hệ hợp tác: ads@vtmedia.tv\n** My email to corporate: ads@vtmedia.tv\n(Email chỉ để liên hệ hợp tác, không trả lời các thắc mắc tư vấn tình cảm, yêu đương và sản phẩm. Xin cám ơn.)\n\n=================================\n✴️ Đánh giá/tư vấn smartphone dưới 3 triệu: https://goo.gl/EF0QKF\n✳️ Đánh giá/tư vấn smartphone 4 triệu: https://goo.gl/FVrKJ7\n✳️  Đánh giá/tư vấn smartphone 5 triệu: https://goo.gl/YlrYkh\n✳️ Đánh giá/tư vấn smartphone 7 triệu: https://goo.gl/YZAI0g\n✴️ Đánh giá/tư vấn smartphone 9 triệu:\nhttps://goo.gl/Q0X5OB\n\n© Bản quyền thuộc về VT MEDIA & Vật Vờ Studio\n© Copyright by VT MEDIA & Vật Vờ Studio. Please do not Reup',
      publishedAt: "2020-11-25T13:30:02Z",
      channelId: "UCEeXA5Tu7n9X5_zkOgGsyww",
      channelTitle: "Vật Vờ Studio",
      categoryId: "28",
      liveBroadcastContent: "none",
      tags: [
        "Vật vờ",
        "vatvo",
        "vat vo",
        "vinh vat vo",
        "điện thoại giá rẻ",
        "video công nghệ",
        "đánh giá",
        "trên tay",
        "review",
        "smartphone giá rẻ",
        "điện thoại xách tay",
        "điện thoại trung quốc",
        "điện thoại hàn quốc",
        "smartphone trung quốc",
        "giá bán",
        "giá rẻ",
        "mở hộp",
        "giá bán điện thoại",
        "iphone 12",
        "iphonre 12 pro",
        "iphone 12 pro max",
        "đánh giá iphone 12 pro max",
        "iphone 12 pro đánh giá",
        "iphone 12 pro vật vờ",
        "iphone 12 pro max vật vờ",
      ],
    },
    contentDetails: {
      dimension: "2d",
      definition: "hd",
    },
    status: {
      license: "youtube",
    },
    player: {
      embedHtml:
        '<iframe width="539" height="270" src="https://www.youtube.com/embed/F3049Ko-5nY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  },
  {
    _id: "5fcd21e4c13f440366324033",
    id: "wY_AXO7kN6w",
    etag: "QCxnCK9VlFfClNRN9xfWfN0DvZc",
    kind: "youtube#video",
    snippet: {
      title: "Hôm nay tôi mua TV cho mẹ",
      description:
        "Lâu rồi chả mua cho mẹ cái gì, nhân dịp cuối năm đang cần tiền đi chơi nên sắm sửa tí xin cụ bà cho dễ các ông ạ =))))\n\nÔng nào đang lên plan xin tiền giống như tôi thì TV này được này: https://tinyurl.com/samsung-tvtu6900-shopee\n\nCó 75 mã ELSAMT1C giảm 300k cho anh em đấy =)))). Nhớ nhập cho giá thơm nhá. Sinh nhật Shopee 12/12 nhiều sale lắm =))).\n\nAyyo, nếu cảm thấy anh em mình nói chuyện hợp thì bấm nút Đăng Kí / Subscribe và nút 🛎 để ủng hộ cho tôi ra clip nhé 😂😂😂\n\nLiên hệ: Phạm Ngọc Tân (Tân Một Cú) \n✉️ tanmotcu@gmail.com\n📺 https://www.instagram.com/tanmotcu204/\n\n*Kênh Youtube trực thuộc hệ thống Schannel Network !",
      publishedAt: "2020-12-06T13:03:01Z",
      channelId: "UC0W4geJiYGuQeO5KhRBzXBQ",
      channelTitle: "Tân Một Cú",
      categoryId: "24",
      liveBroadcastContent: "none",
      tags: [
        "tan schannel",
        "tân 1 cú schannel",
        "tân schannel",
        "tân 1 cú",
        "tan 1 cu",
        "reaction",
        "vlog",
        "đời sống",
        "schannel",
        "hôm nay ăn gì",
        "hom nay an gi",
        "tan1cu",
        "schanmel",
        "schammel",
        "tân một cú",
        "channel tân một cú",
        "channel tân 1 cú",
        "channel tan 1 cu",
        "chanel tân 1 cú",
        "chanel tan 1 cu",
        "Tân 1 cú mẹ",
      ],
    },
    contentDetails: {
      dimension: "2d",
      definition: "hd",
    },
    status: {
      license: "youtube",
    },
    player: {
      embedHtml:
        '<iframe width="539" height="303" src="https://www.youtube.com/embed/wY_AXO7kN6w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  },
];

const users: User[] = [
  {
    _id: "5d378db94e84753160e08b55",
    token: "token_************",
    name: "James J.",
    avatar:
      "https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560648533/mock/users/user-profile-1_mawp12.jpg",
    contact: "james@tinyhouse.com",
    listings: [
      "5fcbb8408534855b3ecb033d"
    ]
  },
  {
    _id: "5d378db94e84753160e08b56",
    token: "token_************",
    name: "Elizabeth A.",
    avatar:
      "https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649052/mock/users/user-profile-2_arwtdy.jpg",
    contact: "elizabeth@tinyhouse.com",
    listings: [
      "5fcbb93fecfd8662c656b2c2"
    ]
  },
  {
    _id: "5d378db94e84753160e08b57",
    token: "token_************",
    name: "Andrew D.",
    avatar:
      "https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649280/mock/users/user-profile-3_omxctk.jpg",
    contact: "andrew@tinyhouse.com",
    listings: [
      "5fcbb9dbecfd8662c656b2c3"
    ]
  },
  {
    _id: "5d378db94e84753160e08b58",
    token: "token_************",
    name: "Danielle C.",
    avatar:
      "https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560650165/mock/users/user-profile-4_wxi6om.jpg",
    contact: "danielle@tinyhouse.com",
    listings: [
      "5fcd217fc13f440366324030",
      "5fcd21e4c13f440366324033"
    ]
  },
  {
    _id: "5d378db94e84753160e08b59",
    token: "token_************",
    name: "Sarah K.",
    avatar:
      "https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560650436/mock/users/user-profile-5_tm8hhl.jpg",
    contact: "sarah@tinyhouse.com",
    listings: [
      "5fcd21a9c13f440366324031",
      "5fcd21bfc13f440366324032"
    ]
  }
];

const seed = async () => {
  try {
    console.log(`[Seed]: Running....`);
    const db = await connectDatabase();

    await db.listings.createIndex({
      "snippet.title": "text",
      "snippet.description": "text"
    });
    
    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }

    for (const user of users) {
      await db.users.insertOne(user);
    }

    console.log(`[Seed]: Success!`);
  } catch (error) {
    throw new Error(`Failed to seed database`);
  }
};

seed();
