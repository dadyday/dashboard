
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import StyleClass from 'primevue/styleclass';
import Tooltip from 'primevue/tooltip';
import Ripple from 'primevue/ripple';
import BadgeDirective from 'primevue/badgedirective';

import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './assets/styles/layout.scss';
import './assets/demo/flags/flags.css';

import PrimeDataTable from 'primevue/datatable';
import PrimeColumn from 'primevue/column';


//import Badge from 'primevue/badge';
const primeVueComps = {
    Badge:                 import('primevue/badge'),
    
    PrimeDataTable,
    PrimeColumn,

/*
    Button:                import('primevue/button'),

    Menubar:               import('primevue/menubar'),
    MegaMenu:              import('primevue/megamenu'),
    Menu:                  import('primevue/menu'),

    PrimeDataTable,        import('primevue/datatable'),
    PrimeColumn,           import('primevue/column'),
    
    Chart:                 import('primevue/chart'),


    AutoComplete:          import('primevue/autocomplete'),
    Accordion:             import('primevue/accordion'),
    AccordionTab:          import('primevue/accordiontab'),
    Avatar:                import('primevue/avatar'),
    AvatarGroup:           import('primevue/avatargroup'),
    Button:                import('primevue/button'),
    Breadcrumb:            import('primevue/breadcrumb'),
    Calendar:              import('primevue/calendar'),
    Card:                  import('primevue/card'),
    Carousel:              import('primevue/carousel'),
    Checkbox:              import('primevue/checkbox'),
    Chip:                  import('primevue/chip'),
    Chips:                 import('primevue/chips'),
    ColorPicker:           import('primevue/colorpicker'),
    ConfirmDialog:         import('primevue/confirmdialog'),
    ConfirmPopup:          import('primevue/confirmpopup'),
    ContextMenu:           import('primevue/contextmenu'),
    DataView:              import('primevue/dataview'),
    DataViewLayoutOptions: import('primevue/dataviewlayoutoptions'),
    Dialog:                import('primevue/dialog'),
    Divider:               import('primevue/divider'),
    Dropdown:              import('primevue/dropdown'),
    Fieldset:              import('primevue/fieldset'),
    FileUpload:            import('primevue/fileupload'),
    Image:                 import('primevue/image'),
    InlineMessage:         import('primevue/inlinemessage'),
    Inplace:               import('primevue/inplace'),
    InputMask:             import('primevue/inputmask'),
    InputNumber:           import('primevue/inputnumber'),
    InputSwitch:           import('primevue/inputswitch'),
    InputText:             import('primevue/inputtext'),
    Knob:                  import('primevue/knob'),
    Galleria:              import('primevue/galleria'),
    Listbox:               import('primevue/listbox'),
    Message:               import('primevue/message'),
    MultiSelect:           import('primevue/multiselect'),
    OrderList:             import('primevue/orderlist'),
    OrganizationChart:     import('primevue/organizationchart'),
    OverlayPanel:          import('primevue/overlaypanel'),
    Paginator:             import('primevue/paginator'),
    Panel:                 import('primevue/panel'),
    PanelMenu:             import('primevue/panelmenu'),
    Password:              import('primevue/password'),
    PickList:              import('primevue/picklist'),
    ProgressBar:           import('primevue/progressbar'),
    Rating:                import('primevue/rating'),
    RadioButton:           import('primevue/radiobutton'),
    SelectButton:          import('primevue/selectbutton'),
    ScrollPanel:           import('primevue/scrollpanel'),
    ScrollTop:             import('primevue/scrolltop'),
    Slider:                import('primevue/slider'),
    Sidebar:               import('primevue/sidebar'),
    Skeleton:              import('primevue/skeleton'),
    SplitButton:           import('primevue/splitbutton'),
    Splitter:              import('primevue/splitter'),
    SplitterPanel:         import('primevue/splitterpanel'),
    Steps:                 import('primevue/steps'),
    TabMenu:               import('primevue/tabmenu'),
    Tag:                   import('primevue/tag'),
    TieredMenu:            import('primevue/tieredmenu'),
    Textarea:              import('primevue/textarea'),
    Timeline:              import('primevue/timeline'),
    Toast:                 import('primevue/toast'),
    Toolbar:               import('primevue/toolbar'),
    TabView:               import('primevue/tabview'),
    TabPanel:              import('primevue/tabpanel'),
    ToggleButton:          import('primevue/togglebutton'),
    Tree:                  import('primevue/tree'),
    TreeSelect:            import('primevue/treeselect'),
    TreeTable:             import('primevue/treetable'),
    TriStateCheckbox:      import('primevue/tristatecheckbox'),
//*/
//    BlockViewer:           import('./components/BlockViewer.vue'),
};

export default {
    install(app) {
        app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
        app.use(ConfirmationService);
        app.use(ToastService);

        app.directive('styleclass', StyleClass);
        app.directive('tooltip', Tooltip);
        app.directive('ripple', Ripple);
        app.directive('badge', BadgeDirective);

        Object.entries(primeVueComps).forEach((args) => {app.component(...args)});
     },
};