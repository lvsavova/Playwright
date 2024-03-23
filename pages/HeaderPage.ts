import {expect, Page} from "@playwright/test";
import {LoginPage} from "./LoginPage";

export class HeaderPage {
    private page: Page;

    private homeLink: string = "#nav-link-home";
    private loginLink: string = "#nav-link-login";
    private profileLink: string = "#nav-link-profile";

    constructor(page: Page) {
        this.page = page;
    }

    public async navigateLogin() {
        await this.page.click(this.loginLink);
        await expect(this.page).toHaveURL(LoginPage.URL, {timeout: 20})
    }
}