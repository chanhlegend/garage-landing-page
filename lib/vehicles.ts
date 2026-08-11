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
}

export const vehicles: Vehicle[] = [
  {
    "id": "v-1",
    "brand": "Chenglong",
    "model": "Xe Cẩu Chenglong 12 Tấn",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Cẩu",
    "image": "/cars/xe-cau/xe-cau-chenglong-12-tan/11.jpg",
    "images": [
      "/cars/xe-cau/xe-cau-chenglong-12-tan/11.jpg",
      "/cars/xe-cau/xe-cau-chenglong-12-tan/120.jpg",
      "/cars/xe-cau/xe-cau-chenglong-12-tan/9.jpg"
    ],
    "description": "Xe Cẩu Chenglong 12 Tấn chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-2",
    "brand": "Dongfeng",
    "model": "Xe Cẩu Dongfeng 8 Tấn",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Cẩu",
    "image": "/cars/xe-cau/xe-cau-dongfeng-8-tan/z7952467632922_147e7dd41edd9749f611d3297c6e1a22.jpg",
    "images": [
      "/cars/xe-cau/xe-cau-dongfeng-8-tan/z7952467632922_147e7dd41edd9749f611d3297c6e1a22.jpg",
      "/cars/xe-cau/xe-cau-dongfeng-8-tan/z7952467663521_f971180e41c189708742c9db120a3bfa.jpg",
      "/cars/xe-cau/xe-cau-dongfeng-8-tan/z7952467671425_aded626cd69e820bd2527359d8c11b5c.jpg"
    ],
    "description": "Xe Cẩu Dongfeng 8 Tấn chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-3",
    "brand": "Hino",
    "model": "Xe Cẩu Hino",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Cẩu",
    "image": "/cars/xe-cau/xe-cau-hino/z7958347948716_215362e2f62095f6db64b55c4baa06cb.jpg",
    "images": [
      "/cars/xe-cau/xe-cau-hino/z7958347948716_215362e2f62095f6db64b55c4baa06cb.jpg",
      "/cars/xe-cau/xe-cau-hino/z7958348004385_b2ffbbc4b649b183511a4050c4b3b459.jpg",
      "/cars/xe-cau/xe-cau-hino/z7958348335892_24e26b99a7167233f40dc6fbbc130f2e.jpg"
    ],
    "description": "Xe Cẩu Hino chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-4",
    "brand": "UD Trucks",
    "model": "Xe Cẩu UD Trucks",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Cẩu",
    "image": "/cars/xe-cau/xe-cau-UD-trucks/1785979117974_1945417234128956477_8269997638658277126_99c1082e368a9f230166f03efc90ff3a.jpg",
    "images": [
      "/cars/xe-cau/xe-cau-UD-trucks/1785979117974_1945417234128956477_8269997638658277126_99c1082e368a9f230166f03efc90ff3a.jpg",
      "/cars/xe-cau/xe-cau-UD-trucks/z7958350746219_e0cefa940f47651f50ceb87fa73696b8.jpg",
      "/cars/xe-cau/xe-cau-UD-trucks/z7958350913151_58a74b0bf64e7d4c7e41fa4e33245a37.jpg"
    ],
    "description": "Xe Cẩu UD Trucks chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
  },
  {
    "id": "v-5",
    "brand": "Hino",
    "model": "Xe Chở Rác Hino",
    "year": 2024,
    "transmission": "Số sàn (Có trợ lực)",
    "mileage": "Mới 100%",
    "fuel": "Dầu Diesel",
    "price": "Liên hệ báo giá",
    "category": "Xe Chở Rác",
    "image": "/cars/xe-cho-rac/xe-cho-rac-hino/z7932715085826_ad418b855ca7dada3e6ba4ae77c749e3.jpg",
    "images": [
      "/cars/xe-cho-rac/xe-cho-rac-hino/z7932715085826_ad418b855ca7dada3e6ba4ae77c749e3.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-hino/z7932715350408_c40857347d52666b203c5b2cefee1bed.jpg",
      "/cars/xe-cho-rac/xe-cho-rac-hino/z7932715510515_fd59f0a8dc38456d3db23a2df7edf70c.jpg"
    ],
    "description": "Xe Chở Rác Hino chuyên dụng tiêu chuẩn chất lượng cao, bền bỉ, đáp ứng tối đa nhu cầu môi trường & vận tải."
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
