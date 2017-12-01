// --------------------
// Advent Of Code 2017
// Day 01
// Markus Wind
// ---------------------

class Day01 {

  // MARK: - Static properties

  static let puzzleInput = "1212"

  // MARK: - Properties

  let numberArray = puzzleInput.flatMap{ Int(String($0)) }

  // MARK: - Main method

  func main() {
    print(calculateAwnser())
  }

  // MARK: - Puzzle methods

  private func calculateAwnser() -> Int {
    var awnser = 0
    let lastNumberIndex = numberArray.count - 1

    for index in 0...lastNumberIndex {
      let number = numberArray[index]
      let rightIndex = (index == lastNumberIndex) ? 0 : index + 1

      if number == numberArray[rightIndex] {
        awnser += number
      }
    }

    return awnser
  }

}

Day01().main()

