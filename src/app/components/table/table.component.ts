import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  title: string = 'custom-table';

  headers: any = ['Id', 'Name', 'Age', 'Gender'];
  newRow: any = { Name: '', Age: null, Gender: '' };
  editedIndex: number = -1;

  rows: any = [
    { Id: 1, Name: 'Shravni', Age: 22, Gender: 'female' },
    { Id: 2, Name: 'Varun', Age: 21, Gender: 'male' },
    { Id: 3, Name: 'Saideep', Age: 26, Gender: 'male' },
    { Id: 4, Name: 'Sandeep', Age: 32, Gender: 'male' },
    { Id: 5, Name: 'Sucharitha', Age: 29, Gender: 'female' },
  ];

  onDeleteRow(index: any) {
    this.rows.splice(index, 1);
  }

  onEditRow(row: any, i: number) {
    this.editedIndex = i;
    this.newRow = { ...row };
  }

  onAddOrUpdateRow() {
    if (this.editedIndex > -1) {
      this.rows[this.editedIndex].Name = this.newRow.Name;
      this.rows[this.editedIndex].Age = this.newRow.Age;
      this.rows[this.editedIndex].Gender = this.newRow.Gender;
      this.editedIndex = -1;
    } else {
      const Id = this.rows.length + 1;
      const newRow = {
        Id: Id,
        Name: this.newRow.Name,
        Age: this.newRow.Age,
        Gender: this.newRow.Gender,
      };
      this.rows.push(newRow);
    }
    this.newRow = { Name: '', Age: null, Gender: '' };
  }
}
