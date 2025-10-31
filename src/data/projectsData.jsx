export const projectsData = [
  {
    id: 1,
    title: "Finance-Share",
    description:
      "Một nền tảng dựa trên kiến trúc microservice để quản lý tài chính cá nhân và chia sẻ bài đăng, có tính năng thông báo thời gian thực bằng WebSocket và Kafka.",
    tags: [
      "Java Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Spring Kafka",
      "WebSocket",
      "MySQL",
      "MongoDb",
      "React",
      "Tailwind CSS",
    ],
    link: "https://github.com/truongly2003/finance-share",
    image: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761629512/finance-share/login.png",
        description: "Giao diện đăng nhập với xác thực JWT và OAuth2.",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761629566/finance-share/home.png",
        description: "Trang chủ hiển thị tổng quan tài chính và bài viết mới.",
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631233/finance-share/post.png",
        description: "Trang đăng bài chia sẻ trong cộng đồng tài chính.",
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631079/finance-share/detail.png",
        description: "Chi tiết bài viết với bình luận lồng nhau.",
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631017/finance-share/comment.png",
        description: "Hệ thống bình luận có thể phản hồi nhiều cấp.",
      },
      {
        id: 6,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631275/finance-share/my-post.png",
        description: "Trang quản lý bài viết cá nhân của người dùng.",
      },
      {
        id: 7,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631473/finance-share/overview.png",
        description: "Tổng quan giao dịch và số liệu chi tiêu theo thời gian.",
      },
      {
        id: 8,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631507/finance-share/transaction.png",
        description: "Danh sách giao dịch thu chi chi tiết.",
      },
      {
        id: 9,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631598/finance-share/budget.png",
        description: "Trang quản lý ngân sách theo danh mục chi tiêu.",
      },
      {
        id: 10,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761632634/finance-share/budget-detail.png",
        description: "Chi tiết từng ngân sách, hiển thị tiến độ sử dụng.",
      },
      {
        id: 11,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631621/finance-share/goal.png",
        description: "Danh sách mục tiêu tài chính của người dùng.",
      },
      {
        id: 12,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761632666/finance-share/goal-detail.png",
        description: "Chi tiết mục tiêu tài chính, tiến độ hoàn thành.",
      },
      {
        id: 13,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631745/finance-share/setting.png",
        description: "Trang cài đặt tài khoản và tùy chỉnh hệ thống.",
      },
      {
        id: 14,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631420/finance-share/profile.png",
        description: "Trang hồ sơ cá nhân người dùng.",
      },
      {
        id: 15,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761631372/finance-share/notification.png",
        description: "Thông báo thời gian thực bằng WebSocket và Kafka.",
      },
    ],
    architectureImage: {
      url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761642787/finance-share/Microservices%20Architecture.png",
      description:
        "Sơ đồ kiến trúc hệ thống microservices với Spring Cloud, Kafka, WebSocket, MySQL, MongoDB và các Service chính.",
    },
    keyFeatures: {
      user: [
        "Xác thực và phân quyền an toàn sử dụng JWT.",
        "Đăng nhập bằng Facebook, Google, xác minh qua email.",
        "Thay đổi mật khẩu, khôi phục mật khẩu và cập nhật thông tin cá nhân.",
      ],
      finance: [
        "Theo dõi và phân tích giao dịch, thống kê chi tiêu.",
        "Quản lý chi tiêu, thu nhập, ngân sách, mục tiêu tài chính, ví tiền và danh mục.",
        "Cảnh báo vượt ngân sách khi chi tiêu vượt quá 90% ngân sách.",
        "Thiết lập ngân sách chi tiêu.",
      ],
      community: [
        "Tạo, chỉnh sửa và quản lý bài viết.",
        "Bình luận và trả lời bình luận của người dùng khác (bình luận lồng nhau).",
        "Thích bài viết và bình luận.",
      ],
      notifications: [
        "Thông báo thời gian thực sử dụng WebSocket và Kafka.",
        "Kích hoạt khi:",
        "- Ngân sách sắp đạt 90% giới hạn.",
        "- Nhắc nhở ghi lại giao dịch hàng ngày.",
        "- Ai đó bình luận, thích hoặc trả lời bài viết/bình luận của bạn.",
      ],
    },
  },
  {
    id: 2,
    title: "Book Tour",
    description: `Phát triển một nền tảng web cho phép người dùng tìm kiếm, đặt và 
    thanh toán các tour du lịch trực tuyến. Quy trình đặt chỗ, xác thực người dùng và 
    tích hợp cổng thanh toán. 
    Người dùng có thể khám phá thông tin chi tiết về tour và để lại đánh giá sau chuyến đi.`,
    tags: [
      "Java Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
      "MongoDb",
      "React",
      "Bootstrap",
    ],
    link: "https://github.com/Vungoctu3007/tour-management",
    image: [],
    keyFeatures: {
      responsibilities: [
        "Xây dựng chức năng Đặt Tour, bao gồm chọn lịch trình, thông tin người tham gia và xác nhận đặt tour",
        "Phát triển tích hợp thanh toán VNPay, xử lý các trạng thái thanh toán (chờ xử lý, thành công, thất bại)",
        "Phát triển trang danh sách tour cho khách hàng với các tính năng: lọc, tìm kiếm và phân trang",
      ],
    },
  },

  {
    id: 3,
    title: "Send Flow (Đang Phát Triển)",
    description: "Đang Cập Nhật",
    tags: [],
    link: "https://github.com/truongly2003/send-flow",
    image: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761916067/sendflow/client.png",
        description: "Trang người dùng đang cập nhật",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761916236/sendflow/admin.png",
        description: "Trang quản lý đang cập nhật",
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761915672/sendflow/home.png",
        description: "Trang chủ ",
      },
    ],

    keyFeatures:""
  },
];
