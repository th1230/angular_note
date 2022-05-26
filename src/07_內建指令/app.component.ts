import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSpecial = true;
  currentClasses = {};
  currentStyles = {};

  isHaveHeight = true;
  isHaveWidth = false;

  name = 'thomas';

  // title = '這是ngIf的title';
  title = null;
  title2 = {
    // tit: '這是新的title',
    tit: null,
  };
  isOpenTitle = true;

  myArr = [
    {
      sno: '500101001',
      sna: 'YouBike2.0_捷運科技大樓站',
      tot: 29,
      sbi: 1,
      sarea: '大安區',
      mday: '2022-05-23 14:33:04',
      lat: 25.02605,
      lng: 121.5436,
      ar: '復興南路二段235號前',
      sareaen: 'Daan Dist.',
      snaen: 'YouBike2.0_MRT Technology Bldg. Sta.',
      aren: 'No.235， Sec. 2， Fuxing S. Rd.',
      bemp: 28,
      act: '1',
      srcUpdateTime: '2022-05-23 14:33:12',
      updateTime: '2022-05-23 14:33:51',
      infoTime: '2022-05-23 14:33:04',
      infoDate: '2022-05-23',
    },
    {
      sno: '500101002',
      sna: 'YouBike2.0_復興南路二段273號前',
      tot: 21,
      sbi: 1,
      sarea: '大安區',
      mday: '2022-05-23 14:30:16',
      lat: 25.02565,
      lng: 121.54357,
      ar: '復興南路二段273號西側',
      sareaen: 'Daan Dist.',
      snaen: 'YouBike2.0_No.273， Sec. 2， Fuxing S. Rd.',
      aren: 'No.273， Sec. 2， Fuxing S. Rd. (West)',
      bemp: 20,
      act: '1',
      srcUpdateTime: '2022-05-23 14:33:12',
      updateTime: '2022-05-23 14:33:51',
      infoTime: '2022-05-23 14:30:16',
      infoDate: '2022-05-23',
    },
    {
      sno: '500101003',
      sna: 'YouBike2.0_國北教大實小東側門',
      tot: 16,
      sbi: 2,
      sarea: '大安區',
      mday: '2022-05-23 14:10:18',
      lat: 25.02429,
      lng: 121.54124,
      ar: '和平東路二段96巷7號',
      sareaen: 'Daan Dist.',
      snaen: 'YouBike2.0_NTUE Experiment Elementary School (East)',
      aren: 'No. 7， Ln. 96， Sec. 2， Heping E. Rd',
      bemp: 14,
      act: '1',
      srcUpdateTime: '2022-05-23 14:33:12',
      updateTime: '2022-05-23 14:33:51',
      infoTime: '2022-05-23 14:10:18',
      infoDate: '2022-05-23',
    },
    {
      sno: '500101004',
      sna: 'YouBike2.0_和平公園東側',
      tot: 11,
      sbi: 11,
      sarea: '大安區',
      mday: '2022-05-23 14:18:03',
      lat: 25.02351,
      lng: 121.54282,
      ar: '和平東路二段118巷33號',
      sareaen: 'Daan Dist.',
      snaen: 'YouBike2.0_Heping Park (East)',
      aren: 'No. 33， Ln. 118， Sec. 2， Heping E. Rd',
      bemp: 0,
      act: '1',
      srcUpdateTime: '2022-05-23 14:33:12',
      updateTime: '2022-05-23 14:33:51',
      infoTime: '2022-05-23 14:18:03',
      infoDate: '2022-05-23',
    },
    {
      sno: '500101005',
      sna: 'YouBike2.0_辛亥復興路口西北側',
      tot: 16,
      sbi: 5,
      sarea: '大安區',
      mday: '2022-05-23 14:24:11',
      lat: 25.02153,
      lng: 121.54299,
      ar: '復興南路二段368號',
      sareaen: 'Daan Dist.',
      snaen: 'YouBike2.0_Xinhai Fuxing Rd. Intersection (Northwest)',
      aren: 'No. 368， Sec. 2， Fuxing S. Rd.',
      bemp: 9,
      act: '1',
      srcUpdateTime: '2022-05-23 14:33:12',
      updateTime: '2022-05-23 14:33:51',
      infoTime: '2022-05-23 14:24:11',
      infoDate: '2022-05-23',
    },
  ];

  test = true;
  showSad = true;

  selectValue = '平常心';
  emotions = ['平常心', '開心', '生氣', '傷心'];

  currentSwitch = '1';

  setCurrentClass() {
    this.currentClasses = {
      normal: true,
      big: false,
      angry: true,
    };
  }

  setCurrentStyle() {
    this.currentStyles = {
      width: this.isHaveHeight ? '100px' : '0px',
      height: this.isHaveWidth ? '100px' : '20px',
      'background-color': 'darksalmon',
    };
  }

  toggletTitle() {
    this.isOpenTitle = !this.isOpenTitle;
  }

  toggleShow() {
    this.showSad = !this.showSad;
  }
}
