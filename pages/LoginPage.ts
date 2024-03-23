import {Page} from "@playwright/test";

export class LoginPage {
    private page: Page;

    public static URL = "http://training.skillo-bg.com:4200/users/login";
    // Define page elements as class attributes
    private usernameInput: string = '#defaultLoginFormUsername';
    private passwordInput: string = '#defaultLoginFormPassword';
    private loginButton: string = '#sign-in-button';

    constructor(page: Page) {
        this.page = page;
    }

    public async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}