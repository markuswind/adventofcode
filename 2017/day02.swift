// --------------------
// Advent Of Code 2017
// Day 02
// Markus Wind
// ---------------------

class Day02 {

  // MARK: - Properties

  let puzzleInput = [
    "5 9 2 8",
    "9 4 7 3",
    "3 8 6 5",
  ]

  // MARK: - Main method

  func main() {
    print("Part One:")
    print(calculatePartOneAwnser())
    print("Part Two:")
    print(calculatePartTwoAwnser())
  }

  // MARK: - Part 1 methods

  private func calculatePartOneAwnser() -> Int {
    var checkSum = 0

    for line in puzzleInput {
      checkSum += calculateLineCheckSum(line: line)
    }

    return checkSum
  }

  private func calculateLineCheckSum(line: String) -> Int {
    let numberArray = line.split(separator: " ").flatMap{ Int(String($0)) }
    var lowestNumber = numberArray[0]
    var highestNumber = numberArray[0]

    for number in numberArray {
      if number < lowestNumber {
        lowestNumber = number
      }

      if number > highestNumber {
        highestNumber = number
      }
    }

    return highestNumber - lowestNumber
  }

  // MARK: - Part 2 methods

  private func calculatePartTwoAwnser() -> Int {
    var sum = 0

    for line in puzzleInput {
      sum += calculateLineDivisionResult(line: line)
    }

    return sum
  }

  private func calculateLineDivisionResult(line: String) -> Int {
    var divisionResult = 0
    let numberArray = line.split(separator: " ").flatMap{ Int(String($0)) }

    for firstIndex in 0..<numberArray.count {
      let firstNumber = Double(numberArray[firstIndex])

      for secondIndex in 0..<numberArray.count {
        if secondIndex != firstIndex {
          let secondNumber = Double(numberArray[secondIndex])
          let dividedNumber: Double = firstNumber / secondNumber
          let truncatingRemainder: Double = dividedNumber.truncatingRemainder(dividingBy: 1)

          if dividedNumber > 0 && truncatingRemainder == 0.0 {
            divisionResult = Int(dividedNumber)
            break
          }
        }
      }
    }

    return divisionResult
  }

}

Day02().main()
