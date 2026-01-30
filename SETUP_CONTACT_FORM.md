# Contact Form Setup Instructions

Your contact form is now configured to use **Web3Forms** - a free email service for static websites that actually sends emails (no email client required).

## Quick Setup (2 minutes)

### Step 1: Get Your Free API Key

1. Go to **https://web3forms.com**
2. Click "Create Access Key"
3. Enter your email: `tabishahmaddd@gmail.com`
4. Check your email and verify
5. Copy your Access Key (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add Key to Your Code

1. Open `components/merged/Contact.tsx`
2. Find line with `access_key: "YOUR_WEB3FORMS_ACCESS_KEY"`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key from Step 1

Example:
```typescript
body: JSON.stringify({
  access_key: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // Your actual key here
  name: formData.name,
  // ...
})
```

### Step 3: Test It!

1. Go to your contact form
2. Fill it out and click "Send Message"
3. You should see: "✓ Message sent successfully!"
4. Check your email - you'll receive the message!

## Features

✅ **Actually sends emails** - no mail client needed  
✅ **Free forever** - 250 submissions/month  
✅ **Spam protection** - built-in  
✅ **No backend needed** - works with static sites  
✅ **Instant delivery** - emails arrive in seconds  

## Troubleshooting

**Q: I don't see the success message?**  
A: Make sure you replaced `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

**Q: Getting an error?**  
A: Check browser console (F12) for error messages. Most common issue is incorrect API key.

**Q: Free tier enough?**  
A: Yes! 250 submissions/month is plenty for a portfolio site.

---

That's it! Your contact form will now actually send emails. 🎉
