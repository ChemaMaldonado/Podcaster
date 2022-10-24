import { expect, test } from '@playwright/test'

test('test basic functionallity', async ({ page }) => {
  await page.goto('http://localhost:4173/')

  await page.getByPlaceholder('Search by artist or title...').click()
  await page.getByPlaceholder('Search by artist or title...').fill('No jumper')
  await page.getByRole('link', { name: 'No Jumper Author: No Jumper' }).click()
  await expect(page).toHaveURL('http://localhost:4173/podcast/1001659715')

  await page.getByRole('cell', { name: 'Drummer Boy on Pomona Upbringing, Growing Out of Gangbanging, Thuggin on GTA & More' }).click()
  await expect(page).toHaveURL('http://localhost:4173/podcast/1001659715/episode/1000583551694')

  await page.getByRole('link', { name: 'No Jumper Author: No Jumper' }).click()
  await expect(page).toHaveURL('http://localhost:4173/podcast/1001659715')

  await page.getByRole('link', { name: 'PodCaster' }).click()
  await expect(page).toHaveURL('http://localhost:4173/')
})
