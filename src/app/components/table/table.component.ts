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
  editRow: any = null;

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

  onAddRow() {
    const Id = this.rows.length + 1;
    const newRow = {
      Id: Id,
      Name: this.newRow.Name,
      Age: this.newRow.Age,
      Gender: this.newRow.Gender,
    };
    this.rows.push(newRow);
    this.newRow = { Name: '', Age: null, Gender: '' };
  }
  onEditRow(row: any) {
    this.editRow = row;
    this.newRow.Name = row.Name;
    this.newRow.Age = row.Age;
    this.newRow.Gender = row.Gender;
  }

}
