# Password Generator

This site will generate a password according to the following user-input parameters:
```bash
- Password Length between 8 and 128 characters
- Whether the password will include uppercase letters.
- Whether the password will include lowercase letters.
- Whether the password will include numbers.
- Whether the password will include special characters.
```
Follow this link to check it out:
[Password Generator](https://abergtra.github.io/challenge-03/)

## Initial User Interface

The password parameters are determined by a series of prompts that occur after pressing the "Generate Password" button seen below:

![AltText](images/01_UI.png)

## User Interaction

User feedback is collected through the following prompts:

To specify password length:

![AltText](images/01_prompt.png)

If a value outside 8-128 is entered, the following prompt will occur:

![AltText](images/02_prompt.png)

If a non-number is input, the following alert will appear:

![AltText](images/03_prompt.png)

An alert will confirm the password length you chose:

![AltText](images/05_prompt.png)

Now that the password length is established we need to know what characters you need.

Do you need uppercase letters:

![AltText](images/06_prompt.png)

Do you need lowercase letters:

![AltText](images/07_prompt.png)

Do you need numbers:

![AltText](images/08_prompt.png)

Do you need special characters:

![AltText](images/09_prompt.png)

If none of the 4 character options are selected, the following alert will appear:

![AltText](images/04_prompt.png)

## Final User Interface

Once all the parameters have been established, a unique password will appear on the user interface!

![AltText](images/02_UI.png)

CONGRATULATIONS! You have a great password!

## Author

Asher Bergtraun