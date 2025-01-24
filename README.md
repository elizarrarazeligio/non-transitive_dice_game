# non-transitive_dice_game

Console script that implements a non-transitive dice game with the following requirements:

- It accepts 3 or more strings, each containing 6 comma-separated integers. E.g., node index.js 2,2,4,4,9,9 6,8,1,1,8,6 7,5,3,7,5,3.
- If the arguments are incorrect, it must display a neat error message,not a stacktrace—what exactly is wrong and an example of how to do it right (e.g., user specified only two dice or no dice at all, used non-integers, etc.).
- It has to prove to the user that choice is fair (it's not enough to generate a random bit 0 or 1; the user needs a proof of the fair play).
- To generate such a value, the computer generates a one-time cryptographically secure random key (using corresponding API like SecureRandom, RandomNumberGenerator, random_bytes, etc.—it's mandatory) with a length of at least 256 bits.
- The options consist of all the available dice, the exit (cancel) option, and the help option.
- When you select the "help" option in the terminal, you need to display a table (use ASCII-graphic) that shows probabilities of winning for each dice pair.
- Code should consist of at least 6-9 classes.
- THE NUMBER OF DICE CAN BE ARBITRARY ( > 2).
- The second player (user or computer, depending on whether user have guessed the computer choice 0/1 ornnot) cannot select the dice selected by the first player (computer or user).
- The first "fair generation" (`0` or `1`) should determine who selects the dice first. The opponents select different dice and after that perform their throws (in fact, _the order of throws should be unimportant, because they use different dice_). Of course, both computer's and user's throws should be "fair" (use "input" from both parties).
