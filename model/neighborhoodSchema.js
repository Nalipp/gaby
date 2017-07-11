const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NeighborhoodSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, 'Neighborhood is required'],
    enum: [ 'Dobong', 'Dongdaemun', 'Dongjak', 'Eunpyeong', 'Gangbuk', 'Gangdong', 'Gangnam', 'Gangseo', 'Geumcheon', 'Guro', 'Gwanak', 'Gwangjin', 'Jongno', 'Jung', 'Jungnang', 'Mapo', 'Nowon', 'Seocho', 'Seodaemun', 'Seongbuk', 'Seongdong', 'Songpa', 'Yangcheon', 'Yeongdeungpo', 'Yongsan', '도봉구', '동대문구', '동작구', '은평구', '강북구', '강동구', '강남구', '강서구', '금천구', '구로구', '관악구', '광진구', '종로구', '중구', '중랑구', '마포구', '노원구', '서초구', '서대문구', '성북구', '성동구', '송파구', '양천구', '영등포구', '용산구' ]
  }
});

module.exports = NeighborhoodSchema;
