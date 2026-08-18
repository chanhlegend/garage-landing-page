export type ServiceBlock =
  | { type: 'heading'; title: string }
  | { type: 'paragraph'; text: string }
  | { type: 'key_value'; items: { label: string; value: string }[] }
  | { type: 'bullet_list'; title?: string; items: string[] }
  | { type: 'nested_group'; title: string; groups: { name: string; items: string[] }[] }
  | { type: 'warranty'; chassis: { time: string; location: string }; body: { time: string; location: string } }
  | { type: 'quote'; text: string }
  | { type: 'contact_callout'; title: string; text: string; hotline: string }

export type AfterSalesService = {
  id: string
  title: string
  summary: string
  image: string
  gallery?: string[]
  hotline: string
  blocks: ServiceBlock[]
}

export const AFTER_SALES_SERVICES: AfterSalesService[] = [
  {
    id: 'bao-hanh-bao-duong',
    title: 'BẢO HÀNH BẢO DƯỠNG XE CHUYÊN DÙNG',
    summary: 'Bảo hành, bảo dưỡng định kỳ các dòng xe chuyên dùng. Dịch vụ sửa chữa và đóng mới chuyên nghiệp, uy tín.',
    image: '/cars/z7958350577287_0f3a2ae7c592dd343f9be45d9f2b96a1.jpg',
    gallery: [
      '/cars/z7958350577287_0f3a2ae7c592dd343f9be45d9f2b96a1.jpg',
      '/cars/z7980592847072_3bf985667d9b9f3279110d80cee35113.jpg',
    ],
    hotline: '0392 923 792',
    blocks: [
      {
        type: 'paragraph',
        text: 'Bảo hành, bảo dưỡng định kỳ các dòng xe chuyên dùng. Dịch vụ sửa chữa và đóng mới chuyên nghiệp, uy tín.',
      },
      {
        type: 'heading',
        title: 'CHẾ ĐỘ BẢO HÀNH TOÀN DIỆN – CAM KẾT CHẤT LƯỢNG',
      },
      {
        type: 'warranty',
        chassis: {
          time: '24 tháng hoặc 200.000 km (tùy điều kiện nào đến trước).',
          location: 'Hệ thống trạm bảo hành ủy quyền của hãng trên toàn quốc, đảm bảo nhanh chóng và thuận tiện.',
        },
        body: {
          time: '12 tháng (không giới hạn số giờ hay số km sử dụng).',
          location: 'Xưởng sản xuất Công ty TNHH TM DV Ô Tô Tín Phát (Địa chỉ: 232 ĐT743A, Khu Phố Bình Thung 1, Phường Bình An, Dĩ An, Bình Dương).',
        },
      },
      {
        type: 'heading',
        title: 'DỊCH VỤ CHUYÊN NGHIỆP TẠI Ô TÔ TÍN PHÁT',
      },
      {
        type: 'bullet_list',
        items: [
          'Nhập khẩu trực tiếp cần cẩu SOOSAN chính hãng từ Hàn Quốc: Cam kết cung cấp sản phẩm chất lượng, độ bền vượt trội và hiệu suất cao.',
          'Đấu thầu dự án xe chuyên dùng trên toàn quốc: Tự hào là đối tác tin cậy trong các dự án lớn, cung cấp giải pháp tối ưu với giá cả cạnh tranh.',
          'Cải tạo, hoán cải xe tải thành xe chuyên dùng: Chuyển đổi mọi loại xe tải thành các dòng xe chuyên dùng phù hợp với nhu cầu sử dụng đặc thù.',
        ],
      },
      {
        type: 'nested_group',
        title: 'Thiết kế, đóng mới và cấp phiếu kiểm định cho:',
        groups: [
          {
            name: 'Xe cẩu chuyên dùng',
            items: ['Đáp ứng mọi nhu cầu nâng, hạ hàng hóa.'],
          },
          {
            name: 'Xe chở ô tô, xe chở xe cơ giới',
            items: ['Đảm bảo an toàn và hiệu quả vận chuyển.'],
          },
          {
            name: 'Xe ép rác',
            items: ['Phục vụ môi trường xanh, sạch đẹp.'],
          },
        ],
      },
      {
        type: 'quote',
        text: 'Đồng hành cùng bạn trong từng hành trình – Uy tín tạo nên thương hiệu.',
      },
    ],
  },
  {
    id: 'nhap-khau-can-cau-soosan',
    title: 'NHẬP KHẨU CẦN CẨU - BẢNG GIÁ CẨU SOOSAN MỚI NHẤT',
    summary: 'Nhãn hiệu: Cần cẩu thủy lực - SOOSAN Hàn Quốc. Nhập khẩu trực tiếp - Phân phối toàn quốc. Chuyên đóng cẩu lắp mới.',
    image: '/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%2012%20T%E1%BA%A4N/11.jpg',
    gallery: [
      '/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%2012%20T%E1%BA%A4N/11.jpg',
      '/cars/Xe%20C%E1%BA%A9u/CHENGLONG%20-%2012%20T%E1%BA%A4N/120.jpg',
      '/cars/Xe%20C%E1%BA%A9u/DONG%20FENG%20-%208%20T%E1%BA%A4N/z7952467627606_1b93a28629dc21c1ea47e2bbddd38853.jpg',
    ],
    hotline: '0392 923 792',
    blocks: [
      {
        type: 'key_value',
        items: [
          { label: 'Nhãn hiệu', value: 'Cần cẩu thủy lực - SOOSAN Hàn Quốc' },
          { label: 'Phân phối', value: 'Nhập khẩu trực tiếp - Phân phối toàn quốc' },
          { label: 'Dịch vụ', value: 'Chuyên đóng cẩu lắp mới' },
          { label: 'Đơn vị cung cấp', value: 'Ô TÔ TÍN PHÁT (Hotline: 0392 923 792)' },
        ],
      },
      {
        type: 'heading',
        title: 'CÔNG TY CHÚNG TÔI CHUYÊN:',
      },
      {
        type: 'bullet_list',
        items: [
          'Nhập khẩu trực tiếp Cần cẩu SOOSAN từ Hàn Quốc.',
          'Nhận đấu thầu các dự án xe chuyên dùng trên toàn quốc.',
          'Cải tạo, hoán cải các loại xe tải thành xe chuyên dùng.',
        ],
      },
      {
        type: 'nested_group',
        title: 'Thiết kế, đóng mới, cấp phiếu:',
        groups: [
          { name: 'Xe cẩu', items: [] },
          { name: 'Xe chở xe ô tô, xe chở xe cơ giới', items: [] },
          { name: 'Xe ép rác', items: [] },
        ],
      },
    ],
  },
  {
    id: 'sua-chua-cai-tao-thung-xe',
    title: 'SỬA CHỮA XE CHUYÊN DÙNG - CẢI TẠO ĐÓNG THÙNG XE TẢI',
    summary: 'Sửa chữa xe chuyên dùng. Cải tạo, đóng mới thùng xe tải và xe chuyên dùng theo yêu cầu. Cam kết chất lượng và dịch vụ uy tín.',
    image: '/cars/rftn.jpg',
    gallery: [
      '/cars/rftn.jpg',
      '/cars/dz.jpg',
    ],
    hotline: '0392 923 792',
    blocks: [
      {
        type: 'paragraph',
        text: 'Công ty Ô TÔ TÍN PHÁT chúng tôi chuyên đóng mới và nhận sửa chữa các loại xe chuyên dùng, xe tải thùng trên toàn quốc. Với Phương châm: "UY TÍN - CHẤT LƯỢNG - CÙNG NHAU PHÁT TRIỂN" chúng tôi đã tạo nên thương hiệu của mình trong hơn 10 năm qua.',
      },
      {
        type: 'paragraph',
        text: 'Công Ty TNHH TM DV Ô TÔ TÍN PHÁT tự hào là đơn vị chuyên cung cấp dịch vụ sửa chữa, đóng mới và cải tạo xe chuyên dùng, xe tải thùng trên toàn quốc. Hơn 10 năm hoạt động, chúng tôi đã xây dựng uy tín và làm hài lòng hàng ngàn khách hàng bằng phương châm: "UY TÍN - CHẤT LƯỢNG - CÙNG NHAU PHÁT TRIỂN".',
      },
      {
        type: 'heading',
        title: 'Dịch vụ sửa chữa và đóng xe mới chuyên nghiệp',
      },
      {
        type: 'paragraph',
        text: 'Công ty chúng tôi nhận sửa chữa các loại xe chuyên dùng - cải tạo đóng mới tất cả các loại thùng xe tải:',
      },
      {
        type: 'nested_group',
        title: 'Hạng mục thi công:',
        groups: [
          {
            name: 'XE CHUYÊN DÙNG',
            items: [
              'Xe Cẩu',
              'Xe ép rác, chở rác, xe thu gom rác các loại',
              'Xe chở xe ô tô, xe chở xe cơ giới công trình',
              'Xe chở gia súc, gia cầm',
            ],
          },
          {
            name: 'SỬA CHỮA ĐÓNG MỚI XE TẢI THÙNG',
            items: [
              'Xe tải thùng Mui bạt, Thùng kín (Inox, Composite, bửng nhôm...)',
              'Đóng mới và sửa chữa các xe thùng bạt, thùng kín có gắn Bửng nâng',
            ],
          },
        ],
      },
      {
        type: 'heading',
        title: 'DỊCH VỤ CỦA CHÚNG TÔI',
      },
      {
        type: 'bullet_list',
        items: [
          'Xưởng sản xuất quy mô lớn: Hệ thống được chia thành nhiều khu riêng biệt, phù hợp với từng loại xe: xe cẩu, xe ép rác, xe chở xe, xe ben...',
          'Đội ngũ chuyên nghiệp: Kỹ sư, thợ có tay nghề cao, kinh nghiệm lâu năm.',
          'Trang thiết bị hiện đại: Trang bị đầy đủ máy móc kỹ thuật, phụ tùng thay thế nhập khẩu trực tiếp.',
          'Cam kết về chất lượng: Sửa chữa đúng chất lượng, đáp ứng đúng thời gian yêu cầu. Chi phí hợp lý, cạnh tranh nhất.',
          'Hồ sơ pháp lý minh bạch: Hoàn thiện đúng quy trình các hồ sơ giấy tờ cải tạo xe.',
        ],
      },
      {
        type: 'quote',
        text: 'CAM KẾT CỦA CHÚNG TÔI: "UY TÍN - CHẤT LƯỢNG - CÙNG NHAU PHÁT TRIỂN"',
      },
      {
        type: 'bullet_list',
        items: [
          'Đảm bảo đúng chất lượng và thời gian sửa chữa - đóng mới theo yêu cầu của khách hàng.',
          'Chi phí dịch vụ, sửa chữa tốt nhất toàn Quốc.',
          'Luôn thực hiện đúng và đầy đủ các loại hồ sơ giấy tờ cải tạo xe theo quy định của nhà nước.',
        ],
      },
      {
        type: 'contact_callout',
        title: 'Sửa chữa xe chuyên dùng, xe tải chất lượng nhất ở đâu?',
        text: 'Bạn đang tìm kiếm dịch vụ sửa chữa, cải tạo, đóng mới xe chuyên dùng chất lượng? Công ty TNHH TM DV Ô Tô Tín Phát tự hào là địa chỉ uy tín hơn 10 năm kinh nghiệm, đáp ứng nhanh chóng và đảm bảo chất lượng tối ưu. Chuyên sửa chữa, đóng mới xe cẩu, xe ép rác, xe chở xe, xe tải thùng mui bạt, thùng kín... Đội ngũ kỹ sư tay nghề cao, trang thiết bị hiện đại, cam kết đúng tiến độ, chi phí hợp lý.',
        hotline: '0392 923 792',
      },
      {
        type: 'heading',
        title: 'CHẾ ĐỘ BẢO HÀNH',
      },
      {
        type: 'warranty',
        chassis: {
          time: 'Bảo hành chính hãng Nhà sản xuất.',
          location: 'Hệ thống nhà sản xuất trên toàn quốc.',
        },
        body: {
          time: 'Bảo hành 01 năm không hạn chế giờ và số km sử dụng.',
          location: 'Công ty TNHH TM DV Ô Tô Tín Phát (Địa chỉ: 232 ĐT743A, Khu Phố Bình Thung 1, Phường Bình An, Dĩ An, Bình Dương).',
        },
      },
      {
        type: 'heading',
        title: 'CÔNG TY CHÚNG TÔI CHUYÊN:',
      },
      {
        type: 'bullet_list',
        items: [
          'Nhập khẩu trực tiếp Cần cẩu SOOSAN từ Hàn Quốc',
          'Nhận Đấu thầu các dự án xe chuyên dùng trên toàn Quốc',
          'Cải tạo, hoán cải Các loại xe tải thành xe chuyên dùng.',
        ],
      },
      {
        type: 'nested_group',
        title: 'Thiết kế, Đóng mới, Cấp phiếu:',
        groups: [
          { name: 'Xe Cẩu', items: [] },
          { name: 'Xe Chở xe Ô tô, Xe chở xe cơ giới.', items: [] },
          { name: 'Xe Ép rác', items: [] },
        ],
      },
    ],
  },
  {
    id: 'sua-chua-thung-xe-ep-rac',
    title: 'SỬA CHỮA - CẢI TẠO - ĐÓNG MỚI THÙNG XE ÉP RÁC',
    summary: 'Chuyên sửa chữa các thùng xe ép rác. Dịch vụ sửa chữa đóng mới. Chuyên nghiệp uy tín.',
    image: '/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FVZ%20-%2022%20KH%E1%BB%90I/1787017169567_9176220574947847834_9176220574947847834_b0a347d1281b3ced64baa135165cd82c.jpg',
    gallery: [
      '/cars/Xe%20%C3%89p%20R%C3%A1c/ISUZU%20FVZ%20-%2022%20KH%E1%BB%90I/1787017169567_9176220574947847834_9176220574947847834_b0a347d1281b3ced64baa135165cd82c.jpg',
      '/cars/Xe%20%C3%89p%20R%C3%A1c/HINO%20FG%20-%2014%20KH%E1%BB%90I/z7980592817817_29d687f115c3a844aef55e78b0e16a85.jpg',
    ],
    hotline: '0392 923 792',
    blocks: [
      {
        type: 'bullet_list',
        items: [
          'Chuyên sửa chữa các thùng xe ép rác',
          'Dịch vụ sửa chữa đóng mới',
          'Chuyên nghiệp uy tín',
          'Ô TÔ TÍN PHÁT: 0392 923 792',
        ],
      },
      {
        type: 'heading',
        title: 'SỬA CHỮA - CẢI TẠO - ĐÓNG MỚI THÙNG XE ÉP RÁC',
      },
      {
        type: 'paragraph',
        text: 'Cùng với sự phát triển nhanh chóng của xã hội thì việc vệ sinh môi trường đô thị là một vấn đề rất cần thiết. Xe ép rác là một phương tiện chuyên thu gom vận chuyển rác thải đến nơi tập kết rác. Tuy nhiên hiện nay để đóng mới một chiếc xe ép rác thì chi phí là không nhỏ với các cá nhân có tài chính ít. Do đó, việc sửa chữa lại thùng xe một chiếc xe đã cũ là một giải pháp mà khách hàng ưu tiên lựa chọn.',
      },
      {
        type: 'paragraph',
        text: 'Công ty Ô TÔ TÍN PHÁT chúng tôi chuyên sửa chữa cải tạo, đóng mới thùng xe ép chở rác các loại trên toàn quốc. Với phương châm: "UY TÍN - CHẤT LƯỢNG - CÙNG NHAU PHÁT TRIỂN". Chúng tôi sẽ phục vụ các bạn đóng mới, sửa chữa xe ép rác và các loại xe chuyên dùng khác.',
      },
      {
        type: 'heading',
        title: 'DỊCH VỤ CỦA CHÚNG TÔI',
      },
      {
        type: 'bullet_list',
        items: [
          'Sửa chữa, đóng mới, bảo hành, bảo dưỡng trên toàn quốc.',
          'Sửa chữa xe ép rác, xe cẩu, xe chở xe, xe cứu hộ giao thông.',
          'Xưởng đóng thùng quy mô lớn, Thợ - Kỹ sư tay nghề lâu năm và đầy đủ các thiết bị sửa chữa.',
          'Phụ tùng thay thế được nhập khẩu trực tiếp.',
          'Hoàn thành đúng tiến độ yêu cầu, đảm bảo chất lượng tốt nhất.',
        ],
      },
      {
        type: 'quote',
        text: 'CAM KẾT CỦA CHÚNG TÔI: "UY TÍN - CHẤT LƯỢNG - CÙNG NHAU PHÁT TRIỂN"',
      },
      {
        type: 'bullet_list',
        items: [
          'Đảm bảo đúng chất lượng và thời gian sửa chữa - đóng mới theo yêu cầu của khách hàng.',
          'Chi phí dịch vụ, sửa chữa tốt nhất toàn Quốc.',
          'Luôn thực hiện đúng và đầy đủ các loại hồ sơ giấy tờ cải tạo xe theo quy định của nhà nước.',
        ],
      },
      {
        type: 'contact_callout',
        title: 'Sửa chữa xe chuyên dùng, xe tải chất lượng nhất ở đâu?',
        text: 'Công ty Ô TÔ TÍN PHÁT chúng tôi chuyên Sửa chữa - Cải tạo - Đóng mới các loại xe chuyên dùng và xe tải thùng trên toàn Quốc. Dịch vụ của chúng tôi sẽ đáp ứng phục vụ khách hàng đầy đủ, chất lượng và thời gian nhanh nhất.',
        hotline: '0392 923 792',
      },
      {
        type: 'heading',
        title: 'CHẾ ĐỘ BẢO HÀNH',
      },
      {
        type: 'warranty',
        chassis: {
          time: 'Bảo hành chính hãng của nhà sản xuất trên toàn Quốc.',
          location: 'Hệ thống nhà sản xuất trên toàn quốc.',
        },
        body: {
          time: 'Bảo hành 01 năm không hạn chế giờ và số km sử dụng.',
          location: 'Xưởng sản xuất: Công ty TNHH TM DV Ô Tô Tín Phát, 232 ĐT743A, Khu Phố Bình Thung 1, Phường Bình An, Dĩ An, Bình Dương.',
        },
      },
      {
        type: 'heading',
        title: 'CÔNG TY CHÚNG TÔI CHUYÊN:',
      },
      {
        type: 'bullet_list',
        items: [
          'Nhập khẩu trực tiếp Cần cẩu SOOSAN từ Hàn Quốc',
          'Cải tạo, hoán cải Các loại xe tải thành xe chuyên dùng.',
        ],
      },
      {
        type: 'nested_group',
        title: 'Thiết kế, Đóng mới, Cấp phiếu:',
        groups: [
          { name: 'Xe Cẩu', items: [] },
          { name: 'Xe Chở xe Ô tô, Xe chở xe cơ giới.', items: [] },
          { name: 'Xe Ép rác', items: [] },
        ],
      },
    ],
  },
  {
    id: 'bao-duong-xe-cuu-ho-cho-may',
    title: 'BẢO DƯỠNG XE CỨU HỘ - XE CHỞ MÁY CÔNG TRÌNH',
    summary: 'Dịch vụ bảo dưỡng, sửa chữa hệ thống xe cứu hộ giao thông và xe chở máy công trình.',
    image: '/cars/120.jpg',
    gallery: [
      '/cars/120.jpg',
      '/cars/96.jpg',
    ],
    hotline: '0392 923 792',
    blocks: [
      {
        type: 'paragraph',
        text: 'Dịch vụ bảo dưỡng, sửa chữa hệ thống xe cứu hộ giao thông và xe chở máy công trình.',
      },
    ],
  },
]
