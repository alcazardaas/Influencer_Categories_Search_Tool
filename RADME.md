# Influencer Categories Search Tool

This is a simple Go program that searches for influencers based on their categories. It reads data from a JSON file containing information about influencers and their categories, then searches for influencers matching specific categories.

## Files

- **searchCategoryExclusive.go**: Go file for searching influencers based on exclusive categories. Influencers must have all specified categories to be considered a match.
- **searchCategoryInclusive.go**: Go file for searching influencers based on inclusive categories. Influencers must have at least one of the specified categories to be considered a match.
- **response.json**: JSON file containing data about influencers and their categories. You can replace this file with your own data file.

## How to Run

1. **Install Go**: Make sure you have Go installed on your Mac. You can download and install it from the [official Go website](https://golang.org/dl/).

2. **Edit Categories (Optional)**: Open the chosen Go file (`searchCategoryExclusive.go` or `searchCategoryInclusive.go`) in a text editor. Modify the `searchCategories` variable to specify the categories you want to search for.

3. **Run the Program**:
   - Open a terminal window.
   - Navigate to the directory containing the chosen Go file and `response.json`.
   - Run the following command:
     ```bash
     go run searchCategoryExclusive.go
     ```
     or
     ```bash
     go run searchCategoryInclusive.go
     ```

## Customizing Categories

To search for different categories, edit the `searchCategories` variable in the chosen Go file. Add or remove category names as needed.

```go
// Define the array of categories to search for
searchCategories := []string{"Wellness", "Dance"}
