let cars = [
  {
    name: "Honda Amaze 1.2 VX i-VTEC",
    make: "Honda",
    year: 2017,
    mileage: "23.4 kmpl",
    price: 505000,
    kilometer: 87150,
    color: "Grey"
  },
  {
    name: "Maruti Suzuki Swift DZire VDI",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "21.14 kmpl",
    price: 450000,
    kilometer: 75000,
    color: "White"
  },
  {
    name: "Hyundai i10 Magna 1.2 Kappa2",
    make: "Hyundai",
    year: 2011,
    mileage: "17.7 kmpl",
    price: 220000,
    kilometer: 67000,
    color: "Maroon"
  },
  {
    name: "Toyota Glanza G",
    make: "Toyota",
    year: 2019,
    mileage: "23.0 kmpl",
    price: 799000,
    kilometer: 37500,
    color: "Red"
  },
  {
    name: "Toyota Innova 2.4 VX 7 STR [2016-2020]",
    make: "Toyota",
    year: 2018,
    mileage: "16.1 kmpl",
    price: 1950000,
    kilometer: 69000,
    color: "Grey"
  },
  {
    name: "Maruti Suzuki Ciaz ZXi",
    make: "Maruti Suzuki",
    year: 2017,
    mileage: "20.14 kmpl",
    price: 675000,
    kilometer: 73315,
    color: "Grey"
  },
  {
    name: "Mercedes-Benz CLA 200 Petrol Sport",
    make: "Mercedes-Benz",
    year: 2015,
    mileage: "17.3 km/kg",
    price: 1898999,
    kilometer: 47000,
    color: "White"
  },
  {
    name: "BMW X1 xDrive20d M Sport",
    make: "BMW",
    year: 2017,
    mileage: "16.1 kmpl",
    price: 2650000,
    kilometer: 75000,
    color: "White"
  },
  {
    name: "Skoda Octavia 1.8 TSI Style Plus AT [2017]",
    make: "Skoda",
    year: 2017,
    mileage: "23.59 kmpl",
    price: 1390000,
    kilometer: 56000,
    color: "White"
  },
  {
    name: "Nissan Terrano XL (D)",
    make: "Nissan",
    year: 2015,
    mileage: "20.0 kmpl",
    price: 575000,
    kilometer: 85000,
    color: "White"
  },
  {
    name: "Hyundai Elite i20 Sportz 1.2",
    make: "Hyundai",
    year: 2017,
    mileage: "19.01 kmpl",
    price: 591000,
    kilometer: 20281,
    color: "Red"
  },
  {
    name: "Renault Kwid 1.0 RXT [2016-2019]",
    make: "Renault",
    year: 2018,
    mileage: "17.3 kmpl",
    price: 459999,
    kilometer: 22541,
    color: "Grey"
  },
  {
    name: "Maruti Suzuki Ciaz Alpha Hybrid 1.5 AT [2018-2020]",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "19.3 kmpl",
    price: 1075000,
    kilometer: 30672,
    color: "Blue"
  },
  {
    name: "Tata Harrier XZ [2019-2020]",
    make: "Tata",
    year: 2019,
    mileage: null,
    price: 1695000,
    kilometer: 20856,
    color: "Orange"
  },
  {
    name: "Volkswagen Polo GT TSI",
    make: "Volkswagen",
    year: 2017,
    mileage: "18.9 kmpl",
    price: 944999,
    kilometer: 41417,
    color: "Grey"
  },
  {
    name: "Maruti Suzuki Celerio ZXi AMT [2019-2020]",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "18.15 kmpl",
    price: 569000,
    kilometer: 11471,
    color: "Red"
  },
  {
    name: "Maruti Suzuki Alto 800 LXi (O)",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "24.52 kmpl",
    price: 449000,
    kilometer: 3583,
    color: "Grey"
  },
  {
    name: "Maruti Suzuki Baleno Alpha Automatic",
    make: "Maruti Suzuki",
    year: 2018,
    mileage: "23.0 kmpl",
    price: 894999,
    kilometer: 21365,
    color: "Grey"
  },
  {
    name: "Maruti Suzuki Wagon R ZXi 1.2 AMT",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "19.7 kmpl",
    price: 699000,
    kilometer: 30777,
    color: "White"
  },
  {
    name: "Hyundai Creta 1.6 E Petrol",
    make: "Hyundai",
    year: 2016,
    mileage: "22.54 kmpl",
    price: 740000,
    kilometer: 60125,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki S-Presso VXi AMT",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "21.0 kmpl",
    price: 470000,
    kilometer: 2169,
    color: "Grey"
  },
  {
    name: "Volkswagen Vento Comfortline Petrol AT",
    make: "Volkswagen",
    year: 2015,
    mileage: "25.5 kmpl",
    price: 765000,
    kilometer: 60240,
    color: "Brown"
  },
  {
    name: "Hyundai Santro Sportz AMT [2018-2020]",
    make: "Hyundai",
    year: 2018,
    mileage: "26.59 kmpl",
    price: 589000,
    kilometer: 13772,
    color: "White"
  },
  {
    name:

 "Hyundai Venue SX 1.0 (O) Petrol [2019-2020]",
    make: "Hyundai",
    year: 2019,
    mileage: "21.5 kmpl",
    price: 999000,
    kilometer: 27464,
    color: "Blue"
  },
  {
    name: "Maruti Suzuki Alto LXi CNG",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "20.3 kmpl",
    price: 370000,
    kilometer: 47377,
    color: "Grey"
  },
  {
    name: "Maruti Suzuki Ritz Zxi BS-IV",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "21.4 kmpl",
    price: 325000,
    kilometer: 23086,
    color: "Grey"
  },
  {
    name: "Hyundai Creta 1.6 SX Plus Petrol",
    make: "Hyundai",
    year: 2019,
    mileage: "24.7 kmpl",
    price: 1175000,
    kilometer: 36313,
    color: "Grey"
  },
  {
    name: "Honda Brio V MT",
    make: "Honda",
    year: 2014,
    mileage: "18.2 kmpl",
    price: 351000,
    kilometer: 39276,
    color: "Red"
  },
  {
    name: "Hyundai Elite i20 Asta 1.2",
    make: "Hyundai",
    year: 2015,
    mileage: "18.9 kmpl",
    price: 551000,
    kilometer: 47752,
    color: "White"
  },
  {
    name: "Honda WR-V VX MT Petrol",
    make: "Honda",
    year: 2018,
    mileage: "16.8 kmpl",
    price: 819999,
    kilometer: 27963,
    color: "White"
  },
  {
    name: "Hyundai Venue SX 1.0 Turbo iMT",
    make: "Hyundai",
    year: 2020,
    mileage: "24.3 kmpl",
    price: 990000,
    kilometer: 24013,
    color: "Blue"
  },
  {
    name: "Hyundai Creta 1.6 SX Plus AT",
    make: "Hyundai",
    year: 2016,
    mileage: null,
    price: 925000,
    kilometer: 66000,
    color: "Black"
  },
  {
    name: "Ford Ecosport Titanium+ 1.0L EcoBoost",
    make: "Ford",
    year: 2015,
    mileage: "14.0 kmpl",
    price: 535000,
    kilometer: 28000,
    color: "Silver"
  },
  {
    name: "Honda CR-V 2.4 AT",
    make: "Honda",
    year: 2013,
    mileage: "18.6 kmpl",
    price: 860000,
    kilometer: 67000,
    color: "Brown"
  },
  {
    name: "Hyundai Santro GL (CNG)",
    make: "Hyundai",
    year: 2009,
    mileage: "24.3 kmpl",
    price: 145000,
    kilometer: 72000,
    color: "Silver"
  },
  {
    name: "Tata Tiago Revotron XE [2016-2019]",
    make: "Tata",
    year: 2018,
    mileage: "33.44 km/kg",
    price: 409000,
    kilometer: 27069,
    color: "White"
  },
  {
    name: "Tata Tigor Revotorq XT",
    make: "Tata",
    year: 2018,
    mileage: "23.95 kmpl",
    price: 490000,
    kilometer: 43000,
    color: "White"
  },
  {
    name: "Toyota Innova 2.4 G 8 STR [2016-2017]",
    make: "Toyota",
    year: 2019,
    mileage: "17.0 kmpl",
    price: 1900000,
    kilometer: 71000,
    color: "Bronze"
  },
  {
    name: "Mercedes-Benz GLC 220 d Progressive",
    make: "Mercedes-Benz",
    year: 2017,
    mileage: "20.63 kmpl",
    price: 3850000,
    kilometer: 45600,
    color: "Black"
  },
  {
    name: "Hyundai Creta SX 1.6 CRDi (O)",
    make: "Hyundai",
    year: 2018,
    mileage: "13.93 kmpl",
    price: 1125000,
    kilometer: 60000,
    color: "White"
  },
  {
    name: "Mercedes-Benz M-Class ML 250 CDI",
    make: "Mercedes-Benz",
    year: 2014,
    mileage: "16.1 kmpl",
    price: 2300000,
    kilometer: 105101,
    color: "White"
  },
  {
    name: "Toyota Corolla Altis VL AT Petrol",
    make: "Toyota",
    year: 2016,
    mileage: "16.0 kmpl",
    price: 1095000,
    kilometer: 45000,
    color: "Black"
  },
  {
    name: "Audi A4 2.0 TDI (177bhp) Premium Plus",
    make: "Audi",
    year: 2013,
    mileage: "17.8 kmpl",
    price: 1575000,
    kilometer: 66000,
    color: "White"
  },
  {
    name: "Mercedes-Benz SLK-Class SLK 200 K",
    make: "Mercedes-Benz",
    year: 2010,
    mileage: "16.8 kmpl",
    price: 2400000,
    kilometer: 34105,
    color: "Grey"
  },
  {
    name: "Hyundai Elite i20 Asta 1.2",
    make: "Hyundai",
    year: 2015,
    mileage: "18.5 kmpl",
    price: 525000,
    kilometer: 68397,
    color: "Gold"
  },
  {
    name: "Mahindra Thar CRDe 4x4 AC",
    make: "Mahindra",
    year: 2015,
    mileage: "24.3 kmpl",
    price: 625000,
    kilometer: 65000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Baleno Delta 1.2",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "23.95 kmpl",
    price: 605000,
    kilometer: 27469,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Celerio VXi AMT",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "12.55 kmpl",
    price: 412000,
    kilometer: 41058,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Ciaz VDi SHVS",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "12.99 kmpl",
    price: 625000,
    kilometer: 51330,
    color: "Brown"
  },
  {
    name: "Maruti Suzuki Ciaz VXi",
    make: "Maruti Suzuki",
    year: 2015,
    mileage: "14.8 kmpl",
    price: 511000,
    kilometer: 45969,
    color: "Silver"
  },
  {
    name: "Hyundai Creta SX Plus 1.6 AT CRDI",
    make: "Hyundai",
    year: 2017,
    mileage: "24.7 kmpl",
    price: 1150000,
    kilometer: 66602,
    color: "Grey"
  },
  {
    name: "Hyundai Creta SX Plus 1.6  Petrol",
    make: "Hyundai",
    year: 2016,
    mileage: "13.5 kmpl",
    price: 885000,
    kilometer: 57983,
    color: "White"
  },
  {
    name: "Renault Kwid 1.0 RXT AMT Opt",
    make: "Renault",
    year: 2019,
    mileage: "26.0 kmpl",
    price: 470000,
    kilometer: 11183,
    color: "Silver"
  },
  {
    name: "MG Hector Sharp 2.0 Diesel [2019-2020]",
    make: "MG",
    year: 2019,
    mileage: "20.65 kmpl",
    price: 1611000,
    kilometer: 46301,
    color: "White"
  },
  {
    name: "Tata Tiago Revotron XZA [2017-2019]",
    make: "Tata",
    year: 2017,
    mileage: "27.3 kmpl",
    price: 475000,
    kilometer: 34867,
    color: "Silver"
  },
  {
    name: "Toyota Innova 2.5 GX BS IV 7 STR",
    make: "Toyota",
    year: 2015,
    mileage: "11.36 kmpl",
    price: 865000,
    kilometer: 43634,
    color: "Silver"
  },
  {
    name: "BMW X3 xDrive 20d Luxury Line [2018-2020]",
    make: "BMW",
    year: 2018,
    mileage: "12.99 kmpl",
    price: 3800000,
    kilometer: 9512,
    color: "Blue"
  },
  {
    name: "Jeep Compass Limited Plus 2.0 Diesel 4x4 AT",
    make: "Jeep",
    year: 2020,
    mileage: "17.68 kmpl",
    price: 2475000,
    kilometer: 11293,
    color: "White"
  },
  {
    name: "Mahindra Scorpio SLE BS-IV",
    make: "Mahindra",
    year: 2014,
    mileage: "14.28 kmpl",
    price: 400000,
    kilometer: 78000,
    color: "White"
  },
  {
    name: "Honda Brio S MT",
    make: "Honda",
    year: 2016,
    mileage: "18.53 kmpl",
    price: 440000,
    kilometer: 50374,
    color: "White"
  },
  {
    name: "BMW 3-Series 320i Luxury Line",
    make: "BMW",
    year: 2017,
    mileage: "14.84 kmpl",
    price: 2800000,
    kilometer: 15900,
    color: "White"
  },
  {
    name: "Honda City V Petrol [2017-2019]",
    make: "Honda",
    year: 2017,
    mileage: "21.12 kmpl",
    price: 645000,
    kilometer: 64000,
    color: "White"
  },
  {
    name: "Volkswagen Polo Highline1.2L (D)",
    make: "Volkswagen",
    year: 2013,
    mileage: "20.36 kmpl",
    price: 365000,
    kilometer: 78000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Vitara Brezza ZXi Plus",
    make: "Maruti Suzuki",
    year: 2021,
    mileage: "21.27 kmpl",
    price: 1044999,
    kilometer: 24000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Eeco 7 STR [2019-2020]",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "26.59 kmpl",
    price: 515000,
    kilometer: 40310,
    color: "Grey"
  },
  {
    name: "Hyundai Grand i10 Asta AT 1.2 Kappa VTVT [2013-2016]",
    make: "Hyundai",
    year: 2015,
    mileage: "16.95 kmpl",
    price: 495000,
    kilometer: 67492,
    color: "Red"
  },
  {
    name: "Maruti Suzuki Baleno Zeta 1.2",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "21.4 kmpl",
    price: 750000,
    kilometer: 17465,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "23.4 kmpl",
    price: 580000,
    kilometer: 23000,
    color: "Silver"
  },
  {
    name: "Ford Ecosport Titanium Plus 1.5L TDCi",
    make: "Ford",
    year: 2018,
    mileage: "21.7 kmpl",
    price: 975000,
    kilometer: 46000,
    color: "Black"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Grey"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.0 kmpl",
    price: 400000,
    kilometer: 32000,
    color: "Grey"
  },
  {
    name: "Renault Kwid RXT [2019-2020]",
    make: "Renault",
    year: 2019,
    mileage: "24.04 kmpl",
    price: 310000,
    kilometer: 19000,
    color: "Blue"
  },
  {
    name: "Maruti Suzuki Vitara Brezza VDi",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "24.3 kmpl",
    price: 950000,
    kilometer: 43500,
    color: "Grey"
  },
  {
    name: "Hyundai Creta 1.4 CRDi S",
    make: "Hyundai",
    year: 2019,
    mileage: "21.4 kmpl",
    price: 995000,
    kilometer: 26100,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "28.4 kmpl",
    price: 550000,
    kilometer: 42000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire ZDi",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "28.4 kmpl",
    price: 825000,
    kilometer: 39000,
    color: "Silver"
  },
  {
    name: "Toyota Innova 2.5 VX (Diesel) 7 Seater BS IV",
    make: "Toyota",
    year: 2014,
    mileage: "15.1 kmpl",
    price: 1150000,
    kilometer: 39000,
    color: "White"
  },
  {
    name: "Tata Tiago Revotron XM [2016-2019]",
    make: "Tata",
    year: 2018,
    mileage: "23.84 kmpl",
    price: 390000,
    kilometer: 38000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Alto 800 LX",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "24.7 kmpl",
    price: 160000,
    kilometer: 65000,
    color: "Silver"
  },
  {
    name: "Hyundai Venue SX Opt Turbo 1.0",
    make: "Hyundai",
    year: 2019,
    mileage: "18.15 kmpl",
    price: 950000,
    kilometer: 13000,
    color: "Blue"
  },
  {
    name: "Hyundai Verna 1.6 CRDi AT SX Plus",
    make: "Hyundai",
    year: 2018,
    mileage: "21.02 kmpl",
    price: 1150000,
    kilometer: 38420,
    color: "Red"
  },
  {
    name: "Toyota Etios Liva 1.2 V",
    make: "Toyota",
    year: 2015,
    mileage: "17.71 kmpl",
    price: 455000,
    kilometer: 22541,
    color: "Grey"
  },
  {
    name: "Maruti Suzuki Swift Dzire ZXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "23.4 kmpl",
    price: 580000,
    kilometer: 57000,
    color: "Silver"
  },
  {
    name: "Ford EcoSport Titanium 1.5 Ti VCT AT",
    make: "Ford",
    year: 2018,
    mileage: "14.8 kmpl",
    price: 905000,
    kilometer: 49000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Ertiga VXI",
    make: "Maruti Suzuki",
    year: 2018,
    mileage: "17.99 kmpl",
    price: 750000,
    kilometer: 38901,
    color: "Grey"
  },
  {
    name: "Maruti Suzuki Swift VDi",
    make: "Maruti Suzuki",
    year: 2015,
    mileage: "22.9 kmpl",
    price: 530000,
    kilometer: 33000,
    color: "Red"
  },
  {
    name: "Hyundai Verna 1.6 VTVT S AT",
    make: "Hyundai",
    year: 2016,
    mileage: "17.01 kmpl",
    price: 700000,
    kilometer: 45000,
    color: "Black"
  },
  {
    name: "Honda Amaze 1.5 S i-DTEC",
    make: "Honda",
    year: 2014,
    mileage: "25.8 kmpl",
    price: 540000,
    kilometer: 45000,
    color: "Silver"
  },
 

 {
    name: "Maruti Suzuki Alto 800 VXI",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "24.7 kmpl",
    price: 200000,
    kilometer: 45000,
    color: "White"
  },
  {
    name: "Tata Tiago Revotron XZ Plus [2018-2020]",
    make: "Tata",
    year: 2018,
    mileage: "23.84 kmpl",
    price: 470000,
    kilometer: 32200,
    color: "Grey"
  },
  {
    name: "Renault Kwid Climber 1.0 MT Opt [2017-2019]",
    make: "Renault",
    year: 2018,
    mileage: "23.01 kmpl",
    price: 300000,
    kilometer: 24000,
    color: "Orange"
  },
  {
    name: "Hyundai Creta 1.6 SX",
    make: "Hyundai",
    year: 2016,
    mileage: "17.01 kmpl",
    price: 950000,
    kilometer: 35000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2011,
    mileage: "17.8 kmpl",
    price: 350000,
    kilometer: 50000,
    color: "Grey"
  },
  {
    name: "Hyundai i20 Active 1.2 SX",
    make: "Hyundai",
    year: 2015,
    mileage: "17.19 kmpl",
    price: 510000,
    kilometer: 63000,
    color: "Red"
  },
  {
    name: "Hyundai Grand i10 Sportz AT 1.2 Kappa VTVT",
    make: "Hyundai",
    year: 2018,
    mileage: "17.49 kmpl",
    price: 570000,
    kilometer: 28000,
    color: "Red"
  },
  {
    name: "Maruti Suzuki Swift VDi",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "25.2 kmpl",
    price: 600000,
    kilometer: 20000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift ZDi",
    make: "Maruti Suzuki",
    year: 2015,
    mileage: "25.2 kmpl",
    price: 690000,
    kilometer: 35000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2017,
    mileage: "28.4 kmpl",
    price: 950000,
    kilometer: 45000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2015,
    mileage: "28.4 kmpl",
    price: 675000,
    kilometer: 37000,
    color: "Silver"
  },
  {
    name: "Hyundai i10 Magna",
    make: "Hyundai",
    year: 2010,
    mileage: "20.36 kmpl",
    price: 180000,
    kilometer: 75000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift VDi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.9 kmpl",
    price: 490000,
    kilometer: 48000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VXi",
    make: "Maruti Suzuki",
    year: 2015,
    mileage: "20.65 kmpl",
    price: 655000,
    kilometer: 56000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "22.9 kmpl",
    price: 530000,
    kilometer: 52000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VXi",
    make: "Maruti Suzuki",
    year: 2015,
    mileage: "20.65 kmpl",
    price: 695000,
    kilometer: 49000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift Dzire ZDi",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "28.4 kmpl",
    price: 825000,
    kilometer: 48000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift ZDi",
    make: "Maruti Suzuki",
    year: 2015,
    mileage: "25.2 kmpl",
    price: 690000,
    kilometer: 35000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2015,
    mileage: "28.4 kmpl",
    price: 675000,
    kilometer: 37000,
    color: "Silver"
  },
  {
    name: "Hyundai i10 Magna",
    make: "Hyundai",
    year: 2010,
    mileage: "20.36 kmpl",
    price: 180000,
    kilometer: 75000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift VDi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.9 kmpl",
    price: 490000,
    kilometer: 48000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VXi",
    make: "Maruti Suzuki",
    year: 2015,
    mileage: "20.65 kmpl",
    price: 655000,
    kilometer: 56000,
    color: "Silver"
  },
  {
    name: "Hyundai Creta 1.6 SX",
    make: "Hyundai",
    year: 2015,
    mileage: "17.01 kmpl",
    price: 950000,
    kilometer: 35000,
    color: "Silver"
  },
  {
    name: "Ford Ecosport Titanium Plus 1.5L TDCi",
    make: "Ford",
    year: 2018,
    mileage: "21.7 kmpl",
    price: 975000,
    kilometer: 46000,
    color: "Black"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Grey"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.0 kmpl",
    price: 400000,
    kilometer: 32000,
    color: "Grey"
  },
  {
    name: "Renault Kwid RXT [2019-2020]",
    make: "Renault",
    year: 2019,
    mileage: "24.04 kmpl",
    price: 310000,
    kilometer: 19000,
    color: "Blue"
  },
  {
    name: "Maruti Suzuki Vitara Brezza VDi",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "24.3 kmpl",
    price: 950000,
    kilometer: 43500,
    color: "Grey"
  },
  {
    name: "Hyundai Creta 1.4 CRDi S",
    make: "Hyundai",
    year: 2019,
    mileage: "21.4 kmpl",
    price: 995000,
    kilometer: 26100,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "28.4 kmpl",
    price: 550000,
    kilometer: 42000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire ZDi",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "28.4 kmpl",
    price: 825000,
    kilometer: 39000,
    color: "Silver"
  },
  {
    name: "Toyota Innova 2.5 GX BS IV 7 STR",
    make: "Toyota",
    year: 2015,
    mileage: "11.36 kmpl",
    price: 865000,
    kilometer: 43634,
    color: "Silver"
  },
  {
    name: "BMW X3 xDrive 20d Luxury Line [2018-2020]",
    make: "BMW",
    year: 2018,
    mileage: "12.99 kmpl",
    price: 3800000,
    kilometer: 9512,
    color: "Blue"
  },
  {
    name: "Jeep Compass Limited Plus 2.0 Diesel 4x4 AT",
    make: "Jeep",
    year: 2020,
    mileage: "17.68 kmpl",
    price: 2475000,
    kilometer: 11293,
    color: "White"
  },
  {
    name: "Mahindra Scorpio SLE BS-IV",
    make: "Mahindra",
    year: 2014,
    mileage: "14.28 kmpl",
    price: 400000,
    kilometer: 78000,
    color: "White"
  },
  {
    name: "Honda Brio S MT",
    make: "Honda",
    year: 2016,
    mileage: "18.53 kmpl",
    price: 440000,
    kilometer: 50374,
    color: "White"
  },
  {
    name: "BMW 3-Series 320i Luxury Line",
    make: "BMW",
    year: 2017,
    mileage: "14.84 kmpl",
    price: 2800000,
    kilometer: 15900,
    color: "White"
  },
  {
    name: "Honda City V Petrol [2017-2019]",
    make: "Honda",
    year: 2017,
    mileage: "21.12 kmpl",
    price: 645000,
    kilometer: 64000,
    color: "White"
  },
  {
    name: "Volkswagen Polo Highline1.2L (D)",
    make: "Volkswagen",
    year: 2013,
    mileage: "20.36 kmpl",
    price: 365000,
    kilometer: 78000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Vitara Brezza ZXi Plus",
    make: "Maruti Suzuki",
    year: 2021,
    mileage: "21.27 kmpl",
    price: 1044999,
    kilometer: 24000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Eeco 7 STR [2019-2020]",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "26.59 kmpl",
    price: 515000,
    kilometer: 40310,
    color: "Grey"
  },
  {
    name: "Hyundai Grand i10 Asta AT 1.2 Kappa VTVT [2013-2016]",
    make: "Hyundai",
    year: 2015,
    mileage: "16.95 kmpl",
    price: 495000,
    kilometer: 67492,
    color: "Red"
  },
  {
    name: "Maruti Suzuki Baleno Zeta 1.2",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "21.4 kmpl",
    price: 750000,
    kilometer: 17465,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "23.4 kmpl",
    price: 580000,
    kilometer: 23000,
    color: "Silver"
  },
  {
    name: "Ford Ecosport Titanium Plus 1.5L TDCi",
    make: "Ford",
    year: 2018,
    mileage: "21.7 kmpl",
    price: 975000,
    kilometer: 46000,
    color: "Black"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Grey"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018

,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.0 kmpl",
    price: 400000,
    kilometer: 32000,
    color: "Grey"
  },
  {
    name: "Renault Kwid RXT [2019-2020]",
    make: "Renault",
    year: 2019,
    mileage: "24.04 kmpl",
    price: 310000,
    kilometer: 19000,
    color: "Blue"
  },
  {
    name: "Maruti Suzuki Vitara Brezza VDi",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "24.3 kmpl",
    price: 950000,
    kilometer: 43500,
    color: "Grey"
  },
  {
    name: "Hyundai Creta 1.4 CRDi S",
    make: "Hyundai",
    year: 2019,
    mileage: "21.4 kmpl",
    price: 995000,
    kilometer: 26100,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "28.4 kmpl",
    price: 550000,
    kilometer: 42000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire ZDi",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "28.4 kmpl",
    price: 825000,
    kilometer: 39000,
    color: "Silver"
  },
  {
    name: "Toyota Innova 2.5 GX BS IV 7 STR",
    make: "Toyota",
    year: 2015,
    mileage: "11.36 kmpl",
    price: 865000,
    kilometer: 43634,
    color: "Silver"
  },
  {
    name: "BMW X3 xDrive 20d Luxury Line [2018-2020]",
    make: "BMW",
    year: 2018,
    mileage: "12.99 kmpl",
    price: 3800000,
    kilometer: 9512,
    color: "Blue"
  },
  {
    name: "Jeep Compass Limited Plus 2.0 Diesel 4x4 AT",
    make: "Jeep",
    year: 2020,
    mileage: "17.68 kmpl",
    price: 2475000,
    kilometer: 11293,
    color: "White"
  },
  {
    name: "Mahindra Scorpio SLE BS-IV",
    make: "Mahindra",
    year: 2014,
    mileage: "14.28 kmpl",
    price: 400000,
    kilometer: 78000,
    color: "White"
  },
  {
    name: "Honda Brio S MT",
    make: "Honda",
    year: 2016,
    mileage: "18.53 kmpl",
    price: 440000,
    kilometer: 50374,
    color: "White"
  },
  {
    name: "BMW 3-Series 320i Luxury Line",
    make: "BMW",
    year: 2017,
    mileage: "14.84 kmpl",
    price: 2800000,
    kilometer: 15900,
    color: "White"
  },
  {
    name: "Honda City V Petrol [2017-2019]",
    make: "Honda",
    year: 2017,
    mileage: "21.12 kmpl",
    price: 645000,
    kilometer: 64000,
    color: "White"
  },
  {
    name: "Volkswagen Polo Highline1.2L (D)",
    make: "Volkswagen",
    year: 2013,
    mileage: "20.36 kmpl",
    price: 365000,
    kilometer: 78000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Vitara Brezza ZXi Plus",
    make: "Maruti Suzuki",
    year: 2021,
    mileage: "21.27 kmpl",
    price: 1044999,
    kilometer: 24000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Eeco 7 STR [2019-2020]",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "26.59 kmpl",
    price: 515000,
    kilometer: 40310,
    color: "Grey"
  },
  {
    name: "Hyundai Grand i10 Asta AT 1.2 Kappa VTVT [2013-2016]",
    make: "Hyundai",
    year: 2015,
    mileage: "16.95 kmpl",
    price: 495000,
    kilometer: 67492,
    color: "Red"
  },
  {
    name: "Maruti Suzuki Baleno Zeta 1.2",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "21.4 kmpl",
    price: 750000,
    kilometer: 17465,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "23.4 kmpl",
    price: 580000,
    kilometer: 23000,
    color: "Silver"
  },
  {
    name: "Ford Ecosport Titanium Plus 1.5L TDCi",
    make: "Ford",
    year: 2018,
    mileage: "21.7 kmpl",
    price: 975000,
    kilometer: 46000,
    color: "Black"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Grey"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.0 kmpl",
    price: 400000,
    kilometer: 32000,
   

 color: "Grey"
  },
  {
    name: "Renault Kwid RXT [2019-2020]",
    make: "Renault",
    year: 2019,
    mileage: "24.04 kmpl",
    price: 310000,
    kilometer: 19000,
    color: "Blue"
  },
  {
    name: "Maruti Suzuki Vitara Brezza VDi",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "24.3 kmpl",
    price: 950000,
    kilometer: 43500,
    color: "Grey"
  },
  {
    name: "Hyundai Creta 1.4 CRDi S",
    make: "Hyundai",
    year: 2019,
    mileage: "21.4 kmpl",
    price: 995000,
    kilometer: 26100,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "28.4 kmpl",
    price: 550000,
    kilometer: 42000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire ZDi",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "28.4 kmpl",
    price: 825000,
    kilometer: 39000,
    color: "Silver"
  },
  {
    name: "Toyota Innova 2.5 GX BS IV 7 STR",
    make: "Toyota",
    year: 2015,
    mileage: "11.36 kmpl",
    price: 865000,
    kilometer: 43634,
    color: "Silver"
  },
  {
    name: "BMW X3 xDrive 20d Luxury Line [2018-2020]",
    make: "BMW",
    year: 2018,
    mileage: "12.99 kmpl",
    price: 3800000,
    kilometer: 9512,
    color: "Blue"
  },
  {
    name: "Jeep Compass Limited Plus 2.0 Diesel 4x4 AT",
    make: "Jeep",
    year: 2020,
    mileage: "17.68 kmpl",
    price: 2475000,
    kilometer: 11293,
    color: "White"
  },
  {
    name: "Mahindra Scorpio SLE BS-IV",
    make: "Mahindra",
    year: 2014,
    mileage: "14.28 kmpl",
    price: 400000,
    kilometer: 78000,
    color: "White"
  },
  {
    name: "Honda Brio S MT",
    make: "Honda",
    year: 2016,
    mileage: "18.53 kmpl",
    price: 440000,
    kilometer: 50374,
    color: "White"
  },
  {
    name: "BMW 3-Series 320i Luxury Line",
    make: "BMW",
    year: 2017,
    mileage: "14.84 kmpl",
    price: 2800000,
    kilometer: 15900,
    color: "White"
  },
  {
    name: "Honda City V Petrol [2017-2019]",
    make: "Honda",
    year: 2017,
    mileage: "21.12 kmpl",
    price: 645000,
    kilometer: 64000,
    color: "White"
  },
  {
    name: "Volkswagen Polo Highline1.2L (D)",
    make: "Volkswagen",
    year: 2013,
    mileage: "20.36 kmpl",
    price: 365000,
    kilometer: 78000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Vitara Brezza ZXi Plus",
    make: "Maruti Suzuki",
    year: 2021,
    mileage: "21.27 kmpl",
    price: 1044999,
    kilometer: 24000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Eeco 7 STR [2019-2020]",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "26.59 kmpl",
    price: 515000,
    kilometer: 40310,
    color: "Grey"
  },
  {
    name: "Hyundai Grand i10 Asta AT 1.2 Kappa VTVT [2013-2016]",
    make: "Hyundai",
    year: 2015,
    mileage: "16.95 kmpl",
    price: 495000,
    kilometer: 67492,
    color: "Red"
  },
  {
    name: "Maruti Suzuki Baleno Zeta 1.2",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "21.4 kmpl",
    price: 750000,
    kilometer: 17465,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "23.4 kmpl",
    price: 580000,
    kilometer: 23000,
    color: "Silver"
  },
  {
    name: "Ford Ecosport Titanium Plus 1.5L TDCi",
    make: "Ford",
    year: 2018,
    mileage: "21.7 kmpl",
    price: 975000,
    kilometer: 46000,
    color: "Black"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Grey"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.0 kmpl",
    price: 400000,
    kilometer: 32000,
    color: "Grey"
  },
  {
    name: "Renault Kwid RXT [2019-2020]",
    make: "Renault",
    year: 2019,
    mileage: "24.04 kmpl",
    price: 310000,
    kilometer: 19000,
    color: "Blue"
  },
  {
    name: "Maruti Suzuki Vitara Brezza VDi",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "24.3 kmpl",
    price: 950000,
    kilometer: 43500,
    color: "Grey"
  },
  {
    name: "Hyundai Creta 1.4 CRDi S",
    make: "Hyundai",
    year: 2019,
    mileage: "21.4 kmpl",
    price: 995000,
    kilometer: 26100,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "28.4 kmpl",
    price: 550000,
    kilometer: 42000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire ZDi",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "28.4 kmpl",
    price: 825000,
    kilometer: 39000,
    color: "Silver"
  },
  {
    name: "Toyota Innova 2.5 GX BS IV 7 STR",
    make: "Toyota",
    year: 2015,
    mileage: "11.36 kmpl",
    price: 865000,
    kilometer: 43634,
    color: "Silver"
  },
  {
    name: "BMW X3 xDrive 20d Luxury Line [2018-2020]",
    make: "BMW",
    year: 2018,
    mileage: "12.99 kmpl",
    price: 3800000,
    kilometer: 9512,
    color: "Blue"
  },
  {
    name: "Jeep Compass Limited Plus 2.0 Diesel 4x4 AT",
    make: "Jeep",
    year: 2020,
    mileage: "17.68 kmpl",
    price: 2475000,
    kilometer: 11293,
    color: "White"
  },
  {
    name: "Mahindra Scorpio SLE BS-IV",
    make: "Mahindra",
    year: 2014,
    mileage: "14.28 kmpl",
    price: 400000,
    kilometer: 78000,
    color: "White"
  },
  {
    name: "Honda Brio S MT",
    make: "Honda",
    year: 2016,
    mileage: "18.53 kmpl",
    price: 440000,
    kilometer: 50374,
    color: "White"
  },
  {
    name: "BMW 3-Series 320i Luxury Line",
    make: "BMW",
    year: 2017,
    mileage: "14.84 kmpl",
    price: 2800000,
    kilometer: 15900,
    color: "White"
  },
  {
    name: "Honda City V Petrol [2017-2019]",
    make: "Honda",
    year: 2017,
    mileage: "21.12 kmpl",
    price: 645000,
    kilometer: 64000,
    color: "White"
  },
  {
    name: "Volkswagen Polo Highline1.2L (D)",
    make: "Volkswagen",
    year: 2013,
    mileage: "20.36 kmpl",
    price: 365000,
    kilometer: 78000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Vitara Brezza ZXi Plus",
    make: "Maruti Suzuki",
    year: 2021,
    mileage: "21.27 kmpl",
    price: 1044999,
    kilometer: 24000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Eeco 7 STR [2019-2020]",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "26.59 kmpl",
    price: 515000,
    kilometer: 40310,
    color: "Grey"
  },
  {
    name: "Hyundai Grand i10 Asta AT 1.2 Kappa VTVT [2013-2016]",
    make: "Hyundai",
    year: 2015,
    mileage: "16.95 kmpl",
    price: 495000,
    kilometer: 67492,
    color: "Red"
  },
  {
    name: "Maruti Suzuki Baleno Zeta 1.2",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "21.4 kmpl",
    price: 750000,
    kilometer: 17465,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "23.4 kmpl",
    price: 580000,
    kilometer: 23000,
    color: "Silver"
  },
  {
    name: "Ford Ecosport Titanium Plus 1.5L TDCi",
    make: "Ford",
    year: 2018,
    mileage: "21.7 kmpl",
    price: 975000,
    kilometer: 46000,
    color: "Black"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Grey"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.0 kmpl",
    price: 400000,
    kilometer: 32000,
    color: "Grey"
  },
  {
    name: "Renault Kwid RXT [2019-2020]",
    make: "Renault",
    year: 2019,
    mileage: "24.04 kmpl",
    price: 310000,
    kilometer: 19000,
    color: "Blue"
  },
  {
    name: "Maruti Suzuki Vitara Brezza VDi",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "24.3 kmpl",
    price: 950000,
    kilometer: 43500,
    color: "Grey"
  },
  {
    name: "Hyundai Creta 1.4 CRDi S",
    make: "Hyundai",
    year: 2019,
    mileage: "21.4kmpl",
    price: 995000,
    kilometer: 26100,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "28.4 kmpl",
    price: 550000,
    kilometer: 42000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire ZDi",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "28.4 kmpl",
    price: 825000,
    kilometer: 39000,
    color: "Silver"
  },
  {
    name: "Toyota Innova 2.5 GX BS IV 7 STR",
    make: "Toyota",
    year: 2015,
    mileage: "11.36 kmpl",
    price: 865000,
    kilometer: 43634,
    color: "Silver"
  },
  {
    name: "BMW X3 xDrive 20d Luxury Line [2018-2020]",
    make: "BMW",
    year: 2018,
    mileage: "12.99 kmpl",
    price: 3800000,
    kilometer: 9512,
    color: "Blue"
  },
  {
    name: "Jeep Compass Limited Plus 2.0 Diesel 4x4 AT",
    make: "Jeep",
    year: 2020,
    mileage: "17.68 kmpl",
    price: 2475000,
    kilometer: 11293,
    color: "White"
  },
  {
    name: "Mahindra Scorpio SLE BS-IV",
    make: "Mahindra",
    year: 2014,
    mileage: "14.28 kmpl",
    price: 400000,
    kilometer: 78000,
    color: "White"
  },
  {
    name: "Honda Brio S MT",
    make: "Honda",
    year: 2016,
    mileage: "18.53 kmpl",
    price: 440000,
    kilometer: 50374,
    color: "White"
  },
  {
    name: "BMW 3-Series 320i Luxury Line",
    make: "BMW",
    year: 2017,
    mileage: "14.84 kmpl",
    price: 2800000,
    kilometer: 15900,
    color: "White"
  },
  {
    name: "Honda City V Petrol [2017-2019]",
    make: "Honda",
    year: 2017,
    mileage: "21.12 kmpl",
    price: 645000,
    kilometer: 64000,
    color: "White"
  },
  {
    name: "Volkswagen Polo Highline1.2L (D)",
    make: "Volkswagen",
    year: 2013,
    mileage: "20.36 kmpl",
    price: 365000,
    kilometer: 78000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Vitara Brezza ZXi Plus",
    make: "Maruti Suzuki",
    year: 2021,
    mileage: "21.27 kmpl",
    price: 1044999,
    kilometer: 24000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Eeco 7 STR [2019-2020]",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "26.59 kmpl",
    price: 515000,
    kilometer: 40310,
    color: "Grey"
  },
  {
    name: "Hyundai Grand i10 Asta AT 1.2 Kappa VTVT [2013-2016]",
    make: "Hyundai",
    year: 2015,
    mileage: "16.95 kmpl",
    price: 495000,
    kilometer: 67492,
    color: "Red"
  },
  {
    name: "Maruti Suzuki Baleno Zeta 1.2",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "21.4 kmpl",
    price: 750000,
    kilometer: 17465,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "23.4 kmpl",
    price: 580000,
    kilometer: 23000,
    color: "Silver"
  },
  {
    name: "Ford Ecosport Titanium Plus 1.5L TDCi",
    make: "Ford",
    year: 2018,
    mileage: "21.7 kmpl",
    price: 975000,
    kilometer: 46000,
    color: "Black"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Grey"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.0 kmpl",
    price: 400000,
    kilometer: 32000,
    color: "Grey"
  },
  {
    name: "Renault Kwid RXT [2019-2020]",
    make: "Renault",
    year: 2019,
    mileage: "24.04 kmpl",
    price: 310000,
    kilometer: 19000,
    color: "Blue"
  },
  {
    name: "Maruti Suzuki Vitara Brezza VDi",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "24.3 kmpl",
    price: 950000,
    kilometer: 43500,
    color: "Grey"
  },
  {
    name: "Hyundai Creta 1.4 CRDi S",
    make: "Hyundai",
    year: 2019,
    mileage: "21.4 kmpl",
    price: 995000,
    kilometer: 26100,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "28.4 kmpl",
    price: 550000,
    kilometer: 42000,
    color: "White"


  },
  {
    name: "Maruti Suzuki Swift Dzire ZDi",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "28.4 kmpl",
    price: 825000,
    kilometer: 39000,
    color: "Silver"
  },
  {
    name: "Toyota Innova 2.5 GX BS IV 7 STR",
    make: "Toyota",
    year: 2015,
    mileage: "11.36 kmpl",
    price: 865000,
    kilometer: 43634,
    color: "Silver"
  },
  {
    name: "BMW X3 xDrive 20d Luxury Line [2018-2020]",
    make: "BMW",
    year: 2018,
    mileage: "12.99 kmpl",
    price: 3800000,
    kilometer: 9512,
    color: "Blue"
  },
  {
    name: "Jeep Compass Limited Plus 2.0 Diesel 4x4 AT",
    make: "Jeep",
    year: 2020,
    mileage: "17.68 kmpl",
    price: 2475000,
    kilometer: 11293,
    color: "White"
  },
  {
    name: "Mahindra Scorpio SLE BS-IV",
    make: "Mahindra",
    year: 2014,
    mileage: "14.28 kmpl",
    price: 400000,
    kilometer: 78000,
    color: "White"
  },
  {
    name: "Honda Brio S MT",
    make: "Honda",
    year: 2016,
    mileage: "18.53 kmpl",
    price: 440000,
    kilometer: 50374,
    color: "White"
  },
  {
    name: "BMW 3-Series 320i Luxury Line",
    make: "BMW",
    year: 2017,
    mileage: "14.84 kmpl",
    price: 2800000,
    kilometer: 15900,
    color: "White"
  },
  {
    name: "Honda City V Petrol [2017-2019]",
    make: "Honda",
    year: 2017,
    mileage: "21.12 kmpl",
    price: 645000,
    kilometer: 64000,
    color: "White"
  },
  {
    name: "Volkswagen Polo Highline1.2L (D)",
    make: "Volkswagen",
    year: 2013,
    mileage: "20.36 kmpl",
    price: 365000,
    kilometer: 78000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Vitara Brezza ZXi Plus",
    make: "Maruti Suzuki",
    year: 2021,
    mileage: "21.27 kmpl",
    price: 1044999,
    kilometer: 24000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Eeco 7 STR [2019-2020]",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "26.59 kmpl",
    price: 515000,
    kilometer: 40310,
    color: "Grey"
  },
  {
    name: "Hyundai Grand i10 Asta AT 1.2 Kappa VTVT [2013-2016]",
    make: "Hyundai",
    year: 2015,
    mileage: "16.95 kmpl",
    price: 495000,
    kilometer: 67492,
    color: "Red"
  },
  {
    name: "Maruti Suzuki Baleno Zeta 1.2",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "21.4 kmpl",
    price: 750000,
    kilometer: 17465,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "23.4 kmpl",
    price: 580000,
    kilometer: 23000,
    color: "Silver"
  },
  {
    name: "Ford Ecosport Titanium Plus 1.5L TDCi",
    make: "Ford",
    year: 2018,
    mileage: "21.7 kmpl",
    price: 975000,
    kilometer: 46000,
    color: "Black"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Grey"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.0 kmpl",
    price: 400000,
    kilometer: 32000,
    color: "Grey"
  },
  {
    name: "Renault Kwid RXT [2019-2020]",
    make: "Renault",
    year: 2019,
    mileage: "24.04 kmpl",
    price: 310000,
    kilometer: 19000,
    color: "Blue"
  },
  {
    name: "Maruti Suzuki Vitara Brezza VDi",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "24.3 kmpl",
    price: 950000,
    kilometer: 43500,
    color: "Grey"
  },
  {
    name: "Hyundai Creta 1.4 CRDi S",
    make: "Hyundai",
    year: 2019,
    mileage: "21.4 kmpl",
    price: 995000,
    kilometer: 26100,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "28.4 kmpl",
    price: 550000,
    kilometer: 42000,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire ZDi",
    make: "Maruti Suzuki",
    year: 2016,
    mileage: "28.4 kmpl",
    price: 825000,
    kilometer: 39000,
    color: "Silver"
  },
  {
    name: "Toyota Innova 2.5 GX BS IV 7 STR",
    make

: "Toyota",
    year: 2015,
    mileage: "11.36 kmpl",
    price: 865000,
    kilometer: 43634,
    color: "Silver"
  },
  {
    name: "BMW X3 xDrive 20d Luxury Line [2018-2020]",
    make: "BMW",
    year: 2018,
    mileage: "12.99 kmpl",
    price: 3800000,
    kilometer: 9512,
    color: "Blue"
  },
  {
    name: "Jeep Compass Limited Plus 2.0 Diesel 4x4 AT",
    make: "Jeep",
    year: 2020,
    mileage: "17.68 kmpl",
    price: 2475000,
    kilometer: 11293,
    color: "White"
  },
  {
    name: "Mahindra Scorpio SLE BS-IV",
    make: "Mahindra",
    year: 2014,
    mileage: "14.28 kmpl",
    price: 400000,
    kilometer: 78000,
    color: "White"
  },
  {
    name: "Honda Brio S MT",
    make: "Honda",
    year: 2016,
    mileage: "18.53 kmpl",
    price: 440000,
    kilometer: 50374,
    color: "White"
  },
  {
    name: "BMW 3-Series 320i Luxury Line",
    make: "BMW",
    year: 2017,
    mileage: "14.84 kmpl",
    price: 2800000,
    kilometer: 15900,
    color: "White"
  },
  {
    name: "Honda City V Petrol [2017-2019]",
    make: "Honda",
    year: 2017,
    mileage: "21.12 kmpl",
    price: 645000,
    kilometer: 64000,
    color: "White"
  },
  {
    name: "Volkswagen Polo Highline1.2L (D)",
    make: "Volkswagen",
    year: 2013,
    mileage: "20.36 kmpl",
    price: 365000,
    kilometer: 78000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Vitara Brezza ZXi Plus",
    make: "Maruti Suzuki",
    year: 2021,
    mileage: "21.27 kmpl",
    price: 1044999,
    kilometer: 24000,
    color: "Silver"
  },
  {
    name: "Maruti Suzuki Eeco 7 STR [2019-2020]",
    make: "Maruti Suzuki",
    year: 2019,
    mileage: "26.59 kmpl",
    price: 515000,
    kilometer: 40310,
    color: "Grey"
  },
  {
    name: "Hyundai Grand i10 Asta AT 1.2 Kappa VTVT [2013-2016]",
    make: "Hyundai",
    year: 2015,
    mileage: "16.95 kmpl",
    price: 495000,
    kilometer: 67492,
    color: "Red"
  },
  {
    name: "Maruti Suzuki Baleno Zeta 1.2",
    make: "Maruti Suzuki",
    year: 2020,
    mileage: "21.4 kmpl",
    price: 750000,
    kilometer: 17465,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift Dzire VDi",
    make: "Maruti Suzuki",
    year: 2014,
    mileage: "23.4 kmpl",
    price: 580000,
    kilometer: 23000,
    color: "Silver"
  },
  {
    name: "Ford Ecosport Titanium Plus 1.5L TDCi",
    make: "Ford",
    year: 2018,
    mileage: "21.7 kmpl",
    price: 975000,
    kilometer: 46000,
    color: "Black"
  },
  {
    name: "Volkswagen Polo Comfortline1.0L MPI",
    make: "Volkswagen",
    year: 2019,
    mileage: "18.24 kmpl",
    price: 695000,
    kilometer: 10310,
    color: "Grey"
  },
  {
    name: "Ford Ecosport Titanium 1.5L Ti-VCT",
    make: "Ford",
    year: 2018,
    mileage: "17.0 kmpl",
    price: 825000,
    kilometer: 16893,
    color: "White"
  },
  {
    name: "Maruti Suzuki Swift VXi",
    make: "Maruti Suzuki",
    year: 2013,
    mileage: "22.0 kmpl",
    price: 400000,
    kilometer: 32000,
    color: "Grey"
  }
]

export default cars