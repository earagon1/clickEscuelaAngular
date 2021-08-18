export class Dashboardproperties {
    private title: string;
    private result: string;
    private classIcon: string;
    private icon: string;
    private information: any;

    public getTitle(): string {
        return this.title;
    }


    public setTitle(title: string): void {
        this.title = title;
    }

    public getResult(): string {
        return this.result;
    }

    public setResult(result: string): void {
        this.result = result;
    }

    public getClassIcon(): string {
        return this.classIcon;
    }

    public setClassIcon(classIcon: string): void {
        this.classIcon = classIcon;
    }

    public getIcon(): string {
        return this.icon;
    }

    public setIcon(icon: string): void {
        this.icon = icon;
    }

    public getInformation(): any {
        return this.information;
    }

    public setInformation(information: any): void {
        this.information = information;
    }



    constructor(title: string, result: string, classIcon: string, icon: string, information: any) {
        this.result = result;
        this.title = title;
        this.classIcon = classIcon;
        this.icon = icon;
        this.information = information;
    }



}