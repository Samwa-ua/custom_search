package main

import "fmt"

func main() {
	strArr := []string {"This", "is", "not", "right" }
	// var str string = "This is not right"
	// var word string = " right"
	for i, s := range strArr{
		fmt.Println(i, s)
	}
}