# LeetCode Statistics Integration

## Overview

Your portfolio now features a **live LeetCode statistics section** that automatically fetches and displays your coding profile data from LeetCode using their GraphQL API.

## What's Displayed

### Profile Information
- **Username**: @deevek_world
- **Global Ranking**: Your current rank among all LeetCode users
- **Direct Link**: Button to visit your LeetCode profile

### Key Statistics Cards
1. **Total Solved**: Total number of problems you've solved
2. **Acceptance Rate**: Percentage of accepted submissions
3. **Global Rank**: Your ranking displayed as #rank

### Problem Difficulty Breakdown
- **Easy Problems**: Count of easy problems solved (Green)
- **Medium Problems**: Count of medium problems solved (Yellow)
- **Hard Problems**: Count of hard problems solved (Red)

## Technical Implementation

### API Integration
- **API**: Alfa LeetCode API (CORS-friendly proxy)
- **Endpoint**: `https://alfa-leetcode-api.onrender.com/{username}` (full profile)
- **Method**: GET request
- **Username**: `deevek_world`

### Why This API?
LeetCode's official GraphQL API has CORS restrictions that prevent direct browser requests. We use the Alfa LeetCode API, which is a free, public API that:
- ✅ Works directly in browsers (no CORS issues)
- ✅ Provides real-time data from LeetCode
- ✅ Free and reliable
- ✅ No authentication required

### API Response Format
```json
{
  "totalSolved": 123,
  "easySolved": 45,
  "mediumSolved": 56,
  "hardSolved": 22,
  "ranking": 123456,
  "acceptanceRate": 45.6,
  "contributionPoints": 123,
  "reputation": 50
}
```

### Features
- ✅ **Live Data**: Fetches real-time stats when the page loads
- ✅ **Responsive Design**: Works perfectly on all device sizes
- ✅ **Error Handling**: Graceful fallback if API is unavailable
- ✅ **Loading State**: Shows spinner while fetching data
- ✅ **Beautiful UI**: Color-coded difficulty levels matching LeetCode's theme

## Color Scheme

The difficulty cards use LeetCode's official colors:
- **Easy**: `#00b8a3` (Teal green)
- **Medium**: `#ffc01e` (Golden yellow)
- **Hard**: `#ef4743` (Red)

## Files Modified

1. **index.html**
   - Added new LeetCode section between Skills and Gallery
   - Includes loading spinner and stats container

2. **css/style.css**
   - Added comprehensive styling for LeetCode cards
   - Color-coded difficulty levels
   - Responsive grid layouts
   - Hover effects and animations

3. **js/main.js**
   - `fetchLeetCodeStats()`: Fetches data from LeetCode API
   - `displayLeetCodeStats()`: Renders the statistics
   - `showError()`: Handles error states gracefully

4. **README.md**
   - Added LeetCode section to portfolio overview
   - Added LeetCode profile link

## How It Works

1. **Page Load**: When the portfolio loads, the JavaScript automatically calls the LeetCode API
2. **Data Fetch**: Retrieves your profile stats using the GraphQL query
3. **Display**: Dynamically generates and displays the statistics in beautiful cards
4. **Updates**: Stats refresh every time someone visits your portfolio (live data)

## Error Handling

If the API is unavailable or returns an error:
- Shows a friendly error message
- Provides a direct link to your LeetCode profile
- Doesn't break the page layout

## Troubleshooting

### CORS Issue (Fixed)
**Problem**: Direct requests to `leetcode.com/graphql` fail with CORS errors in browsers.

**Solution**: We use the Alfa LeetCode API (`alfa-leetcode-api.onrender.com`), which:
- Acts as a CORS-friendly proxy
- Fetches data from LeetCode on the server-side
- Returns it in a browser-friendly format

### If Stats Don't Load
1. **Check username**: Ensure "deevek_world" exists on LeetCode
2. **API Status**: The Alfa API might be temporarily down (hosted on free tier)
3. **Network**: Check browser console for network errors
4. **Fallback**: Error message with direct link to LeetCode profile appears

## Updating Username

To change the LeetCode username in the future, update this line in `js/main.js`:
```javascript
const username = 'deevek_world'; // Change this to your username
```

## Benefits

1. **Credibility**: Shows your active coding practice
2. **Live Stats**: Always displays current data
3. **Visual Appeal**: Eye-catching cards with gradient icons
4. **Professional**: Demonstrates API integration skills
5. **Interactive**: Direct link to your LeetCode profile

---

**Your LeetCode stats are now live on your portfolio! 🚀**

