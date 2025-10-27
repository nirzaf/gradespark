
from playwright.sync_api import sync_playwright, Page, expect

def verify_blog_post(page: Page):
    """
    This test verifies that the blog post page has the correct title and takes a screenshot.
    """
    # 1. Arrange: Go to the blog post page.
    # Using file:// protocol to load a local static HTML file.
    import os
    file_path = os.path.abspath('public/how-to-write-a-dissertation.html')
    page.goto(f"file://{file_path}")

    # 2. Assert: Confirm the title is correct.
    expect(page).to_have_title("How to Write a Dissertation: A Step-by-Step Guide - Grade Spark Academy Blog")

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    verify_blog_post(page)
    browser.close()
