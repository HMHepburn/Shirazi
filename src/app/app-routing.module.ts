import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
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
import { DatePickerComponent } from './components/date-picker/date-picker/date-picker.component';
import { TooltipComponent } from './components/tooltip/tooltip/tooltip.component';
import { SpacingComponent } from './components/spacing/spacing.component';
import { ImagesComponent } from './components/images/images.component';
import { VoiceComponent } from './components/voice/voice.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  { path: '',
    component: MainComponent,
    children: [
      { 
        path: 'typography', 
        component: TypographyComponent 
      },
      { 
        path: 'accordion', 
        component: AccordionComponent 
      },
      { 
        path: 'alert', 
        component: AlertComponent 
      },
      { 
        path: 'breadcrumbs', 
        component: BreadcrumbsComponent 
      },
      { 
        path: 'button', 
        component: ButtonComponent 
      },
      { 
        path: 'card', 
        component: CardComponent 
      },
      { 
        path: 'carousel', 
        component: CarouselComponent 
      },
      { 
        path: 'charts-graphs', 
        component: ChartsGraphsComponent 
      },
      { 
        path: 'colour', 
        component: ColourPaletteComponent 
      },
      { 
        path: 'data-table', 
        component: DataTableComponent 
      },
      { 
        path: 'date-picker', 
        component: DatePickerComponent 
      },
      { 
        path: 'dropdown', 
        component: DropdownComponent 
      },
      { 
        path: 'file-upload', 
        component: FileUploadComponent 
      },
      { 
        path: 'form', 
        component: FormComponent 
      },
      { 
        path: 'images', 
        component: ImagesComponent 
      },
      { 
        path: 'inputs', 
        component: InputsComponent 
      },
      { 
        path: 'login', 
        component: LoginComponent 
      },
      { 
        path: 'modal', 
        component: ModalComponent 
      },
      { 
        path: 'navigation', 
        component: NavigationToolsComponent 
      },
      { 
        path: 'pagination', 
        component: PaginationComponent 
      },
      { 
        path: 'pills-badges-tags', 
        component: PillsBadgesTagsComponent 
      },
      { 
        path: 'placeholder', 
        component: PlaceholderComponent 
      },
      { 
        path: 'radio-checkbox-toggle', 
        component: RadioCheckboxToggleComponent 
      },
      { 
        path: 'range-slider', 
        component: RangeSliderComponent 
      },
      { 
        path: 'search-bar', 
        component: SearchBarComponent 
      },
      { 
        path: 'spacing', 
        component: SpacingComponent 
      },
      { 
        path: 'spinner', 
        component: SpinnerComponent 
      },
      { 
        path: 'tooltip', 
        component: TooltipComponent 
      },
      { 
        path: 'voice', 
        component: VoiceComponent 
      },
    ]
  }
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
