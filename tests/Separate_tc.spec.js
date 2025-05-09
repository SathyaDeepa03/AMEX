import { test, expect } from '@playwright/test';
import { Console } from 'console';

//Link 01
test('Homepage', async ({ page }) => {
    test.setTimeout(90000); // Set timeout to 90 seconds
    await page.goto('https://www.americanexpress.com/fr-fr/?inav=NavLogo');
    await page.getByTestId('granular-banner-button-decline-all').click();
    //click on “Cartes Particuliers”
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('link', { name: 'Cartes Particuliers' }).click();
    console.log('Successfully chosen cartes particuliers');
})

//Link 02
test('FR All cards', async ({ page }) => {
    test.setTimeout(90000); // Set timeout to 90 seconds
    await page.goto('https://www.americanexpress.com/fr-fr/carte-de-paiement/toutes-les-cartes/');
    await page.getByTestId('granular-banner-button-decline-all').click();
    //click on “Cartes American Express”
    await page.getByRole('link', { name: 'En savoir plus' }).nth(1).click();
    console.log('Successfully clicked "Carte Gold American Express" En savoir plus button')
})

//Link 03
test('Gold Card Description page', async ({ page }) => {
    test.setTimeout(90000); // Set timeout to 90 seconds
    await page.goto('https://www.americanexpress.com/fr-fr/carte-de-paiement/gold-card-americanexpress/?intlink=fr-proprietary-gold&intlink=fr-fr-hp-product1-all-pry_cartes-01032021');
    await page.getByTestId('granular-banner-button-decline-all').click();
    //click on "Demandez Votre Carte"
    await page.locator('#pdp-side-railwrapper').getByRole('link', { name: 'Demandez votre Carte' }).click();
    console.log('Successfully clicked "Demandez votre Carte" button');
})

//Link 04
test('Comes to pages for User details', async ({ page }) => {
    test.setTimeout(90000); // Set timeout to 90 seconds
    await page.goto('https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail');
    await page.getByTestId('granular-banner-button-decline-all').click();
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