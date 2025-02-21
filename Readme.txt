Setup server:
test-web87-backend
| node server.js

setup client:
| npm run dev

Test API:
| Postman, import web87Test.postman_collection.json

APIs:
/films/top-10
/films/count
/films/year/:year
/films/country/:country
/films/actor/:actorName
/films/name-keyword/:keyword
/films/episodes-range/:min/:max

- Đếm số lượng tất cả bộ phim
+ /films/count
- Lấy 10 bộ phim đầu tiên có điểm đánh giá trung bình (avgRate) cao nhất

+ /films/top-10 

- Tìm danh sách bộ phim có năm sản xuất (publishedYear) là năm 2024

+ /films/year/2024

- Tìm danh sách bộ phim sản xuất bởi quốc gia (country) Russia

+ /films/country/Russia

- Tìm danh sách bộ phim có diễn viên (actors) "Frankie Scholte"

+ /films/actor/Frankie Scholte

- Tìm danh sách bộ phim có tên (name) chứa từ khóa "benga"

+ /films/name-keyword/benga

- Tìm danh sách bộ phim có số lượng tập phim (episodes) lớn hơn 5 và nhỏ hơn 10

/films/episodes-range/5/10

------------ Project detail
Kiem tra giua ky mindx web87
Nguyen Thanh Lam
Nhom 2 (online)
