---
sidebar_position: 4
---

# 🧟‍♂️ Chỉ số quái vật
- **Sát thương radiant** (đánh): 
    + Có thể gọi là "Smite" Gây sát thương gấp 2 lần so với xác sống và 1.5 lần với quái vật nether nhưng không gây sát thương cho các loại khác
- **Sát thương Necrotic**: 
    + Hiệu ứng Wither bây giờ gây sát thương necrotic (kiểu hoại tử), gây sát thương lên 1 lần đối với mọi thứ, trừ 0.5 lần đối với quái vật nether và 0 lần với xác sống
- **Hệ thống cân bằng** (Scaling):
    + Các quái vật xuất hiện sẽ được cân bằng theo cấp độ trung bình của tất cả mọi người xung quanh, lên đến 5 cấp độ so với mức trung bình cục bộ. 
    + Quái vật sẽ nhận được các chỉ số tăng lên dựa trên cấp độ gán lên chúng, Các chỉ số cân bằng bao gồm:
        + Giáp
        + Sát thương
        + Máu
        + Xuyên giáp
        + Tỷ lệ chí mạng
        + sát thương chí mạng
    + Đổi lại quái càng mạnh lên thì sẽ thả cầu kinh nghiệm EXP orb theo công thức `0.02 x cấp độ` VD như +200% EXP orb rơi ra ở cấp độ 100

## Các chỉ số đặc biệt của quái cụ thể
| Loại Quái | Chỉ Số | Hệ Số | Mô Tả |
| --- | --- | --- | --- |
| Zombie (và các loại liên quan) | Kháng Lửa | `-0.5` | +50% sát thương Lửa nhận vào |
| | Kháng Độc | `0.5` | -50% sát thương Độc nhận vào |
| | Kháng Chảy Máu | `0.5` | -50% sát thương Chảy Máu nhận vào |
| Drowned (kế thừa chỉ số Zombie) | Kháng Lửa | `0` | Không yếu điểm với lửa |
| Husk (kế thừa chỉ số Zombie) | Kháng Lửa | `0.3` | -30% sát thương Lửa nhận vào |
| Skeleton | Kháng Lửa | `-1` | +100% sát thương Lửa nhận vào |
| | Kháng Cận Chiến | `-0.5` | +50% sát thương Cận Chiến nhận vào |
| | Kháng Nổ | `-1` | +100% sát thương Nổ nhận vào |
| | Kháng Rơi | `-1` | +100% sát thương Rơi nhận vào |
| | Kháng Độc | `1` | Miễn nhiễm sát thương Độc |
| | Kháng Chảy Máu | `1` | Miễn nhiễm sát thương Chảy Máu |
| Wither Skeleton | Kháng Độc | `1` | Miễn nhiễm sát thương Độc |
| | Kháng Chảy Máu | `1` | Miễn nhiễm sát thương Chảy Máu |
| Nhện | Kháng Độc | `0.5` | -50% sát thương Độc nhận vào |
| Nhện hang | Kháng Độc | `1` | Miễn nhiễm sát thương Độc |
| | Kháng Cận Chiến | `-0.5` | +50% sát thương Cận Chiến nhận vào |

## Chỉ số cho các boss (bao gồm boss không chính thức)
| Loại Boss | Chỉ Số | Hệ Số | Mô Tả |
| --- | --- | --- | --- |
| Rồng Ender | Cấp độ | `2 * level` | Gấp đôi cấp độ khu vực |
| | Máu | `0.015 * level` | +300% Máu ở cấp 200 |
| | Kháng các vật phóng ra | `0.5` | -50% sát thương nhận vào |
| | Kháng Lửa | `1` | Miễn nhiễm sát thương Lửa |
| | Kháng Độc | `0.7` | -70% sát thương Độc nhận vào |
| | Kháng Phép | `0.7` | -70% sát thương Phép nhận vào |
| | Xuyên Giáp (%) | `0.5` | 50% xuyên giáp khi tấn công |
| Warden | Cấp độ | `1.25 * level` | 1.25 lần cấp độ khu vực |
| | Máu | `0.008 * level` | +100% Máu ở cấp 125 |
| | Kháng các vật phóng ra | `0.5` | -50% sát thương nhận vào |
| | Kháng Hoại Tử | `0.5` | -50% sát thương Hoại Tử nhận vào |
| | Xuyên Giáp (%) | `0.75` | 75% xuyên giáp khi tấn công |
| Wither | Cấp độ | `1.25 * level` | 1.25 lần cấp độ khu vực |
| | Máu | `0.016 * level` | +200% Máu ở cấp 125 |
| | Kháng các vật phóng ra | `0.5` | -50% sát thương nhận vào |
| | Kháng Lửa | `1` | Miễn nhiễm sát thương Lửa |
| | Kháng Độc | `1` | Miễn nhiễm sát thương Độc |
| | Kháng Chảy Máu | `1` | Miễn nhiễm sát thương Chảy Máu |
| | Kháng Nổ | `1` | Miễn nhiễm sát thương Nổ |
| | Xuyên Giáp (%) | `0.5` | 50% xuyên giáp khi tấn công |
| Guardian Cổ | Cấp độ | `1.25 * level` | 1.25 lần cấp độ khu vực |
| | Máu | `0.008 * level` | +100% Máu ở cấp 125 |
| | Xuyên Giáp | `0.5` | 50% xuyên giáp khi tấn công |