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
    "brand": "Chenglong",
    "model": "XE CHENGLONG 4 CHÂN GẮN CẨU 12 TẤN - SOOSAN SCS1215",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ",
    "category": "Xe Cẩu",
    "image": "/cars/xe-cau/xe-cau-chenglong-12-tan/11.jpg",
    "images": [
      "/cars/xe-cau/xe-cau-chenglong-12-tan/11.jpg",
      "/cars/xe-cau/xe-cau-chenglong-12-tan/120.jpg",
      "/cars/xe-cau/xe-cau-chenglong-12-tan/9.jpg"
    ],
    "description": "XE CHENGLONG 4 CHÂN GẮN CẨU 12 TẤN với khả năng vận chuyển được tải trọng hàng hóa lớn, hiệu năng bền bỉ với giá thành vô cùng tiết kiệm chắc chắn sẽ mang lại sự hài lòng cho Quý khách hàng.",
    "payload": "11.300 kg",
    "boxSize": "8.360 x 2.350 x 650 mm",
    "overallSize": "12.110 x 2.500 x 3.840 mm",
    "curbWeight": "18.570 kg",
    "grossWeight": "30.000 kg",
    "workingRadius": "20,7 m",
    "overview": {
      "summary": "XE CHENGLONG 4 CHÂN GẮN CẨU 12 TẤN với khả năng vận chuyển được tải trọng hàng hóa lớn, hiệu năng bền bỉ với giá thành vô cùng tiết kiệm chắc chắn sẽ mang lại sự hài lòng cho Quý khách hàng.",
      "exterior": "Được thiết kế theo phong cách Châu Âu sang trọng, hiện đại. Cabin được sơn thành 5 lớp theo công nghệ tĩnh điện tạo độ bền, chống gỉ sét tốt. Cỡ lốp lớn 11R20 đồng bộ trước sau tạo độ cân bằng, tăng khả năng chịu tải, giúp xe di chuyển linh hoạt và an toàn trên mọi cung đường.",
      "interior": "Cabin được thiết kế rộng rãi thoáng mát, lắp đặt đầy đủ tiện nghi như ghế hơi, 2 giường nằm, radio, vô lăng gật gù, điều hòa công suất lớn, cabin nâng điện, hốc chân ga rộng thuận tiện,… mang lại cảm giác thoải mái nhất cho người lái xe.",
      "engineAndChassis": "Động cơ: Sử dụng động cơ Yuchai YC6L310-33 mạnh mẽ, bền bỉ đạt tiêu chuẩn chất lượng của liên minh Châu Âu. Điểm nổi trội là khả năng tiết kiệm nhiên liệu, an toàn tuyệt đối, khả năng leo dốc lên đến 30% phù hợp với mọi địa hình đặc biệt là vùng núi cao.\nKhung gầm: Hệ thống khung gầm mạnh mẽ, chắc chắn làm bằng thép chịu lực nguyên khối, gia cố bằng đinh tán cỡ lớn giúp tăng độ rắn chắc, khả năng chịu lực chống rung gầm và chịu mọi tác động.",
      "craneInfo": "Cần cẩu SOOSAN 12 tấn 5 khúc SCS1215LS thuộc phân khúc cẩu tải nặng, có thể lắp đặt được trên nhiều nền xe khác nhau. Cẩu được trang bị thêm chân tú trước, chân tú sau, ghế ngồi trên cao, cảm biến chạm cần và cảm biến quá tải."
    },
    "vehicleTechSpecs": [
      { "label": "Kích thước tổng thể (DxRxC)", "value": "11.850 x 2.500 x 3.990 mm" },
      { "label": "Kích thước lòng thùng", "value": "8.000 x 2.350 x 650 mm" },
      { "label": "Tự trọng", "value": "20.120 kg" },
      { "label": "Tải trọng", "value": "9.700 kg" },
      { "label": "Trọng lượng toàn bộ", "value": "30.000 kg" },
      { "label": "Vết bánh xe trước/sau", "value": "2050 / 1860 mm" },
      { "label": "Số trục", "value": "4" },
      { "label": "Nhãn hiệu động cơ", "value": "YC6L310-33" },
      { "label": "Loại động cơ", "value": "4 kỳ, 6 xi lanh thẳng hàng, tăng áp" },
      { "label": "Thể tích", "value": "8.424 cm³" },
      { "label": "Công suất lớn nhất / tốc độ quay", "value": "228 kW / 2200 v/ph" },
      { "label": "Lốp trước/sau", "value": "11.00 R20 / 11.00 R20" },
      { "label": "Phanh trước / Dẫn động", "value": "Tang trống / Khí nén" },
      { "label": "Phanh sau / Dẫn động", "value": "Tang trống / Khí nén" },
      { "label": "Phanh tay / Dẫn động", "value": "Tác động lên bánh xe trục 3 và 4 / Tự hãm" },
      { "label": "Kiểu hệ thống lái / Dẫn động", "value": "Trục vít - ê cu bi / Cơ khí có trợ lực thủy lực" }
    ],
    "craneTechSpecs": [
      { "label": "Nhãn hiệu", "value": "SOOSAN - SCS1215LS (05 đoạn cần)" },
      { "label": "Xuất xứ", "value": "Nhập khẩu trực tiếp từ Hàn Quốc" },
      { "label": "Sức nâng lớn nhất / tầm với", "value": "13 tấn / 2,0 m" },
      { "label": "Sức nâng nhỏ nhất / tầm với (Đốt 5)", "value": "1,03 tấn / 20,7 m" },
      { "label": "Sức nâng / tầm với: Đốt 1", "value": "6,0 tấn / 5,6 m" },
      { "label": "Sức nâng / tầm với: Đốt 2", "value": "3,1 tấn / 9,4 m" },
      { "label": "Sức nâng / tầm với: Đốt 3", "value": "1,95 tấn / 13,1 m" },
      { "label": "Sức nâng / tầm với: Đốt 4", "value": "1,4 tấn / 16,9 m" },
      { "label": "Sức nâng tối đa", "value": "36 tấn" },
      { "label": "Góc xoay cần", "value": "360°" },
      { "label": "Chiều rộng chân chống tối đa", "value": "6,18 m" },
      { "label": "Chiều cao nâng tối đa", "value": "23 m" },
      { "label": "Chiều cao làm việc tối đa", "value": "24,5 m" },
      { "label": "Bán kính làm việc tối đa", "value": "20,7 m" },
      { "label": "Tốc độ duỗi cần", "value": "15,1 / 40 m/s" },
      { "label": "Tốc độ nâng cần", "value": "-0° - 81° / 20 độ/s" },
      { "label": "Dung tích bình dầu thủy lực", "value": "270 lít" },
      { "label": "Trọng tải cabin chassis áp dụng", "value": "Trên 11 tấn" }
    ],
    "warrantyInfo": {
      "chassis": "Được bảo hành 2 năm hoặc 100.000 km (tùy điều kiện nào đến trước) tại các trạm bảo hành ủy quyền của hãng trên toàn quốc.",
      "crane": "Bảo hành 12 tháng, không hạn chế giờ và số km sử dụng tại xưởng sản xuất CÔNG TY Ô TÔ TÍN PHÁT (Địa chỉ: 232 ĐT743A, Kp Bình Thung 1, P. Bình An, Dĩ An, Bình Dương)."
    }
  },
  {
    "id": "v-2",
    "brand": "Dongfeng",
    "model": "XE CẨU DONGFENG 3 CHÂN GẮN CẤU SOOSAN 8 TẤN SCS746",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ",
    "category": "Xe Cẩu",
    "image": "/cars/xe-cau/xe-cau-dongfeng-8-tan/z7952467632922_147e7dd41edd9749f611d3297c6e1a22.jpg",
    "images": [
      "/cars/xe-cau/xe-cau-dongfeng-8-tan/z7952467632922_147e7dd41edd9749f611d3297c6e1a22.jpg",
      "/cars/xe-cau/xe-cau-dongfeng-8-tan/z7952467663521_f971180e41c189708742c9db120a3bfa.jpg",
      "/cars/xe-cau/xe-cau-dongfeng-8-tan/z7952467671425_aded626cd69e820bd2527359d8c11b5c.jpg"
    ],
    "description": "Xe cẩu Dongfeng 3 chân kết hợp với cẩu Soosan 8 tấn SCS 746L được biết đến là dòng xe tải cẩu mạnh mẽ, với khả năng nâng hạ và vận chuyển linh hoạt.\n\nTrong đó, cần cẩu Soosan SCS 746L từ Hàn Quốc với thiết kế hiện đại và công nghệ tiên tiến, đảm bảo khả năng nâng hạ an toàn và hiệu quả. Đây chính là sự kết hợp an toàn giữa sức mạnh động cơ và công nghệ cần cẩu hàng đầu.",
    "payload": "9.450 kg",
    "boxSize": "8.270 x 2.350 x 650 mm",
    "overallSize": "11.900 x 2.500 x 3.900 mm",
    "curbWeight": "14.420 kg",
    "grossWeight": "24.000 kg",
    "workingRadius": "19,6 m",
    "overview": {
      "summary": "Xe cẩu Dongfeng 3 chân kết hợp với cẩu Soosan 8 tấn SCS 746L được biết đến là dòng xe tải cẩu mạnh mẽ, với khả năng nâng hạ và vận chuyển linh hoạt. Trong đó, cần cẩu Soosan SCS 746L từ Hàn Quốc với thiết kế hiện đại và công nghệ tiên tiến, đảm bảo khả năng nâng hạ an toàn và hiệu quả. Đây chính là sự kết hợp an toàn giữa sức mạnh động cơ và công nghệ cần cẩu hàng đầu.",
      "craneInfo": "SOOSAN - SCS 746L - 8 tấn nhập khẩu trực tiếp từ Hàn Quốc. Sức nâng lớn nhất / tầm với: 8 tấn / 2m. Sức nâng nhỏ nhất / tầm với: 0,4 tấn / 19,6m. Chiều cao nâng móc: 22,6m."
    },
    "highlightsList": [
      "Thiết kế và kết cấu: Xe cẩu Dongfeng 3 chân sở hữu thiết kế mạnh mẽ, hiện đại với cấu trúc 3 chân cân đối giúp xe vận hành ổn định ngay cả khi làm việc trên địa hình phức tạp. Lòng thùng xe rộng rãi.",
      "Hiệu suất động cơ: Động cơ xe Dongfeng ISD giúp xe di chuyển linh hoạt và tiết kiệm nhiên liệu tối ưu.",
      "Khả năng chịu tải: Xe cẩu Dongfeng có khả năng chịu tải lên đến 9.450 kg, phù hợp với mọi yêu cầu công việc nặng nhọc."
    ],
    "vehicleTechSpecs": [
      { "label": "Nhãn hiệu - Số loại", "value": "Dongfeng (Mới 100%, các thiết bị được nhập khẩu từ Châu Âu)" },
      { "label": "Loại động cơ", "value": "ISD270 50 - 4 kỳ, 6 xi lanh thẳng hàng, tăng áp" },
      { "label": "Công suất lớn nhất", "value": "198 kW / 2500 v/ph" },
      { "label": "Tải trọng", "value": "9.450 kg" },
      { "label": "Tự trọng", "value": "14.420 kg" },
      { "label": "Trọng lượng toàn bộ", "value": "24.000 kg" },
      { "label": "Kích thước tổng thể (DxRxC)", "value": "11.900 x 2.500 x 3.900 mm" },
      { "label": "Kích thước lòng thùng", "value": "8.270 x 2.350 x 650 mm" }
    ],
    "craneTechSpecs": [
      { "label": "Nhãn hiệu - Số loại", "value": "Soosan Hàn Quốc (Mới 100%, nhập khẩu từ Hàn Quốc)" },
      { "label": "Sức nâng lớn nhất / tầm với", "value": "8 tấn / 2m" },
      { "label": "Sức nâng nhỏ nhất / tầm với", "value": "0,4 tấn / 19,6m" },
      { "label": "Chiều cao nâng móc", "value": "22,6m" },
      { "label": "Bán kính làm việc", "value": "19,6m" },
      { "label": "Tốc độ duỗi cần", "value": "15,1m / 33s" },
      { "label": "Tốc độ nâng cần", "value": "1-80 độ / 12s" },
      { "label": "Chiều rộng chân chống lớn nhất", "value": "5,6m" },
      { "label": "Trang bị an toàn", "value": "Hệ thống chân trụ trước, chân trụ sau, ghế ngồi trên cao, cảnh báo chạm cần và cảnh báo quá tải." }
    ],
    "applications": [
      "Ngành xây dựng",
      "Ngành vận tải Logistics",
      "Các ngành công nghiệp nhà máy, khu công nghiệp..."
    ],
    "benefits": [
      "Tiết kiệm chi phí vận hành: Động cơ tiết kiệm nhiên liệu, bảo trì đơn giản.",
      "Tăng hiệu quả công việc: Sức nâng mạnh mẽ, bán kính hoạt động lớn giúp giảm thời gian hoàn thành công việc.",
      "Độ bền cao: Sản phẩm chính hãng, chất lượng cao, chịu được môi trường khắc nghiệt."
    ],
    "faqs": [
      {
        "question": "Xe Dongfeng 3 chân có thể chở tối đa bao nhiêu tấn?",
        "answer": "Xe có tải trọng chuyên chở TK lớn nhất là 9.450 kg."
      },
      {
        "question": "Cần cẩu Soosan SCS-746L có mấy đoạn?",
        "answer": "Cẩu có 6 đoạn (hoặc 6 đốt), cho tầm với tối đa 22,6m."
      },
      {
        "question": "Chính sách bảo hành và bảo dưỡng xe như thế nào?",
        "answer": "Giấy chứng nhận chất lượng của xe được xem xét đánh giá hàng năm. Vui lòng liên hệ trực tiếp Tín Phát để biết chi tiết."
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 02 năm hoặc 300.000 km (tùy điều kiện nào tới trước) tại các trạm bảo hành ủy quyền của hãng trên toàn quốc theo sổ bảo hành DONGFENG.",
      "crane": "Bảo hành 01 năm phần cơ khí và 01 năm phần thiết bị thủy lực, không hạn chế giờ và số km sử dụng tại xưởng sản xuất."
    }
  },
  {
    "id": "v-3",
    "brand": "Hino",
    "model": "XE CẨU HINO GẮN CẨU SOOSAN 8 TẤN - Ô TÔ TÍN PHÁT",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ",
    "category": "Xe Cẩu",
    "image": "/cars/xe-cau/xe-cau-hino/z7958347948716_215362e2f62095f6db64b55c4baa06cb.jpg",
    "images": [
      "/cars/xe-cau/xe-cau-hino/z7958347948716_215362e2f62095f6db64b55c4baa06cb.jpg",
      "/cars/xe-cau/xe-cau-hino/z7958348004385_b2ffbbc4b649b183511a4050c4b3b459.jpg",
      "/cars/xe-cau/xe-cau-hino/z7958348335892_24e26b99a7167233f40dc6fbbc130f2e.jpg"
    ],
    "description": "Xe cẩu Hino gắn cẩu Soosan 8 tấn là dòng sản phẩm HINO FM thuộc dòng xe thương mại của tập đoàn HINO Nhật Bản lắp ráp tại Việt Nam, được Công ty TNHH TMDV Ô TÔ TÍN PHÁT thiết kế, sản xuất và lắp đặt cần cẩu nhãn hiệu SOOSAN 746L.",
    "payload": "9.800 kg",
    "boxSize": "8.200 x 2.350 x 620 mm",
    "overallSize": "11.650 x 2.500 x 3.800 mm",
    "curbWeight": "14.005 kg",
    "grossWeight": "24.000 kg",
    "workingRadius": "19,6 m",
    "overview": {
      "summary": "Xe cẩu Hino gắn cẩu Soosan 8 tấn là dòng sản phẩm HINO FM thuộc dòng xe thương mại của tập đoàn HINO Nhật Bản lắp ráp tại Việt Nam, được Công ty TNHH TMDV Ô TÔ TÍN PHÁT thiết kế, sản xuất và lắp đặt cần cẩu nhãn hiệu SOOSAN 746L.",
      "exterior": "Ngoại thất thiết kế hiện đại, năng động với kiểu dáng khí động học giúp tăng khả năng tiết kiệm nhiên liệu khi vận hành.",
      "engineAndChassis": "Xe có tải trọng 9,8 tấn với thể tích máy lớn (7.684 cm³), động cơ thế hệ mới J08E – WD hoạt động mạnh mẽ, bền bỉ và mức tiêu hao nhiên liệu thấp, phù hợp với điều kiện đường xá tại Việt Nam.\nKhung gầm xe Hino FM chắc khỏe, khả năng chịu quá tải cao hàng đầu trong các dòng xe cùng phân khúc. Lắp cẩu SOOSAN 746L mang đến sự tiện lợi cho công việc nâng, hạ các loại hàng hóa.",
      "craneInfo": "Cần cẩu SOOSAN 8 tấn (SCS 746L) nhập khẩu nguyên chiếc từ Hàn Quốc. Khả năng nâng hạ hàng hóa lên tới 8 tấn ở khoảng cách ra cần 2,4m; ở khoảng cách ra cần 4,5m cẩu có khả năng nâng hạ lên tới 3.800 kg. Thiết kế 6 đoạn cẩu với bán kính làm việc 19,6m và chiều cao làm việc 22,3m."
    },
    "highlightsList": [
      "Ngoại thất hiện đại, kiểu dáng khí động học giúp tiết kiệm nhiên liệu.",
      "Động cơ thế hệ mới J08E – WD (7.684 cm³) mạnh mẽ, bền bỉ, tiết kiệm nhiên liệu.",
      "Khung gầm Hino FM chắc khỏe, khả năng chịu quá tải vượt trội.",
      "Cần cẩu SOOSAN 8 tấn (SCS 746L) nhập khẩu Hàn Quốc với bán kính làm việc 19,6m và chiều cao làm việc 22,3m.",
      "Tùy chọn đi kèm: Giỏ nâng, móc thủy lực hỗ trợ nâng người làm việc ở độ cao lớn."
    ],
    "vehicleTechSpecs": [
      { "label": "Nhãn hiệu - Số loại", "value": "HINO FM (Lắp ráp tại Việt Nam)" },
      { "label": "Kích thước bao (DxRxC)", "value": "11.650 x 2.500 x 3.800 mm" },
      { "label": "Kích thước lòng thùng hàng", "value": "8.200 x 2.350 x 620 mm" },
      { "label": "Khối lượng bản thân", "value": "14.005 kg" },
      { "label": "Tải trọng cho phép", "value": "9.800 kg" },
      { "label": "Khối lượng toàn bộ", "value": "24.000 kg" },
      { "label": "Loại động cơ", "value": "Diesel, 4 kỳ, 6 xy lanh thẳng hàng, làm mát bằng nước, tăng áp (J08E - WD)" },
      { "label": "Dung tích xy lanh", "value": "7.684 cm³" },
      { "label": "Công suất lớn nhất / tốc độ quay", "value": "206 kW / 2500 vòng/phút" },
      { "label": "Cỡ lốp", "value": "11.00 - R20" },
      { "label": "Hệ thống treo", "value": "Trục 1 & Trục 2: Phụ thuộc, nhíp lá, giảm chấn thủy lực" },
      { "label": "Hệ thống phanh", "value": "Tang trống trước/sau, dẫn động thủy lực 2 dòng trợ lực chân không; Phanh tay tác động lên trục thứ cấp hộp số" },
      { "label": "Hệ thống lái", "value": "Kiểu Trục vít – ê cu bi (Cơ khí có trợ lực thủy lực)" },
      { "label": "Thiết bị điện", "value": "Điện áp 12V; Ắc quy 12V - 60Ah (2 bình); Máy phát 12V - 100A; Khởi động 12V" }
    ],
    "craneTechSpecs": [
      { "label": "Nhãn hiệu - Số loại", "value": "SOOSAN SCS 746L (8 Tấn - 6 đoạn)" },
      { "label": "Xuất xứ", "value": "Nhập khẩu nguyên chiếc từ Hàn Quốc" },
      { "label": "Sức nâng lớn nhất / tầm với", "value": "8.000 kg / 2,4 m" },
      { "label": "Sức nâng / tầm với tại 4,5m", "value": "3.800 kg / 4,5 m" },
      { "label": "Số đoạn cẩu", "value": "6 đoạn cẩu" },
      { "label": "Bán kính làm việc", "value": "19,6 m" },
      { "label": "Chiều cao làm việc", "value": "22,3 m" },
      { "label": "PTO (Bộ trích công suất)", "value": "Loại nhập đi kèm theo xe cơ sở, mới 100%" },
      { "label": "Hồ sơ & Đăng kiểm", "value": "Lập hồ sơ thiết kế kỹ thuật (Ô tô tải), cấp phiếu kiểm tra chất lượng xuất xưởng đầy đủ" }
    ],
    "applications": [
      "Nâng hạ và vận chuyển hàng hóa tải trọng nặng",
      "Thi công lắp đặt công trình xây dựng, nhà xưởng",
      "Cứu hộ, nâng người làm việc trên cao (khi trang bị giỏ nâng)"
    ],
    "benefits": [
      "Động cơ Hino Nhật Bản siêu bền bỉ, tiết kiệm nhiên liệu tối đa.",
      "Cần cẩu Soosan 8 tấn nhập khẩu Hàn Quốc mạnh mẽ, an toàn tuyệt đối.",
      "Hồ sơ thiết kế và nghiệm thu đầy đủ, đăng kiểm nhanh chóng."
    ],
    "faqs": [
      {
        "question": "Xe cẩu Hino FM 8 tấn có tải trọng cho phép chở bao nhiêu?",
        "answer": "Xe có tải trọng cho phép chở là 9.800 kg (9,8 tấn) với tổng tải trọng toàn bộ 24.000 kg."
      },
      {
        "question": "Cần cẩu Soosan SCS 746L có thông số làm việc ra sao?",
        "answer": "Cẩu Soosan SCS 746L có 6 đoạn, sức nâng max 8 tấn tại 2,4m; 3,8 tấn tại 4,5m; bán kính làm việc 19,6m và chiều cao làm việc 22,3m."
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km (tùy điều kiện nào tới trước) tại các trạm bảo hành ủy quyền của Hino trên toàn quốc.",
      "crane": "Bảo hành 03 năm phần cơ khí và 01 năm phần thiết bị thủy lực chuyên dùng tại xưởng sản xuất Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-4",
    "brand": "UD Trucks",
    "model": "XE TẢI UD 4 CHÂN GẮN CẨU 12 TẤN SOOSAN SCS1215",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ",
    "category": "Xe Cẩu",
    "image": "/cars/xe-cau/xe-cau-UD-trucks/1785979117974_1945417234128956477_8269997638658277126_99c1082e368a9f230166f03efc90ff3a.jpg",
    "images": [
      "/cars/xe-cau/xe-cau-UD-trucks/1785979117974_1945417234128956477_8269997638658277126_99c1082e368a9f230166f03efc90ff3a.jpg",
      "/cars/xe-cau/xe-cau-UD-trucks/z7958350746219_e0cefa940f47651f50ceb87fa73696b8.jpg",
      "/cars/xe-cau/xe-cau-UD-trucks/z7958350913151_58a74b0bf64e7d4c7e41fa4e33245a37.jpg"
    ],
    "description": "Xe tải UD 4 chân gắn cẩu Soosan SCS1215 là sự kết hợp hoàn hảo giữa khung gầm chắc chắn của UD Trucks và khả năng nâng hạ mạnh mẽ của cẩu Soosan 13 tấn. Sản phẩm lý tưởng cho các công trình xây dựng quy mô lớn, vận chuyển hàng hóa nặng.",
    "grossWeight": "30.000 kg",
    "workingRadius": "20,7 m",
    "overview": {
      "summary": "Xe tải UD 4 chân gắn cẩu Soosan SCS1215 là sự kết hợp hoàn hảo giữa khung gầm chắc chắn của UD Trucks (Nhật Bản, sản xuất tại Thái Lan) và khả năng nâng hạ mạnh mẽ của cẩu Soosan SCS1215 (Hàn Quốc). Sản phẩm lý tưởng cho các công trình xây dựng quy mô lớn và vận chuyển hàng nặng.",
      "engineAndChassis": "Xe cơ sở UD TRUCKS QUESTER 350HP, 8x4 WB5600 EURO 5 nhập khẩu Thái Lan, mới 100%. Động cơ Diesel 4 kỳ, 6 xilanh thẳng hàng bền bỉ, tiết kiệm nhiên liệu tối ưu.",
      "craneInfo": "Cần cẩu thủy lực Soosan SCS1215 (05 đoạn cần) nhập khẩu nguyên chiếc từ Hàn Quốc. Sức nâng lớn nhất 13 tấn tại 2,0m; sức nâng nhỏ nhất 1,03 tấn tại 20,7m. Bán kính làm việc 20,7m và chiều cao nâng móc 23m."
    },
    "highlightsList": [
      "Khả năng nâng hạ linh hoạt với cẩu Soosan 13 tấn (SCS1215).",
      "Khung gầm UD Trucks Quester 350HP 4 chân (8x4) tiêu chuẩn Euro 5 nhập khẩu Thái Lan.",
      "Bán kính làm việc 20,7m và chiều cao nâng móc vượt trội 23m.",
      "Độ bền cao, thiết kế dễ bảo dưỡng giúp tối ưu chi phí vận hành lâu dài."
    ],
    "vehicleTechSpecs": [
      { "label": "Nhãn hiệu – Số loại xe", "value": "UD TRUCKS QUESTER 350HP, 8x4 WB5600 EURO 5" },
      { "label": "Xuất xứ", "value": "Nhập khẩu Thái Lan, Mới 100%" },
      { "label": "Loại động cơ", "value": "Diesel, 4 kỳ, 6 xilanh thẳng hàng, tăng áp" },
      { "label": "Công suất động cơ", "value": "350 HP" },
      { "label": "Số chỗ ngồi", "value": "02 chỗ" },
      { "label": "Trọng lượng toàn bộ", "value": "30.000 kg" },
      { "label": "Tiêu chuẩn khí thải", "value": "Euro 5" }
    ],
    "craneTechSpecs": [
      { "label": "Nhãn hiệu – Số loại cẩu", "value": "SOOSAN - SCS1215 (05 đoạn cần)" },
      { "label": "Xuất xứ cẩu", "value": "Nhập khẩu nguyên chiếc từ Hàn Quốc" },
      { "label": "Sức nâng lớn nhất / tầm với", "value": "13 tấn / 2,0 m" },
      { "label": "Sức nâng nhỏ nhất / tầm với", "value": "1,03 tấn / 20,7 m" },
      { "label": "Chiều cao nâng móc", "value": "23 m" },
      { "label": "Bán kính làm việc", "value": "20,7 m" },
      { "label": "Tốc độ duỗi cần", "value": "15,1 m / 40 s" },
      { "label": "Tốc độ nâng cần", "value": "0 - 81 độ / 20 s" },
      { "label": "Chiều rộng chân chống lớn nhất", "value": "6,18 m" }
    ],
    "applications": [
      "Nâng hạ, vận chuyển vật liệu xây dựng, lắp đặt thiết bị, máy móc hạng nặng tại công trình.",
      "Bốc dỡ hàng hóa tại khu vực sản xuất, nhà kho hoặc các công trình đòi hỏi độ chính xác cao.",
      "Thi công các dự án hạ tầng, cầu đường, di chuyển và bố trí các cấu kiện lớn."
    ],
    "benefits": [
      "Khả năng nâng hạ linh hoạt với tải trọng lên đến 13 tấn, đáp ứng hiệu quả các công trình lớn.",
      "Vận hành bền bỉ, ít tiêu hao nhiên liệu, giúp giảm chi phí vận hành lâu dài.",
      "Thiết kế dễ bảo dưỡng và sửa chữa nhờ cấu trúc đơn giản, linh kiện sẵn có."
    ],
    "faqs": [
      {
        "question": "Xe cẩu UD Trucks 4 chân sử dụng loại động cơ và tiêu chuẩn khí thải nào?",
        "answer": "Xe trang bị động cơ Quester 350HP, 6 xilanh thẳng hàng đạt tiêu chuẩn khí thải Euro 5 nhập khẩu từ Thái Lan."
      },
      {
        "question": "Cần cẩu Soosan SCS1215 có sức nâng và chiều cao nâng tối đa bao nhiêu?",
        "answer": "Cẩu Soosan SCS1215 có sức nâng tối đa 13 tấn tại 2,0m, bán kính làm việc 20,7m và chiều cao nâng móc 23m."
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 12 tháng hoặc 100.000 km (tùy điều kiện nào đến trước) tại các trạm bảo hành ủy quyền của UD Trucks toàn quốc.",
      "crane": "Bảo hành 03 năm đối với thùng xe và 01 năm đối với thiết bị thủy lực chuyên dùng tại xưởng sản xuất Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-5",
    "brand": "Hino",
    "model": "XE CHỞ RÁC THÙNG RỜI HINO 20 KHỐI",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ",
    "category": "Xe Chở Rác",
    "image": "/cars/xe-cho-rac/xe-cho-rac-hino/z7932715085826_ad418b855ca7dada3e6ba4ae77c749e3.jpg",
    "images": [
      "/cars/xe-cho-rac/xe-cho-rac-hino/z7932715085826_ad418b855ca7dada3e6ba4ae77c749e3.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-hino/z7932715350408_c40857347d52666b203c5b2cefee1bed.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-hino/z7932715510515_fd59f0a8dc38456d3db23a2df7edf70c.jpg"
    ],
    "description": "Xe chở rác thùng rời Hino 20 khối (Hooklift Hino FM8JNSA) có dung tích thùng rác 20m³ tháo rời linh hoạt, giúp tối ưu hóa quy trình thu gom, vận chuyển và xử lý rác thải khối lượng lớn.",
    "payload": "11.105 kg",
    "boxSize": "5.620 x 2.320/2.150 x 1.800 mm",
    "overallSize": "8.275 x 2.500 x 3.600 mm",
    "curbWeight": "12.700 kg",
    "grossWeight": "24.000 kg",
    "overview": {
      "summary": "Xe chở rác thùng rời Hino 20 khối là dòng xe môi trường chuyên dụng Hooklift cao cấp với khả năng tháo rời thùng chứa rác 20m³, tối ưu hóa năng suất vận chuyển rác thải đô thị và khu công nghiệp.",
      "exterior": "Cabin Hino FM thiết kế rộng rãi tiêu chuẩn Nhật Bản, tầm nhìn rộng thoáng. Kiểu dáng khí động học năng động giúp tăng tiết kiệm nhiên liệu.",
      "engineAndChassis": "Khung gầm Hino FM8JNSA 6X4 (3 trục) bền bỉ, chịu tải cao. Động cơ J08E-UF 7.684 cm³ công suất 184 kW hoạt động mạnh mẽ, đạt độ tin cậy vượt trội.",
      "craneInfo": "Hệ thống chuyên dùng hooklift móc kéo thủy lực hiện đại giúp việc hạ thùng rác tại điểm thu gom và kéo thùng lên xe vận chuyển diễn ra cực kỳ nhanh chóng và an toàn."
    },
    "highlightsList": [
      "Dung tích thùng chứa lớn 20 khối (20m³), chở rác khối lượng cực lớn.",
      "Thùng rác rời tháo lắp linh hoạt bằng hệ thống móc kéo thủy lực hooklift.",
      "Động cơ Hino J08E-UF (7.684 cm³) mạnh mẽ, bền bỉ, tiết kiệm nhiên liệu.",
      "Hệ thống phanh khí nén 2 mạch độc lập đảm bảo an toàn vận hành tuyệt đối."
    ],
    "vehicleTechSpecs": [
      { "label": "Nhãn hiệu - Số loại", "value": "Hino FM8JNSA 6X4-CR" },
      { "label": "Kích thước tổng thể (DxRxC)", "value": "8.275 x 2.500 x 3.600 mm" },
      { "label": "Kích thước lòng thùng hàng", "value": "5.620 x 2.320/2.150 x 1.800 mm" },
      { "label": "Khối lượng bản thân", "value": "12.700 kg" },
      { "label": "Phân bố cầu trước - cầu sau", "value": "4.230 kg - 8.470 kg" },
      { "label": "Tải trọng cho phép chở", "value": "11.105 kg" },
      { "label": "Tổng trọng tải", "value": "24.000 kg" },
      { "label": "Số trục", "value": "3 trục (6x4)" },
      { "label": "Loại động cơ", "value": "4 kỳ, 6 xi lanh thẳng hàng, tăng áp" },
      { "label": "Nhãn hiệu động cơ", "value": "J08E-UF" },
      { "label": "Thể tích xy lanh", "value": "7.684 cm³" },
      { "label": "Công suất lớn nhất / tốc độ quay", "value": "184 kW / 2500 v/ph" },
      { "label": "Thông số lốp (trước/sau)", "value": "11.00R20 / 11.00R20" },
      { "label": "Loại thùng chuyên dùng", "value": "Thùng rác rời 20 khối (Hooklift)" }
    ],
    "applications": [
      "Thu gom và vận chuyển rác thải đô thị, khu dân cư tập trung.",
      "Trung chuyển rác thải khối lượng lớn tại các khu công nghiệp, nhà máy.",
      "Đặt thùng rác cố định tại các trạm trung chuyển để thu gom liên tục."
    ],
    "benefits": [
      "Tối ưu chi phí đầu tư: 1 xe có thể phục vụ kéo tháo nhiều thùng rác rời khác nhau.",
      "Tiết kiệm nhiên liệu và thời gian vận chuyển với tải trọng cho phép lên đến 11.105 kg.",
      "Độ bền xe Hino Nhật Bản cao, bảo hành dài hạn."
    ],
    "faqs": [
      {
        "question": "Xe chở rác Hino 20 khối có tải trọng cho phép và tổng tải trọng bao nhiêu?",
        "answer": "Xe có tải trọng cho phép chở 11.105 kg với tổng trọng tải đăng kiểm là 24.000 kg."
      },
      {
        "question": "Cơ chế hoạt động của thùng rác rời 20 khối như thế nào?",
        "answer": "Xe trang bị hệ thống móc kéo thủy lực (Hooklift) cho phép tháo rời thùng tại điểm gom rác và kéo thùng rác 20 khối lên xe tự động."
      }
    ],
    "warrantyInfo": {
      "chassis": "Bảo hành 36 tháng hoặc 100.000 km (tùy điều kiện nào tới trước) tại các trạm bảo hành ủy quyền của Hino trên toàn quốc.",
      "crane": "Phần thùng xe bảo hành 03 năm; Phần thiết bị thủy lực chuyên dùng bảo hành 01 năm tại xưởng sản xuất Ô Tô Tín Phát."
    }
  },
  {
    "id": "v-6",
    "brand": "Hyundai",
    "model": "Xe Chở Rác Hyundai H150",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Chở Rác",
    "image": "/cars/xe-cho-rac/xe-cho-rac-huynhdai-h150/z7862407102269_2a477d26c3667027bb9935af2b737188.jpg",
    "images": [
      "/cars/xe-cho-rac/xe-cho-rac-huynhdai-h150/z7862407102269_2a477d26c3667027bb9935af2b737188.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-huynhdai-h150/z7953788143312_ee317e1addd55ba60af8f17379524216.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-huynhdai-h150/z7953788143316_a1e86a2307eae9232dc05fa9678be36a.jpg"
    ],
    "description": "Xe Chở Rác Hyundai H150 chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-7",
    "brand": "Hyundai",
    "model": "Xe Chở Rác Hyundai N250",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Chở Rác",
    "image": "/cars/xe-cho-rac/xe-cho-rac-huynhdai-n250/1784596284348_1945417234128956477_8269997638658277126_ce805e17601633d441ffaf8ad7f2aced.jpg",
    "images": [
      "/cars/xe-cho-rac/xe-cho-rac-huynhdai-n250/1784596284348_1945417234128956477_8269997638658277126_ce805e17601633d441ffaf8ad7f2aced.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-huynhdai-n250/1785114574394_1945417234128956477_8269997638658277126_0d73ecb643d301491992b14ecbd358e2.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-huynhdai-n250/photo-1.jpg"
    ],
    "description": "Xe Chở Rác Hyundai N250 chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-8",
    "brand": "Suzuki",
    "model": "Xe Chở Rác Suzuki",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Chở Rác",
    "image": "/cars/xe-cho-rac/xe-cho-rac-suzuki/dz.jpg",
    "images": [
      "/cars/xe-cho-rac/xe-cho-rac-suzuki/dz.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-suzuki/z7930820383578_5f95f032513d236616284913b81bcd3c.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-suzuki/z7953786154023_8ff167d771cb169d34c17e1a564c67b1.jpg"
    ],
    "description": "Xe Chở Rác Suzuki chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-9",
    "brand": "Thaco",
    "model": "Xe Chở Rác Thaco 4 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Chở Rác",
    "image": "/cars/xe-cho-rac/xe-cho-rac-thaco-4-khoi/photo-1.jpg",
    "images": [
      "/cars/xe-cho-rac/xe-cho-rac-thaco-4-khoi/photo-1.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-thaco-4-khoi/z7932813043219_32b199eeb02570665b6c282bd02c45aa.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-thaco-4-khoi/z7932813143477_56aaa1ac28327ef65c126f344391decd.jpg"
    ],
    "description": "Xe Chở Rác Thaco 4 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-10",
    "brand": "Chenglong",
    "model": "Xe Ép Rác Chenglong 24 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-chenglong-24-khoi/z7682341681444_c1b5cf84409e31773ec5bccdcdf60616.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-chenglong-24-khoi/z7682341681444_c1b5cf84409e31773ec5bccdcdf60616.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-chenglong-24-khoi/z7682341859590_cbefb6e46ec04008e90ce7606872bf32.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-chenglong-24-khoi/z7682341905823_f7a8e0451d5a3e6c90c8301a1ca2f6c8.jpg"
    ],
    "description": "Xe Ép Rác Chenglong 24 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-11",
    "brand": "Hino",
    "model": "Xe Ép Rác Hino 14 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-hino-14-khoi/z7980592767081_5edc0b89ef8fd05a29a9ccd7e5771407.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-hino-14-khoi/z7980592767081_5edc0b89ef8fd05a29a9ccd7e5771407.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-hino-14-khoi/z7980592791986_1301e4f251f461d78f17fd412ed055ea.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-hino-14-khoi/z7980592812523_c4e6ffc53abccb8fc55f521b902406a0.jpg"
    ],
    "description": "Xe Ép Rác Hino 14 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-12",
    "brand": "Hyundai",
    "model": "Xe Ép Rác Hyundai 9 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-huyndai-9-khoi/1785719024888_1945417234128956477_8269997638658277126_d72b55688a3678256885e1f2cad35e83.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-huyndai-9-khoi/1785719024888_1945417234128956477_8269997638658277126_d72b55688a3678256885e1f2cad35e83.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-huyndai-9-khoi/photo-1.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-huyndai-9-khoi/photo-2.jpg"
    ],
    "description": "Xe Ép Rác Hyundai 9 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-13",
    "brand": "Hyundai",
    "model": "Xe Ép Rác Hyundai H150 2 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-huyndai-h150-2-khoi/z7944611997170_c423c41fe76be24f85f4a648ccabe882.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-huyndai-h150-2-khoi/z7944611997170_c423c41fe76be24f85f4a648ccabe882.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-huyndai-h150-2-khoi/z7944611998679_eeff63b0fb2d849bc019e948b6d34f69.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-huyndai-h150-2-khoi/z7944612005042_6a2dcf9e5f15292c131db57fb681b118.jpg"
    ],
    "description": "Xe Ép Rác Hyundai H150 2 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-14",
    "brand": "Isuzu",
    "model": "Xe Ép Rác Isuzu 14 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-isuzu-14-khoi/photo-1.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-14-khoi/photo-1.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-14-khoi/photo-2.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-14-khoi/z7891746409901_d3cb6085cf5eb38e0a581d225cd97bcc.jpg"
    ],
    "description": "Xe Ép Rác Isuzu 14 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-15",
    "brand": "Isuzu",
    "model": "Xe Ép Rác Isuzu 22 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-isuzu-22-khoi/z7937062646570_8c602a9c6cd3b229420e91bf87c7b5ac.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-22-khoi/z7937062646570_8c602a9c6cd3b229420e91bf87c7b5ac.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-22-khoi/z7937062653380_14d2cb3b23961de51d21e86d9b4dfb4e.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-22-khoi/z7948441024133_13151d49362211fe783feb65aa7cd98a.jpg"
    ],
    "description": "Xe Ép Rác Isuzu 22 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-16",
    "brand": "Isuzu",
    "model": "Xe Ép Rác Isuzu 3,5 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-isuzu-3,5-khoi/dvg.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-3,5-khoi/dvg.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-3,5-khoi/fgnf.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-3,5-khoi/rftn.jpg"
    ],
    "description": "Xe Ép Rác Isuzu 3,5 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-17",
    "brand": "Isuzu",
    "model": "Xe Ép Rác Isuzu 7,5 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-isuzu-7,5-khoi/photo-1.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-7,5-khoi/photo-1.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-7,5-khoi/photo-2.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-7,5-khoi/photo-3.jpg"
    ],
    "description": "Xe Ép Rác Isuzu 7,5 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-18",
    "brand": "Isuzu",
    "model": "Xe Ép Rác Isuzu 9 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-isuzu-9-khoi/photo-1.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-9-khoi/photo-1.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-9-khoi/photo-2.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-isuzu-9-khoi/z7939077853695_bc7b60540a6b2fa3917050e767325577.jpg"
    ],
    "description": "Xe Ép Rác Isuzu 9 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-19",
    "brand": "Linker",
    "model": "Xe Ép Rác Linker 12 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-linker-12-khoi/photo-1.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-linker-12-khoi/photo-1.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-linker-12-khoi/photo-2.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-linker-12-khoi/z8026463778929_301fd8aed3342cb1ced5ec953bc3d840.jpg"
    ],
    "description": "Xe Ép Rác Linker 12 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-20",
    "brand": "Linker",
    "model": "Xe Ép Rác Linker 6 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-linker-6-khoi/z7906170542282_f1d3db66cf6a4f112b1bfef147d7a21c.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-linker-6-khoi/z7906170542282_f1d3db66cf6a4f112b1bfef147d7a21c.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-linker-6-khoi/z7906170561039_63127d6ae6d2c9224f18b14dcbc6f904.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-linker-6-khoi/z7906170572740_bb4e6f32d4cc086a4cd2e44f6510c9ac.jpg"
    ],
    "description": "Xe Ép Rác Linker 6 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-21",
    "brand": "UD Trucks",
    "model": "Xe Ép Rác Ud Trucks 14 Khối",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Ép Rác",
    "image": "/cars/xe-ep-rac/xe-ep-rac-ud-truck-14-khoi/1785316901103_1945417234128956477_8269997638658277126_4c695483e40f843b49a2261757690ae7.jpg",
    "images": [
      "/cars/xe-ep-rac/xe-ep-rac-ud-truck-14-khoi/1785316901103_1945417234128956477_8269997638658277126_4c695483e40f843b49a2261757690ae7.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-ud-truck-14-khoi/z7980602113993_cc10a69a24155a923dbcbd107afdce19.jpg",
      "/cars/xe-ep-rac/xe-ep-rac-ud-truck-14-khoi/z7980602123709_721231f0dbe9cf8aa21414af35de5950.jpg"
    ],
    "description": "Xe Ép Rác Ud Trucks 14 Khối chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-22",
    "brand": "Chuyên Dụng",
    "model": "Xe Hút Bể Phốt Chuyên Dụng Cao Cấp",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Hút Bể Phốt",
    "image": "/cars/xe-hut-be-phot/iwedh.jpg",
    "images": [
      "/cars/xe-hut-be-phot/iwedh.jpg",
      "/cars/xe-hut-be-phot/z7932136985791_8ec77ea477c49052d2878bfb7025e24c.jpg",
      "/cars/xe-hut-be-phot/z7932137001021_9e18d8af317edca9b36d4b42c005154c.jpg"
    ],
    "description": "Xe Hút Bể Phốt chuyên dụng tiêu chuẩn chất lượng cao, trang bị bồn chứa áp lực lớn và hệ thống bơm hút mạnh mẽ."
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
