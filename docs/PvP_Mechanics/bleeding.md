---
sidebar_position: 2
---

# 🩸 Chảy Máu
- Đây là hiệu ứng trạng thái có thể gây ra, nó `có tỷ lệ gây ra`, `thời lượng` và `sát thương` mỗi tick. khi bị chảy máu, nạn nhân sẽ chịu sát thương mỗi 40 tick tức 2 giây, và sát thương này sẽ bỏ qua tính giáp. 
- Nếu một mục tiêu đang chảy máu mà bị mà bị gây chảy máu thêm, thời lượng sẽ được làm mới với tộc độ tick sẽ tăng 5 tick (40 tick -> 45 tick -> N tick) tối đa tăng 4 lần. Nếu gây chảy máu 5 lần trong khoảng thời gian ngắn thì nạn nhân sẽ bị chảy máu gấp đôi