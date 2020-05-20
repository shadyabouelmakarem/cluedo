import { Component } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faPlus = faPlus;
  faMinus = faMinus;
  title = 'cluedo';
  data = {
    places: [
      { value: 'الردهة', checked: false },
      { value: 'غرفة الطعام', checked: false },
      { value: 'المطبخ', checked: false },
      { value: 'المنور', checked: false },
      { value: 'المكتب', checked: false },
      { value: 'المسرح', checked: false },
      { value: 'غرفة المعيشة', checked: false },
      { value: 'الحمام الصحى', checked: false },
      { value: 'غرفة الضيوف', checked: false },
    ],
    characters: [
      { value: 'ماسترد', checked: false },
      { value: 'بلوم', checked: false },
      { value: 'جرين', checked: false },
      { value: 'بيكوك', checked: false },
      { value: 'سكارليت', checked: false },
      { value: 'وايت', checked: false },
    ],
    weapons: [
      { value: 'سكين', checked: false },
      { value: 'شمعدان', checked: false },
      { value: 'مسدس', checked: false },
      { value: 'سم', checked: false },
      { value: 'كاس', checked: false },
      { value: 'حبل', checked: false },
      { value: 'مضرب', checked: false },
      { value: 'فأس', checked: false },
      { value: 'ثقل تمرين', checked: false },
    ],
  };
  currentPlayer;

  playersData = { ashraf: {}, ramadan: {}, deeb: {}, shady: {} };

  removePlayer(playerKey) {
    delete this.playersData[playerKey];
    for (let key of Object.keys(this.data)) {
      this.data[key].forEach((item) => {
        for (let player of Object.keys(this.playersData)) {
          this.playersData[player][item.value] = 0;
        }
      });
    }
    this.currentPlayer = playerKey;
  }
}
