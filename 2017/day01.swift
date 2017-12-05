// --------------------
// Advent Of Code 2017
// Day 01
// Markus Wind
// ---------------------

class Day01 {

  // MARK: - Static properties

  static let puzzleInput = "123123"

  // MARK: - Properties

  let numberArray = puzzleInput.flatMap{ Int(String($0)) }

  // MARK: - Main method

  func main() {
    print("Part One:")
    print(calculatePartOneAwnser())
    print("Part Two:")
    print(calculatePartTwoAwnser())
  }

  // MARK: - Part 1 methods

  private func calculatePartOneAwnser() -> Int {
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

  // MARK: - Part 2 methods

  private func calculatePartTwoAwnser() -> Int {
    var awnser = 0

    let lastNumberIndex = numberArray.count - 1
    let numberOfSteps = numberArray.count / 2

    for index in 0...lastNumberIndex {
      let number = numberArray[index]
      var rightIndex = index + numberOfSteps

      if rightIndex > lastNumberIndex {
        rightIndex -= numberArray.count
      }

      if number == numberArray[rightIndex] {
        awnser += number
      }
    }

    return awnser
  }

}

Day01().main()

