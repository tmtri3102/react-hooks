# Hướng Dẫn FormikBook

## 1. Giải Thích Logic Của Code

### Mục Tiêu
Ứng dụng này được xây dựng để quản lý danh sách sách trong thư viện. Người dùng có thể thêm mới, chỉnh sửa hoặc xóa các sách trong danh sách. Dữ liệu được lưu trữ trong `useState`, và biểu mẫu nhập liệu được xử lý bằng thư viện `Formik`.

### Cấu Trúc Chính
- **Trạng thái (State):**
    - `book`: Một mảng lưu danh sách các cuốn sách.
    - `form`: Một đối tượng lưu dữ liệu biểu mẫu hiện tại.
    - `indexSelected`: Lưu chỉ mục của cuốn sách đang được chỉnh sửa. Nếu không có cuốn nào được chọn, giá trị là `-1`.

- **Các Chức Năng Quan Trọng:**
    1. **`handleValidate`:**
        - Dùng để xác thực dữ liệu biểu mẫu.
        - Kiểm tra nếu trường `title` hoặc `quantity` bị bỏ trống, trả về lỗi tương ứng.

    2. **`handleSelect`:**
        - Gán cuốn sách được chọn vào biểu mẫu để chỉnh sửa.
        - Cập nhật `indexSelected` để biết cuốn nào đang được chỉnh sửa.

    3. **`handleDelete`:**
        - Xóa sách được chọn dựa trên `indexSelected`.

    4. **`handleSubmit`:**
        - Xử lý khi biểu mẫu được gửi đi:
            - Nếu đang chỉnh sửa một cuốn sách (`indexSelected > -1`), thay thế sách trong mảng `book` tại vị trí được chọn.
            - Nếu không, thêm sách mới vào danh sách.

### Giao Diện Biểu Mẫu
- Biểu mẫu hiển thị các trường nhập liệu (`title` và `quantity`), kèm theo thông báo lỗi nếu dữ liệu không hợp lệ.
- Một bảng hiển thị danh sách sách, với các nút `Edit` (chỉnh sửa) và `Delete` (xóa) ở từng dòng.

---

## 2. Giải Thích Cách Hoạt Động Của Formik

### Formik Là Gì?
`Formik` là một thư viện hỗ trợ quản lý biểu mẫu trong React. Nó giúp giảm thiểu công việc xử lý dữ liệu biểu mẫu, xác thực và gửi dữ liệu.

### Các Thành Phần Của Formik Trong Ứng Dụng
1. **`initialValues`:**
    - Giá trị khởi tạo của biểu mẫu, được gán từ trạng thái `form`.
    - `enableReinitialize={true}`: Đảm bảo biểu mẫu tự cập nhật khi giá trị của `form` thay đổi.

2. **`validate`:**
    - Hàm xác thực dữ liệu biểu mẫu (`handleValidate`).
    - Nếu có lỗi, trả về một đối tượng chứa thông báo lỗi.

3. **`onSubmit`:**
    - Hàm xử lý khi biểu mẫu được gửi đi:
        - Thêm sách mới hoặc chỉnh sửa sách hiện có.
        - Xóa dữ liệu biểu mẫu sau khi xử lý thành công (`resetForm`).

4. **Render Props:**
    - `Formik` sử dụng render props để cung cấp các phương thức và giá trị cần thiết:
        - `values`: Giá trị hiện tại của biểu mẫu.
        - `handleChange`: Hàm cập nhật giá trị khi người dùng thay đổi input.
        - `handleSubmit`: Hàm xử lý khi nhấn nút "Submit".
        - `errors`: Các lỗi xác thực.

### Mục Đích Của Formik
- **Quản lý giá trị biểu mẫu:** Tránh việc tự tạo logic phức tạp để lưu trữ và cập nhật giá trị.
- **Xác thực dễ dàng:** Tích hợp xác thực với các lỗi cụ thể.
- **Tự động hóa quy trình gửi biểu mẫu:** Tối ưu hóa việc xử lý dữ liệu khi người dùng nhấn nút "Submit".

---

## 3. Cách Ứng Dụng Hoạt Động
1. Nhập thông tin sách (Tiêu đề và Số lượng) vào biểu mẫu.
2. Nhấn nút "Add" để thêm sách mới hoặc "Update" để chỉnh sửa sách.
3. Danh sách sách hiển thị bên dưới, với các nút:
    - `Edit`: Chỉnh sửa thông tin sách.
    - `Delete`: Xóa sách khỏi danh sách.

Ứng dụng này là một ví dụ đơn giản nhưng hiệu quả trong việc sử dụng `Formik` để quản lý biểu mẫu React.