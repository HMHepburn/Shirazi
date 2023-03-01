import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';
import { ColourPaletteComponent } from './components/colour-palette/colour-palette.component';
import { AlertComponent } from './components/alert/alert/alert.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs/breadcrumbs.component';
import { CardComponent } from './components/card/card/card.component';
import { CarouselComponent } from './components/carousel/carousel/carousel.component';
import { ChartsGraphsComponent } from './components/charts-graphs/charts-graphs/charts-graphs.component';
import { DataTableComponent } from './components/data-table/data-table/data-table.component';
import { DatePickerComponent } from './components/date-picker/date-picker/date-picker.component';
import { DropdownComponent } from './components/dropdown/dropdown/dropdown.component';
import { FileUploadComponent } from './components/file-upload/file-upload/file-upload.component';
import { FormComponent } from './components/form/form/form.component';
import { InputsComponent } from './components/inputs/inputs/inputs.component';
import { LoginComponent } from './components/login/login/login.component';
import { ModalComponent } from './components/modal/modal/modal.component';
import { NavigationToolsComponent } from './components/navigation-tools/navigation-tools/navigation-tools.component';
import { PaginationComponent } from './components/pagination/pagination/pagination.component';
import { PillsBadgesTagsComponent } from './components/pills-badges-tags/pills-badges-tags/pills-badges-tags.component';
import { PlaceholderComponent } from './components/placeholder/placeholder/placeholder.component';
import { RadioCheckboxToggleComponent } from './components/radio-checkbox-toggle/radio-checkbox-toggle/radio-checkbox-toggle.component';
import { RangeSliderComponent } from './components/range-slider/range-slider/range-slider.component';
import { SearchBarComponent } from './components/search-bar/search-bar/search-bar.component';
import { SpinnerComponent } from './components/spinner/spinner/spinner.component';
import { TooltipComponent } from './components/tooltip/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    MainComponent,
    AccordionComponent,
    TypographyComponent,
    ButtonComponent,
    ColourPaletteComponent,
    AlertComponent,
    BreadcrumbsComponent,
    CardComponent,
    CarouselComponent,
    ChartsGraphsComponent,
    DataTableComponent,
    DatePickerComponent,
    DropdownComponent,
    FileUploadComponent,
    FormComponent,
    InputsComponent,
    LoginComponent,
    ModalComponent,
    NavigationToolsComponent,
    PaginationComponent,
    PillsBadgesTagsComponent,
    PlaceholderComponent,
    RadioCheckboxToggleComponent,
    RangeSliderComponent,
    SearchBarComponent,
    SpinnerComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
