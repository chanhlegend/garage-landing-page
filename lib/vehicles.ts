export type KeyValueSpec = { label: string; value: string }
export type FaqItem = { question: string; answer: string }

export type Vehicle = {
  id: string
  brand: string
  model: string
  year: number
  transmission: string
  mileage: string
  fuel: string
  price: string
  category: 'Xe Cẩu' | 'Xe Chở Rác' | 'Xe Ép Rác' | 'Xe Hút Bể Phốt'
  image: string
  images: string[]
  description: string
  payload?: string
  boxSize?: string
  overallSize?: string
  curbWeight?: string
  grossWeight?: string
  workingRadius?: string
  overview?: {
    summary?: string
    exterior?: string
    interior?: string
    engineAndChassis?: string
    craneInfo?: string
  }
  highlightsList?: string[]
  applications?: string[]
  benefits?: string[]
  faqs?: FaqItem[]
  vehicleTechSpecs?: KeyValueSpec[]
  craneTechSpecs?: KeyValueSpec[]
  warrantyInfo?: {
    chassis: string
    crane: string
  }
}

export const vehicles: Vehicle[] = [
  {
    "id": "v-1",
    "brand": "Hyundai",
    "model": "XE HÚT CHẤT THẢI 6 KHỐI HYUNDAI MIGHTY W11S",
    "year": 2025,
    "transmission": "Số sàn 5 số tiến, 1 số lùi",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Hút Bể Phốt",
    "image": "/cars/Xe%20B%E1%BB%93n%20H%C3%BAt%20B%E1%BB%83%20Ph%E1%BB%91t/HYUNDAI%20MIGHTY%20W11S%20-%206%20KH%E1%BB%90I/1786778111805_1945417234128956477_4749432609238065451_366c52bd8fa36dd6ac464ccfbc6d53a0.jpg",
    "images": [
      "/cars/Xe%20B%E1%BB%93n%20H%C3%BAt%20B%E1%BB%83%20Ph%E1%BB%91t/HYUNDAI%20MIGHTY%20W11S%20-%206%20KH%E1%BB%90I/1786778111805_1945417234128956477_4749432609238065451_366c52bd8fa36dd6ac464ccfbc6d53a0.jpg",
      "/cars/Xe%20B%E1%BB%93n%20H%C3%BAt%20B%E1%BB%83%20Ph%E1%BB%91t/HYUNDAI%20MIGHTY%20W11S%20-%206%20KH%E1%BB%90I/1786778111902_1945417234128956477_4749432609238065451_5bd0dd2f2e601b226745492d3ef3f1b4.jpg",
      "/cars/Xe%20B%E1%BB%93n%20H%C3%BAt%20B%E1%BB%83%20Ph%E1%BB%91t/HYUNDAI%20MIGHTY%20W11S%20-%206%20KH%E1%BB%90I/1786778112067_1945417234128956477_4749432609238065451_e0cd3bba86659fc98fabe930861b057d.jpg"
    ],
    "description": "Xe hút chất thải 6 khối Hyundai Mighty W11S Euro 5 chuyên dùng hút bùn, hút hầm cầu, bể phốt và nạo vét cống rãnh khu công nghiệp với công suất bơm hút cực mạnh.",
    "payload": "5.480 kg",
    "boxSize": "3.700 x 1.360 x 1.360 mm (Bồn xi téc 6m³)",
    "overallSize": "6.420 x 2.100 x 2.750 mm",
    "curbWeight": "4.925 kg",
    "grossWeight": "10.600 kg",
    "overview": {
      "summary": "Xe Hút chất thải 6 khối Hyundai W11S (Euro 5) là dòng xe môi trường chuyên dùng có công dụng hút và vận chuyển các chất thải, bùn cặn bã, rác thải lỏng lâu ngày ở gia đình, kinh doanh, khu đô thị, khu công nghiệp về nơi xử lý tập trung.",
      "exterior": "Thiết kế hiện đại, cabin vuông vức đặc trưng của thế hệ Hyundai W11S mới. Xe trang bị cụm đèn halogen bản lớn, hệ thống gương chiếu hậu kép quan sát góc rộng. 2 màu sơn chủ đạo xanh và trắng được sơn nhúng tĩnh điện chống rỉ sét tối ưu.",
      "interior": "Nội thất nâng cấp cao cấp với ghế bọc da và trần da sang trọng, cabin rộng rãi 3 chỗ ngồi. Trang bị máy lạnh 2 chiều công suất lớn, vô lăng trợ lực gật gù, kính chỉnh điện, radio USB giải trí tiện nghi.",
      "engineAndChassis": "Trang bị động cơ Hyundai D4GA 4 kỳ, 4 xi lanh thẳng hàng tăng áp, dung tích 3.933 cm³, công suất cực đại 125 kW / 2500 rpm đạt chuẩn khí thải Euro 5 tiết kiệm nhiên liệu. Khung gầm chassis gia cố thép chịu lực nguyên khối.",
      "craneInfo": "Bồn xi téc chứa chất thải dung tích 6m³ chế tạo từ thép hợp kim hoặc Inox chống ăn mòn cao, chia 2 khoang có vách chắn sóng. Hệ thống bơm chân không công nghệ Châu Âu tạo lực hút sâu, tích hợp van đảo chiều hút - xả linh hoạt cùng ben thủy lực mở nắp và nâng đổ bùn cặn."
    },
    "highlightsList": [
      "Động cơ Hyundai D4GA Euro 5 mạnh mẽ, siêu tiết kiệm nhiên liệu",
      "Hệ thống bơm hút chân không Châu Âu công suất lớn, hút cực nhanh và sạch",
      "Hệ thống xy lanh thủy lực nhập khẩu mới 100%, độ bền vượt trội",
      "Bồn xi téc thép/inox chịu áp lực cao, có vách chắn sóng giảm rung lắc khi di chuyển",
      "Cơ cấu ben thủy lực nâng hạ xi téc đổ chất thải và mở nắp bồn tự động",
      "Hệ thống nắp bồn đậy kín tuyệt đối, có chốt khóa chống tràn và khử mùi hiệu quả"
    ],
    "applications": [
      "Thu gom, hút chất thải tại hộ gia đình, nhà hàng, khách sạn",
      "Vệ sinh hầm cầu, bể phốt nhà xưởng và khu công nghiệp",
      "Thông hút nạo vét bùn đất cống rãnh, hệ thống thoát nước đô thị",
      "Vận chuyển bùn vi sinh, chất thải lỏng về nhà máy xử lý"
    ],
    "benefits": [
      "Giá thành đầu tư hợp lý trong phân khúc xe hút chất thải tầm trung",
      "Hút nhanh, sạch triệt để, không gây vương vãi hay ô nhiễm mùi hôi",
      "Kích thước xe linh hoạt, dễ dàng tiếp cận các tuyến đường và khu dân cư",
      "Được bảo hành chính hãng và hỗ trợ trả góp ngân hàng 70 - 80%"
    ],
    "faqs": [
      {
        "question": "Bồn xe hút 6 khối Hyundai W11S được làm từ chất liệu gì?",
        "answer": "Bồn xi téc được đóng bằng thép hợp kim chuyên dùng chống mài mòn cao hoặc Inox 304 theo yêu cầu, có vách chắn sóng bên trong và gioăng cao su chịu dầu kín khít."
      },
      {
        "question": "Xe có thể vừa hút vừa xả tự động được không?",
        "answer": "Hệ thống bơm chân không Châu Âu có van 4 ngả cho phép đảo chiều hút - xả dễ dàng, kết hợp ben nâng bồn đổ bùn cặn nhanh chóng."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Trọng lượng bản thân",
        "value": "4.925 kg"
      },
      {
        "label": "Phân bố cầu trước / sau",
        "value": "2.335 / 2.590 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "5.480 kg"
      },
      {
        "label": "Số người cho phép chở",
        "value": "3 người"
      },
      {
        "label": "Trọng lượng toàn bộ",
        "value": "10.600 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "6.420 x 2.100 x 2.750 mm"
      },
      {
        "label": "Khoảng cách trục",
        "value": "3.775 mm"
      },
      {
        "label": "Vệt bánh xe trước / sau",
        "value": "1.680 / 1.495 mm"
      },
      {
        "label": "Nhãn hiệu động cơ",
        "value": "Hyundai D4GA"
      },
      {
        "label": "Loại động cơ",
        "value": "4 kỳ, 4 xi lanh thẳng hàng, tăng áp"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "3.933 cm³"
      },
      {
        "label": "Công suất lớn nhất / tốc độ quay",
        "value": "125 kW / 2500 rpm"
      },
      {
        "label": "Lốp trước / sau",
        "value": "8.25-16 / 8.25-16"
      },
      {
        "label": "Hệ thống lái",
        "value": "Trục vít – ê cu bi, trợ lực thủy lực"
      },
      {
        "label": "Hệ thống phanh",
        "value": "Tang trống, thủy lực trợ lực chân không"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Loại bồn xi téc",
        "value": "Bồn chứa chất thải dạng elip / trụ tròn"
      },
      {
        "label": "Kích thước lòng bồn xi téc",
        "value": "3.700 x 1.360 x 1.360 mm"
      },
      {
        "label": "Dung tích bồn chứa",
        "value": "6.000 lít (6 m³)"
      },
      {
        "label": "Bơm chân không",
        "value": "Nhập khẩu Châu Âu, lưu lượng lớn"
      },
      {
        "label": "Cơ cấu xả thải",
        "value": "Ben nâng hạ góc đổ 45° và mở nắp đuôi bằng xylanh thủy lực"
      },
      {
        "label": "Hệ thống an toàn",
        "value": "Van phao chống tràn, đồng hồ đo áp suất chân không"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành chính hãng Hyundai 36 tháng hoặc 100.000 km trên toàn quốc.",
      "crane": "Bảo hành 12 tháng phần cơ khí và hệ thống thủy lực, bồn hút tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-2",
    "brand": "Hino",
    "model": "XE CHỞ RÁC THÙNG RỜI HOOKLIFT HINO 22 KHỐI (FM8JN7A)",
    "year": 2025,
    "transmission": "Số sàn 9 số tiến, 1 số lùi",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Chở Rác",
    "image": "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HINO%20HOOKLIFT%20-%2022%20KH%E1%BB%90I/1787023018056_1945417234128956477_8269997638658277126_9724cc4ec50279f99f9b8c50695319d4.jpg",
    "images": [
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HINO%20HOOKLIFT%20-%2022%20KH%E1%BB%90I/1787023018056_1945417234128956477_8269997638658277126_9724cc4ec50279f99f9b8c50695319d4.jpg",
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HINO%20HOOKLIFT%20-%2022%20KH%E1%BB%90I/1787023018062_1945417234128956477_8269997638658277126_8c986029c64e7710c7efffe34dfadb3b.jpg",
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HINO%20HOOKLIFT%20-%2022%20KH%E1%BB%90I/1787023018115_1945417234128956477_8269997638658277126_4c82847c840507792a23d4080c90e5c5.jpg"
    ],
    "description": "Xe kéo chở rác thùng rời Hooklift 22 khối trên nền xe Hino 3 chân FM8JN7A Euro 5, trang bị cơ cấu cần cẩu kéo đẩy thùng container tự động công suất lớn phục vụ trạm trung chuyển rác.",
    "payload": "12.500 kg",
    "boxSize": "6.200 x 2.350 x 1.550 mm (Thùng rời 22m³)",
    "overallSize": "8.750 x 2.500 x 3.550 mm",
    "curbWeight": "11.500 kg",
    "grossWeight": "24.000 kg",
    "overview": {
      "summary": "Xe chở rác thùng rời Hooklift Hino 22 khối (Hino FM8JN7A) là dòng xe môi trường hạng nặng chuyên dùng để kéo, nâng hạ và vận chuyển thùng chứa rác rời từ các trạm ép rác kín, khu công nghiệp và đô thị lớn về bãi xử lý rác tập trung.",
      "exterior": "Cabin Hino Series 500 hầm hố, khí động học giảm lực cản gió. Cụm đèn pha Halogen sắc nét, bậc lên xuống chống trượt và hệ thống gương chiếu hậu đa hướng đảm bảo tầm nhìn tối đa.",
      "interior": "Không gian cabin tiện nghi với 3 ghế ngồi êm ái cùng giường nằm nghỉ phía sau. Trang bị điều hòa Denso chính hãng 2 chiều, radio CD kết nối AUX/Bluetooth, vô lăng gật gù chỉnh độ nghiêng.",
      "engineAndChassis": "Trang bị động cơ Hino J08E-WD 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 7.684 cm³, công suất 280 PS tại 2.500 rpm đạt tiêu chuẩn khí thải Euro 5. Khung chassis đúc thép chuyên dùng siêu chịu lực.",
      "craneInfo": "Hệ thống cơ cấu Hooklift (kéo đẩy thùng rời) thủy lực nhập khẩu chịu tải kéo nâng 14 - 16 tấn. Thùng chứa rác 22 khối làm từ thép chịu mài mòn cao, kín nước và kín mùi, đóng mở cửa sau bằng khóa ngàm cơ khí an toàn."
    },
    "highlightsList": [
      "Động cơ Hino J08E-WD 280PS Euro 5 siêu bền bỉ, tiết kiệm nhiên liệu vượt trội",
      "Cơ cấu kéo đẩy Hooklift thủy lực công suất lớn, tự động khóa gài thùng an toàn",
      "Thùng chứa rác rời 22m³ thép cường lực cao, có gioăng cao su chống rò rỉ nước thải",
      "Chỉ cần 1 xe có thể phục vụ luân phiên nhiều thùng chứa rác tại các trạm gom",
      "Hệ thống điều khiển thủy lực bố trí cả trong cabin và ngoài xe thuận tiện vận hành",
      "Tiết kiệm tối đa chi phí nhân công và phương tiện vận tải rác thải đô thị"
    ],
    "applications": [
      "Vận chuyển rác thải từ các trạm trung chuyển ép rác kín đô thị",
      "Thu gom rác tại các khu công nghiệp, nhà máy chế xuất quy mô lớn",
      "Vận chuyển bùn thải nạo vét và phế thải xây dựng đô thị"
    ],
    "benefits": [
      "Hiệu suất luân chuyển cực cao nhờ cơ chế thả thùng gom và kéo thùng đầy",
      "Thương hiệu Hino Nhật Bản giữ giá tốt, độ tin cậy và bền bỉ số 1",
      "Giảm thiểu chi phí đầu tư xe và tối ưu hóa thời gian vận hành thu gom",
      "Chính sách bảo hành toàn diện và phụ tùng sẵn có trên cả nước"
    ],
    "faqs": [
      {
        "question": "Hệ thống Hooklift có thể kéo được những loại thùng nào?",
        "answer": "Xe có thể kéo đẩy linh hoạt thùng chứa rác 20 - 24 khối tiêu chuẩn, thùng nén rác trạm ép kín hoặc thùng chở vật liệu phế thải công nghiệp."
      },
      {
        "question": "Thời gian kéo hoặc thả một thùng rác mất bao lâu?",
        "answer": "Quy trình kéo thùng lên xe hoặc hạ thùng xuống đất diễn ra tự động thông qua hệ thống thủy lực, chỉ mất từ 60 - 90 giây."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Trọng lượng bản thân",
        "value": "11.500 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "12.500 kg"
      },
      {
        "label": "Trọng lượng toàn bộ",
        "value": "24.000 kg"
      },
      {
        "label": "Kích thước tổng thể (DxRxC)",
        "value": "8.750 x 2.500 x 3.550 mm"
      },
      {
        "label": "Khoảng cách trục",
        "value": "4.280 + 1.350 mm"
      },
      {
        "label": "Nhãn hiệu động cơ",
        "value": "Hino J08E-WD"
      },
      {
        "label": "Loại động cơ",
        "value": "4 kỳ, 6 xi lanh thẳng hàng, tăng áp"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "7.684 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "206 kW (280 PS) / 2500 rpm"
      },
      {
        "label": "Hộp số",
        "value": "9 số tiến, 1 số lùi"
      },
      {
        "label": "Lốp xe",
        "value": "11.00R20"
      },
      {
        "label": "Hệ thống phanh",
        "value": "Khí nén toàn phần, 2 dòng độc lập, cam phanh chữ S"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Loại chuyên dùng",
        "value": "Hệ thống cần kéo đẩy Hooklift thủy lực"
      },
      {
        "label": "Sức nâng kéo Hooklift",
        "value": "14.000 - 16.000 kg"
      },
      {
        "label": "Góc nâng đổ ben",
        "value": "48° - 50°"
      },
      {
        "label": "Dung tích thùng chứa rác rời",
        "value": "22 m³"
      },
      {
        "label": "Kích thước thùng rời (DxRxC)",
        "value": "6.200 x 2.350 x 1.550 mm"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Thép hợp kim SPA-H / SS400 chịu mài mòn, đáy 4mm vách 3mm"
      },
      {
        "label": "Hệ thống khóa thùng",
        "value": "Khóa ngàm gài chassis bằng thủy lực an toàn"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại các đại lý Hino trên toàn quốc.",
      "crane": "Bảo hành 12 tháng hệ thống thủy lực Hooklift và thùng chứa rác tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-3",
    "brand": "Hyundai",
    "model": "XE CHỞ RÁC 5 KHỐI HYUNDAI PORTER H150 (BỬNG NÂNG)",
    "year": 2025,
    "transmission": "Số sàn 6 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Chở Rác",
    "image": "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HYUNDAI%20H150%20-%205%20KH%E1%BB%90I/z7953788125575_24679695fab082622778a681bcb8b170.jpg",
    "images": [
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HYUNDAI%20H150%20-%205%20KH%E1%BB%90I/z7953788125575_24679695fab082622778a681bcb8b170.jpg",
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HYUNDAI%20H150%20-%205%20KH%E1%BB%90I/z7953788143316_a1e86a2307eae9232dc05fa9678be36a.jpg",
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HYUNDAI%20H150%20-%205%20KH%E1%BB%90I/z7953788143321_5a1396c59158684bf2147ae1cb5a0d67.jpg"
    ],
    "description": "Xe chở rác 5 khối Hyundai New Porter H150 nhỏ gọn, trang bị bửng nâng nạp rác phía sau và cơ cấu ben tự đổ, chuyên thu gom rác ngõ ngách, nội đô thành phố.",
    "payload": "1.100 kg",
    "boxSize": "2.730 x 1.620 x 1.110 mm (Thùng 5m³)",
    "overallSize": "5.000 x 1.800 x 2.200 mm",
    "curbWeight": "2.205 kg",
    "grossWeight": "3.500 kg",
    "overview": {
      "summary": "Xe chở rác 5 khối Hyundai H150 là phân khúc xe tải nhỏ thu gom rác chuyên nghiệp, được đóng thùng Inox cao cấp kèm bửng nâng thủy lực giúp việc nạp các thùng rác tiêu chuẩn 120L, 240L vào thùng xe diễn ra cực kỳ nhẹ nhàng.",
      "exterior": "Dáng vẻ thanh thoát của dòng Hyundai Porter H150 nổi tiếng. Cabin khí động học, kính chiếu hậu góc nhìn rộng và hệ thống đèn halogen sáng rõ hỗ trợ gom rác ca đêm an toàn.",
      "interior": "Cabin tiện nghi với 3 ghế ngồi bọc nỉ êm ái, máy lạnh 2 chiều mát sâu, vô lăng trợ lực, đồng hồ hiển thị thông tin điện tử, kính chỉnh điện và hệ thống giải trí đa phương tiện.",
      "engineAndChassis": "Động cơ Hyundai D4CB 4 kỳ, 4 xi lanh thẳng hàng tăng áp, dung tích 2.497 cm³, công suất 95.6 kW tại 3.800 rpm đạt tiêu chuẩn Euro 5 bền bỉ, tiết kiệm nhiên liệu tối ưu.",
      "craneInfo": "Thùng chở rác 5m³ làm bằng Inox chống ăn mòn (Inox 430/304), vách đứng có xương gia cường. Trang bị bửng nâng thủy lực phía sau chịu tải 400 - 500kg kết hợp ty ben thủy lực nâng hạ đổ rác sạch sẽ."
    },
    "highlightsList": [
      "Động cơ Hyundai D4CB Hàn Quốc vận hành êm ái, bền bỉ và tiết kiệm nhiên liệu",
      "Kích thước nhỏ gọn, bán kính quay vòng nhỏ, luồn lách linh hoạt các ngõ hẻm",
      "Trang bị bửng nâng thủy lực nạp rác thuận tiện và ben cơ tự đổ rác nhanh chóng",
      "Thùng chứa đóng bằng Inox cao cấp không rỉ sét, có máng thu gom nước rỉ rác",
      "Chi phí đầu tư ban đầu thấp, hiệu quả kinh tế cao, nhanh thu hồi vốn"
    ],
    "applications": [
      "Thu gom rác sinh hoạt trong các ngõ phố nhỏ, khu đô thị nội thành",
      "Thu gom rác tại các chợ dân sinh, trường học, bệnh viện",
      "Trung chuyển rác từ các tuyến phố nhánh ra điểm tập kết chính"
    ],
    "benefits": [
      "Giảm tải sức lao động trực tiếp cho công nhân môi trường",
      "Thiết kế thùng kín và có nắp đậy không phát tán mùi hôi hay nước rác",
      "Phụ tùng Hyundai phổ biến, chi phí bảo trì bảo dưỡng cực kỳ rẻ",
      "Được hỗ trợ trả góp ngân hàng lãi suất ưu đãi"
    ],
    "faqs": [
      {
        "question": "Bửng nâng phía sau có nâng được thùng rác công cộng 240 lít không?",
        "answer": "Có, bửng nâng được thiết kế chuyên dùng để móc và nâng nhẹ nhàng các loại thùng rác gom tay 120L, 240L, 660L."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Trọng lượng bản thân",
        "value": "2.205 kg"
      },
      {
        "label": "Phân bố cầu trước / sau",
        "value": "1.090 / 1.115 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "1.100 kg"
      },
      {
        "label": "Số người cho phép chở",
        "value": "3 người"
      },
      {
        "label": "Trọng lượng toàn bộ",
        "value": "3.500 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "5.000 x 1.800 x 2.200 mm"
      },
      {
        "label": "Khoảng cách trục",
        "value": "2.640 mm"
      },
      {
        "label": "Nhãn hiệu động cơ",
        "value": "Hyundai D4CB"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "2.497 cm³"
      },
      {
        "label": "Công suất lớn nhất / tốc độ quay",
        "value": "95.6 kW / 3800 rpm"
      },
      {
        "label": "Lốp trước / sau",
        "value": "195/70R15 / 145/R13"
      },
      {
        "label": "Hệ thống phanh",
        "value": "Phanh đĩa / tang trống, trợ lực chân không"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "5 m³"
      },
      {
        "label": "Kích thước lòng thùng (DxRxC)",
        "value": "2.730 x 1.620 x 1.110 mm"
      },
      {
        "label": "Vật liệu đóng thùng",
        "value": "Inox 430 / Inox 304 dày 2.5 - 3.0 mm"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Bửng nâng thủy lực chịu tải 500 kg"
      },
      {
        "label": "Cơ cấu xả rác",
        "value": "Ben thủy lực nâng hạ đổ rác góc 45°"
      },
      {
        "label": "Trang bị kèm theo",
        "value": "Bồn chứa nước thải chống tràn, thùng nước rửa tay, đèn làm việc đêm"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 24 tháng hoặc 100.000 km tại các trạm bảo hành ủy quyền của Hyundai.",
      "crane": "Bảo hành 12 tháng phần cơ khí đóng thùng và hệ thống thủy lực tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-4",
    "brand": "Hyundai",
    "model": "XE CHỞ RÁC 8 KHỐI HYUNDAI MIGHTY N250 (BỬNG NÂNG)",
    "year": 2025,
    "transmission": "Số sàn 6 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Chở Rác",
    "image": "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HYUNDAI%20N250%20-%208%20KH%E1%BB%90I/10-Hyunh%20Dai%20N250%208%20kh%E1%BB%91i.jpg",
    "images": [
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HYUNDAI%20N250%20-%208%20KH%E1%BB%90I/10-Hyunh%20Dai%20N250%208%20kh%E1%BB%91i.jpg",
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HYUNDAI%20N250%20-%208%20KH%E1%BB%90I/11-Hyunh%20Dai%20N250%208%20kh%E1%BB%91i.jpg",
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/HYUNDAI%20N250%20-%208%20KH%E1%BB%90I/8-Hyunh%20Dai%20N250%208%20kh%E1%BB%91i.jpg"
    ],
    "description": "Xe thu gom chở rác 8 khối Hyundai Mighty N250 Euro 5 đóng thùng Inox cao cấp, tích hợp bửng nâng phía sau 600kg và cơ cấu ben thủy lực tự đổ mạnh mẽ.",
    "payload": "1.995 kg",
    "boxSize": "3.080 x 1.800 x 1.390 mm (Thùng 8m³)",
    "overallSize": "5.170 x 1.935 x 2.530 mm",
    "curbWeight": "2.805 kg",
    "grossWeight": "4.995 kg",
    "overview": {
      "summary": "Xe chở rác 8 khối Hyundai N250 là sự lựa chọn hàng đầu cho các công ty môi trường đô thị nhờ sức chứa lên đến 8m³ nhưng kích thước tổng thể vô cùng gọn gàng, phù hợp thu gom rác ở các khu dân cư đông đúc.",
      "exterior": "Ngoại thất Hyundai Mighty N250 trẻ trung, mạnh mẽ với 2 tông màu trắng và xanh. Cụm đèn pha Halogen kép góc chiếu rộng, gương chiếu hậu lớn giúp quan sát điểm mù hiệu quả.",
      "interior": "Nội thất cabin trang bị 3 chỗ ngồi bọc da cao cấp, vô lăng gật gù, điều hòa 2 chiều, bảng điều khiển trung tâm khoa học tích hợp đài radio, USB giải trí tiện lợi.",
      "engineAndChassis": "Động cơ Hyundai D4CB 4 kỳ, 4 xi lanh thẳng hàng tăng áp, dung tích 2.497 cm³, công suất 96 kW tại 3.800 rpm đạt tiêu chuẩn khí thải Euro 5 tiết kiệm nhiên liệu.",
      "craneInfo": "Thùng chở rác dạng trụ đứng làm bằng Inox 430/304, trang bị bửng nâng thủy lực sức nâng 600kg và cơ cấu ben nâng hạ đổ rác mạnh mẽ xuất xứ Châu Âu mới 100%."
    },
    "highlightsList": [
      "Động cơ Euro 5 bền bỉ, tiết kiệm nhiên liệu và thân thiện với môi trường",
      "Thùng Inox 8 khối kết cấu dạng trụ đứng vững chắc, chống gỉ sét tuyệt đối",
      "Bửng nâng thủy lực sức nâng 600kg nạp các loại thùng rác gom tay dễ dàng",
      "Trang bị thùng chứa nước rỉ rác có van xả, đèn làm việc đêm trên thùng",
      "Hệ thống ty ben nâng đổ rác nhập khẩu Châu Âu vận hành êm ái"
    ],
    "applications": [
      "Thu gom rác thải sinh hoạt khu đô thị, hẻm dân cư",
      "Thu gom rác tại trung tâm thương mại, khu chế xuất, cụm công nghiệp",
      "Thu gom rác tại các resort, khu du lịch, công viên"
    ],
    "benefits": [
      "Tối ưu thể tích chứa lên tới 8m³ giúp giảm số chuyến vận chuyển",
      "Giảm chi phí nhân công bốc vác nhờ hệ thống bửng nâng tự động",
      "Bảo hành 3 năm chính hãng Hyundai, phụ tùng luôn sẵn có"
    ],
    "faqs": [
      {
        "question": "Xe chở rác 8 khối Hyundai N250 có đi vào được các tuyến phố cấm tải không?",
        "answer": "Với tổng tải trọng dưới 5 tấn (4.995 kg), xe được phép lưu thông linh hoạt trên nhiều tuyến đường đô thị theo quy định hiện hành."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Trọng lượng bản thân",
        "value": "2.805 kg"
      },
      {
        "label": "Phân bố cầu trước / sau",
        "value": "1.420 / 1.385 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "1.995 kg"
      },
      {
        "label": "Trọng lượng toàn bộ",
        "value": "4.995 kg"
      },
      {
        "label": "Số người cho phép chở",
        "value": "3 người"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "5.170 x 1.935 x 2.530 mm"
      },
      {
        "label": "Khoảng cách trục",
        "value": "2.810 mm"
      },
      {
        "label": "Nhãn hiệu động cơ",
        "value": "Hyundai D4CB"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "2.497 cm³"
      },
      {
        "label": "Công suất lớn nhất / tốc độ quay",
        "value": "96 kW / 3800 rpm"
      },
      {
        "label": "Lốp trước / sau",
        "value": "6.50R16 / 5.50R13"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "8 m³"
      },
      {
        "label": "Kích thước lòng thùng",
        "value": "3.080 x 1.800 x 1.390 mm"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 430 / Inox 304 chất lượng cao"
      },
      {
        "label": "Sức nâng bửng nạp rác",
        "value": "600 kg"
      },
      {
        "label": "Cơ cấu đổ rác",
        "value": "Ben thủy lực tự đổ góc nâng 45°"
      },
      {
        "label": "Hệ thống thủy lực",
        "value": "Nhập khẩu trực tiếp Châu Âu mới 100%"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại các đại lý Hyundai trên toàn quốc.",
      "crane": "Bảo hành 12 tháng cơ khí và thủy lực chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-5",
    "brand": "Suzuki",
    "model": "XE CHỞ RÁC 3 KHỐI SUZUKI CARRY PRO (BỬNG NÂNG)",
    "year": 2025,
    "transmission": "Số sàn 5 số tiến, 1 số lùi",
    "mileage": "Mới 100%",
    "fuel": "Xăng không chì",
    "price": "Liên hệ báo giá",
    "category": "Xe Chở Rác",
    "image": "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/SUZUKI%20-%203%20KH%E1%BB%90I/z7930820383578_5f95f032513d236616284913b81bcd3c.jpg",
    "images": [
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/SUZUKI%20-%203%20KH%E1%BB%90I/z7930820383578_5f95f032513d236616284913b81bcd3c.jpg",
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/SUZUKI%20-%203%20KH%E1%BB%90I/z7953786154023_8ff167d771cb169d34c17e1a564c67b1.jpg",
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/SUZUKI%20-%203%20KH%E1%BB%90I/z7953786170875_03e1b9d7a98aacf4ab0cf3a177b141bd.jpg"
    ],
    "description": "Xe chở rác 3 khối Suzuki Super Carry Pro động cơ xăng 1.5L Euro 5 nhỏ gọn hàng đầu, trang bị bửng nâng và ben tự đổ chuyên thu gom rác hẻm nhỏ.",
    "payload": "530 kg",
    "boxSize": "2.150 x 1.550 x 950 mm (Thùng 3m³)",
    "overallSize": "4.340 x 1.765 x 2.180 mm",
    "curbWeight": "1.350 kg",
    "grossWeight": "2.010 kg",
    "overview": {
      "summary": "Xe chở rác 3 khối Suzuki Carry Pro là mẫu xe thu gom rác nhỏ gọn nhất thị trường, chuyên phục vụ các tuyến phố chật hẹp, ngõ ngách sâu trong các đô thị lớn với độ bền bỉ Nhật Bản và chi phí vận hành siêu tiết kiệm.",
      "exterior": "Thiết kế nhỏ gọn, khung gầm mạ kẽm chống rỉ sét của Suzuki Pro nhập khẩu nguyên chiếc. Đèn pha halogen chiếu sáng rộng, gương chiếu hậu chỉnh cơ linh hoạt.",
      "interior": "Cabin 2 chỗ ngồi thoải mái, trợ lực lái điện nhẹ nhàng, điều hòa nhiệt độ mát lạnh, hệ thống giải trí đài radio USB tiện nghi.",
      "engineAndChassis": "Động cơ xăng Suzuki K15B dung tích 1.5L mạnh mẽ, tiết kiệm nhiên liệu vượt trội, tiêu chuẩn khí thải Euro 5 thân thiện với môi trường.",
      "craneInfo": "Thùng chứa rác 3m³ đóng bằng Inox cao cấp chống ăn mòn, trang bị bửng nâng hạ thủy lực phía sau đưa thùng rác lên và cơ cấu ben thủy lực tự đổ rác sạch sẽ."
    },
    "highlightsList": [
      "Động cơ xăng 1.5L Euro 5 vận hành cực kỳ êm ái và siêu tiết kiệm xăng",
      "Kích thước siêu nhỏ gọn luồn lách dễ dàng vào các ngõ hẻm cụt",
      "Thùng chứa rác Inox 304/430 kín nước, có máng thu nước thải chống rỉ",
      "Cơ cấu bửng nâng thủy lực và ben tự đổ vận hành đơn giản, an toàn",
      "Thương hiệu Suzuki Nhật Bản siêu bền bỉ, ít hỏng vặt"
    ],
    "applications": [
      "Thu gom rác từng hộ dân cư trong các con hẻm nhỏ hẹp",
      "Thu gom rác tại các khu nghỉ dưỡng, công viên, khu phố đi bộ"
    ],
    "benefits": [
      "Giá thành đầu tư cực rẻ, nhanh thu hồi vốn",
      "Tiêu hao nhiên liệu thấp chỉ khoảng 6 - 7 lít xăng / 100km",
      "Bảo hành chính hãng 3 năm trên toàn quốc"
    ],
    "faqs": [
      {
        "question": "Xe sử dụng nhiên liệu gì và có tốn xăng không?",
        "answer": "Xe sử dụng động cơ xăng 1.5L phun xăng điện tử cực kỳ tiết kiệm nhiên liệu, chỉ khoảng 6.5L/100km."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "1.350 kg"
      },
      {
        "label": "Tải trọng cho phép",
        "value": "530 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "2.010 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "4.340 x 1.765 x 2.180 mm"
      },
      {
        "label": "Động cơ",
        "value": "Suzuki K15B 1.5L xăng Euro 5"
      },
      {
        "label": "Dung tích thùng nhiên liệu",
        "value": "43 lít"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng",
        "value": "3 m³"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 430 / Inox 304 dày 2.5mm"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Bửng nâng thủy lực"
      },
      {
        "label": "Cơ cấu xả rác",
        "value": "Ben thủy lực tự đổ"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại đại lý Suzuki toàn quốc.",
      "crane": "Bảo hành 12 tháng cơ khí và thủy lực tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-6",
    "brand": "Thaco",
    "model": "XE CHỞ RÁC 4 KHỐI THACO FRONTIER TF220",
    "year": 2025,
    "transmission": "Số sàn 5 cấp",
    "mileage": "Mới 100%",
    "fuel": "Xăng không chì",
    "price": "Liên hệ báo giá",
    "category": "Xe Chở Rác",
    "image": "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/THACO%20-%204%20KH%E1%BB%90I/1785805042026_1945417234128956477_8269997638658277126_bdb420e964070d785fe85bc6cce47eef.jpg",
    "images": [
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/THACO%20-%204%20KH%E1%BB%90I/1785805042026_1945417234128956477_8269997638658277126_bdb420e964070d785fe85bc6cce47eef.jpg",
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/THACO%20-%204%20KH%E1%BB%90I/6-Thaco%204%20kh%E1%BB%91i.jpg",
      "/cars/Xe%20Ch%E1%BB%9F%20R%C3%A1c/THACO%20-%204%20KH%E1%BB%90I/7-Thaco%204%20kh%E1%BB%91i.jpg"
    ],
    "description": "Xe chở rác 4 khối Thaco Frontier TF220 thiết kế dáng vẻ hiện đại, trang bị bửng nâng thủy lực và ben tự đổ, tối ưu hóa thu gom rác tuyến hẻm nội đô.",
    "payload": "800 kg",
    "boxSize": "2.130 x 1.560 x 1.210 mm (Thùng 4m³)",
    "overallSize": "4.280 x 1.735 x 2.220 mm",
    "curbWeight": "1.400 kg",
    "grossWeight": "2.330 kg",
    "overview": {
      "summary": "Xe chở rác 4 khối Thaco TF220 là mẫu xe thu gom rác thế hệ mới của Thaco Auto, thiết kế hiện đại sang trọng như xe du lịch, trang bị bửng nâng thủy lực và ben tự đổ đáp ứng hoàn hảo nhu cầu vệ sinh môi trường đô thị.",
      "exterior": "Thiết kế thon gọn, hiện đại với cụm đèn pha Halogen sắc nét, lưới tản nhiệt mạ crom sang trọng, kính chắn gió góc rộng giúp tài xế dễ quan sát.",
      "interior": "Nội thất tiện nghi với 2 ghế bọc da cao cấp, điều hòa 2 chiều, kính cửa chỉnh điện, màn hình cảm ứng kết nối Bluetooth và camera lùi an toàn.",
      "engineAndChassis": "Động cơ xăng DK12-10 4 kỳ 4 xi lanh thẳng hàng dung tích 1.240 cm³, công suất 65 kW / 6.000 rpm đạt tiêu chuẩn Euro 5 mạnh mẽ và tiết kiệm nhiên liệu.",
      "craneInfo": "Thùng chở rác 4m³ bằng Inox cao cấp dạng đứng gia cường khung xương cứng cáp, bửng nâng hạ thủy lực phía sau và hệ thống ben tự đổ chất lượng cao."
    },
    "highlightsList": [
      "Động cơ công nghệ mới Euro 5 tiết kiệm nhiên liệu, bảo vệ môi trường",
      "Nội thất sang trọng có màn hình cảm ứng, camera lùi, kính chỉnh điện",
      "Thùng Inox 4 khối dày dặn chống rỉ sét, có thùng chứa nước thải riêng biệt",
      "Hệ thống bửng nâng và ben tự đổ thủy lực vận hành êm ái, bền bỉ",
      "Chi phí đầu tư thấp, bảo dưỡng dễ dàng tại hệ thống Thaco toàn quốc"
    ],
    "applications": [
      "Thu gom rác ngõ ngách, khu dân cư, chung cư",
      "Thu gom rác tại các nhà hàng, trường học, khách sạn"
    ],
    "benefits": [
      "Tối ưu chi phí và tăng năng suất thu gom rác hằng ngày",
      "Hệ thống đại lý và trạm dịch vụ Thaco phủ rộng khắp 63 tỉnh thành"
    ],
    "faqs": [
      {
        "question": "Thùng xe có bị rỉ nước rác ra đường không?",
        "answer": "Thùng được làm bằng Inox hàn kín đáy, có máng và bồn gom nước rác riêng biệt đảm bảo vệ sinh môi trường."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Trọng lượng bản thân",
        "value": "1.400 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "800 kg"
      },
      {
        "label": "Trọng lượng toàn bộ",
        "value": "2.330 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "4.280 x 1.735 x 2.220 mm"
      },
      {
        "label": "Khoảng cách trục",
        "value": "2.400 mm"
      },
      {
        "label": "Động cơ",
        "value": "DK12-10 (Xăng Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "1.240 cm³"
      },
      {
        "label": "Công suất lớn nhất",
        "value": "65 kW / 6000 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "175/70R14"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa",
        "value": "4 m³"
      },
      {
        "label": "Kích thước lòng thùng",
        "value": "2.130 x 1.560 x 1.210 mm"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 430 / Inox 304"
      },
      {
        "label": "Cơ cấu nạp xả",
        "value": "Bửng nâng thủy lực và ben cơ tự đổ"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại Thaco Auto toàn quốc.",
      "crane": "Bảo hành 12 tháng cơ khí và thủy lực tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-7",
    "brand": "Chenglong",
    "model": "XE CHENGLONG H5 4 CHÂN GẮN CẨU SOOSAN 12 TẤN (SCS1215)",
    "year": 2025,
    "transmission": "Số sàn 9 số tiến, 1 số lùi (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Cẩu",
    "image": "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%2012%20T%E1%BA%A4N/10.jpg",
    "images": [
      "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%2012%20T%E1%BA%A4N/10.jpg",
      "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%2012%20T%E1%BA%A4N/11.jpg",
      "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%2012%20T%E1%BA%A4N/120.jpg"
    ],
    "description": "Xe tải Chenglong H5 4 chân gắn cẩu tự hành Soosan 12 tấn 5 đốt SCS1215 nhập khẩu Hàn Quốc, tải trọng hàng chở 11.3 tấn, kích thước lòng thùng dài 8.36m đáp ứng nâng hạ tải nặng.",
    "payload": "11.300 kg",
    "boxSize": "8.360 x 2.350 x 650 mm",
    "overallSize": "12.110 x 2.500 x 3.840 mm",
    "curbWeight": "18.570 kg",
    "grossWeight": "30.000 kg",
    "workingRadius": "20,7 m",
    "overview": {
      "summary": "Xe Chenglong 4 chân gắn cẩu Soosan 12 tấn là dòng xe cẩu tải nặng hàng đầu hiện nay, giải quyết trọn vẹn bài toán cẩu to sức nâng lớn kết hợp thùng xe dài 8m36 chở được khối lượng hàng hóa lên tới 11.300 kg trên đường.",
      "exterior": "Cabin Chenglong H5 thiết kế khí động học phong cách Châu Âu, sơn nhúng tĩnh điện 5 lớp. Hệ thống gương chiếu hậu 2 tầng bản lớn, đèn Halogen công suất cao quan sát an toàn ca đêm.",
      "interior": "Cabin nóc cao rộng rãi bố trí 2 ghế bọc hơi êm ái cùng giường nằm nghỉ ngơi thoải mái, điều hòa công suất lớn, vô lăng gật gù, bảng đồng hồ taplo hiển thị thông số điện tử hiện đại.",
      "engineAndChassis": "Trang bị động cơ Yuchai YC6L350-50 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 8.424 cm³, công suất 257 kW (350 PS) / 2200 rpm, chuẩn khí thải Euro 5 siêu khỏe và tiết kiệm dầu. Khung gầm chassis 2 lớp dày dặn gia cố đinh tán chịu lực.",
      "craneInfo": "Cần cẩu SOOSAN SCS1215 nhập khẩu trực tiếp Hàn Quốc: Sức nâng lớn nhất 13 tấn tại 2m, bán kính làm việc 20.7m (sức nâng 1.03 tấn ở tầm với xa nhất), chiều cao làm việc 24.5m. Cẩu trang bị 4 chân tú mở rộng, ghế ngồi trên cao, cảm biến chạm cần và cảm biến chống quá tải an toàn."
    },
    "highlightsList": [
      "Động cơ Yuchai 350PS Euro 5 mạnh mẽ, khả năng leo dốc và tải nặng vượt trội",
      "Cẩu Soosan 12 tấn SCS1215 5 khúc nhập khẩu Hàn Quốc sức nâng cực khỏe",
      "Tải trọng cho phép chở hàng lớn 11.300 kg, lòng thùng dài 8.36m có 7 bửng mở",
      "Trang bị cảm biến chống chạm cần, cảm biến quá tải và ghế điều khiển trên cao",
      "Chassis 2 lớp gia cường chắc chắn, chống vặn xoắn khi cẩu tải trọng lớn",
      "Giá thành đầu tư cạnh tranh nhất phân khúc xe cẩu 4 chân tại Việt Nam"
    ],
    "applications": [
      "Nâng hạ và lắp dựng kết cấu thép, cột điện, dầm bê tông công trình xây dựng",
      "Bốc dỡ, di dời máy móc thiết bị công nghiệp nặng tại các nhà xưởng, khu công nghiệp",
      "Cẩu vận chuyển hàng hóa nặng, cồng kềnh tại bến cảng, kho bãi logistics",
      "Di dời cây xanh đại thụ, lắp đặt biển quảng cáo tấm lớn trên cao"
    ],
    "benefits": [
      "Tối đa hóa doanh thu vận tải nhờ vừa cẩu được tải nặng vừa chở được lượng hàng lớn",
      "Vận hành bền bỉ, chi phí bảo trì bảo dưỡng thấp, phụ tùng phổ biến",
      "Hỗ trợ vay vốn trả góp ngân hàng tới 70 - 80% giá trị xe"
    ],
    "faqs": [
      {
        "question": "Cần cẩu Soosan SCS1215 có mấy đoạn cần và tầm với tối đa là bao nhiêu?",
        "answer": "Cẩu gồm 5 đoạn cần lục giác lồng ghép, chiều dài cần vươn tối đa 20.7m và chiều cao nâng làm việc đạt 24.5m."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "18.570 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "11.300 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "30.000 kg"
      },
      {
        "label": "Kích thước lòng thùng (DxRxC)",
        "value": "8.360 x 2.350 x 650 mm"
      },
      {
        "label": "Kích thước bao (DxRxC)",
        "value": "12.110 x 2.500 x 3.840 mm"
      },
      {
        "label": "Nhãn hiệu động cơ",
        "value": "Yuchai YC6L350-50 (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "8.424 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "257 kW / 2200 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "11.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Nhãn hiệu cẩu",
        "value": "SOOSAN SCS1215 (Hàn Quốc)"
      },
      {
        "label": "Sức nâng lớn nhất / tầm với",
        "value": "13.000 kg / 2.0 m"
      },
      {
        "label": "Sức nâng nhỏ nhất / tầm với (Đốt 5)",
        "value": "1.030 kg / 20.7 m"
      },
      {
        "label": "Chiều cao làm việc lớn nhất",
        "value": "24.5 m"
      },
      {
        "label": "Bán kính làm việc tối đa",
        "value": "20.7 m"
      },
      {
        "label": "Số đoạn cần / kết cấu",
        "value": "5 đoạn cần mặt cắt lục giác chịu lực"
      },
      {
        "label": "Góc xoay cần",
        "value": "360° liên tục"
      },
      {
        "label": "Chân chống tú",
        "value": "4 chân tú (2 trước + 2 sau) mở rộng thủy lực"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng không giới hạn km tại các đại lý Chenglong toàn quốc.",
      "crane": "Bảo hành 12 tháng cẩu Soosan và thùng chuyên dùng tại xưởng Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-8",
    "brand": "Chenglong",
    "model": "XE CHENGLONG M3 2 CHÂN GẮN CẨU SOOSAN 5 TẤN (SCS525)",
    "year": 2025,
    "transmission": "Số sàn 6 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Cẩu",
    "image": "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%205%20T%E1%BA%A4N/z7958346395315_d2682613ae8194b59719651c8bf6b1c9.jpg",
    "images": [
      "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%205%20T%E1%BA%A4N/z7958346395315_d2682613ae8194b59719651c8bf6b1c9.jpg",
      "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%205%20T%E1%BA%A4N/z7958346505723_cc4992db864333b9cd21cd136333d7c7.jpg",
      "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%205%20T%E1%BA%A4N/z7958346727028_d6cc67839742c9d2dd5a528ef7f6c263.jpg"
    ],
    "description": "Xe tải Chenglong M3 2 chân gắn cẩu Soosan 5 tấn 5 khúc SCS525 Hàn Quốc, thùng dài 7.55m, tải trọng chở 6.2 tấn, phù hợp cẩu hàng tầm trung linh hoạt.",
    "payload": "6.200 kg",
    "boxSize": "7.550 x 2.350 x 650 mm",
    "overallSize": "10.720 x 2.500 x 3.750 mm",
    "curbWeight": "9.605 kg",
    "grossWeight": "16.000 kg",
    "workingRadius": "13,2 m",
    "overview": {
      "summary": "Xe Chenglong 2 chân gắn cẩu 5 tấn Soosan SCS525 là mẫu xe cẩu tự hành tầm trung được ưa chuộng nhất nhờ thùng xe siêu dài 7.55m, động cơ Yuchai 200HP Euro 5 mạnh mẽ và cẩu Soosan 5 tấn nhập khẩu Hàn Quốc độ bền vượt trội.",
      "exterior": "Cabin Chenglong M3 dáng vẻ khí động học hiện đại, mặt galang mạ crom sáng bóng, hệ thống đèn chiếu sáng Halogen góc rộng, gương chiếu hậu chỉnh điện sấy kính.",
      "interior": "Cabin rộng rãi 3 chỗ ngồi cùng 1 giường nằm nghỉ, ghế lái bọc hơi êm ái, máy lạnh 2 chiều, kính cửa chỉnh điện, khóa điện trung tâm, vô lăng gật gù.",
      "engineAndChassis": "Động cơ Yuchai YC6JA200-50 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 6.870 cm³, công suất 147 kW (200 PS) / 2300 rpm đạt tiêu chuẩn Euro 5 siêu bền và tiết kiệm nhiên liệu.",
      "craneInfo": "Cần cẩu Soosan SCS525 5 tấn 5 khúc nhập khẩu Hàn Quốc: Sức nâng lớn nhất 7 tấn / 2.0m, bán kính làm việc 13.2m (sức nâng 700kg ở tầm với xa nhất), chiều cao nâng móc 16.2m. Trang bị 4 chân tú mở rộng ổn định, cảm biến chạm cần và chống quá tải an toàn."
    },
    "highlightsList": [
      "Động cơ Yuchai 6 máy 200PS Euro 5 khỏe khoắn, tiết kiệm nhiên liệu",
      "Lòng thùng hàng dài vượt trội 7.55m, tải trọng chở hàng 6.200 kg",
      "Cẩu Soosan SCS525 5 khúc cần lục giác cứng vững, sức nâng mạnh nhất phân khúc",
      "Hệ thống phanh khí nén 2 dòng có phanh cup-po hỗ trợ đổ đèo an toàn",
      "Cẩu trang bị 4 chân tú thủy lực và cảm biến cảnh báo an toàn hiện đại"
    ],
    "applications": [
      "Vận chuyển và cẩu cây cảnh, vật liệu xây dựng, ống cống, sắt thép cây",
      "Cẩu máy móc cơ khí, thiết bị nhà xưởng, vận chuyển palet hàng hóa",
      "Lắp dựng nhà thép tiền chế, biển quảng cáo, hỗ trợ ngành điện lực"
    ],
    "benefits": [
      "Thùng dài 7m55 chở được cây thép dài 6m và hàng cồng kềnh tiện lợi",
      "Chi phí đầu tư hợp lý, khấu hao nhanh, lợi nhuận vận tải cao",
      "Bảo hành chính hãng uy tín tại xưởng sản xuất Ô Tô Tín Phát"
    ],
    "faqs": [
      {
        "question": "Xe Chenglong 2 chân gắn cẩu 5 tấn có sẵn giao ngay không?",
        "answer": "Công ty Ô Tô Tín Phát luôn có sẵn xe chassis và cần cẩu Soosan 5 tấn, hỗ trợ đóng thùng và bàn giao xe nhanh chóng."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "9.605 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "6.200 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "16.000 kg"
      },
      {
        "label": "Kích thước lòng thùng (DxRxC)",
        "value": "7.550 x 2.350 x 650 mm"
      },
      {
        "label": "Kích thước bao (DxRxC)",
        "value": "10.720 x 2.500 x 3.750 mm"
      },
      {
        "label": "Khoảng cách trục",
        "value": "6.300 mm"
      },
      {
        "label": "Nhãn hiệu động cơ",
        "value": "Yuchai YC6JA200-50 (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "6.870 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "147 kW / 2300 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "10.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Nhãn hiệu cẩu",
        "value": "SOOSAN SCS525 (Hàn Quốc)"
      },
      {
        "label": "Sức nâng lớn nhất / tầm với",
        "value": "7.000 kg / 2.0 m"
      },
      {
        "label": "Sức nâng nhỏ nhất / tầm với",
        "value": "700 kg / 13.2 m"
      },
      {
        "label": "Bán kính làm việc tối đa",
        "value": "13.2 m"
      },
      {
        "label": "Chiều cao nâng móc tối đa",
        "value": "16.2 m"
      },
      {
        "label": "Số khúc cần",
        "value": "5 đoạn cần dạng lục giác"
      },
      {
        "label": "Chân tú cẩu",
        "value": "4 chân tú (2 trước + 2 sau) mở rộng thủy lực"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 18 tháng hoặc 120.000 km tại các đại lý Chenglong.",
      "crane": "Bảo hành 12 tháng cẩu Soosan và thùng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-9",
    "brand": "Chenglong",
    "model": "XE CHENGLONG H5 3 CHÂN GẮN CẨU SOOSAN 8 TẤN 7 KHÚC (SCS867LS)",
    "year": 2025,
    "transmission": "Số sàn 8 số tiến, 2 số lùi (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Cẩu",
    "image": "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%208%20T%E1%BA%A4N/z7958345727256_85e9e30ece5fd593ce1fdc39c6de7ddf.jpg",
    "images": [
      "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%208%20T%E1%BA%A4N/z7958345727256_85e9e30ece5fd593ce1fdc39c6de7ddf.jpg",
      "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%208%20T%E1%BA%A4N/z7958345781288_ae0f97a176b0d1fe772885bc1af1b279.jpg",
      "/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%208%20T%E1%BA%A4N/z7958346005830_eb0a07781823940d59ac56afb2fe5d44.jpg"
    ],
    "description": "Xe tải cẩu Chenglong H5 3 chân 6x4 gắn cẩu tự hành Soosan 8 tấn 7 khúc SCS867LS cần dài 22.3m, lòng thùng 8.25m, chuyên cẩu lắp dựng nhà xưởng và công trình cao tầng.",
    "payload": "8.600 kg",
    "boxSize": "8.250 x 2.350 x 650 mm",
    "overallSize": "11.900 x 2.500 x 3.850 mm",
    "curbWeight": "15.200 kg",
    "grossWeight": "24.000 kg",
    "workingRadius": "22,3 m",
    "overview": {
      "summary": "Xe Chenglong H5 3 chân gắn cẩu Soosan 8 tấn 7 khúc SCS867LS là dòng xe tải cẩu tự hành tầm với siêu xa (22.3m), kết hợp hoàn hảo giữa động cơ Yuchai 260HP mạnh mẽ, chassis 3 chân 2 cầu thật 6x4 và cẩu Soosan Hàn Quốc chất lượng đỉnh cao.",
      "exterior": "Cabin H5 nóc cao sang trọng, sơn tĩnh điện bóng bẩy, hệ thống đèn chiếu sáng halogen công suất cao, gương chiếu hậu cầu lồi bao quát toàn bộ thân xe.",
      "interior": "Nội thất cao cấp đầy đủ tiện nghi: 2 ghế hơi êm ái, giường nằm rộng rãi, điều hòa công suất lớn, vô lăng trợ lực, kính điện, radio USB bluetooth.",
      "engineAndChassis": "Động cơ Yuchai YC6A260-50 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 7.520 cm³, công suất 191 kW (260 PS), chuẩn khí thải Euro 5 tiết kiệm nhiên liệu.",
      "craneInfo": "Cần cẩu Soosan SCS867LS 8 tấn 7 khúc nhập khẩu Hàn Quốc: Sức nâng lớn nhất 8.5 tấn / 2.0m, tầm với xa nhất lên tới 22.3m (sức nâng 240kg), chiều cao làm việc 24.5m. Trang bị ghế ngồi điều khiển trên cao, 4 chân tú thủy lực và hệ thống cảm biến an toàn hiện đại."
    },
    "highlightsList": [
      "Cẩu Soosan SCS867LS 7 khúc cần với bán kính làm việc siêu dài lên tới 22.3m",
      "Động cơ Yuchai 260PS Euro 5 mạnh mẽ, 2 cầu thật (6x4) vượt mọi địa hình lầy lội",
      "Lòng thùng xe dài 8.25m chở được các cấu kiện thép và hàng hóa cồng kềnh",
      "Ghế điều khiển làm việc trên cao giúp thợ cẩu quan sát trọn vẹn điểm nâng hạ",
      "Hệ thống cảm biến chạm cần và cảm biến chống quá tải an toàn tuyệt đối"
    ],
    "applications": [
      "Lắp dựng kết cấu thép nhà xưởng, cẩu vật liệu lên các tầng cao công trình",
      "Cẩu dựng cột điện cao thế, biển quảng cáo tấm lớn trên các trục quốc lộ",
      "Cẩu di dời máy móc nặng, cứu hộ giao thông và phục vụ ngành cây xanh đô thị"
    ],
    "benefits": [
      "Tầm với 22.3m thay thế được nhiều dòng cẩu chuyên dùng đắt đỏ",
      "Hiệu suất làm việc cực cao, nhận được nhiều hợp đồng cẩu công trình lớn",
      "Bảo hành chính hãng 12 tháng tại Ô Tô Tín Phát"
    ],
    "faqs": [
      {
        "question": "Cẩu Soosan SCS867LS có mấy khúc và chiều cao làm việc bao nhiêu mét?",
        "answer": "Cẩu có 7 khúc cần lục giác, tầm với xa nhất 22.3m và chiều cao nâng làm việc tối đa đạt 24.5m."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "15.200 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "8.600 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "24.000 kg"
      },
      {
        "label": "Kích thước lòng thùng (DxRxC)",
        "value": "8.250 x 2.350 x 650 mm"
      },
      {
        "label": "Kích thước bao (DxRxC)",
        "value": "11.900 x 2.500 x 3.850 mm"
      },
      {
        "label": "Động cơ",
        "value": "Yuchai YC6A260-50 (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "7.520 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "191 kW (260 PS) / 2300 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "11.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Nhãn hiệu cẩu",
        "value": "SOOSAN SCS867LS (Hàn Quốc)"
      },
      {
        "label": "Sức nâng lớn nhất / tầm với",
        "value": "8.500 kg / 2.0 m"
      },
      {
        "label": "Sức nâng nhỏ nhất / tầm với (Đốt 7)",
        "value": "240 kg / 22.3 m"
      },
      {
        "label": "Bán kính làm việc tối đa",
        "value": "22.3 m"
      },
      {
        "label": "Chiều cao làm việc tối đa",
        "value": "24.5 m"
      },
      {
        "label": "Số khúc cần",
        "value": "7 đoạn cần lục giác"
      },
      {
        "label": "Góc quay cần",
        "value": "360° liên tục"
      },
      {
        "label": "Chân chống",
        "value": "4 chân tú mở rộng bằng thủy lực"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành chính hãng Chenglong 36 tháng.",
      "crane": "Bảo hành 12 tháng cẩu Soosan và thùng xe tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-10",
    "brand": "Dongfeng",
    "model": "XE DONGFENG 3 CHÂN GẮN CẨU SOOSAN 8 TẤN (SCS746L)",
    "year": 2025,
    "transmission": "Số sàn 9 số tiến, 1 số lùi (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Cẩu",
    "image": "/cars/Xe%20C%E1%BA%A9u/DONG%20FENG%20-%208%20T%E1%BA%A4N/z7952467627606_1b93a28629dc21c1ea47e2bbddd38853.jpg",
    "images": [
      "/cars/Xe%20C%E1%BA%A9u/DONG%20FENG%20-%208%20T%E1%BA%A4N/z7952467627606_1b93a28629dc21c1ea47e2bbddd38853.jpg",
      "/cars/Xe%20C%E1%BA%A9u/DONG%20FENG%20-%208%20T%E1%BA%A4N/z7952467690167_cd64f008cf087371eafa7ce8b0a7e2a7.jpg",
      "/cars/Xe%20C%E1%BA%A9u/DONG%20FENG%20-%208%20T%E1%BA%A4N/z7958347334776_d88c2b76c7410f07aae4ce2976e0be48.jpg"
    ],
    "description": "Xe tải Dongfeng 3 chân nhập khẩu gắn cẩu Soosan 8 tấn 6 khúc SCS746L Hàn Quốc, tải trọng chở 9.45 tấn, thùng dài 8.27m, hiệu suất nâng hạ bền bỉ số 1.",
    "payload": "9.450 kg",
    "boxSize": "8.270 x 2.350 x 650 mm",
    "overallSize": "11.900 x 2.500 x 3.900 mm",
    "curbWeight": "14.420 kg",
    "grossWeight": "24.000 kg",
    "workingRadius": "19,6 m",
    "overview": {
      "summary": "Xe cẩu Dongfeng 3 chân kết hợp cẩu Soosan 8 tấn SCS746L là dòng xe tải cẩu mạnh mẽ với khả năng nâng hạ linh hoạt và độ ổn định cao. Động cơ Cummins ISD270 50 kết hợp cẩu Soosan Hàn Quốc đảm bảo sự an toàn và hiệu quả tối ưu cho mọi công trình.",
      "exterior": "Cabin Dongfeng Hoàng Huy phong cách khỏe khoắn, mặt galang mạ crom sáng bóng, cụm đèn pha Halogen độ sáng cao, bậc lên xuống rộng rãi.",
      "interior": "Cabin rộng thoáng với 2 ghế bọc nỉ êm ái và 1 giường nằm phía sau, điều hòa 2 chiều mát sâu, kính chỉnh điện, khóa điện điều khiển từ xa.",
      "engineAndChassis": "Động cơ Cummins ISD270 50 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 6.700 cm³, công suất 198 kW / 2500 rpm đạt tiêu chuẩn Euro 5 siêu khỏe và bền bỉ. Khung gầm chassis 2 lớp chịu tải nặng tuyệt vời.",
      "craneInfo": "Cần cẩu SOOSAN SCS746L 8 tấn 6 khúc nhập khẩu Hàn Quốc: Sức nâng lớn nhất 8.0 tấn / 2.0m, bán kính làm việc tối đa 19.6m (sức nâng 400kg ở tầm xa nhất), chiều cao nâng móc 22.6m. Cẩu trang bị ghế ngồi trên cao, 4 chân tú thủy lực và cảm biến chạm cần."
    },
    "highlightsList": [
      "Động cơ Cummins ISD270 Euro 5 bền bỉ, tiết kiệm nhiên liệu nổi tiếng thế giới",
      "Tải trọng cho phép chở hàng lớn 9.450 kg, thùng dài 8.27m tiện dụng",
      "Cẩu Soosan 8 tấn SCS746L 6 khúc nhập khẩu Hàn Quốc hoạt động êm ái, khỏe",
      "Chassis đúc 2 lớp chịu lực siêu tốt, hạn chế tối đa độ rung lắc khi cẩu hàng",
      "Ghế điều khiển làm việc trên cao và cảm biến chạm cần an toàn"
    ],
    "applications": [
      "Bốc dỡ, nâng hạ hàng hóa nặng tại kho bãi, bến cảng, trạm logistics",
      "Vận chuyển và lắp đặt thiết bị nhà xưởng, kết cấu thép xây dựng",
      "Cẩu trồng cây xanh, hỗ trợ lắp đặt hạ tầng điện lực đô thị"
    ],
    "benefits": [
      "Thương hiệu Dongfeng Hoàng Huy nhập khẩu giữ giá tốt, phụ tùng cực rẻ",
      "Cẩu Soosan 8 tấn tầm với 19.6m đáp ứng hầu hết công việc cẩu dân dụng và công nghiệp",
      "Hỗ trợ vay mua xe trả góp lên đến 75% giá trị hợp đồng"
    ],
    "faqs": [
      {
        "question": "Sức nâng tối đa của cẩu Soosan SCS746L là bao nhiêu?",
        "answer": "Sức nâng lớn nhất của cẩu đạt 8.0 tấn tại tầm với 2.0 mét và vươn xa tối đa 19.6 mét."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "14.420 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "9.450 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "24.000 kg"
      },
      {
        "label": "Kích thước lòng thùng (DxRxC)",
        "value": "8.270 x 2.350 x 650 mm"
      },
      {
        "label": "Kích thước bao (DxRxC)",
        "value": "11.900 x 2.500 x 3.900 mm"
      },
      {
        "label": "Động cơ",
        "value": "Cummins ISD270 50 (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "6.700 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "198 kW / 2500 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "11.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Nhãn hiệu cẩu",
        "value": "SOOSAN SCS746L (Hàn Quốc)"
      },
      {
        "label": "Sức nâng lớn nhất / tầm với",
        "value": "8.000 kg / 2.0 m"
      },
      {
        "label": "Sức nâng nhỏ nhất / tầm với",
        "value": "400 kg / 19.6 m"
      },
      {
        "label": "Bán kính làm việc tối đa",
        "value": "19.6 m"
      },
      {
        "label": "Chiều cao nâng móc tối đa",
        "value": "22.6 m"
      },
      {
        "label": "Số khúc cần",
        "value": "6 đoạn cần lục giác"
      },
      {
        "label": "Chân chống",
        "value": "4 chân tú mở rộng bằng thủy lực"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành chính hãng 24 tháng hoặc 100.000 km trên toàn quốc.",
      "crane": "Bảo hành 12 tháng cẩu Soosan và thùng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-11",
    "brand": "Hino",
    "model": "XE HINO FM8JW7A 3 CHÂN GẮN CẨU SOOSAN 8 TẤN 7 KHÚC (SCS867LS)",
    "year": 2025,
    "transmission": "Số sàn 9 số tiến, 1 số lùi",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Cẩu",
    "image": "/cars/Xe%20C%E1%BA%A9u/HINO%20-%208%20T%E1%BA%A4N/z7958347948670_b7623d3512448c015d3de546d2200a91.jpg",
    "images": [
      "/cars/Xe%20C%E1%BA%A9u/HINO%20-%208%20T%E1%BA%A4N/z7958347948670_b7623d3512448c015d3de546d2200a91.jpg",
      "/cars/Xe%20C%E1%BA%A9u/HINO%20-%208%20T%E1%BA%A4N/z7958348115244_e9ff4b50a64af16842566e357fb93720.jpg",
      "/cars/Xe%20C%E1%BA%A9u/HINO%20-%208%20T%E1%BA%A4N/z7958348281152_9fa7325c3fc8dbff7c89c59e391c72a2.jpg"
    ],
    "description": "Xe tải Hino 3 chân 2 cầu thật FM8JW7A Euro 5 gắn cẩu Soosan 8 tấn 7 khúc SCS867LS tầm với 22.3m, lòng thùng 8.5m, biểu tượng đẳng cấp và chất lượng Nhật Bản.",
    "payload": "9.150 kg",
    "boxSize": "8.500 x 2.350 x 650 mm",
    "overallSize": "11.950 x 2.500 x 3.920 mm",
    "curbWeight": "14.700 kg",
    "grossWeight": "24.000 kg",
    "workingRadius": "22,3 m",
    "overview": {
      "summary": "Xe Hino FM 3 chân gắn cẩu Soosan 8 tấn 7 khúc SCS867LS là sự kết hợp hoàn hảo giữa thương hiệu xe tải số 1 Nhật Bản và cần cẩu tự hành hàng đầu Hàn Quốc, mang lại đẳng cấp vượt trội, độ bền tuyệt đối và giá trị kinh tế lâu dài.",
      "exterior": "Cabin Hino Series 500 hầm hố, khí động học giảm tiêu hao nhiên liệu. Cụm đèn pha Halogen sắc nét, bậc lên xuống chống trượt và gương chiếu hậu đa hướng đảm bảo an toàn tuyệt đối.",
      "interior": "Nội thất sang trọng: 3 ghế bọc nỉ êm ái cùng giường nằm nghỉ, điều hòa Denso 2 chiều mát lạnh, vô lăng trợ lực gật gù, đài radio CD tiện nghi.",
      "engineAndChassis": "Động cơ Hino J08E-WD 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 7.684 cm³, công suất 280 PS tại 2.500 rpm đạt tiêu chuẩn Euro 5 siêu bền bỉ. Khung chassis đúc nguyên khối chịu lực cao.",
      "craneInfo": "Cần cẩu Soosan SCS867LS 8 tấn 7 khúc nhập khẩu Hàn Quốc: Sức nâng lớn nhất 8.5 tấn / 2.0m, bán kính làm việc xa nhất 22.3m (sức nâng 240kg), chiều cao làm việc 24.5m. Trang bị ghế ngồi trên cao, 4 chân tú thủy lực và hệ thống cảm biến an toàn tối tân."
    },
    "highlightsList": [
      "Động cơ Hino J08E-WD 280PS Euro 5 siêu bền, tiết kiệm nhiên liệu số 1 phân khúc",
      "Hệ dẫn động 2 cầu thật 6x4 vận hành mạnh mẽ trên mọi địa hình công trường phức tạp",
      "Cẩu Soosan 8 tấn 7 khúc tầm với siêu dài 22.3m, cẩu cao đến 24.5m",
      "Lòng thùng dài 8.5m, tải trọng chở hàng lên đến 9.150 kg",
      "Giá trị khấu hao cực thấp, giữ giá tốt nhất thị trường xe tải cẩu"
    ],
    "applications": [
      "Lắp dựng nhà tiền chế, thi công lắp đặt nhà xưởng, cầu đường",
      "Cẩu thiết bị trạm biến áp, cột điện viễn thông trên cao",
      "Vận chuyển máy công trình, cấu kiện bê tông đúc sẵn, sắt thép công nghiệp"
    ],
    "benefits": [
      "Đẳng cấp thương hiệu Nhật Bản tạo uy tín tuyệt đối với mọi chủ đầu tư dự án",
      "Vận hành liên tục không lo hỏng vặt, chi phí bảo trì cực thấp",
      "Bảo hành chính hãng Hino 3 năm hoặc 100.000 km trên toàn quốc"
    ],
    "faqs": [
      {
        "question": "Thùng xe đóng bằng vật liệu gì?",
        "answer": "Thùng xe được Ô Tô Tín Phát gia công bằng thép dập định hình cao cấp, sàn lá me chống trượt 3.0mm, đà dọc đà ngang dày dặn chịu tải nặng."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "14.700 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "9.150 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "24.000 kg"
      },
      {
        "label": "Kích thước lòng thùng (DxRxC)",
        "value": "8.500 x 2.350 x 650 mm"
      },
      {
        "label": "Kích thước bao (DxRxC)",
        "value": "11.950 x 2.500 x 3.920 mm"
      },
      {
        "label": "Động cơ",
        "value": "Hino J08E-WD (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "7.684 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "206 kW (280 PS) / 2500 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "11.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Nhãn hiệu cẩu",
        "value": "SOOSAN SCS867LS (Hàn Quốc)"
      },
      {
        "label": "Sức nâng lớn nhất / tầm với",
        "value": "8.500 kg / 2.0 m"
      },
      {
        "label": "Sức nâng nhỏ nhất / tầm với (Đốt 7)",
        "value": "240 kg / 22.3 m"
      },
      {
        "label": "Bán kính làm việc tối đa",
        "value": "22.3 m"
      },
      {
        "label": "Chiều cao làm việc tối đa",
        "value": "24.5 m"
      },
      {
        "label": "Số đoạn cần",
        "value": "7 đoạn cần lục giác"
      },
      {
        "label": "Chân tú cẩu",
        "value": "4 chân tú (2 trước + 2 sau) mở rộng thủy lực"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại các đại lý ủy quyền Hino.",
      "crane": "Bảo hành 12 tháng cẩu Soosan và thùng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-12",
    "brand": "UD Trucks",
    "model": "XE TẢI UD TRUCKS 4 CHÂN GẮN CẨU SOOSAN 15 TẤN (SCS1516S)",
    "year": 2025,
    "transmission": "Số sàn 9 số tiến, 1 số lùi",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Cẩu",
    "image": "/cars/Xe%20C%E1%BA%A9u/UD%20TRUCKS%2015%20T%E1%BA%A4N/z7958350633551_0d893960bde677db621ee4eb3c885e8f.jpg",
    "images": [
      "/cars/Xe%20C%E1%BA%A9u/UD%20TRUCKS%2015%20T%E1%BA%A4N/z7958350633551_0d893960bde677db621ee4eb3c885e8f.jpg",
      "/cars/Xe%20C%E1%BA%A9u/UD%20TRUCKS%2015%20T%E1%BA%A4N/z7958350746164_058f0a9744b3b78f758ed7c8d3b3e8a0.jpg",
      "/cars/Xe%20C%E1%BA%A9u/UD%20TRUCKS%2015%20T%E1%BA%A4N/z7958350913151_58a74b0bf64e7d4c7e41fa4e33245a37.jpg"
    ],
    "description": "Xe tải nặng UD Trucks Quester 4 chân 8x4 gắn cẩu siêu tải nặng Soosan 15 tấn 6 khúc SCS1516S Hàn Quốc tầm với 25m, thùng dài 8.2m, đỉnh cao cẩu siêu trường siêu trọng.",
    "payload": "10.800 kg",
    "boxSize": "8.200 x 2.350 x 650 mm",
    "overallSize": "12.150 x 2.500 x 3.950 mm",
    "curbWeight": "19.050 kg",
    "grossWeight": "30.000 kg",
    "workingRadius": "25,0 m",
    "overview": {
      "summary": "Xe tải UD Trucks 4 chân gắn cẩu Soosan 15 tấn SCS1516S là mẫu xe tải cẩu tự hành hạng nặng công suất khủng nhất hiện nay, chuyên phục vụ cẩu lắp các cấu kiện siêu trường siêu trọng, thiết bị công nghiệp nặng tại các đại dự án và công trình trọng điểm quốc gia.",
      "exterior": "Cabin UD Quester phong cách Volvo Trucks Thụy Điển mạnh mẽ, khung thép chịu va đập tiêu chuẩn Châu Âu, đèn pha projector hiện đại, gương chiếu hậu sấy điện.",
      "interior": "Không gian nội thất đẳng cấp Châu Âu: Ghế lái bóng hơi tự động cân bằng, giường nằm êm ái, điều hòa tự động 2 chiều, màn hình điều khiển thông minh, vô lăng tích hợp phím bấm.",
      "engineAndChassis": "Động cơ GH8E 350 Euro 5 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 7.698 cm³, công suất 257 kW (350 PS) tại 2.200 rpm, mô men xoắn cực đại 1.200 Nm. Chassis 2 lớp thép tôi nhiệt siêu cứng.",
      "craneInfo": "Cần cẩu SOOSAN SCS1516S 15 tấn 6 khúc nhập khẩu trực tiếp Hàn Quốc: Sức nâng lớn nhất 15.000 kg / 2.0m, bán kính làm việc tối đa 25.0m (sức nâng 1.150 kg ở tầm xa nhất), chiều cao nâng móc 28.5m. Cẩu trang bị ghế ngồi trên cao, tời phụ 2 tốc độ, 4 chân tú cỡ đại và hệ thống an toàn đa tầng."
    },
    "highlightsList": [
      "Động cơ UD GH8E 350PS công nghệ Volvo Trucks Thụy Điển siêu khỏe và bền bỉ",
      "Cẩu Soosan 15 tấn SCS1516S 6 khúc sức nâng khủng 15 tấn, tầm với tối đa 25 mét",
      "Lòng thùng dài 8.2m, tải trọng chở hàng lên đến 10.800 kg",
      "Tời phụ 2 tốc độ cáp chống xoắn giúp tăng tốc độ nâng hạ hàng hóa nhẹ",
      "Khung gầm chassis 4 chân 8x4 vững chãi như núi, không rung lắc khi cẩu nặng",
      "Hệ thống cảm biến chạm cần, cảnh báo quá tải và khóa an toàn tự động"
    ],
    "applications": [
      "Cẩu lắp đặt máy biến áp, turbine điện gió, dầm cầu bê tông và kết cấu thép khổng lồ",
      "Cẩu di dời và lắp đặt dây chuyền máy móc công nghiệp nặng hàng chục tấn",
      "Phục vụ tại các bến cảng container, kho bãi thép cuộn và công trình dầu khí"
    ],
    "benefits": [
      "Thay thế hoàn toàn xe cẩu bánh lốp chuyên dùng trong nhiều tác vụ nâng hạ",
      "Vừa cẩu được hàng cực nặng vừa chở hàng chạy đường dài hợp pháp",
      "Thương hiệu xe UD Trucks (Nhật Bản/Volvo) đem lại sự tin cậy tuyệt đối"
    ],
    "faqs": [
      {
        "question": "Sức nâng tối đa ở tầm với xa nhất 25 mét của cẩu là bao nhiêu?",
        "answer": "Ở tầm với cực đại 25.0 mét, cẩu Soosan SCS1516S vẫn nâng được tải trọng lên tới 1.150 kg."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "19.050 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "10.800 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "30.000 kg"
      },
      {
        "label": "Kích thước lòng thùng (DxRxC)",
        "value": "8.200 x 2.350 x 650 mm"
      },
      {
        "label": "Kích thước bao (DxRxC)",
        "value": "12.150 x 2.500 x 3.950 mm"
      },
      {
        "label": "Động cơ",
        "value": "UD GH8E 350 (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "7.698 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "257 kW (350 PS) / 2200 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "11.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Nhãn hiệu cẩu",
        "value": "SOOSAN SCS1516S (Hàn Quốc)"
      },
      {
        "label": "Sức nâng lớn nhất / tầm với",
        "value": "15.000 kg / 2.0 m"
      },
      {
        "label": "Sức nâng nhỏ nhất / tầm với (Đốt 6)",
        "value": "1.150 kg / 25.0 m"
      },
      {
        "label": "Bán kính làm việc tối đa",
        "value": "25.0 m"
      },
      {
        "label": "Chiều cao làm việc tối đa",
        "value": "28.5 m"
      },
      {
        "label": "Số đoạn cần",
        "value": "6 đoạn cần lục giác"
      },
      {
        "label": "Trang bị thêm",
        "value": "Tời phụ 2 tốc độ, cáp chống xoắn, ghế ngồi trên cao"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 24 tháng hoặc 150.000 km tại các đại lý UD Trucks toàn quốc.",
      "crane": "Bảo hành 12 tháng cẩu Soosan và thùng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-13",
    "brand": "Chenglong",
    "model": "XE ÉP RÁC 22 KHỐI CHENGLONG H5 (NÂNG KẸP THÙNG)",
    "year": 2025,
    "transmission": "Số sàn 9 số tiến, 1 số lùi",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/CHENGLONG%20-%2022%20KH%E1%BB%90I/1787017657948_9176220574947847834_9176220574947847834_2bbc8b9dea1dcc3dd890c9c07fd4f57d.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/CHENGLONG%20-%2022%20KH%E1%BB%90I/1787017657948_9176220574947847834_9176220574947847834_2bbc8b9dea1dcc3dd890c9c07fd4f57d.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/CHENGLONG%20-%2022%20KH%E1%BB%90I/1787017657981_9176220574947847834_9176220574947847834_4e6ff6b90752a1075cd450037ef457e3.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/CHENGLONG%20-%2022%20KH%E1%BB%90I/z7682341905823_f7a8e0451d5a3e6c90c8301a1ca2f6c8.jpg"
    ],
    "description": "Xe cuốn ép rác 22 khối Chenglong H5 3 chân 6x4 Euro 5 trang bị cơ cấu nạp rác nâng kẹp thùng rác công cộng 240L/660L, lực ép cực mạnh chuyên vận chuyển rác đường dài.",
    "payload": "10.200 kg",
    "boxSize": "Dung tích thùng chứa: 22 m³ (Thùng Inox)",
    "overallSize": "9.850 x 2.500 x 3.750 mm",
    "curbWeight": "13.650 kg",
    "grossWeight": "24.000 kg",
    "overview": {
      "summary": "Xe ép rác 22 khối Chenglong H5 là dòng xe môi trường cỡ lớn, có khả năng nén ép và chứa lượng rác thải sinh hoạt khổng lồ lên tới 22m³. Xe chuyên phục vụ gom rác tại các trạm trung chuyển lớn hoặc khu công nghiệp vận chuyển về bãi rác xử lý.",
      "exterior": "Cabin Chenglong H5 kiểu dáng Châu Âu hiện đại, thùng ép rác biên dạng cong không xương tăng độ thẩm mỹ và độ cứng vững, sơn màu xanh môi trường tươi sáng.",
      "interior": "Cabin rộng rãi có giường nằm, 2 ghế bọc da êm ái, điều hòa 2 chiều công suất lớn, vô lăng gật gù, hệ thống âm thanh giải trí USB radio.",
      "engineAndChassis": "Động cơ Yuchai YC6A260-50 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 7.520 cm³, công suất 191 kW (260 PS) Euro 5 tiết kiệm dầu, cầu sau 2 cầu thật 6x4 chịu tải nặng tốt.",
      "craneInfo": "Thùng chứa rác 22m³ và đuôi ép chế tạo từ thép hợp kim chịu mài mòn cao Inox/SPA-H. Cơ cấu cuốn ép rác dạng lưỡi cào liên tục với hệ thống xylanh thủy lực Châu Âu lực ép cực mạnh, tích hợp cơ cấu nâng kẹp thùng rác 120L - 660L."
    },
    "highlightsList": [
      "Dung tích thùng chứa rác cực lớn 22m³ cho phép chở khối lượng rác nén khổng lồ",
      "Cơ cấu nạp rác dạng NÂNG KẸP thùng rác tiêu chuẩn 120L, 240L, 660L tiện dụng",
      "Hệ thống thủy lực nhập khẩu Châu Âu mới 100%, áp suất cao ép rác kiệt nước",
      "Thùng chứa Inox chống ăn mòn axit rác, máng hứng nước rỉ rác dung tích lớn",
      "Động cơ Yuchai 260PS Euro 5 khỏe khoắn và bền bỉ"
    ],
    "applications": [
      "Thu gom và ép rác tại các trạm trung chuyển rác thải đô thị lớn",
      "Vận chuyển rác thải sinh hoạt khối lượng lớn từ nội thành ra bãi rác ngoại ô",
      "Thu gom rác tại các đại đô thị, khu chế xuất và khu công nghiệp lớn"
    ],
    "benefits": [
      "Giảm tối đa số chuyến chạy xe, tiết kiệm hàng trăm triệu chi phí nhiên liệu mỗi năm",
      "Cơ chế nâng kẹp tự động giảm triệt để sức lao động cho công nhân vệ sinh",
      "Được bảo hành chính hãng và hỗ trợ trả góp lãi suất thấp"
    ],
    "faqs": [
      {
        "question": "Xe có cơ cấu nâng kẹp được thùng rác dung tích bao nhiêu?",
        "answer": "Cơ cấu nâng kẹp thủy lực phía sau nâng được các loại thùng rác nhựa tiêu chuẩn 120L, 240L, 660L một cách dễ dàng."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "13.650 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "10.200 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "24.000 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "9.850 x 2.500 x 3.750 mm"
      },
      {
        "label": "Động cơ",
        "value": "Yuchai YC6A260-50 (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "7.520 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "191 kW / 2300 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "11.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "22 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Cơ cấu NÂNG KẸP thùng rác 120L/240L/660L"
      },
      {
        "label": "Cơ cấu ép rác",
        "value": "Tấm ép và lưỡi cào cuốn rác thủy lực liên tục"
      },
      {
        "label": "Tỷ số ép rác",
        "value": "1.8 : 1 đến 2.2 : 1"
      },
      {
        "label": "Vật liệu đóng thùng",
        "value": "Thép SPA-H / Inox 304 chống rỉ sét và chịu mài mòn cao"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng tại các trạm bảo hành Chenglong trên toàn quốc.",
      "crane": "Bảo hành 12 tháng hệ thống thùng ép và thủy lực tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-14",
    "brand": "Hino",
    "model": "XE ÉP RÁC 14 KHỐI HINO FG8JJ7A (MÁNG XÚC)",
    "year": 2025,
    "transmission": "Số sàn 6 số tiến, 1 số lùi",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/HINO%20FG%20-%2014%20KH%E1%BB%90I/z7980592817817_29d687f115c3a844aef55e78b0e16a85.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/HINO%20FG%20-%2014%20KH%E1%BB%90I/z7980592817817_29d687f115c3a844aef55e78b0e16a85.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/HINO%20FG%20-%2014%20KH%E1%BB%90I/z7980592819862_fcb75746b79eea4a268ecbfd9d5b8df9.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/HINO%20FG%20-%2014%20KH%E1%BB%90I/z7980592850505_f9228930bc5dc8ec7e07099e9ddf06d6.jpg"
    ],
    "description": "Xe ép rác 14 khối Hino FG8JJ7A Euro 5 trang bị cơ cấu máng xúc phía sau, động cơ Hino 260PS siêu bền bỉ, tiết kiệm nhiên liệu hàng đầu cho các công ty môi trường đô thị.",
    "payload": "6.000 kg",
    "boxSize": "Dung tích thùng chứa: 14 m³",
    "overallSize": "7.850 x 2.500 x 3.450 mm",
    "curbWeight": "9.850 kg",
    "grossWeight": "16.000 kg",
    "overview": {
      "summary": "Xe ép rác 14 khối Hino FG là phân khúc xe môi trường tầm trung cao cấp được các công ty dịch vụ công ích tin dùng nhất, sở hữu độ bền bỉ Nhật Bản vượt thời gian và khả năng nén ép rác kiệt nước, sạch sẽ.",
      "exterior": "Cabin Hino Series 500 khí động học, kính chắn gió bản rộng, cụm đèn Halogen sắc nét, thùng ép rác biên dạng cong thẩm mỹ cao.",
      "interior": "Cabin 3 chỗ ngồi êm ái, máy lạnh Denso 2 chiều làm lạnh nhanh, vô lăng gật gù, radio USB, bảng đồng hồ điện tử hiển thị đa thông tin.",
      "engineAndChassis": "Động cơ Hino J08E-WE 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 7.684 cm³, công suất 260 PS tại 2.500 rpm đạt tiêu chuẩn Euro 5 mạnh mẽ.",
      "craneInfo": "Thùng chứa rác 14 khối Inox/SPA-H, trang bị máng xúc rác dung tích lớn phía sau, hệ thống bơm van xy lanh thủy lực nhập khẩu Châu Âu với van điều khiển đa tầng tự động hoặc bán tự động."
    },
    "highlightsList": [
      "Động cơ Hino J08E-WE 260PS Euro 5 siêu bền bỉ và tiết kiệm dầu",
      "Thùng chứa 14m³ biên dạng cong chịu lực tốt, vật liệu thép/inox chống ăn mòn",
      "Cơ cấu máng xúc rác phía sau xúc nạp lượng rác lớn nhanh chóng",
      "Hệ thống thủy lực nhập khẩu Châu Âu mới 100%, lực ép rác mạnh mẽ",
      "Thương hiệu Hino Nhật Bản giữ giá số 1, chi phí vận hành bảo dưỡng cực thấp"
    ],
    "applications": [
      "Thu gom rác tại các quận huyện đô thị, thành phố lớn",
      "Thu gom và ép rác tại các chợ đầu mối, trung tâm thương mại, khu du lịch"
    ],
    "benefits": [
      "Khả năng ép rác chặt giúp tăng khối lượng vận chuyển trong mỗi chuyến",
      "Bảo hành chính hãng 3 năm tại Hino toàn quốc"
    ],
    "faqs": [
      {
        "question": "Cơ cấu máng xúc phía sau hoạt động như thế nào?",
        "answer": "Máng xúc được hạ sát mặt đất để công nhân đổ rác từ xe gom tay hoặc thùng rác vào, sau đó ty thủy lực nâng máng lên đổ rác vào khoang ép tự động."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "9.850 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "6.000 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "16.000 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "7.850 x 2.500 x 3.450 mm"
      },
      {
        "label": "Động cơ",
        "value": "Hino J08E-WE (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "7.684 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "191 kW (260 PS) / 2500 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "11.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "14 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Máng xúc rác thủy lực dung tích lớn"
      },
      {
        "label": "Cơ cấu cuốn ép",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực"
      },
      {
        "label": "Tỷ số nén ép",
        "value": "1.8 : 1 đến 2.0 : 1"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 304 / Thép hợp kim SPA-H chống ăn mòn"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại các đại lý Hino.",
      "crane": "Bảo hành 12 tháng hệ thống chuyên dùng ép rác tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-15",
    "brand": "Hyundai",
    "model": "XE ÉP RÁC 2 KHỐI HYUNDAI NEW PORTER H150",
    "year": 2025,
    "transmission": "Số sàn 6 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/HYUNDAI%20H150%20-%202%20KH%E1%BB%90I/z7682417867774_8437d6d6089cf8b9b6f9cd4af51dabf8.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/HYUNDAI%20H150%20-%202%20KH%E1%BB%90I/z7682417867774_8437d6d6089cf8b9b6f9cd4af51dabf8.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/HYUNDAI%20H150%20-%202%20KH%E1%BB%90I/z7682417902048_5a94b51f72dde303f3c9188da22d91a7.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/HYUNDAI%20H150%20-%202%20KH%E1%BB%90I/z7767428263584_6fa4cfec4d4c5065bc23c7b10dec811d.jpg"
    ],
    "description": "Xe cuốn ép rác mini 2 khối Hyundai Porter H150 Euro 5 nhỏ gọn, có cơ cấu cuốn nén rác chuyên dùng luồn lách vào từng con hẻm nhỏ nhất nội thành.",
    "payload": "990 kg",
    "boxSize": "Dung tích thùng chứa: 2 m³",
    "overallSize": "5.000 x 1.760 x 2.150 mm",
    "curbWeight": "2.360 kg",
    "grossWeight": "3.490 kg",
    "overview": {
      "summary": "Xe ép rác 2 khối Hyundai H150 là dòng xe ép rác nhỏ gọn nhất thị trường, trang bị đầy đủ hệ thống cuốn ép rác thủy lực chuyên nghiệp như xe lớn giúp nén rác gọn gàng và vận chuyển sạch sẽ trong các tuyến phố cấm xe tải trọng lớn.",
      "exterior": "Cabin Porter H150 thanh lịch, thùng ép rác Inox sáng bóng nhỏ gọn, đèn chiếu sáng halogen rõ nét.",
      "interior": "Cabin 3 chỗ ngồi êm ái, máy lạnh 2 chiều mát sâu, kính cửa chỉnh điện, vô lăng gật gù trợ lực nhẹ nhàng.",
      "engineAndChassis": "Động cơ Hyundai D4CB 2.497 cm³ công suất 95.6 kW Euro 5 bền bỉ, chạy êm và siêu tiết kiệm dầu.",
      "craneInfo": "Thùng chứa rác 2m³ bằng Inox chống ăn mòn, cơ cấu nạp ép rác thủy lực khép kín, có bồn gom nước thải chống tràn tuyệt đối."
    },
    "highlightsList": [
      "Động cơ Hyundai D4CB Euro 5 chạy êm, tiết kiệm dầu",
      "Kích thước siêu nhỏ gọn, chạy được vào mọi hẻm nhỏ đô thị",
      "Có cơ cấu ép nén rác chuyên nghiệp, thùng Inox không rỉ sét",
      "Giá thành đầu tư thấp, nhanh thu hồi vốn"
    ],
    "applications": [
      "Thu gom rác từng ngõ phố nhỏ, khu dân cư nội thành",
      "Phục vụ gom rác tại các khu nghỉ dưỡng, khách sạn, bệnh viện"
    ],
    "benefits": [
      "Nén ép rác giúp chở được khối lượng rác gấp đôi so với xe chở rác thông thường",
      "Bảo hành chính hãng 24 tháng tại Hyundai"
    ],
    "faqs": [
      {
        "question": "Xe có bị cấm giờ trong nội thành không?",
        "answer": "Với tổng trọng tải dưới 3.5 tấn (3.490 kg), xe được phép lưu thông linh hoạt theo khung giờ quy định cho xe tải nhỏ."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "2.360 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "990 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "3.490 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "5.000 x 1.760 x 2.150 mm"
      },
      {
        "label": "Động cơ",
        "value": "Hyundai D4CB (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "2.497 cm³"
      },
      {
        "label": "Công suất lớn nhất",
        "value": "95.6 kW / 3800 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "195/70R15 / 145/R13"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "2 m³"
      },
      {
        "label": "Cơ cấu cuốn ép",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực"
      },
      {
        "label": "Vật liệu đóng thùng",
        "value": "Inox 430 / Inox 304 cao cấp"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 24 tháng hoặc 100.000 km tại Hyundai.",
      "crane": "Bảo hành 12 tháng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-16",
    "brand": "Hyundai",
    "model": "XE ÉP RÁC 9 KHỐI HYUNDAI MIGHTY W11S (MÁNG XÚC)",
    "year": 2025,
    "transmission": "Số sàn 5 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/HYUNDAI%20MIGHTY%20W11S/z7919980029370_5d725ddd70e2589108829ce6c804c198.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/HYUNDAI%20MIGHTY%20W11S/z7919980029370_5d725ddd70e2589108829ce6c804c198.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/HYUNDAI%20MIGHTY%20W11S/z7919980130793_3992fcd346630ac5ebcfb83cc4dce9bf.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/HYUNDAI%20MIGHTY%20W11S/z7919980376671_31d9da9679c0b5458aa88095e4432975.jpg"
    ],
    "description": "Xe ép rác 9 khối Hyundai Mighty W11S thế hệ mới Euro 5 trang bị cơ cấu máng xúc nạp rác nhanh, thùng chứa Inox biên dạng cong nén ép rác mạnh mẽ.",
    "payload": "4.200 kg",
    "boxSize": "Dung tích thùng chứa: 9 m³",
    "overallSize": "6.750 x 2.200 x 2.850 mm",
    "curbWeight": "6.205 kg",
    "grossWeight": "10.600 kg",
    "overview": {
      "summary": "Xe ép rác 9 khối Hyundai Mighty W11S là mẫu xe môi trường phân khúc tầm trung chủ lực, mang đến hiệu quả kinh tế vượt trội nhờ sức chứa 9 khối rác nén chặt, động cơ D4GA Euro 5 mạnh mẽ và chi phí bảo dưỡng cực thấp.",
      "exterior": "Cabin Hyundai W11S kiểu mới vuông vức, sơn tĩnh điện bóng bẩy, thùng ép rác biên dạng cong không xương cứng cáp.",
      "interior": "Nội thất cao cấp với 3 ghế bọc da, máy lạnh 2 chiều công suất cao, kính chỉnh điện, vô lăng gật gù, đồng hồ hiển thị điện tử hiện đại.",
      "engineAndChassis": "Động cơ Hyundai D4GA 3.933 cm³, công suất 125 kW / 2500 rpm Euro 5 tiết kiệm nhiên liệu, khung gầm gia cố thép chịu lực dày dặn.",
      "craneInfo": "Thùng chứa rác 9m³ Inox/thép chịu mài mòn, cơ cấu máng xúc nạp rác thuận tiện và hệ thống xylanh thủy lực Châu Âu lực ép nén rác cực khỏe."
    },
    "highlightsList": [
      "Động cơ Hyundai D4GA Euro 5 mạnh mẽ, siêu tiết kiệm nhiên liệu",
      "Thùng chứa rác 9m³ Inox biên dạng cong hiện đại, không bám cặn rác",
      "Cơ cấu máng xúc rác nạp rác nhanh chóng từ các xe gom rác đẩy tay",
      "Hệ thống thủy lực nhập khẩu Châu Âu mới 100%, áp suất nén cao",
      "Bảo hành chính hãng 3 năm trên toàn quốc"
    ],
    "applications": [
      "Thu gom rác khu dân cư, khu đô thị, trung tâm thương mại",
      "Vận chuyển rác thải sinh hoạt ra các bãi xử lý rác tập trung"
    ],
    "benefits": [
      "Tối ưu hóa thể tích 9m³ giúp giảm chuyến chạy xe, tăng lợi nhuận",
      "Phụ tùng Hyundai dễ tìm, chi phí sửa chữa bảo dưỡng cực rẻ"
    ],
    "faqs": [
      {
        "question": "Thùng xe có máng thu gom nước rác không?",
        "answer": "Có, xe được trang bị thùng gom nước rỉ rác dung tích lớn có van xả kín, tuyệt đối không chảy nước bẩn ra đường."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "6.205 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "4.200 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "10.600 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "6.750 x 2.200 x 2.850 mm"
      },
      {
        "label": "Động cơ",
        "value": "Hyundai D4GA (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "3.933 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "125 kW / 2500 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "8.25-16"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "9 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Máng xúc thủy lực"
      },
      {
        "label": "Cơ cấu cuốn ép",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 430 / Inox 304"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại Hyundai toàn quốc.",
      "crane": "Bảo hành 12 tháng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-17",
    "brand": "Isuzu",
    "model": "XE ÉP RÁC 9 KHỐI ISUZU FRR650 (FRR90NE4/E5)",
    "year": 2025,
    "transmission": "Số sàn 6 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FRR%20-%209%20KH%E1%BB%90I/isuzu_frr_9m3_main.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FRR%20-%209%20KH%E1%BB%90I/isuzu_frr_9m3_main.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FRR%20-%209%20KH%E1%BB%90I/z7939077783035_3be2468e8897489029b996e4858a0a80.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FRR%20-%209%20KH%E1%BB%90I/z7939079949561_8c247528353e8d4ceceb0af8804bd053.jpg"
    ],
    "description": "Xe ép rác 9 khối Isuzu FRR650 Euro 5 đóng thùng Inox biên dạng cong, cơ cấu máng xúc nạp rác nhanh, động cơ Isuzu Common Rail siêu bền và tiết kiệm nhiên liệu.",
    "payload": "4.450 kg",
    "boxSize": "Dung tích thùng chứa: 9 m³",
    "overallSize": "6.600 x 2.370 x 2.900 mm",
    "curbWeight": "6.355 kg",
    "grossWeight": "11.000 kg",
    "overview": {
      "summary": "Xe ép rác 9 khối Isuzu FRR650 là dòng xe môi trường tầm trung chất lượng hàng đầu Nhật Bản, trang bị động cơ Isuzu 4HK1-TCS Euro 5 siêu bền bỉ, tiết kiệm dầu và hệ thống nén ép rác thủy lực Châu Âu mạnh mẽ.",
      "exterior": "Cabin Isuzu Forward FRR rộng rãi, thiết kế khí động học, kính chiếu hậu kép bản lớn, thùng ép rác Inox biên dạng cong thẩm mỹ cao.",
      "interior": "Nội thất tiện nghi 3 chỗ ngồi, ghế lái êm ái, điều hòa chính hãng 2 chiều, kính chỉnh điện, khóa cửa trung tâm, đài radio kết nối USB.",
      "engineAndChassis": "Động cơ Isuzu 4HK1-TCS 4 kỳ 4 xi lanh thẳng hàng tăng áp, dung tích 5.193 cm³, công suất 150 kW (204 PS) Euro 5 cực kỳ bền bỉ và tiết kiệm nhiên liệu.",
      "craneInfo": "Thùng chứa rác 9m³ Inox cao cấp không rỉ sét, cơ cấu máng xúc rác nạp rác thuận tiện và hệ thống ty ben thủy lực Châu Âu mới 100% lực ép mạnh mẽ."
    },
    "highlightsList": [
      "Động cơ Isuzu 204PS Euro 5 siêu bền bỉ, tiết kiệm nhiên liệu số 1 phân khúc",
      "Thùng chứa rác Inox 9 khối biên dạng cong chống ăn mòn và gỉ sét tối ưu",
      "Cơ cấu máng xúc nạp rác tiện lợi, nạp nhanh từ các xe gom rác đẩy tay",
      "Hệ thống xylanh thủy lực nhập khẩu Châu Âu mới 100% hoạt động êm ái",
      "Bảo hành chính hãng 3 năm tại Isuzu toàn quốc"
    ],
    "applications": [
      "Thu gom rác tại các tuyến đường đô thị, khu dân cư đông đúc",
      "Thu gom rác tại các chợ, khu công nghiệp, bệnh viện"
    ],
    "benefits": [
      "Độ bền vượt trội, khấu hao cực chậm, giữ giá tốt nhất",
      "Ép rác kiệt nước giúp tăng tải trọng vận chuyển mỗi chuyến"
    ],
    "faqs": [
      {
        "question": "Thùng xe ép rác Isuzu 9 khối làm bằng Inox gì?",
        "answer": "Thùng được đóng bằng Inox 304 hoặc Inox 430 theo yêu cầu của khách hàng, đảm bảo chống ăn mòn axit rác tuyệt đối."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "6.355 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "4.450 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "11.000 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "6.600 x 2.370 x 2.900 mm"
      },
      {
        "label": "Động cơ",
        "value": "Isuzu 4HK1-TCS (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "5.193 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "150 kW (204 PS) / 2600 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "8.25R16"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "9 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Máng xúc thủy lực"
      },
      {
        "label": "Cơ cấu ép rác",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực Châu Âu"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 304 / Inox 430"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại Isuzu toàn quốc.",
      "crane": "Bảo hành 12 tháng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-18",
    "brand": "Isuzu",
    "model": "XE ÉP RÁC 14 KHỐI ISUZU FVR900 (MÁNG XÚC)",
    "year": 2025,
    "transmission": "Số sàn 6 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FVR%20-%2014%20KH%E1%BB%90I/1787017100220_9176220574947847834_9176220574947847834_603f836e20bb225353f69b388221ef8d.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FVR%20-%2014%20KH%E1%BB%90I/1787017100220_9176220574947847834_9176220574947847834_603f836e20bb225353f69b388221ef8d.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FVR%20-%2014%20KH%E1%BB%90I/1787017100913_9176220574947847834_9176220574947847834_1455b8581927cb8e34c325e8db2dba52.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FVR%20-%2014%20KH%E1%BB%90I/1787017102452_9176220574947847834_9176220574947847834_83b41cd365cafcebbf87167630feb3f8.jpg"
    ],
    "description": "Xe ép rác 14 khối Isuzu FVR900 Euro 5 trang bị cơ cấu máng xúc nạp rác, thùng chứa Inox 14m³, động cơ Isuzu 240PS mạnh mẽ cho hiệu suất thu gom rác tối đa.",
    "payload": "6.000 kg",
    "boxSize": "Dung tích thùng chứa: 14 m³",
    "overallSize": "7.870 x 2.500 x 3.440 mm",
    "curbWeight": "9.805 kg",
    "grossWeight": "16.000 kg",
    "overview": {
      "summary": "Xe ép rác 14 khối Isuzu FVR900 là sự lựa chọn hoàn hảo cho các đơn vị vệ sinh môi trường đô thị nhờ sức chứa 14 khối rác nén, chất lượng khung gầm Isuzu Nhật Bản siêu cứng cáp và hệ thống nén rác thủy lực hiệu suất cao.",
      "exterior": "Cabin Isuzu Forward FVR hầm hố, gương cầu quan sát điểm mù, thùng ép rác Inox biên dạng cong không xương hiện đại, đèn làm việc đêm siêu sáng.",
      "interior": "Cabin rộng rãi có giường nằm, 3 chỗ ngồi êm ái, máy lạnh 2 chiều mát sâu, vô lăng gật gù, hệ thống âm thanh giải trí hiện đại.",
      "engineAndChassis": "Động cơ Isuzu 6HK1-E4NC 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 7.790 cm³, công suất 177 kW (240 PS) Euro 5 tiết kiệm nhiên liệu tối ưu.",
      "craneInfo": "Thùng chứa rác 14m³ đóng bằng Inox cao cấp, cơ cấu máng xúc rác nạp rác nhanh chóng, hệ thống xylanh thủy lực nhập khẩu Châu Âu lực ép nén cực mạnh."
    },
    "highlightsList": [
      "Động cơ Isuzu 6 máy 240PS Euro 5 bền bỉ, tiết kiệm nhiên liệu vượt trội",
      "Thùng chứa rác 14 khối Inox chịu mài mòn, chống ăn mòn hóa chất và nước rác",
      "Cơ cấu máng xúc rác nạp lượng rác lớn trong thời gian ngắn",
      "Hệ thống thủy lực nhập khẩu Châu Âu mới 100%, lực ép rác kiệt nước",
      "Bảo hành chính hãng 3 năm tại các đại lý Isuzu toàn quốc"
    ],
    "applications": [
      "Thu gom rác tại các quận huyện thành phố, khu đô thị lớn",
      "Thu gom rác tại các chợ đầu mối, trung tâm thương mại, khu công nghiệp"
    ],
    "benefits": [
      "Nâng cao năng suất thu gom rác, giảm số lượng chuyến vận chuyển",
      "Độ bền xe Isuzu Nhật Bản giúp tiết kiệm chi phí bảo trì lâu dài"
    ],
    "faqs": [
      {
        "question": "Xe có trang bị hệ thống thu nước rỉ rác không?",
        "answer": "Có, xe trang bị thùng chứa nước rỉ rác dung tích lớn dưới gầm với van xả kín khít, đảm bảo không rò rỉ nước bẩn ra đường."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "9.805 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "6.000 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "16.000 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "7.870 x 2.500 x 3.440 mm"
      },
      {
        "label": "Động cơ",
        "value": "Isuzu 6HK1-E4NC (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "7.790 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "177 kW (240 PS) / 2400 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "10.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "14 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Máng xúc thủy lực"
      },
      {
        "label": "Cơ cấu ép rác",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực Châu Âu"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 304 / Inox 430"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại Isuzu.",
      "crane": "Bảo hành 12 tháng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-19",
    "brand": "Isuzu",
    "model": "XE ÉP RÁC 22 KHỐI NÂNG KẸP ISUZU FVZ34QE4",
    "year": 2025,
    "transmission": "Số sàn 9 số tiến, 1 số lùi",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FVZ%20-%2022%20KH%E1%BB%90I/1787017169567_9176220574947847834_9176220574947847834_b0a347d1281b3ced64baa135165cd82c.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FVZ%20-%2022%20KH%E1%BB%90I/1787017169567_9176220574947847834_9176220574947847834_b0a347d1281b3ced64baa135165cd82c.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FVZ%20-%2022%20KH%E1%BB%90I/1787017169895_9176220574947847834_9176220574947847834_701cec5898848fe98b35ed6213c3aec2.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FVZ%20-%2022%20KH%E1%BB%90I/1787017170631_9176220574947847834_9176220574947847834_48b7da640ed9e98b6dceed9d44b15f82.jpg"
    ],
    "description": "Xe ép rác 22 khối Isuzu FVZ 3 chân 2 cầu thật 6x4 trang bị cơ cấu NÂNG KẸP thùng rác tiêu chuẩn 120L - 660L, lực ép thủy lực Châu Âu nén rác cực đại.",
    "payload": "10.500 kg",
    "boxSize": "Dung tích thùng chứa: 22 m³",
    "overallSize": "8.930 x 2.500 x 3.740 mm",
    "curbWeight": "13.305 kg",
    "grossWeight": "24.000 kg",
    "overview": {
      "summary": "Xe ép rác 22 khối nâng kẹp Isuzu FVZ là mẫu xe môi trường hạng nặng cao cấp nhất của Isuzu, có sức chứa rác cực lớn 22m³, hệ dẫn động 2 cầu thật 6x4 và cơ cấu nâng kẹp thùng rác tự động giúp tối ưu hóa quá trình thu gom rác quy mô lớn.",
      "exterior": "Cabin Isuzu Giga FVZ hầm hố, thùng ép rác Inox biên dạng cong vững chắc, đèn chiếu sáng và đèn cảnh báo ban đêm đạt tiêu chuẩn an toàn cao.",
      "interior": "Cabin rộng rãi có giường nằm, ghế hơi êm ái, máy lạnh Denso 2 chiều, vô lăng gật gù, hệ thống giải trí cao cấp.",
      "engineAndChassis": "Động cơ Isuzu 6HK1-TCS 4 kỳ 6 xi lanh thẳng hàng tăng áp, dung tích 7.790 cm³, công suất 280 PS Euro 5 siêu khỏe, 2 cầu thật 6x4 vượt địa hình bãi rác lầy lội.",
      "craneInfo": "Thùng chứa rác 22m³ Inox cao cấp, cơ cấu NÂNG KẸP thùng rác tiêu chuẩn 120L - 660L, hệ thống xylanh thủy lực nhập khẩu Châu Âu tạo lực nén ép cực đại."
    },
    "highlightsList": [
      "Động cơ Isuzu 280PS Euro 5 mạnh mẽ, 2 cầu thật 6x4 vượt mọi địa hình bãi rác",
      "Thùng chứa rác dung tích siêu lớn 22m³ nén được lượng rác thải khổng lồ",
      "Cơ cấu NÂNG KẸP thùng rác tiêu chuẩn 120L, 240L, 660L tự động",
      "Hệ thống thủy lực nhập khẩu Châu Âu lực ép nén cực mạnh, vận hành êm ái",
      "Thùng Inox 304/430 chống rỉ sét và chịu mài mòn cao"
    ],
    "applications": [
      "Thu gom và nén ép rác tại các trạm trung chuyển rác thải đô thị lớn",
      "Vận chuyển rác thải từ nội thành về các nhà máy xử lý rác tập trung",
      "Thu gom rác tại các khu công nghiệp, khu chế xuất quy mô lớn"
    ],
    "benefits": [
      "Tối đa hóa khối lượng rác vận chuyển trong mỗi chuyến, tiết kiệm chi phí vận hành",
      "Cơ chế nâng kẹp tự động bảo vệ sức khỏe người lao động",
      "Thương hiệu Isuzu Nhật Bản giữ giá tốt, ít hỏng vặt"
    ],
    "faqs": [
      {
        "question": "Cơ cấu nâng kẹp có nâng được thùng rác công cộng 660L không?",
        "answer": "Có, cơ cấu tay kẹp thủy lực được thiết kế chuyên dùng để kẹp và đổ tự động thùng rác 120L, 240L và thùng lớn 660L."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "13.305 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "10.500 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "24.000 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "8.930 x 2.500 x 3.740 mm"
      },
      {
        "label": "Động cơ",
        "value": "Isuzu 6HK1-TCS (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "7.790 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "206 kW (280 PS) / 2400 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "11.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "22 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Cơ cấu NÂNG KẸP thùng rác 120L/240L/660L"
      },
      {
        "label": "Cơ cấu ép rác",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực Châu Âu"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 304 / Inox 430"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại Isuzu.",
      "crane": "Bảo hành 12 tháng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-20",
    "brand": "Isuzu",
    "model": "XE ÉP RÁC 7 KHỐI ISUZU NQR75 (NQR550 EURO 5)",
    "year": 2025,
    "transmission": "Số sàn 6 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20NQR%20-%207%20KH%E1%BB%90I/0000.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20NQR%20-%207%20KH%E1%BB%90I/0000.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20NQR%20-%207%20KH%E1%BB%90I/26.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20NQR%20-%207%20KH%E1%BB%90I/46.jpg"
    ],
    "description": "Xe ép rác 7 khối Isuzu NQR75 Euro 5 mới nhất, đóng thùng Inox 7m³, trang bị cơ cấu máng xúc nạp rác, dòng xe ép rác tầm trung nhỏ gọn hoạt động linh hoạt.",
    "payload": "3.490 kg",
    "boxSize": "Dung tích thùng chứa: 7 m³",
    "overallSize": "6.490 x 2.220 x 2.800 mm",
    "curbWeight": "5.815 kg",
    "grossWeight": "9.500 kg",
    "overview": {
      "summary": "Xe ép rác 7 khối Isuzu NQR75 (NQR550 Euro 5) là phân khúc xe ép rác tầm trung nhỏ gọn, rất phù hợp để thu gom rác ở các khu dân cư đông đúc, ngõ phố hẹp và vận chuyển về các trạm ép rác tập trung.",
      "exterior": "Cabin Isuzu vuông vức, đèn pha halogen góc chiếu sáng rộng, thùng ép rác Inox biên dạng cong hiện đại.",
      "interior": "Nội thất cabin 3 chỗ ngồi êm ái, máy lạnh 2 chiều mát sâu, kính cửa chỉnh điện, vô lăng gật gù trợ lực nhẹ nhàng.",
      "engineAndChassis": "Động cơ Isuzu 4HK1E4NC 4 kỳ 4 xi lanh thẳng hàng tăng áp, dung tích 5.193 cm³, công suất 155 PS Euro 5 siêu bền và tiết kiệm dầu.",
      "craneInfo": "Thùng chứa rác 7m³ Inox cao cấp không gỉ sét, cơ cấu máng xúc nạp rác nhanh chóng và hệ thống bơm van xy lanh thủy lực nhập khẩu Châu Âu mới 100%."
    },
    "highlightsList": [
      "Động cơ Isuzu Euro 5 bền bỉ, tiết kiệm nhiên liệu và thân thiện môi trường",
      "Kích thước xe nhỏ gọn 7 khối luồn lách dễ dàng vào các tuyến phố đông đúc",
      "Thùng chứa Inox biên dạng cong chống ăn mòn và gỉ sét tối ưu",
      "Cơ cấu máng xúc rác thuận tiện nạp rác từ các xe gom rác đẩy tay",
      "Bảo hành chính hãng 3 năm tại các đại lý Isuzu trên toàn quốc"
    ],
    "applications": [
      "Thu gom rác tại các khu đô thị, khu dân cư, ngõ hẻm phố",
      "Thu gom rác tại các trường học, bệnh viện, chợ dân sinh"
    ],
    "benefits": [
      "Giá thành đầu tư hợp lý, chi phí vận hành bảo dưỡng cực thấp",
      "Khả năng nén ép rác giúp tăng gấp đôi lượng rác thu gom so với xe thùng hở"
    ],
    "faqs": [
      {
        "question": "Xe có dễ sửa chữa và tìm kiếm phụ tùng không?",
        "answer": "Dòng xe Isuzu NQR rất phổ biến tại Việt Nam, phụ tùng luôn sẵn có với giá thành hợp lý."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "5.815 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "3.490 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "9.500 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "6.490 x 2.220 x 2.800 mm"
      },
      {
        "label": "Động cơ",
        "value": "Isuzu 4HK1E4NC (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "5.193 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "114 kW (155 PS) / 2600 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "8.25-16"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "7 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Máng xúc thủy lực"
      },
      {
        "label": "Cơ cấu ép rác",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực Châu Âu"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 304 / Inox 430"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại Isuzu toàn quốc.",
      "crane": "Bảo hành 12 tháng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-21",
    "brand": "Isuzu",
    "model": "XE ÉP RÁC 3 KHỐI ISUZU QKR230 (QKR77FE5)",
    "year": 2025,
    "transmission": "Số sàn 5 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20QKR%20-%203%20KH%E1%BB%90I/fdbd.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20QKR%20-%203%20KH%E1%BB%90I/fdbd.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20QKR%20-%203%20KH%E1%BB%90I/fwr.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20QKR%20-%203%20KH%E1%BB%90I/rftn.jpg"
    ],
    "description": "Xe ép rác 3 khối Isuzu QKR230 Euro 5 nhỏ gọn chuyên gom rác hẻm nhỏ, thùng Inox 3m³, cơ cấu máng xúc nạp rác tự động, động cơ Isuzu Common Rail siêu bền.",
    "payload": "1.200 kg",
    "boxSize": "Dung tích thùng chứa: 3 m³",
    "overallSize": "5.515 x 1.870 x 2.270 mm",
    "curbWeight": "3.605 kg",
    "grossWeight": "4.990 kg",
    "overview": {
      "summary": "Xe ép rác 3 khối Isuzu QKR230 là phân khúc xe ép rác nhỏ gọn tiện lợi nhất của Isuzu, được thiết kế chuyên biệt để thu gom rác tại các con hẻm nhỏ và tuyến phố chật hẹp trong đô thị với chi phí cực kỳ tiết kiệm.",
      "exterior": "Cabin Isuzu QKR đầu vuông thế hệ mới, gương chiếu hậu kép, đèn halogen sáng rõ, thùng ép Inox bóng bẩy.",
      "interior": "Cabin 3 chỗ ngồi êm ái, máy lạnh 2 chiều mát sâu, kính chỉnh điện, đài radio kết nối USB tiện lợi.",
      "engineAndChassis": "Động cơ Isuzu 4JH1E4NC 4 kỳ 4 xi lanh thẳng hàng tăng áp, dung tích 2.999 cm³, công suất 105 PS Euro 5 bền bỉ và tiết kiệm nhiên liệu.",
      "craneInfo": "Thùng chứa rác 3m³ Inox cao cấp không rỉ sét, cơ cấu máng xúc rác nạp rác nhanh chóng, hệ thống ty ben thủy lực Châu Âu nén ép rác mạnh mẽ."
    },
    "highlightsList": [
      "Động cơ Isuzu 3.0L Euro 5 mạnh mẽ, siêu bền bỉ và tiết kiệm nhiên liệu",
      "Kích thước nhỏ gọn, tổng trọng tải dưới 5 tấn chạy được nhiều tuyến đường nội thành",
      "Thùng chứa rác Inox 3m³ có cơ cấu máng xúc nạp rác và cuốn ép tự động",
      "Hệ thống thủy lực nhập khẩu Châu Âu mới 100%",
      "Bảo hành chính hãng 3 năm tại Isuzu toàn quốc"
    ],
    "applications": [
      "Thu gom rác tại các hẻm nhỏ, ngõ phố nội thành",
      "Thu gom rác tại các khu nghỉ dưỡng, khách sạn, bệnh viện, trường học"
    ],
    "benefits": [
      "Chở được khối lượng rác lớn hơn nhờ cơ cấu nén ép rác chặt chẽ",
      "Độ bền Nhật Bản, ít hỏng vặt, chi phí bảo dưỡng cực thấp"
    ],
    "faqs": [
      {
        "question": "Xe có đi được vào các hẻm nhỏ 2m - 3m không?",
        "answer": "Với chiều rộng xe chỉ 1.87m và chiều dài 5.5m, xe di chuyển và quay đầu cực kỳ linh hoạt trong các hẻm nhỏ."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "3.605 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "1.200 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "4.990 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "5.515 x 1.870 x 2.270 mm"
      },
      {
        "label": "Động cơ",
        "value": "Isuzu 4JH1E4NC (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "2.999 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "77 kW (105 PS) / 3200 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "7.00-15"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "3 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Máng xúc thủy lực"
      },
      {
        "label": "Cơ cấu ép rác",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực Châu Âu"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 304 / Inox 430"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km tại Isuzu.",
      "crane": "Bảo hành 12 tháng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-22",
    "brand": "Thaco",
    "model": "XE ÉP RÁC 12 KHỐI THACO LINKER T2-12 (MÁNG XÚC)",
    "year": 2025,
    "transmission": "Số sàn 6 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/THACO%20LINKER%20T2-12%20-%2012%20KH%E1%BB%90I/z7689892936717_04338df03e62f37cffd471d9ee903a4d.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/THACO%20LINKER%20T2-12%20-%2012%20KH%E1%BB%90I/z7689892936717_04338df03e62f37cffd471d9ee903a4d.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/THACO%20LINKER%20T2-12%20-%2012%20KH%E1%BB%90I/z7689892993735_7f01fba28d34b07c76a300c89782216a.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/THACO%20LINKER%20T2-12%20-%2012%20KH%E1%BB%90I/z7689893246771_7f04c399e124409eb203266ab8341920.jpg"
    ],
    "description": "Xe ép rác 12 khối Thaco Linker T2-12 Euro 5 trang bị cơ cấu máng xúc, tải trọng chở 5.5 tấn, thùng Inox biên dạng cong hiện đại, giải pháp tối ưu cho vệ sinh môi trường.",
    "payload": "5.500 kg",
    "boxSize": "Dung tích thùng chứa: 12 m³",
    "overallSize": "7.120 x 2.450 x 3.100 mm",
    "curbWeight": "7.300 kg",
    "grossWeight": "12.990 kg",
    "overview": {
      "summary": "Xe ép rác 12 khối Thaco Linker T2-12 là dòng xe môi trường tầm trung chất lượng cao của Thaco Auto, động cơ đạt chuẩn Euro 5 tiết kiệm nhiên liệu, thùng chứa 12m³ Inox chịu mài mòn và hệ thống máng xúc nạp rác nhanh chóng.",
      "exterior": "Cabin Thaco Linker thế hệ mới hiện đại, đèn pha halogen góc rộng, thùng ép rác Inox biên dạng cong không xương cứng cáp.",
      "interior": "Cabin 3 chỗ ngồi êm ái, máy lạnh 2 chiều mát lạnh, kính chỉnh điện, vô lăng gật gù, hệ thống âm thanh giải trí radio USB.",
      "engineAndChassis": "Động cơ Diesel Euro 5 công nghệ mới vận hành mạnh mẽ, tiết kiệm nhiên liệu, khung chassis dập nguyên khối chịu tải nặng tốt.",
      "craneInfo": "Thùng chứa rác 12m³ Inox cao cấp, cơ cấu máng xúc nạp rác tiện lợi và hệ thống xylanh thủy lực nhập khẩu lực ép nén rác mạnh mẽ."
    },
    "highlightsList": [
      "Động cơ Euro 5 công nghệ mới tiết kiệm nhiên liệu và thân thiện môi trường",
      "Thùng chứa rác 12m³ Inox biên dạng cong thẩm mỹ cao, chống rỉ sét tuyệt đối",
      "Cơ cấu máng xúc rác nạp rác nhanh chóng, vận hành đơn giản và an toàn",
      "Hệ thống thủy lực nhập khẩu hoạt động êm ái, lực ép rác kiệt nước",
      "Bảo hành chính hãng 3 năm tại hệ thống Thaco Auto toàn quốc"
    ],
    "applications": [
      "Thu gom rác tại các quận huyện, khu đô thị, thị xã",
      "Thu gom rác tại các khu công nghiệp, cụm tiểu thủ công nghiệp"
    ],
    "benefits": [
      "Chi phí đầu tư hợp lý, nhanh thu hồi vốn",
      "Hệ thống trạm dịch vụ Thaco phủ rộng khắp 63 tỉnh thành thuận tiện bảo dưỡng"
    ],
    "faqs": [
      {
        "question": "Xe có sẵn giao ngay không?",
        "answer": "Xe có sẵn tại xưởng sản xuất Ô Tô Tín Phát, hỗ trợ hoàn thiện hồ sơ và giao xe tận nơi trên toàn quốc."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "7.300 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "5.500 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "12.990 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "7.120 x 2.450 x 3.100 mm"
      },
      {
        "label": "Động cơ",
        "value": "Diesel Euro 5 công nghệ mới"
      },
      {
        "label": "Lốp xe",
        "value": "9.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "12 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Máng xúc thủy lực"
      },
      {
        "label": "Cơ cấu ép rác",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 304 / Inox 430"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng tại Thaco Auto.",
      "crane": "Bảo hành 12 tháng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-23",
    "brand": "Thaco",
    "model": "XE ÉP RÁC 6 KHỐI THACO LINKER T2-6.5 (EURO 5)",
    "year": 2025,
    "transmission": "Số sàn 5 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/THACO%20LINKER%20T2-6.5%20-%206%20KH%E1%BB%90I/z7720677867134_97447e845c2801535eaf746144fbc436.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/THACO%20LINKER%20T2-6.5%20-%206%20KH%E1%BB%90I/z7720677867134_97447e845c2801535eaf746144fbc436.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/THACO%20LINKER%20T2-6.5%20-%206%20KH%E1%BB%90I/z7720710316342_ae7fc72682fa0f8d2c192b54d96301b8.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/THACO%20LINKER%20T2-6.5%20-%206%20KH%E1%BB%90I/z7720724174891_29d9f0274d68650b60b8ab281144a175.jpg"
    ],
    "description": "Xe ép rác 6 khối Thaco Linker T2-6.5 Euro 5 mới nhất, trang bị máng xúc nạp rác, thùng Inox 6m³, kích thước nhỏ gọn phù hợp gom rác đô thị nội thành.",
    "payload": "1.800 kg",
    "boxSize": "Dung tích thùng chứa: 6 m³",
    "overallSize": "6.200 x 2.095 x 2.300 mm",
    "curbWeight": "4.350 kg",
    "grossWeight": "6.495 kg",
    "overview": {
      "summary": "Xe ép rác 6 khối Thaco Linker T2-6.5 (Euro 5) là mẫu xe thu gom rác phân khúc nhỏ gọn, thiết kế hiện đại, động cơ tiết kiệm nhiên liệu và thùng chứa Inox 6m³ cuốn ép rác kiệt nước, sạch sẽ.",
      "exterior": "Thiết kế hiện đại, dáng xe gọn gàng, đèn pha Halogen sắc nét, thùng ép rác Inox biên dạng cong cứng cáp.",
      "interior": "Cabin 3 chỗ ngồi êm ái, máy lạnh 2 chiều mát lạnh, kính cửa chỉnh điện, vô lăng gật gù trợ lực nhẹ nhàng.",
      "engineAndChassis": "Động cơ Diesel Euro 5 thế hệ mới mạnh mẽ, tiết kiệm nhiên liệu, khung chassis chắc chắn chịu tải tốt.",
      "craneInfo": "Thùng chứa rác 6m³ Inox cao cấp, cơ cấu máng xúc nạp rác nhanh chóng và hệ thống xylanh thủy lực nhập khẩu lực ép nén rác mạnh mẽ."
    },
    "highlightsList": [
      "Động cơ Euro 5 thế hệ mới tiết kiệm nhiên liệu và bảo vệ môi trường",
      "Kích thước xe nhỏ gọn luồn lách dễ dàng trong các tuyến đường nội thị",
      "Thùng chứa Inox 6m³ biên dạng cong không bám cặn rác, chống rỉ sét",
      "Cơ cấu máng xúc nạp rác tiện lợi, nạp nhanh từ xe gom rác đẩy tay",
      "Bảo hành chính hãng 3 năm tại Thaco Auto toàn quốc"
    ],
    "applications": [
      "Thu gom rác tại các phường, xã, thị trấn, khu dân cư",
      "Thu gom rác tại các chợ, trường học, bệnh viện, công viên"
    ],
    "benefits": [
      "Giá thành đầu tư cực kỳ hợp lý, nhanh thu hồi vốn",
      "Chi phí vận hành và bảo dưỡng thấp"
    ],
    "faqs": [
      {
        "question": "Thùng xe có máng hứng nước rác riêng biệt không?",
        "answer": "Có, xe được trang bị thùng gom nước rỉ rác có van xả kín dưới gầm xe, đảm bảo không rỉ nước bẩn ra môi trường."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "4.350 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "1.800 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "6.495 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "6.200 x 2.095 x 2.300 mm"
      },
      {
        "label": "Động cơ",
        "value": "Diesel Euro 5"
      },
      {
        "label": "Lốp xe",
        "value": "7.00R16"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "6 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Máng xúc thủy lực"
      },
      {
        "label": "Cơ cấu ép rác",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 304 / Inox 430"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng tại Thaco Auto.",
      "crane": "Bảo hành 12 tháng chuyên dùng tại Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-24",
    "brand": "UD Trucks",
    "model": "XE ÉP RÁC 14 KHỐI UD TRUCKS CRONER PKE 250 (NÂNG KẸP)",
    "year": 2025,
    "transmission": "Số sàn 6 cấp",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/Xe%20%C3%89p%20R%C3%A1c/UD%20TRUCKS%20PKE%20-%2014%20KH%E1%BB%90I/z7770812283273_0369a0a47d843669682b91502e01ed42.jpg",
    "images": [
      "/cars/Xe%20%C3%89p%20R%C3%A1c/UD%20TRUCKS%20PKE%20-%2014%20KH%E1%BB%90I/z7770812283273_0369a0a47d843669682b91502e01ed42.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/UD%20TRUCKS%20PKE%20-%2014%20KH%E1%BB%90I/z7770812335982_f597a1c1cf3aa9d93cc228eb6fdefa52.jpg",
      "/cars/Xe%20%C3%89p%20R%C3%A1c/UD%20TRUCKS%20PKE%20-%2014%20KH%E1%BB%90I/z7980602123709_721231f0dbe9cf8aa21414af35de5950.jpg"
    ],
    "description": "Xe ép rác 14 khối UD Trucks Croner PKE 250 Euro 5 nhập khẩu nguyên chiếc chassis, trang bị cơ cấu NÂNG KẸP thùng rác tiêu chuẩn 120L - 660L, động cơ 250PS siêu bền bỉ.",
    "payload": "6.000 kg",
    "boxSize": "Dung tích thùng chứa: 14 m³",
    "overallSize": "8.100 x 2.500 x 3.470 mm",
    "curbWeight": "9.805 kg",
    "grossWeight": "16.000 kg",
    "overview": {
      "summary": "Xe ép rác 14 khối UD Trucks PKE 250 nâng kẹp là dòng xe ép rác cao cấp nhập khẩu chassis nguyên chiếc từ nhà máy UD Trucks Thái Lan (tập đoàn Volvo Trucks), sở hữu công nghệ hiện đại, động cơ Euro 5 bền bỉ và cơ cấu nâng kẹp thùng rác tự động chuyên nghiệp.",
      "exterior": "Cabin UD Croner PKE phong cách khí động học Châu Âu hiện đại, tầm nhìn bao quát rộng, đèn chiếu sáng halogen công suất cao, thùng ép rác Inox biên dạng cong vững chắc.",
      "interior": "Cabin rộng rãi có 3 chỗ ngồi êm ái cùng giường nằm phía sau, điều hòa tự động 2 chiều, vô lăng gật gù, màn hình thông tin điện tử thông minh.",
      "engineAndChassis": "Động cơ UD GH5E 250 Euro 5 4 kỳ 4 xi lanh thẳng hàng tăng áp, dung tích 5.132 cm³, công suất 184 kW (250 PS) tại 2.200 rpm, mô men xoắn cực đại 900 Nm siêu khỏe và tiết kiệm nhiên liệu.",
      "craneInfo": "Thùng chứa rác 14m³ Inox cao cấp chịu mài mòn, cơ cấu NÂNG KẸP thùng rác tiêu chuẩn 120L - 660L, hệ thống xylanh thủy lực nhập khẩu Châu Âu lực ép nén cực mạnh."
    },
    "highlightsList": [
      "Chassis UD Trucks nhập khẩu nguyên chiếc từ Thái Lan (công nghệ Volvo Trucks)",
      "Động cơ GH5E 250PS Euro 5 mạnh mẽ, mô men xoắn lớn 900Nm tải nặng siêu êm",
      "Thùng chứa rác 14 khối Inox biên dạng cong chống ăn mòn và gỉ sét",
      "Cơ cấu NÂNG KẸP thùng rác tiêu chuẩn 120L, 240L, 660L tự động",
      "Hệ thống thủy lực nhập khẩu Châu Âu áp suất cao ép rác kiệt nước"
    ],
    "applications": [
      "Thu gom rác tại các quận huyện, khu đô thị lớn",
      "Thu gom rác tại các trung tâm thương mại, khu du lịch, khu công nghiệp"
    ],
    "benefits": [
      "Chất lượng xe nhập khẩu bền bỉ, tiết kiệm chi phí bảo trì",
      "Cơ cấu nâng kẹp tự động giảm thiểu sức lao động của công nhân"
    ],
    "faqs": [
      {
        "question": "Xe UD Trucks PKE 250 có nguồn gốc xuất xứ từ đâu?",
        "answer": "Xe cơ sở chassis UD Trucks Croner PKE 250 được nhập khẩu nguyên chiếc từ nhà máy UD Trucks tại Thái Lan, thùng ép rác đóng mới tại Ô Tô Tín Phát."
      }
    ],
    "vehicleTechSpecs": [
      {
        "label": "Khối lượng bản thân",
        "value": "9.805 kg"
      },
      {
        "label": "Tải trọng cho phép chở",
        "value": "6.000 kg"
      },
      {
        "label": "Khối lượng toàn bộ",
        "value": "16.000 kg"
      },
      {
        "label": "Kích thước xe (DxRxC)",
        "value": "8.100 x 2.500 x 3.470 mm"
      },
      {
        "label": "Động cơ",
        "value": "UD GH5E 250 (Euro 5)"
      },
      {
        "label": "Dung tích xi lanh",
        "value": "5.132 cm³"
      },
      {
        "label": "Công suất cực đại",
        "value": "184 kW (250 PS) / 2200 rpm"
      },
      {
        "label": "Lốp xe",
        "value": "11.00R20"
      }
    ],
    "craneTechSpecs": [
      {
        "label": "Dung tích thùng chứa rác",
        "value": "14 m³"
      },
      {
        "label": "Cơ cấu nạp rác",
        "value": "Cơ cấu NÂNG KẸP thùng rác 120L/240L/660L"
      },
      {
        "label": "Cơ cấu ép rác",
        "value": "Bàn ép và lưỡi cuốn rác thủy lực Châu Âu"
      },
      {
        "label": "Vật liệu thùng",
        "value": "Inox 304 / Inox 430"
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 24 tháng hoặc 100.000 km tại các đại lý UD Trucks.",
      "crane": "Bảo hành 12 tháng chuyên dùng tại Ô Tô Tín Phát."
    }
  }
]

export const categories = ['Tất cả', 'Xe Cẩu', 'Xe Chở Rác', 'Xe Ép Rác', 'Xe Hút Bể Phốt'] as const

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id)
}

export function getRelatedVehicles(currentId: string, category: string, limit: number = 3): Vehicle[] {
  const sameCategory = vehicles.filter((v) => v.category === category && v.id !== currentId)
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit)
  const others = vehicles.filter((v) => v.id !== currentId && !sameCategory.includes(v))
  return [...sameCategory, ...others].slice(0, limit)
}
