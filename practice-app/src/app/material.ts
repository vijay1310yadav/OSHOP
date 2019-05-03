import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
    imports:[FormsModule,MatDatepickerModule,MatButtonModule, MatCheckboxModule,MatIconModule,MatToolbarModule,MatCardModule,MatExpansionModule,MatInputModule],
    exports:[FormsModule,MatDatepickerModule,MatButtonModule, MatCheckboxModule,MatIconModule,MatToolbarModule,MatCardModule,MatExpansionModule,MatInputModule]

})
export class MaterialModule {}