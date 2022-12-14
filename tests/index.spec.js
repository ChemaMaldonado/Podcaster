import { expect, test } from '@playwright/test'

test('test navigation and functionallity', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // This will check if the search bar is working properly.
  await page.getByPlaceholder('Search by artist or title...').click()
  await page.getByPlaceholder('Search by artist or title...').fill('No jumper')
  await page.getByRole('link', { name: 'No Jumper Author: No Jumper' }).click()
  await expect(page).toHaveURL('http://localhost:5173/podcast/1001659715')

  // This will check if the navigation to de podcast detail screen is working properly.
  await page.getByRole('cell', { name: 'Drummer Boy on Pomona Upbringing, Growing Out of Gangbanging, Thuggin on GTA & More' }).click()
  await expect(page).toHaveURL('http://localhost:5173/podcast/1001659715/episode/1000583551694')

  // This will check if the navigation to de episode detail screen is working properly.
  await page.getByRole('link', { name: 'No Jumper Author: No Jumper' }).click()
  await expect(page).toHaveURL('http://localhost:5173/podcast/1001659715')

  // This will check if the brand name is navigating to '/'.
  await page.getByRole('link', { name: 'PodCaster' }).click()
  await expect(page).toHaveURL('http://localhost:5173/')
})
