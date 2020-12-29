import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule, NativeScriptFormsModule } from '@nativescript/angular'

import { AppComponent } from './app.component'
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component'
import { StackComponent } from './layouts/stack/stack.component'
import { FlexboxComponent } from './layouts/flexbox/flexbox.component'
import { GridComponent } from './layouts/grid/grid.component'

@NgModule({
	bootstrap: [AppComponent],
	imports: [NativeScriptModule, NativeScriptFormsModule],
	declarations: [AppComponent, CurrentChallengeComponent, StackComponent, FlexboxComponent, GridComponent],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
