package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

//an influencer is considered a match only if they have all of the categories specified in the searchCategories slice
// Define structs for unmarshalling JSON data

type Match struct {
	ID           int     `json:"id"`
	Score        float64 `json:"score"`
	MatchScore   float64 `json:"match_score"`
	InfluencerID int     `json:"influencer_id"`
}

type Category struct {
	ID        int     `json:"id"`
	Name      string  `json:"name"`
	Similarity float64 `json:"similarity"`
}

type Influencer struct {
	ID          int       `json:"id"`
	Name        string    `json:"name"`
	FirstName   string    `json:"first_name"`
	Description string    `json:"description"`
	AvatarURL   string    `json:"avatar_url"`
	Categories  []Category `json:"categories"`
}

type Response struct {
	Influencers []Influencer `json:"influencers"`
}

func main() {
	// Define the array of categories to search for
	searchCategories := []string{"Wellness", "Ayurveda"}

	// Read the JSON file
	file, err := os.Open("response.json")
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer file.Close()

	// Read the JSON data
	data, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Println("Error reading file:", err)
		return
	}

	// Unmarshal the JSON data into a slice of Response structs
	var responses []Response
	err = json.Unmarshal(data, &responses)
	if err != nil {
		fmt.Println("Error unmarshalling JSON:", err)
		return
	}

	// Loop through the slice of Response structs
	for _, response := range responses {
		// Loop through the influencers in each Response
		for _, influencer := range response.Influencers {
			// Check if the influencer has all search categories
			foundAll := true
			for _, searchCategory := range searchCategories {
				categoryFound := false
				for _, category := range influencer.Categories {
					if category.Name == searchCategory {
						categoryFound = true
						break
					}
				}
				if !categoryFound {
					foundAll = false
					break
				}
			}
			// If the influencer has all search categories, print its information
			if foundAll {
				fmt.Printf("Name: %s, First Name: %s\n", influencer.Name, influencer.FirstName)
			}
		}
	}
}
