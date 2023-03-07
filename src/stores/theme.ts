import { action, computed, makeAutoObservable, observable } from "mobx";
    type ThemeMode = 'light' | 'dark'

    const STORAGE_KEY = '@theme'

export class Theme{
    constructor(){
        makeAutoObservable(this)
    }

    @observable
    //default background theme color mode is either dark or light just inspect the website and look at the body tag there will be <body data-mode ="either light or dark"> nag babase sa after ng '||' dito na line
    protected _themeMode: ThemeMode = localStorage[STORAGE_KEY] || 'light'

        @computed 
        get themeMode(){
            return this._themeMode
        }
        // This is for the background change that is called in the theme-toggle.tsx
        @action
        toggle(){
            switch (this._themeMode) {
                case 'dark':
                    this._themeMode = 'light';
                    break;
            
                default:
                    this._themeMode = 'dark';
                    break;
            }
            localStorage[STORAGE_KEY] = this._themeMode
        }
        // Computing if the dark is true or light is true and dapat naa na sulod sa single quote ang dark and light na variable name sa sulod sa switch case
        @computed
        mode(light: any, dark: any){
            switch (this._themeMode) {
                case 'dark':
                        return dark;   
                default:
                    return light
                    
            }
        }
}
