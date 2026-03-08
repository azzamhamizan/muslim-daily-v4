/**
 * Muslim Daily v4 — Main Application
 * Full-featured Islamic Daily Toolkit PWA
 */
'use strict';

// ============================================================
// DATA STORE
// ============================================================
const DATA = {
  hadiths: [
    { id:1, arabic:"إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ", text:"Sesungguhnya setiap amalan tergantung pada niatnya. Dan setiap orang akan mendapatkan apa yang ia niatkan.", source:"HR. Bukhari & Muslim" },
    { id:2, arabic:"الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ", text:"Muslim yang baik adalah yang orang-orang muslim lainnya selamat dari gangguan lisan dan tangannya.", source:"HR. Bukhari" },
    { id:3, arabic:"الدِّينُ النَّصِيحَةُ", text:"Agama itu adalah nasihat.", source:"HR. Muslim" },
    { id:4, arabic:"خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", text:"Sebaik-baik kalian adalah orang yang belajar Al-Quran dan mengajarkannya.", source:"HR. Bukhari" },
    { id:5, arabic:"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ", text:"Barangsiapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau diam.", source:"HR. Bukhari & Muslim" },
    { id:6, arabic:"لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ", text:"Tidaklah beriman seseorang di antara kalian sampai ia mencintai saudaranya seperti ia mencintai dirinya sendiri.", source:"HR. Bukhari & Muslim" },
    { id:7, arabic:"الطَّهُورُ شَطْرُ الْإِيمَانِ", text:"Bersuci adalah separuh dari keimanan.", source:"HR. Muslim" },
    { id:8, arabic:"أَفْضَلُ الصِّيَامِ بَعْدَ رَمَضَانَ شَهْرُ اللَّهِ الْمُحَرَّمُ", text:"Puasa yang paling utama setelah Ramadan adalah puasa di bulan Allah, yaitu Muharram.", source:"HR. Muslim" },
    { id:9, arabic:"مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا", text:"Barangsiapa melapangkan satu kesusahan seorang mukmin di dunia, Allah akan melapangkan darinya satu kesusahan di hari kiamat.", source:"HR. Muslim" },
    { id:10, arabic:"اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ", text:"Bertakwalah kepada Allah di mana pun kamu berada, ikutilah keburukan dengan kebaikan niscaya kebaikan itu akan menghapusnya.", source:"HR. Tirmidzi" },
    { id:11, arabic:"الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ", text:"Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah.", source:"HR. Muslim" },
    { id:12, arabic:"مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ", text:"Barangsiapa menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga.", source:"HR. Muslim" },
    { id:13, arabic:"إِنَّ الْحَلَالَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ", text:"Sesungguhnya yang halal itu jelas dan yang haram pun jelas.", source:"HR. Bukhari & Muslim" },
    { id:14, arabic:"كُلُّ مَعْرُوفٍ صَدَقَةٌ", text:"Setiap kebaikan adalah sedekah.", source:"HR. Bukhari" },
    { id:15, arabic:"ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمُكُمْ مَنْ فِي السَّمَاءِ", text:"Sayangilah mereka yang ada di bumi, niscaya Dia yang ada di langit akan menyayangi kalian.", source:"HR. Abu Dawud & Tirmidzi" },
    { id:16, arabic:"الصَّلَاةُ عِمَادُ الدِّينِ", text:"Sholat adalah tiang agama.", source:"HR. Baihaqi" },
    { id:17, arabic:"أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ", text:"Amalan yang paling dicintai Allah adalah yang paling rutin dilakukan meskipun sedikit.", source:"HR. Bukhari & Muslim" },
    { id:18, arabic:"مَنْ لَا يَشْكُرُ النَّاسَ لَا يَشْكُرُ اللَّهَ", text:"Barangsiapa yang tidak bersyukur kepada manusia, ia tidak bersyukur kepada Allah.", source:"HR. Abu Dawud & Tirmidzi" },
    { id:19, arabic:"الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ", text:"Ucapan yang baik adalah sedekah.", source:"HR. Bukhari & Muslim" },
    { id:20, arabic:"إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ", text:"Sesungguhnya Allah itu Maha Lembut, Dia mencintai kelembutan dalam segala urusan.", source:"HR. Bukhari & Muslim" },
    { id:21, arabic:"مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا", text:"Barangsiapa berpuasa Ramadan dengan penuh keimanan dan mengharap pahala, dosanya yang telah lalu akan diampuni.", source:"HR. Bukhari & Muslim" },
    { id:22, arabic:"الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى", text:"Tangan di atas lebih baik daripada tangan di bawah (memberi lebih baik daripada meminta).", source:"HR. Bukhari & Muslim" },
    { id:23, arabic:"لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ", text:"Orang kuat bukanlah orang yang pandai bergulat, tetapi orang yang dapat menahan dirinya ketika marah.", source:"HR. Bukhari & Muslim" },
    { id:24, arabic:"مَنْ حَسُنَ إِسْلَامُهُ حَسُنَ عَمَلُهُ", text:"Barangsiapa yang baik keislamannya, maka baik pula amalannya.", source:"HR. Malik" },
    { id:25, arabic:"تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ", text:"Senyummu kepada saudaramu adalah sedekah.", source:"HR. Tirmidzi" },
    { id:26, arabic:"أَكْثِرُوا ذِكْرَ هَاذِمِ اللَّذَّاتِ", text:"Perbanyaklah mengingat penghancur kelezatan, yaitu kematian.", source:"HR. Tirmidzi" },
    { id:27, arabic:"النَّدَمُ تَوْبَةٌ", text:"Penyesalan adalah taubat.", source:"HR. Ibnu Majah" },
    { id:28, arabic:"مَنْ أَحَبَّ لِقَاءَ اللَّهِ أَحَبَّ اللَّهُ لِقَاءَهُ", text:"Barangsiapa yang rindu bertemu Allah, Allah pun rindu bertemu dengannya.", source:"HR. Bukhari" },
    { id:29, arabic:"خَيْرُ الناس أنفعهم للناس", text:"Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.", source:"HR. Ahmad" },
    { id:30, arabic:"أَعِنِّي عَلَى نَفْسِكَ بِكَثْرَةِ السُّجُودِ", text:"Bantulah aku untuk mendekatkan dirimu dengan memperbanyak sujud.", source:"HR. Muslim" }
  ],

  ayat: [
    { arabic:"وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ", terjemahan:"Barangsiapa bertakwa kepada Allah, niscaya Dia akan mengadakan baginya jalan keluar. Dan memberinya rezeki dari arah yang tiada disangka-sangkanya.", surat:"QS. At-Talaq", ayat:"2-3" },
    { arabic:"فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا", terjemahan:"Maka sesungguhnya bersama kesulitan ada kemudahan. Sesungguhnya bersama kesulitan ada kemudahan.", surat:"QS. Al-Insyirah", ayat:"5-6" },
    { arabic:"وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ", terjemahan:"Dan jangan kamu berputus asa dari rahmat Allah. Sesungguhnya yang berputus asa dari rahmat Allah hanyalah orang-orang kafir.", surat:"QS. Yusuf", ayat:"87" },
    { arabic:"اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", terjemahan:"Allah, tidak ada tuhan selain Dia. Yang Maha Hidup, Yang terus menerus mengurus makhluk-Nya.", surat:"QS. Al-Baqarah", ayat:"255" },
    { arabic:"وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", terjemahan:"Dan apabila hamba-hamba-Ku bertanya kepadamu tentang Aku, maka sesungguhnya Aku dekat. Aku mengabulkan permohonan orang yang berdoa apabila dia berdoa kepada-Ku.", surat:"QS. Al-Baqarah", ayat:"186" },
    { arabic:"وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ", terjemahan:"Boleh jadi kamu membenci sesuatu, padahal ia amat baik bagimu.", surat:"QS. Al-Baqarah", ayat:"216" },
    { arabic:"يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", terjemahan:"Wahai orang-orang yang beriman! Mohonlah pertolongan dengan sabar dan shalat. Sungguh, Allah beserta orang-orang yang sabar.", surat:"QS. Al-Baqarah", ayat:"153" },
    { arabic:"حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", terjemahan:"Cukuplah Allah menjadi Penolong kami dan Allah adalah sebaik-baik Pelindung.", surat:"QS. Ali 'Imran", ayat:"173" },
    { arabic:"أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", terjemahan:"Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.", surat:"QS. Ar-Ra'd", ayat:"28" },
    { arabic:"وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ", terjemahan:"Dan Dia bersama kamu di mana saja kamu berada.", surat:"QS. Al-Hadid", ayat:"4" },
    { arabic:"إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ", terjemahan:"Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum sebelum mereka mengubah keadaan diri mereka sendiri.", surat:"QS. Ar-Ra'd", ayat:"11" },
    { arabic:"لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", terjemahan:"Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya.", surat:"QS. Al-Baqarah", ayat:"286" },
    { arabic:"وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ", terjemahan:"Dan Tuhanmu berfirman: Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu.", surat:"QS. Ghafir", ayat:"60" },
    { arabic:"وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ", terjemahan:"Dan Allah mencintai orang-orang yang berbuat kebaikan.", surat:"QS. Ali 'Imran", ayat:"134" },
    { arabic:"وَتَوَكَّلْ عَلَى اللَّهِ وَكَفَىٰ بِاللَّهِ وَكِيلًا", terjemahan:"Dan bertawakallah kepada Allah, dan cukuplah Allah sebagai Pelindung.", surat:"QS. Al-Ahzab", ayat:"3" },
    { arabic:"وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا", terjemahan:"Dan jika kamu menghitung nikmat Allah, niscaya kamu tidak akan mampu menghitungnya.", surat:"QS. Ibrahim", ayat:"34" },
    { arabic:"فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي", terjemahan:"Maka ingatlah kepada-Ku, Aku pun akan ingat kepadamu. Bersyukurlah kepada-Ku dan janganlah kamu ingkar kepada-Ku.", surat:"QS. Al-Baqarah", ayat:"152" },
    { arabic:"وَقُل رَّبِّ زِدْنِي عِلْمًا", terjemahan:"Dan katakanlah: Ya Tuhanku, tambahkanlah ilmu kepadaku.", surat:"QS. Ta-Ha", ayat:"114" },
    { arabic:"وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ", terjemahan:"Aku tidak menciptakan jin dan manusia melainkan agar mereka beribadah kepada-Ku.", surat:"QS. Az-Zariyat", ayat:"56" },
    { arabic:"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً", terjemahan:"Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.", surat:"QS. Al-Baqarah", ayat:"201" },
    { arabic:"إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ", terjemahan:"Sesungguhnya orang-orang mukmin itu bersaudara.", surat:"QS. Al-Hujurat", ayat:"10" }
  ],

  doaHarian: [
    { id:"d1", name:"Doa Sebelum Tidur", waktu:"Sebelum Tidur", arabic:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", latin:"Bismika Allāhumma amūtu wa aḥyā", terjemahan:"Dengan nama-Mu ya Allah, aku mati dan aku hidup.", kategori:"Tidur" },
    { id:"d2", name:"Doa Bangun Tidur", waktu:"Setelah Bangun Tidur", arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", latin:"Alhamdulillahil-ladzī aḥyānā ba'da mā amātanā wa ilaihin-nusyūr", terjemahan:"Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami, dan kepada-Nya kami kembali.", kategori:"Tidur" },
    { id:"d3", name:"Doa Masuk Kamar Mandi", waktu:"Masuk Kamar Mandi", arabic:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ", latin:"Allāhumma innī a'ūdzubika minal-khubutsi wal-khabā'its", terjemahan:"Ya Allah, sesungguhnya aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.", kategori:"Sehari-hari" },
    { id:"d4", name:"Doa Keluar Kamar Mandi", waktu:"Keluar Kamar Mandi", arabic:"غُفْرَانَكَ", latin:"Ghufrānaka", terjemahan:"(Aku mengharap) ampunan-Mu.", kategori:"Sehari-hari" },
    { id:"d5", name:"Doa Sebelum Makan", waktu:"Sebelum Makan", arabic:"بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ", latin:"Bismillāhi wa 'alā barakatillāh", terjemahan:"Dengan nama Allah dan atas berkah Allah.", kategori:"Makan" },
    { id:"d6", name:"Doa Sesudah Makan", waktu:"Sesudah Makan", arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ", latin:"Alhamdulillāhil-ladzī ath'amanā wa saqānā wa ja'alanā muslimīn", terjemahan:"Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami muslim.", kategori:"Makan" },
    { id:"d7", name:"Doa Masuk Masjid", waktu:"Masuk Masjid", arabic:"اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", latin:"Allāhummaftaḥ lī abwāba raḥmatik", terjemahan:"Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.", kategori:"Masjid" },
    { id:"d8", name:"Doa Keluar Masjid", waktu:"Keluar Masjid", arabic:"اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ", latin:"Allāhumma innī as'aluka min faḍlik", terjemahan:"Ya Allah, sesungguhnya aku memohon kepada-Mu dari karunia-Mu.", kategori:"Masjid" },
    { id:"d9", name:"Doa Keluar Rumah", waktu:"Keluar Rumah", arabic:"بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", latin:"Bismillāhi tawakkaltu 'alallāhi, lā ḥaula wa lā quwwata illā billāh", terjemahan:"Dengan nama Allah, aku bertawakal kepada Allah, tiada daya dan kekuatan kecuali dengan pertolongan Allah.", kategori:"Perjalanan" },
    { id:"d10", name:"Doa Masuk Rumah", waktu:"Masuk Rumah", arabic:"اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ", latin:"Allāhumma innī as'aluka khairul-maulaji wa khairul-makhraj", terjemahan:"Ya Allah, sesungguhnya aku memohon kepada-Mu kebaikan tempat masuk dan kebaikan tempat keluar.", kategori:"Perjalanan" },
    { id:"d11", name:"Doa Naik Kendaraan", waktu:"Naik Kendaraan", arabic:"سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ", latin:"Subḥānal-ladzī sakhkhara lanā hādzā wa mā kunnā lahu muqrinīn", terjemahan:"Maha Suci Allah yang telah menundukkan semua ini bagi kami, padahal kami sebelumnya tidak mampu menguasainya.", kategori:"Perjalanan" },
    { id:"d12", name:"Doa Memohon Kebaikan Dunia Akhirat", waktu:"Kapan saja", arabic:"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", latin:"Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā 'adzāban-nār", terjemahan:"Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.", kategori:"Umum" }
  ],

  dzikir: {
    pagi:[
      { id:"p1", name:"Ayat Kursi", arabic:"اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ", translation:"Allah, tidak ada Tuhan melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya)...", count:1 },
      { id:"p2", name:"Istighfar Pagi", arabic:"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ", translation:"Aku memohon ampun kepada Allah Yang Maha Agung, yang tidak ada Tuhan selain Dia, Yang Maha Hidup dan Maha Berdiri Sendiri, dan aku bertaubat kepada-Nya.", count:3 },
      { id:"p3", name:"Doa Pagi", arabic:"اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ", translation:"Ya Allah, dengan rahmat-Mu kami memasuki waktu pagi, dengan rahmat-Mu kami memasuki waktu sore, dengan rahmat-Mu kami hidup dan mati, dan kepada-Mu kami kembali.", count:1 },
      { id:"p4", name:"Sayyidul Istighfar", arabic:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ", translation:"Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan yang berhak disembah selain Engkau. Engkau telah menciptakanku dan aku adalah hamba-Mu.", count:1 },
      { id:"p5", name:"Sholawat Pagi", arabic:"اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ", translation:"Ya Allah, limpahkanlah rahmat atas Muhammad dan atas keluarga Muhammad.", count:10 },
      { id:"p6", name:"Tasbih, Tahmid, Takbir", arabic:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", translation:"Maha Suci Allah dan segala puji bagi-Nya.", count:100 },
      { id:"p7", name:"Doa Perlindungan", arabic:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ", translation:"Dengan nama Allah yang bersama nama-Nya tidak ada yang dapat memberi mudharat di bumi maupun di langit, dan Dia Maha Mendengar lagi Maha Mengetahui.", count:3 }
    ],
    petang:[
      { id:"e1", name:"Doa Petang", arabic:"اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ", translation:"Ya Allah, dengan rahmat-Mu kami memasuki waktu sore, dan dengan rahmat-Mu kami memasuki waktu pagi, dengan rahmat-Mu kami hidup dan mati, dan kepada-Mu kami kembali.", count:1 },
      { id:"e2", name:"Istighfar Petang", arabic:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", translation:"Aku memohon ampunan Allah dan bertaubat kepada-Nya.", count:100 },
      { id:"e3", name:"Doa Perlindungan Malam", arabic:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", translation:"Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan apa yang Dia ciptakan.", count:3 },
      { id:"e4", name:"Sholawat Petang", arabic:"اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ", translation:"Ya Allah, curahkanlah shalawat, salam dan berkah atas Nabi kami Muhammad.", count:10 },
      { id:"e5", name:"Subhanallah wa Bihamdih", arabic:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ", translation:"Maha Suci Allah dan segala puji bagi-Nya sebanyak bilangan makhluk-Nya.", count:3 },
      { id:"e6", name:"Al-Ikhlas, Falaq, Nas", arabic:"قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ", translation:"Katakanlah: Dialah Allah Yang Maha Esa, Allah tempat meminta segala sesuatu...", count:3 },
      { id:"e7", name:"Doa Sebelum Tidur", arabic:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", translation:"Dengan nama-Mu ya Allah, aku mati dan aku hidup.", count:1 }
    ]
  },

  asmaul: [
    {num:1,arabic:"الرَّحْمَنُ",latin:"Ar-Rahman",arti:"Yang Maha Pengasih"},
    {num:2,arabic:"الرَّحِيمُ",latin:"Ar-Rahim",arti:"Yang Maha Penyayang"},
    {num:3,arabic:"الْمَلِكُ",latin:"Al-Malik",arti:"Maha Raja"},
    {num:4,arabic:"الْقُدُّوسُ",latin:"Al-Quddus",arti:"Yang Maha Suci"},
    {num:5,arabic:"السَّلَامُ",latin:"As-Salam",arti:"Yang Memberi Kesejahteraan"},
    {num:6,arabic:"الْمُؤْمِنُ",latin:"Al-Mu'min",arti:"Yang Memberi Keamanan"},
    {num:7,arabic:"الْمُهَيْمِنُ",latin:"Al-Muhaymin",arti:"Yang Maha Mengawasi"},
    {num:8,arabic:"الْعَزِيزُ",latin:"Al-Aziz",arti:"Yang Maha Perkasa"},
    {num:9,arabic:"الْجَبَّارُ",latin:"Al-Jabbar",arti:"Yang Maha Berkuasa"},
    {num:10,arabic:"الْمُتَكَبِّرُ",latin:"Al-Mutakabbir",arti:"Yang Memiliki Keagungan"},
    {num:11,arabic:"الْخَالِقُ",latin:"Al-Khaliq",arti:"Yang Maha Menciptakan"},
    {num:12,arabic:"الْبَارِئُ",latin:"Al-Bari",arti:"Yang Mengadakan"},
    {num:13,arabic:"الْمُصَوِّرُ",latin:"Al-Mushawwir",arti:"Yang Membentuk Rupa"},
    {num:14,arabic:"الْغَفَّارُ",latin:"Al-Ghaffar",arti:"Yang Maha Pengampun"},
    {num:15,arabic:"الْقَهَّارُ",latin:"Al-Qahhar",arti:"Yang Maha Perkasa"},
    {num:16,arabic:"الْوَهَّابُ",latin:"Al-Wahhab",arti:"Yang Maha Pemberi"},
    {num:17,arabic:"الرَّزَّاقُ",latin:"Ar-Razzaq",arti:"Yang Maha Pemberi Rezeki"},
    {num:18,arabic:"الْفَتَّاحُ",latin:"Al-Fattah",arti:"Yang Maha Membukakan"},
    {num:19,arabic:"الْعَلِيمُ",latin:"Al-Alim",arti:"Yang Maha Mengetahui"},
    {num:20,arabic:"الْقَابِضُ",latin:"Al-Qabidh",arti:"Yang Maha Menyempitkan"},
    {num:21,arabic:"الْبَاسِطُ",latin:"Al-Basith",arti:"Yang Maha Melapangkan"},
    {num:22,arabic:"الْخَافِضُ",latin:"Al-Khafidh",arti:"Yang Merendahkan"},
    {num:23,arabic:"الرَّافِعُ",latin:"Ar-Rafi",arti:"Yang Meninggikan"},
    {num:24,arabic:"الْمُعِزُّ",latin:"Al-Muizz",arti:"Yang Memuliakan"},
    {num:25,arabic:"الْمُذِلُّ",latin:"Al-Mudzil",arti:"Yang Menghinakan"},
    {num:26,arabic:"السَّمِيعُ",latin:"As-Sami",arti:"Yang Maha Mendengar"},
    {num:27,arabic:"الْبَصِيرُ",latin:"Al-Bashir",arti:"Yang Maha Melihat"},
    {num:28,arabic:"الْحَكَمُ",latin:"Al-Hakam",arti:"Yang Maha Memutuskan"},
    {num:29,arabic:"الْعَدْلُ",latin:"Al-Adl",arti:"Yang Maha Adil"},
    {num:30,arabic:"اللَّطِيفُ",latin:"Al-Lathif",arti:"Yang Maha Lembut"},
    {num:31,arabic:"الْخَبِيرُ",latin:"Al-Khabir",arti:"Yang Maha Mengenal"},
    {num:32,arabic:"الْحَلِيمُ",latin:"Al-Halim",arti:"Yang Maha Penyantun"},
    {num:33,arabic:"الْعَظِيمُ",latin:"Al-Azhim",arti:"Yang Maha Agung"},
    {num:34,arabic:"الْغَفُورُ",latin:"Al-Ghafur",arti:"Yang Maha Pengampun"},
    {num:35,arabic:"الشَّكُورُ",latin:"As-Syakur",arti:"Yang Maha Pembalas Budi"},
    {num:36,arabic:"الْعَلِيُّ",latin:"Al-Ali",arti:"Yang Maha Tinggi"},
    {num:37,arabic:"الْكَبِيرُ",latin:"Al-Kabir",arti:"Yang Maha Besar"},
    {num:38,arabic:"الْحَفِيظُ",latin:"Al-Hafizh",arti:"Yang Maha Memelihara"},
    {num:39,arabic:"الْمُقِيتُ",latin:"Al-Muqit",arti:"Yang Maha Pemberi Kecukupan"},
    {num:40,arabic:"الْحَسِيبُ",latin:"Al-Hasib",arti:"Yang Maha Membuat Perhitungan"},
    {num:41,arabic:"الْجَلِيلُ",latin:"Al-Jalil",arti:"Yang Maha Luhur"},
    {num:42,arabic:"الْكَرِيمُ",latin:"Al-Karim",arti:"Yang Maha Mulia"},
    {num:43,arabic:"الرَّقِيبُ",latin:"Ar-Raqib",arti:"Yang Maha Mengawasi"},
    {num:44,arabic:"الْمُجِيبُ",latin:"Al-Mujib",arti:"Yang Maha Mengabulkan"},
    {num:45,arabic:"الْوَاسِعُ",latin:"Al-Wasi",arti:"Yang Maha Luas"},
    {num:46,arabic:"الْحَكِيمُ",latin:"Al-Hakim",arti:"Yang Maha Bijaksana"},
    {num:47,arabic:"الْوَدُودُ",latin:"Al-Wadud",arti:"Yang Maha Mengasihi"},
    {num:48,arabic:"الْمَجِيدُ",latin:"Al-Majid",arti:"Yang Maha Mulia"},
    {num:49,arabic:"الْبَاعِثُ",latin:"Al-Baith",arti:"Yang Maha Membangkitkan"},
    {num:50,arabic:"الشَّهِيدُ",latin:"As-Syahid",arti:"Yang Maha Menyaksikan"},
    {num:51,arabic:"الْحَقُّ",latin:"Al-Haqq",arti:"Yang Maha Benar"},
    {num:52,arabic:"الْوَكِيلُ",latin:"Al-Wakil",arti:"Yang Maha Memelihara"},
    {num:53,arabic:"الْقَوِيُّ",latin:"Al-Qawi",arti:"Yang Maha Kuat"},
    {num:54,arabic:"الْمَتِينُ",latin:"Al-Matin",arti:"Yang Maha Kokoh"},
    {num:55,arabic:"الْوَلِيُّ",latin:"Al-Wali",arti:"Yang Maha Melindungi"},
    {num:56,arabic:"الْحَمِيدُ",latin:"Al-Hamid",arti:"Yang Maha Terpuji"},
    {num:57,arabic:"الْمُحْصِي",latin:"Al-Muhshi",arti:"Yang Maha Menghitung"},
    {num:58,arabic:"الْمُبْدِئُ",latin:"Al-Mubdi",arti:"Yang Maha Memulai"},
    {num:59,arabic:"الْمُعِيدُ",latin:"Al-Muid",arti:"Yang Maha Mengembalikan"},
    {num:60,arabic:"الْمُحْيِي",latin:"Al-Muhyi",arti:"Yang Maha Menghidupkan"},
    {num:61,arabic:"الْمُمِيتُ",latin:"Al-Mumit",arti:"Yang Maha Mematikan"},
    {num:62,arabic:"الْحَيُّ",latin:"Al-Hayy",arti:"Yang Maha Hidup"},
    {num:63,arabic:"الْقَيُّومُ",latin:"Al-Qayyum",arti:"Yang Maha Mandiri"},
    {num:64,arabic:"الْوَاجِدُ",latin:"Al-Wajid",arti:"Yang Maha Menemukan"},
    {num:65,arabic:"الْمَاجِدُ",latin:"Al-Majid",arti:"Yang Maha Mulia"},
    {num:66,arabic:"الْوَاحِدُ",latin:"Al-Wahid",arti:"Yang Maha Tunggal"},
    {num:67,arabic:"الْأَحَدُ",latin:"Al-Ahad",arti:"Yang Maha Esa"},
    {num:68,arabic:"الصَّمَدُ",latin:"As-Shamad",arti:"Yang Menjadi Tumpuan"},
    {num:69,arabic:"الْقَادِرُ",latin:"Al-Qadir",arti:"Yang Maha Menentukan"},
    {num:70,arabic:"الْمُقْتَدِرُ",latin:"Al-Muqtadir",arti:"Yang Maha Berkuasa"},
    {num:71,arabic:"الْمُقَدِّمُ",latin:"Al-Muqaddim",arti:"Yang Maha Mendahulukan"},
    {num:72,arabic:"الْمُؤَخِّرُ",latin:"Al-Muakhkhir",arti:"Yang Maha Mengakhirkan"},
    {num:73,arabic:"الْأَوَّلُ",latin:"Al-Awwal",arti:"Yang Maha Awal"},
    {num:74,arabic:"الْآخِرُ",latin:"Al-Akhir",arti:"Yang Maha Akhir"},
    {num:75,arabic:"الظَّاهِرُ",latin:"Az-Zahir",arti:"Yang Maha Nyata"},
    {num:76,arabic:"الْبَاطِنُ",latin:"Al-Bathin",arti:"Yang Maha Ghaib"},
    {num:77,arabic:"الْوَالِي",latin:"Al-Wali",arti:"Yang Maha Memerintah"},
    {num:78,arabic:"الْمُتَعَالِي",latin:"Al-Mutaali",arti:"Yang Maha Tinggi"},
    {num:79,arabic:"الْبَرُّ",latin:"Al-Barr",arti:"Yang Maha Dermawan"},
    {num:80,arabic:"التَّوَّابُ",latin:"At-Tawwab",arti:"Yang Maha Penerima Taubat"},
    {num:81,arabic:"الْمُنْتَقِمُ",latin:"Al-Muntaqim",arti:"Yang Maha Menghukum"},
    {num:82,arabic:"الْعَفُوُّ",latin:"Al-Afuww",arti:"Yang Maha Pemaaf"},
    {num:83,arabic:"الرَّؤُوفُ",latin:"Ar-Rauf",arti:"Yang Maha Pengasih"},
    {num:84,arabic:"مَالِكُ الْمُلْكِ",latin:"Malikul Mulk",arti:"Yang Memiliki Kerajaan"},
    {num:85,arabic:"ذُو الْجَلَالِ وَالْإِكْرَامِ",latin:"Dzul Jalali wal Ikram",arti:"Yang Memiliki Kebesaran dan Kemuliaan"},
    {num:86,arabic:"الْمُقْسِطُ",latin:"Al-Muqsith",arti:"Yang Maha Adil"},
    {num:87,arabic:"الْجَامِعُ",latin:"Al-Jami",arti:"Yang Maha Mengumpulkan"},
    {num:88,arabic:"الْغَنِيُّ",latin:"Al-Ghani",arti:"Yang Maha Kaya"},
    {num:89,arabic:"الْمُغْنِي",latin:"Al-Mughni",arti:"Yang Maha Pemberi Kekayaan"},
    {num:90,arabic:"الْمَانِعُ",latin:"Al-Mani",arti:"Yang Maha Mencegah"},
    {num:91,arabic:"الضَّارُّ",latin:"Ad-Dharr",arti:"Yang Mendatangkan Mudharat"},
    {num:92,arabic:"النَّافِعُ",latin:"An-Nafi",arti:"Yang Memberi Manfaat"},
    {num:93,arabic:"النُّورُ",latin:"An-Nur",arti:"Yang Maha Bercahaya"},
    {num:94,arabic:"الْهَادِي",latin:"Al-Hadi",arti:"Yang Maha Pemberi Petunjuk"},
    {num:95,arabic:"الْبَدِيعُ",latin:"Al-Badi",arti:"Yang Maha Pencipta"},
    {num:96,arabic:"الْبَاقِي",latin:"Al-Baqi",arti:"Yang Maha Kekal"},
    {num:97,arabic:"الْوَارِثُ",latin:"Al-Warits",arti:"Yang Maha Mewarisi"},
    {num:98,arabic:"الرَّشِيدُ",latin:"Ar-Rasyid",arti:"Yang Maha Pandai"},
    {num:99,arabic:"الصَّبُورُ",latin:"As-Shabur",arti:"Yang Maha Sabar"}
  ],

  islamicEvents: [
    { name:"Tahun Baru Islam (1 Muharram)", icon:"🌙", date:"2025-07-27", hijri:"1 Muharram 1447 H" },
    { name:"Maulid Nabi Muhammad SAW", icon:"🌹", date:"2025-09-05", hijri:"12 Rabiul Awal 1447 H" },
    { name:"Isra Mi'raj", icon:"✨", date:"2026-01-28", hijri:"27 Rajab 1447 H" },
    { name:"Nisfu Sya'ban", icon:"⭐", date:"2026-03-04", hijri:"15 Sya'ban 1447 H" },
    { name:"Ramadan 1447 H", icon:"🌙", date:"2026-02-19", hijri:"1 Ramadan 1447 H" },
    { name:"Lailatul Qadar", icon:"💫", date:"2026-04-14", hijri:"27 Ramadan 1447 H" },
    { name:"Idul Fitri 1447 H", icon:"🎊", date:"2026-04-18", hijri:"1 Syawal 1447 H" },
    { name:"Puasa Dzulhijjah", icon:"📿", date:"2026-06-18", hijri:"1 Dzulhijjah 1447 H" },
    { name:"Hari Arafah", icon:"🕌", date:"2026-06-27", hijri:"9 Dzulhijjah 1447 H" },
    { name:"Idul Adha 1447 H", icon:"🐑", date:"2026-06-28", hijri:"10 Dzulhijjah 1447 H" }
  ],

  tasbihDzikir: {
    subhanallah:{ arabic:"سُبْحَانَ اللّهِ", translation:"Maha Suci Allah", max:33 },
    alhamdulillah:{ arabic:"اَلْحَمْدُ لِلّهِ", translation:"Segala Puji Bagi Allah", max:33 },
    allahuakbar:{ arabic:"اَللّهُ أَكْبَرُ", translation:"Allah Maha Besar", max:34 },
    tahlil:{ arabic:"لَا إِلَهَ إِلَّا اللَّهُ", translation:"Tidak ada Tuhan selain Allah", max:100 },
    istighfar:{ arabic:"أَسْتَغْفِرُ اللَّهَ", translation:"Aku memohon ampunan Allah", max:100 },
    sholawat:{ arabic:"اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ", translation:"Ya Allah, limpahkanlah rahmat atas Muhammad", max:100 },
    custom:{ arabic:"لَا إِلَهَ إِلَّا اللَّهُ", translation:"Tidak ada Tuhan selain Allah", max:100 }
  }
};

// ============================================================
// STATE
// ============================================================
const state = {
  currentPage:'home',
  theme: localStorage.getItem('md-theme') || 'dark',
  prayerTimes: null,
  prayerLocation: null,
  nextPrayer: null,
  countdownInterval: null,
  currentHadisIndex: 0,
  tasbih:{
    type:'subhanallah',
    count: parseInt(localStorage.getItem('md-tasbih-count')||'0'),
    rounds: parseInt(localStorage.getItem('md-tasbih-rounds')||'0'),
    total: parseInt(localStorage.getItem('md-tasbih-total')||'0')
  },
  dzikirTab:'pagi',
  compassHeading:0,
  qiblaAngle:0,
  deferredInstall:null,
  doaCategory:'Semua',
  doaSearch:'',
  inspTab:'ayat'
};

// ============================================================
// UTILS
// ============================================================
function $(id){ return document.getElementById(id); }

function showToast(msg, duration=2500){
  const t=$('toast'); t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), duration);
}

function formatTime(d){ return d.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit',hour12:false}); }

function formatCountdown(sec){
  const h=Math.floor(sec/3600), m=Math.floor((sec%3600)/60), s=sec%60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function getDayOfYear(){
  const n=new Date(), s=new Date(n.getFullYear(),0,0);
  return Math.floor((n-s)/86400000);
}

function todayDateStr(){
  const d=new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function vibrate(p=[30]){ if(navigator.vibrate) navigator.vibrate(p); }

// ============================================================
// THEME
// ============================================================
function initTheme(){
  document.documentElement.setAttribute('data-theme', state.theme);
  const btn=$('dark-mode-toggle');
  if(btn) btn.querySelector('span').textContent = state.theme==='dark' ? '☀️' : '🌙';
  const toggle=$('settings-theme-toggle');
  if(toggle) toggle.classList.toggle('on', state.theme==='dark');
}

function toggleTheme(){
  state.theme = state.theme==='dark' ? 'light' : 'dark';
  localStorage.setItem('md-theme', state.theme);
  initTheme();
}

// ============================================================
// NAVIGATION
// ============================================================
function navigateTo(pageId){
  if(state.currentPage===pageId) return;
  const cur=document.querySelector('.page.active');
  if(cur) cur.classList.remove('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active', b.dataset.page===pageId));
  const target=$(`page-${pageId}`);
  if(target){ target.classList.add('active'); state.currentPage=pageId; }
  if(pageId==='sholat' && !state.prayerTimes) fetchPrayerTimes();
  if(pageId==='kiblat') initKiblat();
  if(pageId==='dzikir') renderDzikir();
  if(pageId==='kalender') renderKalender();
  if(pageId==='hadis') renderHadis();
  if(pageId==='doa') renderDoa();
  if(pageId==='asmaul') renderAsmaul();
  if(pageId==='statistik') renderStatistik();
}

// ============================================================
// HOME PAGE
// ============================================================
function initHome(){
  updateGreeting();
  updateHomeDate();
  renderHomeEvents();
  updateNextPrayerHome();
  renderAyatHarian();
  renderHaditsHarian();
  renderDoaHarian();
  renderKhatamProgress();
  renderStreakCircles();
}

function getGreetingByTime(){
  const h=new Date().getHours();
  const name=localStorage.getItem('md-user-name')||'Muslim';
  if(h>=4  && h<12) return { salam:`Selamat Pagi`, sub:`Semoga hari ini penuh berkah, ${name}! 🌅` };
  if(h>=12 && h<15) return { salam:`Selamat Siang`, sub:`Jangan lupa sholat Dzuhur, ${name}! ☀️` };
  if(h>=15 && h<18) return { salam:`Selamat Sore`, sub:`Waktu dzikir petang, ${name}! 🌤️` };
  if(h>=18 && h<20) return { salam:`Selamat Maghrib`, sub:`Waktunya berbuka & sholat Maghrib, ${name}!` };
  return { salam:`Selamat Malam`, sub:`Istirahat yang baik, ${name}! 🌙` };
}

function updateGreeting(){
  const g=getGreetingByTime();
  const gtEl=$('greeting-text'); if(gtEl) gtEl.textContent=g.salam;
  const gnEl=$('greeting-name'); if(gnEl) gnEl.textContent=g.sub;
}

function updateHomeDate(){
  const now=new Date();
  const dateEl=$('home-date');
  if(dateEl) dateEl.textContent=now.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  // Hijri via cache
  try{
    const cached=JSON.parse(localStorage.getItem('md-prayer-cache')||'null');
    if(cached && cached.date===todayDateStr() && cached.hijriStr){
      const hEl=$('home-hijri'); if(hEl) hEl.textContent=cached.hijriStr;
    }
  }catch{}
}

function renderHomeEvents(){
  const container=$('home-events-list'); if(!container) return;
  const today=new Date(); today.setHours(0,0,0,0);
  const upcoming=DATA.islamicEvents.map(e=>({...e,dateObj:new Date(e.date)}))
    .sort((a,b)=>a.dateObj-b.dateObj).filter(e=>e.dateObj>=today).slice(0,3);
  container.innerHTML=upcoming.map(e=>{
    const diff=Math.ceil((e.dateObj-today)/86400000);
    const badge=diff===0?'Hari Ini':`${diff} hari lagi`;
    const cls=diff===0?'today':'upcoming';
    return `<div class="event-item ${cls}">
      <span class="event-icon">${e.icon}</span>
      <div class="event-info">
        <div class="event-name">${e.name}</div>
        <div class="event-date">${new Date(e.date).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}</div>
      </div>
      <span class="event-badge">${badge}</span>
    </div>`;
  }).join('');
}

function updateNextPrayerHome(){
  if(!state.nextPrayer){ $('next-prayer-name').textContent='Memuat...'; $('next-prayer-time').textContent='--:--'; return; }
  $('next-prayer-name').textContent=state.nextPrayer.name;
  $('next-prayer-time').textContent=state.nextPrayer.time;
}

// ============================================================
// INSPIRASI HARIAN TABS
// ============================================================
function initInspirationTabs(){
  document.querySelectorAll('.insp-tab').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.insp-tab').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.insp-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      const panelId=`insp-${btn.dataset.tab}`;
      const panel=document.getElementById(panelId);
      if(panel) panel.classList.add('active');
    });
  });
}

function renderAyatHarian(){
  const CACHE_KEY='md-ayat-harian'; const today=todayDateStr();
  let cached=null; try{cached=JSON.parse(localStorage.getItem(CACHE_KEY)||'null');}catch{}
  let ayat;
  if(cached && cached.date===today && cached.ayat){ ayat=cached.ayat; }
  else{ ayat=DATA.ayat[getDayOfYear()%DATA.ayat.length]; try{localStorage.setItem(CACHE_KEY,JSON.stringify({date:today,ayat}));}catch{} }
  const a=$('ayat-arabic'); if(a) a.textContent=ayat.arabic;
  const t=$('ayat-terjemahan'); if(t) t.textContent=ayat.terjemahan;
  const s=$('ayat-surat'); if(s) s.textContent=ayat.surat;
  const n=$('ayat-nomor'); if(n) n.textContent=`Ayat ${ayat.ayat}`;
}

function renderHaditsHarian(){
  const CACHE_KEY='md-hadits-harian'; const today=todayDateStr();
  let cached=null; try{cached=JSON.parse(localStorage.getItem(CACHE_KEY)||'null');}catch{}
  let hadits;
  if(cached && cached.date===today && cached.hadits){ hadits=cached.hadits; }
  else{ hadits=DATA.hadiths[(getDayOfYear()+7)%DATA.hadiths.length]; try{localStorage.setItem(CACHE_KEY,JSON.stringify({date:today,hadits}));}catch{} }
  const a=$('hadits-harian-arabic'); if(a) a.textContent=hadits.arabic;
  const t=$('hadits-harian-text'); if(t) t.textContent=hadits.text;
  const s=$('hadits-harian-source'); if(s) s.textContent=hadits.source;
}

function renderDoaHarian(){
  const idx=getDayOfYear()%DATA.doaHarian.length;
  const doa=DATA.doaHarian[idx];
  const w=$('doa-harian-waktu'); if(w) w.textContent=doa.waktu;
  const a=$('doa-harian-arabic'); if(a) a.textContent=doa.arabic;
  const l=$('doa-harian-latin'); if(l) l.textContent=doa.latin;
  const t=$('doa-harian-text'); if(t) t.textContent=doa.terjemahan;
}

// ============================================================
// STREAK CIRCLES
// ============================================================
const STREAK_IDS=['sholat','quran','dzikir'];
const STREAK_CIRCUMFERENCE=2*Math.PI*24;

function getStreakData(){ try{ return JSON.parse(localStorage.getItem('md-streak')||'{}'); }catch{ return {}; } }
function saveStreakData(d){ try{ localStorage.setItem('md-streak',JSON.stringify(d)); }catch{} }

function getStreakInfo(data, id){
  const today=todayDateStr();
  const item=data[id]||{streak:0,lastDate:null};
  if(!item.lastDate) return {streak:0,doneToday:false};
  const last=new Date(item.lastDate), todayD=new Date(today);
  const diff=Math.round((todayD-last)/86400000);
  if(diff===0) return {streak:item.streak,doneToday:true};
  if(diff===1) return {streak:item.streak,doneToday:false};
  return {streak:0,doneToday:false};
}

function markStreakToday(id){
  const today=todayDateStr(); const data=getStreakData();
  const {streak,doneToday}=getStreakInfo(data,id);
  if(doneToday){ showToast('Sudah tercatat hari ini ✓'); renderStreakCircles(); return; }
  const last=data[id]?data[id].lastDate:null;
  let newStreak=streak;
  if(last){
    const diff=Math.round((new Date(today)-new Date(last))/86400000);
    newStreak=diff===1?streak+1:1;
  } else { newStreak=1; }
  data[id]={streak:newStreak,lastDate:today};
  saveStreakData(data);
  renderStreakCircles();
  const labels={sholat:'🕌 Sholat',quran:'📖 Qur\'an',dzikir:'📿 Dzikir'};
  showToast(`${labels[id]}: ${newStreak} hari berturut-turut! 🔥`);
  if(newStreak===7) showToast('🥉 Bronze Streak! 7 hari! MasyaAllah!',3500);
  if(newStreak===30) showToast('🥈 Silver Streak! 30 hari! Luar biasa!',3500);
  if(newStreak===100) showToast('🥇 Gold Streak! 100 hari! Subhanallah!',3500);
}

function renderStreakCircles(){
  const data=getStreakData();
  STREAK_IDS.forEach(id=>{
    const {streak,doneToday}=getStreakInfo(data,id);
    const dEl=$(`streak-days-${id}`); if(dEl) dEl.textContent=`${streak} hari`;
    const btn=$(`sc-btn-${id}`);
    if(btn){ btn.textContent=doneToday?'✓':'+'; btn.classList.toggle('checked',doneToday); }
    // Update SVG progress circle (cap at 30 for display)
    const fill=$(`scf-${id}`);
    if(fill){
      const pct=Math.min(streak/30,1);
      const offset=STREAK_CIRCUMFERENCE*(1-pct);
      fill.style.strokeDashoffset=offset;
    }
  });
}

// ============================================================
// KHATAM
// ============================================================
function getKhatamData(){ try{ return JSON.parse(localStorage.getItem('md-khatam')||'{"juzDone":0,"completedJuz":[]}'); }catch{ return {juzDone:0,completedJuz:[]}; } }
function saveKhatamData(d){ try{ localStorage.setItem('md-khatam',JSON.stringify(d)); }catch{} }

function renderKhatamProgress(){
  const data=getKhatamData();
  const done=data.juzDone||0; const pct=Math.round((done/30)*100);
  const completedJuz=data.completedJuz||[];
  const dEl=$('khatam-juz-done'); if(dEl) dEl.textContent=done;
  const pEl=$('khatam-pct'); if(pEl) pEl.textContent=`${pct}%`;
  const bEl=$('khatam-bar'); if(bEl) bEl.style.width=`${pct}%`;
  const grid=$('khatam-juz-grid'); if(!grid) return;
  grid.innerHTML=Array.from({length:30},(_,i)=>{
    const j=i+1, isDone=completedJuz.includes(j);
    return `<button class="khatam-juz-dot ${isDone?'done':''}" data-juz="${j}" title="Juz ${j}">${j}</button>`;
  }).join('');
  grid.querySelectorAll('.khatam-juz-dot').forEach(dot=>{
    dot.addEventListener('click',()=>{
      const juz=parseInt(dot.dataset.juz); const d=getKhatamData();
      const idx=d.completedJuz.indexOf(juz);
      if(idx===-1){ d.completedJuz.push(juz); showToast(`Juz ${juz} selesai ✓`); }
      else{ d.completedJuz.splice(idx,1); showToast(`Juz ${juz} dibatalkan`); }
      d.juzDone=d.completedJuz.length; saveKhatamData(d); renderKhatamProgress();
      if(d.juzDone===30) showToast("🎉 MasyaAllah! Khatam Al-Qur'an! Semoga berkah!",4000);
    });
  });
}

function khatamAddJuz(){
  const data=getKhatamData(); let next=-1;
  for(let i=1;i<=30;i++){ if(!data.completedJuz.includes(i)){next=i;break;} }
  if(next===-1){showToast('Semua juz sudah selesai! 🎉');return;}
  data.completedJuz.push(next); data.juzDone=data.completedJuz.length;
  saveKhatamData(data); showToast(`Juz ${next} selesai ✓`); renderKhatamProgress();
  if(data.juzDone===30) showToast("🎉 MasyaAllah! Khatam Al-Qur'an!",4000);
}

function khatamReset(){
  if(!confirm('Reset progress khatam? Semua data akan dihapus.')) return;
  saveKhatamData({juzDone:0,completedJuz:[]}); showToast('Progress khatam direset'); renderKhatamProgress();
}

// ============================================================
// PRAYER TIMES
// ============================================================
const PRAYER_NAMES={
  Fajr:{name:'Subuh',arabic:'الفَجْر',icon:'🌅'},
  Dhuhr:{name:'Dzuhur',arabic:'الظُّهْر',icon:'☀️'},
  Asr:{name:'Ashar',arabic:'العَصْر',icon:'🌤️'},
  Maghrib:{name:'Maghrib',arabic:'الْمَغْرِب',icon:'🌆'},
  Isha:{name:'Isya',arabic:'العِشَاء',icon:'🌙'}
};

async function fetchPrayerTimes(){
  $('loading-sholat').classList.remove('hidden');
  $('error-sholat').classList.add('hidden');
  $('sholat-list').classList.add('hidden');
  $('sholat-countdown-section').classList.add('hidden');
  const CACHE_KEY='md-prayer-cache'; const today=todayDateStr();
  try{
    const cached=JSON.parse(localStorage.getItem(CACHE_KEY)||'null');
    if(cached && cached.date===today && cached.timings && cached.hijri){
      state.prayerTimes=cached.timings; state.prayerLocation=cached.location||state.prayerLocation;
      $('hijri-date').textContent=cached.hijriStr;
      if($('kal-hijri-date')) $('kal-hijri-date').textContent=cached.kalHijriDate;
      if($('kal-hijri-month')) $('kal-hijri-month').textContent=cached.kalHijriMonth;
      if($('home-hijri')) $('home-hijri').textContent=cached.hijriStr;
      if($('sholat-location')) $('sholat-location').textContent=`📍 ${state.prayerLocation}`;
      if($('home-location')) $('home-location').textContent=`📍 ${state.prayerLocation}`;
      renderPrayerTimes(); startCountdown();
      $('loading-sholat').classList.add('hidden');
      $('sholat-list').classList.remove('hidden');
      $('sholat-countdown-section').classList.remove('hidden');
      return;
    }
  }catch{}
  try{
    const pos=await getLocation();
    const {latitude,longitude}=pos.coords;
    state.prayerLocation=`${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`;
    const now=new Date();
    const url=`https://api.aladhan.com/v1/timings/${Math.floor(now.getTime()/1000)}?latitude=${latitude}&longitude=${longitude}&method=11`;
    const res=await fetch(url);
    if(!res.ok) throw new Error('API error');
    const data=await res.json();
    if(data.code!==200) throw new Error('Invalid response');
    state.prayerTimes=data.data.timings;
    const hijri=data.data.date.hijri;
    const hijriStr=`${hijri.day} ${hijri.month.en} ${hijri.year} H`;
    const kalHijriDate=`${hijri.day} ${hijri.month.ar}`;
    const kalHijriMonth=`${hijri.month.en} ${hijri.year} H`;
    $('hijri-date').textContent=hijriStr;
    if($('kal-hijri-date')) $('kal-hijri-date').textContent=kalHijriDate;
    if($('kal-hijri-month')) $('kal-hijri-month').textContent=kalHijriMonth;
    if($('home-hijri')) $('home-hijri').textContent=hijriStr;
    // Save cache immediately with coordinates (before geocode, so cache always gets saved)
    try{ localStorage.setItem(CACHE_KEY,JSON.stringify({date:today,timings:state.prayerTimes,hijri:true,hijriStr,kalHijriDate,kalHijriMonth,location:state.prayerLocation})); }catch{}

    // Try to enrich location name (non-blocking, update cache if successful)
    try{
      const geoRes=await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=id`);
      const geoData=await geoRes.json();
      const cityName=geoData.city||geoData.locality||geoData.countryName;
      if(cityName){
        state.prayerLocation=cityName;
        // Update cache with better location name
        try{ localStorage.setItem(CACHE_KEY,JSON.stringify({date:today,timings:state.prayerTimes,hijri:true,hijriStr,kalHijriDate,kalHijriMonth,location:state.prayerLocation})); }catch{}
      }
    }catch{}
    if($('sholat-location')) $('sholat-location').textContent=`📍 ${state.prayerLocation}`;
    if($('home-location')) $('home-location').textContent=`📍 ${state.prayerLocation}`;
    renderPrayerTimes(); startCountdown();
    $('loading-sholat').classList.add('hidden');
    $('sholat-list').classList.remove('hidden');
    $('sholat-countdown-section').classList.remove('hidden');
  }catch(err){
    $('loading-sholat').classList.add('hidden');
    $('error-sholat').classList.remove('hidden');
    $('error-sholat-msg').textContent=err.code===1?'Akses lokasi ditolak. Mohon aktifkan GPS.':'Gagal mengambil waktu sholat. Periksa koneksi internet.';
  }
}

function getLocation(){ return new Promise((res,rej)=>{ if(!navigator.geolocation) rej(new Error('Not supported')); navigator.geolocation.getCurrentPosition(res,rej,{timeout:10000,maximumAge:300000}); }); }

function renderPrayerTimes(){
  if(!state.prayerTimes) return;
  const now=new Date(); const prayerKeys=['Fajr','Dhuhr','Asr','Maghrib','Isha'];
  const nowMin=now.getHours()*60+now.getMinutes();
  const prayers=prayerKeys.map(k=>{ const [h,m]=state.prayerTimes[k].split(':').map(Number); return {key:k,...PRAYER_NAMES[k],minutes:h*60+m,time:`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`}; });
  let activeIdx=-1, nextIdx=0;
  for(let i=0;i<prayers.length;i++){ if(nowMin>=prayers[i].minutes) activeIdx=i; }
  if(activeIdx===prayers.length-1) nextIdx=0; else if(activeIdx===-1) nextIdx=0; else nextIdx=activeIdx+1;
  state.nextPrayer={name:prayers[nextIdx].name,time:prayers[nextIdx].time,minutes:prayers[nextIdx].minutes};
  updateNextPrayerHome(); $('sholat-next-name').textContent=prayers[nextIdx].name;
  updatePrayerProgressBar(prayers);
  const list=$('sholat-list');
  list.innerHTML=prayers.map((p,i)=>{
    const isActive=i===activeIdx, isNext=i===nextIdx&&i!==activeIdx;
    const badge=isActive?'<span class="sholat-badge badge-active">Waktu Ini</span>':isNext?'<span class="sholat-badge badge-next">Berikutnya</span>':'';
    return `<div class="sholat-item ${isActive?'active-prayer':''} ${isNext?'next-prayer':''}">
      <span class="sholat-icon">${p.icon}</span>
      <div class="sholat-info"><div class="sholat-name">${p.name} ${badge}</div><div class="sholat-arabic">${p.arabic}</div></div>
      <div class="sholat-time">${p.time}</div>
    </div>`;
  }).join('');
}

function updatePrayerProgressBar(prayers){
  const npBar=$('np-progress-bar'); const npLabel=$('np-progress-label');
  if(!npBar || !state.nextPrayer || !prayers) return;
  // Find prev prayer time
  const now=new Date(); const nowMin=now.getHours()*60+now.getMinutes();
  const nextMin=state.nextPrayer.minutes;
  const prevMinutes=prayers.map(p=>p.minutes).filter(m=>m<nextMin);
  const prevMin=prevMinutes.length?Math.max(...prevMinutes):0;
  const total=nextMin-prevMin; const elapsed=nowMin-prevMin;
  const pct=total>0?Math.min(100,Math.max(0,(elapsed/total)*100)):0;
  npBar.style.width=`${pct}%`;
  const remain=nextMin-nowMin;
  if(remain>0) npLabel.textContent=`${remain} menit lagi`; else npLabel.textContent='Segera masuk';
}

function startCountdown(){
  if(state.countdownInterval) clearInterval(state.countdownInterval);
  function update(){
    if(!state.nextPrayer) return;
    const now=new Date(), nowSec=now.getHours()*3600+now.getMinutes()*60+now.getSeconds();
    const targetSec=state.nextPrayer.minutes*60;
    let diff=targetSec-nowSec; if(diff<0) diff+=86400;
    const cd=formatCountdown(diff);
    const c1=$('home-countdown'); if(c1) c1.textContent=cd;
    const c2=$('sholat-countdown'); if(c2) c2.textContent=cd;
  }
  update(); state.countdownInterval=setInterval(update,1000);
}

// ============================================================
// QIBLA
// ============================================================
const KAABA={lat:21.4225,lng:39.8262};
function calcQiblaAngle(lat,lng){
  const dLng=(KAABA.lng-lng)*Math.PI/180, lat1=lat*Math.PI/180, lat2=KAABA.lat*Math.PI/180;
  const y=Math.sin(dLng)*Math.cos(lat2), x=Math.cos(lat1)*Math.sin(lat2)-Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLng);
  return (Math.atan2(y,x)*180/Math.PI+360)%360;
}
function calcDistance(lat1,lon1,lat2,lon2){
  const R=6371, dLat=(lat2-lat1)*Math.PI/180, dLon=(lon2-lon1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return Math.round(R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)));
}
function initKiblat(){ if(state.qiblaAngle===0) return; }
async function startKiblat(){
  $('kiblat-permission').classList.add('hidden'); $('kiblat-error').classList.add('hidden');
  try{
    const pos=await getLocation(); const {latitude,longitude}=pos.coords;
    state.qiblaAngle=calcQiblaAngle(latitude,longitude);
    $('kiblat-degree').textContent=`${Math.round(state.qiblaAngle)}°`;
    const dist=calcDistance(latitude,longitude,KAABA.lat,KAABA.lng);
    $('kiblat-distance').textContent=`${dist.toLocaleString()} km`;
    $('kiblat-main').classList.remove('hidden');
    if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){
      try{ const p=await DeviceOrientationEvent.requestPermission(); if(p==='granted'){window.addEventListener('deviceorientationabsolute',handleOrientation,true);window.addEventListener('deviceorientation',handleOrientation,true);}else showCompassFallback(); }catch{ showCompassFallback(); }
    }else if(window.DeviceOrientationEvent){ window.addEventListener('deviceorientationabsolute',handleOrientation,true);window.addEventListener('deviceorientation',handleOrientation,true); }
    else showCompassFallback();
  }catch(err){ $('kiblat-main').classList.add('hidden');$('kiblat-error').classList.remove('hidden'); $('kiblat-error-msg').textContent=err.code===1?'Akses lokasi ditolak.':'Gagal mendapatkan lokasi.'; }
}
function handleOrientation(e){
  let heading=e.webkitCompassHeading!==undefined?e.webkitCompassHeading:(e.absolute?360-e.alpha:360-e.alpha);
  state.compassHeading=heading;
  const cf=$('compass-face'); if(cf) cf.style.transform=`rotate(${-heading}deg)`;
  const kaw=$('kiblat-arrow-wrap'); if(kaw){const rq=(state.qiblaAngle-heading+360)%360;kaw.style.transform=`rotate(${rq}deg)`;}
}
function showCompassFallback(){ $('kiblat-hint').textContent=`Sensor kompas tidak tersedia. Arah kiblat: ${Math.round(state.qiblaAngle)}° dari Utara.`; }

// ============================================================
// TASBIH
// ============================================================
const TASBIH_CIRC=2*Math.PI*88;
function initTasbih(){
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.style.cssText='position:absolute;width:0;height:0';
  svg.innerHTML=`<defs><linearGradient id="tasbih-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1E7F4B"/><stop offset="100%" style="stop-color:#C9A84C"/></linearGradient></defs>`;
  document.body.prepend(svg);
  updateTasbihDisplay(); renderTasbihHistory();
}
function updateTasbihDisplay(){
  const {type,count,rounds,total}=state.tasbih; const dz=DATA.tasbihDzikir[type]; const max=dz.max;
  $('tasbih-count').textContent=count; $('tasbih-target').textContent=`/ ${max}`;
  $('tasbih-arabic').textContent=dz.arabic; $('tasbih-translation').textContent=dz.translation;
  $('tasbih-rounds').textContent=rounds; $('tasbih-total').textContent=total;
  const prog=count/max, offset=TASBIH_CIRC*(1-prog);
  const c=$('tasbih-progress-circle'); if(c){c.style.strokeDasharray=TASBIH_CIRC;c.style.strokeDashoffset=offset;}
}
function tasbihClick(){
  const max=DATA.tasbihDzikir[state.tasbih.type].max; state.tasbih.count++; state.tasbih.total++;
  if(state.tasbih.count>=max){ state.tasbih.rounds++; state.tasbih.count=0; vibrate([80,30,80]); showToast(`Putaran ${state.tasbih.rounds} selesai! 🎉`); }else vibrate([20]);
  saveTasbih(); updateTasbihDisplay();
}
function resetTasbih(){ state.tasbih.count=0;state.tasbih.rounds=0;state.tasbih.total=0;saveTasbih();updateTasbihDisplay();showToast('Tasbih direset'); }
function saveTasbihHistory(){
  const dz=DATA.tasbihDzikir[state.tasbih.type];
  const hist=JSON.parse(localStorage.getItem('md-tasbih-history')||'[]');
  hist.unshift({name:dz.arabic.substring(0,20),count:state.tasbih.total,time:new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}),date:new Date().toLocaleDateString('id-ID')});
  localStorage.setItem('md-tasbih-history',JSON.stringify(hist.slice(0,10))); renderTasbihHistory(); showToast('Dzikir tersimpan ✓');
}
function renderTasbihHistory(){
  const hist=JSON.parse(localStorage.getItem('md-tasbih-history')||'[]'); const c=$('tasbih-history'); if(!c) return;
  if(!hist.length){c.innerHTML='';return;}
  c.innerHTML=`<div class="history-title">Riwayat Dzikir</div>`+hist.slice(0,5).map(h=>`<div class="history-item"><span class="history-name">${h.name}</span><span class="history-count">${h.count}x</span><span class="history-time">${h.time}</span></div>`).join('');
}
function saveTasbih(){ localStorage.setItem('md-tasbih-count',state.tasbih.count);localStorage.setItem('md-tasbih-rounds',state.tasbih.rounds);localStorage.setItem('md-tasbih-total',state.tasbih.total); }
function switchDzikirType(type){ state.tasbih.type=type;state.tasbih.count=0;state.tasbih.rounds=0;state.tasbih.total=0;saveTasbih();updateTasbihDisplay(); }

// ============================================================
// DZIKIR
// ============================================================
function renderDzikir(){
  const tab=state.dzikirTab; const items=DATA.dzikir[tab]; const savedKey=`md-dzikir-${tab}`;
  const checked=JSON.parse(localStorage.getItem(savedKey)||'[]');
  const list=$('dzikir-list');
  list.innerHTML=items.map(item=>{
    const isC=checked.includes(item.id);
    return `<div class="dzikir-item ${isC?'checked':''}" data-id="${item.id}" role="checkbox" aria-checked="${isC}">
      <div class="dzikir-header"><div class="dzikir-check">✓</div><div class="dzikir-title-wrap"><span class="dzikir-name">${item.name}</span><span class="dzikir-count-badge">${item.count}x</span></div></div>
      <div class="dzikir-arabic-text">${item.arabic}</div>
      <div class="dzikir-translation">${item.translation}</div>
    </div>`;
  }).join('');
  updateDzikirProgress();
  list.querySelectorAll('.dzikir-item').forEach(el=>el.addEventListener('click',()=>toggleDzikir(el.dataset.id)));
}
function toggleDzikir(id){
  const key=`md-dzikir-${state.dzikirTab}`; const checked=JSON.parse(localStorage.getItem(key)||'[]'); const idx=checked.indexOf(id);
  if(idx===-1){checked.push(id);vibrate([20]);}else checked.splice(idx,1);
  localStorage.setItem(key,JSON.stringify(checked)); renderDzikir();
}
function updateDzikirProgress(){
  const tab=state.dzikirTab; const total=DATA.dzikir[tab].length;
  const checked=JSON.parse(localStorage.getItem(`md-dzikir-${tab}`)||'[]'); const done=checked.length;
  $('dzikir-progress-fill').style.width=`${total>0?(done/total*100):0}%`;
  $('dzikir-progress-text').textContent=`${done}/${total}`;
  if(done===total&&total>0) showToast(`Dzikir ${tab} selesai! MasyaAllah 🎉`);
}
function resetAllDzikir(){ localStorage.removeItem(`md-dzikir-${state.dzikirTab}`); renderDzikir(); showToast('Dzikir direset'); }

// ============================================================
// DOA HARIAN PAGE
// ============================================================
function renderDoa(){
  const categories=['Semua',...new Set(DATA.doaHarian.map(d=>d.kategori))];
  const tabsEl=$('doa-category-tabs');
  tabsEl.innerHTML=categories.map(c=>`<button class="doa-cat-btn ${c===state.doaCategory?'active':''}" data-cat="${c}">${c}</button>`).join('');
  tabsEl.querySelectorAll('.doa-cat-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{ state.doaCategory=btn.dataset.cat; renderDoa(); });
  });
  const search=state.doaSearch.toLowerCase();
  const filtered=DATA.doaHarian.filter(d=>{
    const catOk=state.doaCategory==='Semua'||d.kategori===state.doaCategory;
    const searchOk=!search||d.name.toLowerCase().includes(search)||d.terjemahan.toLowerCase().includes(search);
    return catOk&&searchOk;
  });
  const list=$('doa-list');
  list.innerHTML=filtered.map(d=>`
    <div class="doa-item" data-id="${d.id}">
      <div class="doa-item-header">
        <span class="doa-item-title">${d.name}</span>
        <span class="doa-item-waktu">${d.waktu}</span>
        <span class="doa-item-chevron">▾</span>
      </div>
      <div class="doa-item-body">
        <p class="doa-arabic-text">${d.arabic}</p>
        <p class="doa-latin-text">${d.latin}</p>
        <p class="doa-terjemahan-text">${d.terjemahan}</p>
      </div>
    </div>`).join('');
  list.querySelectorAll('.doa-item').forEach(el=>{
    el.addEventListener('click',()=>el.classList.toggle('expanded'));
  });
}

// ============================================================
// KALENDER
// ============================================================
function renderKalender(){
  const today=new Date();
  if($('kal-masehi-date')) $('kal-masehi-date').textContent=today.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  today.setHours(0,0,0,0);
  const container=$('kal-events-list');
  container.innerHTML=DATA.islamicEvents.map(e=>{
    const d=new Date(e.date), isPast=d<today;
    const diff=Math.ceil((d-today)/86400000);
    const countdown=diff===0?'Hari Ini':diff>0?`${diff} hari lagi`:'Sudah berlalu';
    return `<div class="kal-event-item ${isPast?'past':'upcoming'}">
      <span class="kal-event-icon">${e.icon}</span>
      <div class="kal-event-info">
        <div class="kal-event-name">${e.name}</div>
        <div class="kal-event-masehi">${d.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}</div>
        <div class="kal-event-hijri">${e.hijri}</div>
      </div>
      ${!isPast?`<span class="kal-countdown">${countdown}</span>`:''}
    </div>`;
  }).join('');
}

// ============================================================
// HADIS
// ============================================================
function renderHadis(idx){
  if(idx===undefined) idx=state.currentHadisIndex;
  state.currentHadisIndex=Math.max(0,Math.min(idx,DATA.hadiths.length-1));
  const h=DATA.hadiths[state.currentHadisIndex];
  $('hadis-num').textContent=`#${h.id}`; $('hadis-arabic').textContent=h.arabic;
  $('hadis-text').textContent=h.text; $('hadis-source-full').textContent=h.source;
  const bookmarks=JSON.parse(localStorage.getItem('md-hadis-bookmarks')||'[]');
  const isBm=bookmarks.some(b=>b.id===h.id);
  $('hadis-bookmark').classList.toggle('bookmarked',isBm); $('hadis-bookmark').textContent=isBm?'⭐':'🔖';
  renderHadisBookmarks();
}
function toggleHadisBookmark(){
  const h=DATA.hadiths[state.currentHadisIndex];
  const bms=JSON.parse(localStorage.getItem('md-hadis-bookmarks')||'[]'); const idx=bms.findIndex(b=>b.id===h.id);
  if(idx===-1){bms.push(h);showToast('Hadis disimpan ⭐');}else{bms.splice(idx,1);showToast('Bookmark dihapus');}
  localStorage.setItem('md-hadis-bookmarks',JSON.stringify(bms)); renderHadis(state.currentHadisIndex);
}
function renderHadisBookmarks(){
  const bms=JSON.parse(localStorage.getItem('md-hadis-bookmarks')||'[]');
  const c=$('hadis-bookmarks-list'); const sec=$('hadis-bookmarks-section');
  if(!bms.length){sec.style.display='none';return;}
  sec.style.display='block';
  c.innerHTML=bms.map(h=>`<div class="hadis-bookmark-item" data-id="${h.id}" role="button"><div class="hbi-text">${h.text}</div><div class="hbi-source">${h.source}</div></div>`).join('');
  c.querySelectorAll('.hadis-bookmark-item').forEach(el=>{
    el.addEventListener('click',()=>{ const idx=DATA.hadiths.findIndex(h=>h.id===parseInt(el.dataset.id)); if(idx!==-1) renderHadis(idx); });
  });
}

// ============================================================
// ASMAUL HUSNA
// ============================================================
function renderAsmaul(){
  const memorized=JSON.parse(localStorage.getItem('md-asmaul-memorized')||'[]');
  const list=$('asmaul-list');
  list.innerHTML=DATA.asmaul.map(a=>{
    const isMem=memorized.includes(a.num);
    return `<div class="asmaul-item ${isMem?'memorized':''}" data-num="${a.num}">
      <span class="asmaul-num">${a.num}</span>
      <span class="asmaul-check">✓</span>
      <span class="asmaul-arabic">${a.arabic}</span>
      <span class="asmaul-latin">${a.latin}</span>
      <span class="asmaul-arti">${a.arti}</span>
    </div>`;
  }).join('');
  list.querySelectorAll('.asmaul-item').forEach(el=>{
    el.addEventListener('click',()=>{
      const num=parseInt(el.dataset.num);
      const mem=JSON.parse(localStorage.getItem('md-asmaul-memorized')||'[]');
      const idx=mem.indexOf(num);
      if(idx===-1){mem.push(num);showToast(`${DATA.asmaul[num-1].latin} — dihafal ✓`);}else{mem.splice(idx,1);}
      localStorage.setItem('md-asmaul-memorized',JSON.stringify(mem)); renderAsmaul();
    });
  });
  updateAsmaulProgress(memorized);
}
function updateAsmaulProgress(memorized){
  const pct=(memorized.length/99)*100;
  const bar=$('asmaul-progress-bar'); if(bar) bar.style.width=`${pct}%`;
  const txt=$('asmaul-progress-text'); if(txt) txt.textContent=`${memorized.length} / 99 dihafal`;
}

// ============================================================
// STATISTIK
// ============================================================
function renderStatistik(){
  const wrap=$('statistik-wrap'); if(!wrap) return;
  const data=getStreakData();
  const khatam=getKhatamData();
  const streakItems=[
    {id:'sholat',label:'🕌 Sholat'},
    {id:'quran',label:'📖 Qur\'an'},
    {id:'dzikir',label:'📿 Dzikir'}
  ];
  function getBadge(streak){
    if(streak>=365) return '<span class="streak-badge badge-diamond">💎 Diamond</span>';
    if(streak>=100) return '<span class="streak-badge badge-gold">🥇 Gold</span>';
    if(streak>=30) return '<span class="streak-badge badge-silver">🥈 Silver</span>';
    if(streak>=7) return '<span class="streak-badge badge-bronze">🥉 Bronze</span>';
    return '';
  }
  wrap.innerHTML=`
    <div class="stat-card">
      <div class="stat-card-title">🔥 Streak Ibadah</div>
      ${streakItems.map(it=>{
        const {streak,doneToday}=getStreakInfo(data,it.id);
        return `<div class="stat-row">
          <span class="stat-row-label">${it.label}</span>
          <span class="stat-row-value">${streak} hari ${getBadge(streak)} ${doneToday?'✓':''}</span>
        </div>`;
      }).join('')}
    </div>
    <div class="stat-card">
      <div class="stat-card-title">📗 Progress Khatam</div>
      <div class="stat-row"><span class="stat-row-label">Juz Selesai</span><span class="stat-row-value">${khatam.juzDone} / 30 juz</span></div>
      <div class="stat-row"><span class="stat-row-label">Persentase</span><span class="stat-row-value">${Math.round((khatam.juzDone/30)*100)}%</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-card-title">📿 Asmaul Husna</div>
      <div class="stat-row">
        <span class="stat-row-label">Dihafal</span>
        <span class="stat-row-value">${JSON.parse(localStorage.getItem('md-asmaul-memorized')||'[]').length} / 99</span>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-card-title">ℹ️ Lencana Streak</div>
      <div class="stat-row"><span class="stat-row-label">🥉 Bronze</span><span class="stat-row-label">7 hari berturut-turut</span></div>
      <div class="stat-row"><span class="stat-row-label">🥈 Silver</span><span class="stat-row-label">30 hari berturut-turut</span></div>
      <div class="stat-row"><span class="stat-row-label">🥇 Gold</span><span class="stat-row-label">100 hari berturut-turut</span></div>
      <div class="stat-row"><span class="stat-row-label">💎 Diamond</span><span class="stat-row-label">365 hari berturut-turut</span></div>
    </div>`;
}

// ============================================================
// PENGATURAN
// ============================================================
function initPengaturan(){
  const nameInput=$('user-name-input');
  if(nameInput){
    nameInput.value=localStorage.getItem('md-user-name')||'';
    nameInput.addEventListener('input',()=>{
      localStorage.setItem('md-user-name',nameInput.value.trim()||'Muslim');
      updateGreeting();
    });
  }
  const themeToggle=$('settings-theme-toggle');
  if(themeToggle){
    themeToggle.classList.toggle('on',state.theme==='dark');
    themeToggle.addEventListener('click',()=>{ toggleTheme(); themeToggle.classList.toggle('on',state.theme==='dark'); });
  }
  const resetKhatam=$('settings-reset-khatam');
  if(resetKhatam) resetKhatam.addEventListener('click',()=>{ if(confirm('Reset progress khatam?')){saveKhatamData({juzDone:0,completedJuz:[]});showToast('Progress khatam direset');renderKhatamProgress();} });
  const resetStreak=$('settings-reset-streak');
  if(resetStreak) resetStreak.addEventListener('click',()=>{ if(confirm('Reset semua streak ibadah?')){saveStreakData({});renderStreakCircles();showToast('Streak direset');} });
  const resetAll=$('settings-reset-all');
  if(resetAll) resetAll.addEventListener('click',()=>{ if(confirm('Hapus SEMUA data aplikasi? Tindakan ini tidak bisa dibatalkan!')){localStorage.clear();showToast('Semua data dihapus');setTimeout(()=>location.reload(),1000);} });
}

// ============================================================
// PWA
// ============================================================
function initPWA(){
  if('serviceWorker' in navigator){ window.addEventListener('load',()=>{ navigator.serviceWorker.register('./service-worker.js').catch(()=>{}); }); }
  window.addEventListener('beforeinstallprompt',e=>{ e.preventDefault();state.deferredInstall=e;$('install-btn').classList.remove('hidden'); });
  window.addEventListener('appinstalled',()=>{ $('install-btn').classList.add('hidden');showToast('Muslim Daily berhasil diinstall! 🎉'); });
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function initEventListeners(){
  $('dark-mode-toggle').addEventListener('click',toggleTheme);
  $('install-btn').addEventListener('click',async()=>{ if(state.deferredInstall){ state.deferredInstall.prompt(); const{outcome}=await state.deferredInstall.userChoice; if(outcome==='accepted') state.deferredInstall=null; } });
  document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>navigateTo(btn.dataset.page)));
  document.querySelectorAll('.quick-nav-btn').forEach(btn=>btn.addEventListener('click',()=>navigateTo(btn.dataset.page)));
  document.querySelectorAll('.text-btn').forEach(btn=>btn.addEventListener('click',()=>navigateTo(btn.dataset.page)));
  document.querySelectorAll('[data-page]').forEach(btn=>{ if(btn.classList.contains('quran-back-btn')||btn.classList.contains('settings-back-btn')) btn.addEventListener('click',()=>navigateTo(btn.dataset.page||'home')); });

  $('retry-sholat').addEventListener('click',fetchPrayerTimes);
  $('start-kiblat').addEventListener('click',startKiblat);
  $('retry-kiblat').addEventListener('click',startKiblat);

  document.querySelectorAll('.dzikir-chip').forEach(chip=>{
    chip.addEventListener('click',()=>{ document.querySelectorAll('.dzikir-chip').forEach(c=>c.classList.remove('active')); chip.classList.add('active'); switchDzikirType(chip.dataset.dzikir); });
  });
  $('tasbih-btn').addEventListener('click',tasbihClick);
  $('tasbih-reset').addEventListener('click',resetTasbih);
  $('tasbih-save').addEventListener('click',saveTasbihHistory);
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{ document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); state.dzikirTab=btn.dataset.tab; renderDzikir(); });
  });
  $('dzikir-reset-all').addEventListener('click',resetAllDzikir);
  $('hadis-prev').addEventListener('click',()=>renderHadis(state.currentHadisIndex-1));
  $('hadis-next').addEventListener('click',()=>renderHadis(state.currentHadisIndex+1));
  $('hadis-bookmark').addEventListener('click',toggleHadisBookmark);
  $('khatam-add').addEventListener('click',khatamAddJuz);
  $('khatam-reset').addEventListener('click',khatamReset);

  // Streak buttons
  STREAK_IDS.forEach(id=>{
    const btn=$(`sc-btn-${id}`); if(btn) btn.addEventListener('click',()=>markStreakToday(id));
  });

  // Ayat & Hadits bookmark/share
  const ayatBm=$('ayat-bookmark-btn');
  if(ayatBm) ayatBm.addEventListener('click',()=>showToast('Ayat disimpan ⭐'));
  const ayatShare=$('ayat-share-btn');
  if(ayatShare) ayatShare.addEventListener('click',()=>{ try{ navigator.share&&navigator.share({text:$('ayat-terjemahan').textContent+'\n'+$('ayat-surat').textContent}); }catch{showToast('Salin teks untuk berbagi');} });
  const hadBm=$('hadits-bookmark-btn');
  if(hadBm) hadBm.addEventListener('click',()=>showToast('Hadits disimpan ⭐'));

  // Doa search
  const doaSearch=$('doa-search');
  if(doaSearch) doaSearch.addEventListener('input',()=>{ state.doaSearch=doaSearch.value; renderDoa(); });

  // Hash nav
  function handleHash(){ const hash=window.location.hash.replace('#',''); if(hash&&$('page-'+hash)) navigateTo(hash); }
  window.addEventListener('hashchange',handleHash); handleHash();
}

// ============================================================
// INIT
// ============================================================
function init(){
  initTheme(); initPWA();
  setTimeout(()=>{
    const splash=$('splash-screen');
    splash.classList.add('fade-out');
    setTimeout(()=>{
      splash.style.display='none';
      $('app').classList.remove('hidden');
      initEventListeners();
      initInspirationTabs();
      initHome();
      initTasbih();
      initPengaturan();
      const dayIdx=getDayOfYear()%DATA.hadiths.length;
      state.currentHadisIndex=dayIdx;
      // Fetch prayer times on startup so home countdown works immediately
      fetchPrayerTimes();
    },500);
  },1800);
}

document.addEventListener('DOMContentLoaded',init);
