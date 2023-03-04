import { action, computed, makeAutoObservable, observable } from "mobx";
    type ThemeMode = 'light' | 'dark'

    const STORAGE_KEY = '@theme'

export class Theme{
    constructor(){
        makeAutoObservable(this)
    }

    @observable
    protected _themeMode: ThemeMode = localStorage[STORAGE_KEY] || 'light'

        @computed 
        get themeMode(){
            return this._themeMode
        }

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
        // Computing if the dark is true or light is true
        @computed
        mode(light: any, dark: any){
            switch (this._themeMode) {
                case dark:
                        return dark;   
                default:
                    return light
                    
            }
        }
}
