Feature: Todo

  Scenario: Create Todo
    Given there is already 1 todo
    When I add "buy milk"
    Then the text of the last todo should be "buy milk"