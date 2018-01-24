import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'Id', 'Name', 'Rewards'],
            dataRows: [
                ['1', 'Bleh Sharma','$36,738'],
                ['1', 'Bleh Sharma','$36,738'],
                ['1', 'Bleh Sharma','$36,738'],
                ['1', 'Bleh Sharma','$36,738'],
                ['1', 'Bleh Sharma','$36,738'],
                ['1', 'Bleh Sharma','$36,738']
            ]
        };
    }
}
