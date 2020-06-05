const result = await page.evaluate(() => {
    const rows = document.querySelectorAll('#example-table tr');
    return Array.from(rows, row => {
      const columns = row.querySelectorAll('td');
      return Array.from(columns, column => column.innerText);
    });
  });