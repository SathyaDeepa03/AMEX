import { test, expect } from '@playwright/test';
import { Console } from 'console';

//***Home Page***
test('Homepage', async ({ page }) => {
    test.setTimeout(90000); // Set timeout to 90 seconds
    await page.goto('https://www.americanexpress.com/fr-fr/?inav=NavLogo');
    await page.getByTestId('granular-banner-button-decline-all').click();
    //click on “Cartes Particuliers”
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('link', { name: 'Cartes Particuliers' }).click();
    console.log('Successfully chosen cartes particuliers');

    //***'FR All cards'***
    test.setTimeout(30000); // Set timeout to 30 seconds

    // Handling occasional appearance of the granular pop-up banner
    const locator2 = page.getByTestId('granular-banner-button-decline-all');
    if (await locator2.isVisible()) {
        await locator2.click();
    }

    //click on “Cartes American Express”
    await page.getByRole('link', { name: 'En savoir plus' }).nth(1).click();
    console.log('Successfully clicked "Carte Gold American Express" En savoir plus button')

    //***'Gold Card Description page' click on "Demandez Votre Carte"***
    test.setTimeout(30000); // Set timeout to 30 seconds
    // Handling occasional appearance of the granular pop-up banner
    const locator3 = page.getByTestId('granular-banner-button-decline-all');
    if (await locator3.isVisible()) {
        await locator3.click();
    }
    await page.locator('#pdp-side-railwrapper').getByRole('link', { name: 'Demandez votre Carte' }).click();
    console.log('Successfully clicked "Demandez votre Carte" button');

    //***Comes to pages for User details***
    test.setTimeout(35000); // Set timeout to 35 seconds

    // Handling occasional appearance of the granular pop-up banner
    const locator4 = page.getByTestId('granular-banner-button-decline-all');
    if (await locator4.isVisible()) {
        await locator4.click();
    }
    //fill test data
    await page.locator('label').filter({ hasText: 'M.' }).click();
    await page.getByRole('textbox', { name: 'Prénom' }).fill('John');
    await page.getByRole('textbox', { name: 'Nom', exact: true }).fill('Adam');
    await page.getByRole('textbox', { name: 'Date de naissance (JJ/MM/AAAA)' }).fill('30/07/1993');
    await page.getByRole('textbox', { name: 'Adresse e-mail' }).fill('johnadam@test.com');
    await page.getByRole('textbox', { name: 'Numéro de téléphone portable' }).fill('07123456889');
    //click on "Sauvegarder et Continuer"
    await page.getByRole('button', { name: 'Sauvegarder et Continuer' }).click();
    console.log('Successfully clicked "Sauvegarder et Continuer" button');
})