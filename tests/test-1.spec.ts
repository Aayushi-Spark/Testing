import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the application
  await page.goto('https://spark-cloud.vercel.app/');
  await expect(page).toHaveURL('https://spark-cloud.vercel.app/');

  // Fill in login details
  const emailInput = page.getByPlaceholder('sarah.kim@example.com');
  await emailInput.click();
  await emailInput.fill('aayushikarcbit+18nov@gmail.com');
  await expect(emailInput).toHaveValue('aayushikarcbit+18nov@gmail.com');

  const passwordInput = page.getByPlaceholder('*******');
  await passwordInput.click();
  await passwordInput.fill('AayushiKar@1234');
  await expect(passwordInput).toHaveValue('AayushiKar@1234');

  const loginButton = page.getByRole('button', { name: 'Login' });
  await loginButton.click();
  await expect(page).toHaveURL(/dashboard/);

  // Navigate to 'Billing & Usage'
  const billingLink = page.getByRole('link', { name: 'Billing & Usage' });
  await billingLink.click();
  await expect(page).toHaveURL(/billing/);

  // Manage account
  const manageAccountLink = page.getByRole('link', { name: 'Manage Account' });
  await manageAccountLink.click();
  await expect(page).toHaveURL(/account/);

  // Upload profile photo
  const uploadPhotoButton = page.getByRole('button', { name: 'Upload profile photo' });
  await uploadPhotoButton.click();
  await expect(page.getByText('Browse Files')).toBeVisible();

  // Select file
  await page.setInputFiles('input[type="file"]', 'C:\Users\aayus\OneDrive\Desktop\Automation Testing\tests');
  await expect(page.getByText('Upload your image')).toBeVisible();

  // Update name
  const updateNameButton = page.getByRole('button', { name: 'Update Name' });
  await updateNameButton.click();
  await expect(page.getByText('Name updated successfully')).toBeVisible();

  // Navigate to File Storage
  const fileStorageLink = page.getByRole('link', { name: 'File Storage' });
  await fileStorageLink.click();
  await expect(page).toHaveURL(/file-storage/);


  // Navigate to Software and test purchasing options
  const softwareLink = page.getByRole('link', { name: 'Software' });
  await softwareLink.click();
  await expect(page).toHaveURL(/software/);

  const oneMonthButton = page.getByRole('button', { name: 'One month $61/mo $83/mo' });
  await oneMonthButton.click();
  await expect(oneMonthButton).toHaveClass(/selected/);

  const buyNowButton = page.getByRole('button', { name: 'Buy Now' });
  await buyNowButton.click();
  await expect(page.getByText('Purchase successful')).toBeVisible();

  // Navigate to Render Farm
  const renderFarmLink = page.getByRole('link', { name: 'Render Farm' });
  await renderFarmLink.click();
  await expect(page).toHaveURL(/render-farm/);

  // Help & Support
  const helpSupportLink = page.getByRole('link', { name: 'Help & Support' });
  await helpSupportLink.click();
  await expect(page).toHaveURL(/help-support/);

  // Logout
  const logoutButton = page.getByRole('button', { name: 'Logout' });
  await logoutButton.click();
  await expect(page).toHaveURL('https://spark-cloud.vercel.app/');
});
