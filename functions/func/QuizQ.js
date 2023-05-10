const myQuestions = [
  {
    question:
      "What are the three main goals of cybersecurity with regards to data?",
    answers: {
      a: "Confidentiality, Integrity, Availability",
      b: "Confidentiality, Privacy, Integrity",
      c: "Privacy, Availability, Data Protection",
      d: "Firewalls, Anti-viruses, Encryption",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the main difference between HTTPS and HTTP websites?",
    answers: {
      a: "HTTPS websites are safer because they are designed by professionals",
      b: "HTTPS websites offer weaker protection because they may contain viruses",
      c: "HTTP websites are easier to develop",
      d: "HTTPS websites use encryption to provide increased protection",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the most common method of authentication online?",
    answers: {
      a: "Usernames",
      b: "Passwords",
      c: "Face ID",
      d: "Fingerprints",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the best way to protect yourself from malware?",
    answers: {
      a: "Use anti-viruses, firewalls and software updates",
      b: "Use the same password for everything to prevent forgetting it",
      c: "Click all links that are sent to your email",
      d: "Save passwords on a paper notebook",
    },
    correctAnswer: "a",
  },
  {
    question: "What are the main causes of being infected with malware?",
    answers: {
      a: "Playing videogames",
      b: "Using social media",
      c: "Clicking unknown links in spam emails or on untrusted websites",
      d: "Being targeted by organisations",
    },
    correctAnswer: "c",
  },
  {
    question:
      "What is the most important factor to increase password security?",
    answers: {
      a: "Avoiding the usage of username components",
      b: "Password length",
      c: "Using special characters ",
      d: "Using upper and lower case letters",
    },
    correctAnswer: "b",
  },
  {
    question:
      "To increase password security, passwords are suggested to contain:",
    answers: {
      a: "Your username",
      b: "At least 3 numbers",
      c: "At least 3 letters",
      d: "At least 8 alphanumerical characters, including upper and lower case and special characters",
    },
    correctAnswer: "d",
  },
  {
    question:
      " From a data protection point of view, losing your phone can lead to:",
    answers: {
      a: "Having to buy a new device",
      b: "No real consequences as the device was locked",
      c: "The posibility of your device being exploited and exposing some or all data",
      d: "Cannot use tiktok",
    },
    correctAnswer: "c",
  },
  {
    question: "Multi-Factor Authentication is:",
    answers: {
      a: "time-consuming and unnecessary",
      b: "Provides protection almost as good as a strong password",
      c: "a very strong security measure, denying access to data even if password is compromised",
      d: "completely useless if my password has been compromised",
    },
    correctAnswer: "c",
  },
  {
    question: "Using cloud services like OneDrive is:",
    answers: {
      a: "Very useful for working on a project remotely",
      b: "Expensive and best-avoided",
      c: "Unnecessary",
      d: "Very useful as that contains all my selfies",
    },
    correctAnswer: "a",
  },
  {
    question:
      "What is the term for the practice of tricking people into giving away sensitive information?",
    answers: {
      a: "Phishing",
      b: "Malware",
      c: "Spyware",
      d: "Ransomware",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which of the following is the most secure way to create a password?",
    answers: {
      a: "Using a common phrase or word",
      b: "Using a mix of uppercase and lowercase letters, numbers, and special characters",
      c: "Using only lowercase letters",
      d: "Using only numbers",
    },
    correctAnswer: "b",
  },
  {
    question: "What is a password manager?",
    answers: {
      a: "A tool that helps you create and store strong passwords",
      b: "A tool that helps you hack into other people's accounts",
      c: "A tool that helps you remember your passwords",
      d: "A tool that helps you block malicious websites",
    },
    correctAnswer: "a",
  },
  {
    question: "How often should you change your password?",
    answers: {
      a: "Once a year",
      b: "Once a month",
      c: "Whenever you feel like it",
      d: "Whenever there is a security breach or you suspect your account has been compromised",
    },
    correctAnswer: "d",
  },
  {
    question: "Which of the following is a bad password?",
    answers: {
      a: "123456",
      b: "Qwerty",
      c: "Password",
      d: "All of the above",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a good practice when creating passwords?",
    answers: {
      a: "Using the same password for all your accounts",
      b: "Using a password that is easy to remember, like your birthday or pet's name",
      c: "Using a different password for each account",
      d: "Using a password that is shorter than 6 characters",
    },
    correctAnswer: "c",
  },
  {
    question: "What is two-factor authentication (2FA)?",
    answers: {
      a: "A security feature that requires you to provide two passwords instead of one",
      b: "A security feature that requires you to provide your fingerprint and password",
      c: "A security feature that requires you to provide a code in addition to your password",
      d: "A security feature that automatically generates random passwords for you",
    },
    correctAnswer: "c",
  },
  {
    question: "Which of the following is a phishing attack?",
    answers: {
      a: "A hacker guessing your password by trying different combinations",
      b: "A hacker pretending to be a legitimate company or organization and tricking you into revealing your personal information",
      c: "A hacker stealing your personal information from a hacked database",
      d: "A hacker using malware to infect your computer and steal your data",
    },
    correctAnswer: "b",
  },
  {
    question: "Which of the following is a good way to protect your passwords?",
    answers: {
      a: "Writing them down on a piece of paper and keeping it in your wallet",
      b: "Storing them in a password-protected document on your computer",
      c: "Sharing them with your friends",
      d: "Using a password manager to store them securely",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a way to check if your password has been compromised in a data breach?",
    answers: {
      a: "Using a password manager to scan for compromised passwords",
      b: "Googling your password to see if it has been leaked",
      c: "Checking a database of leaked passwords",
      d: "Asking your friends if they have seen your password online",
    },
    correctAnswer: "c",
  },
  {
    question: "Which of the following examples is a stronger password?",
    answers: {
      a: "doglover",
      b: "!qwerty1234",
      c: "987654321",
      d: "Letmein",
    },
    correctAnswer: "b",
  },
  {
    question: "What is two-factor authentication?",
    answers: {
      a: "A security protocol that requires two people to authenticate their identities",
      b: "A security protocol that requires two different passwords to log in",
      c: "A security protocol that requires two different forms of identification to log in",
      d: "A security protocol that requires two different devices to log in",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which of the following is an example of a second factor of authentication?",
    answers: {
      a: "A password",
      b: "A fingerprint scan",
      c: "A username",
      d: "A security question",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the purpose of two-factor authentication?",
    answers: {
      a: "To make it easier to log in to your account",
      b: "To provide an extra layer of security",
      c: "To allow multiple people to use the same account",
      d: "To increase internet speed",
    },
    correctAnswer: "b",
  },
  {
    question: "Which of the following is an example of a security key?",
    answers: {
      a: "A USB device",
      b: "A fingerprint scanner",
      c: "A security question",
      d: "A passphrase",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which of the following is an advantage of using two-factor authentication?",
    answers: {
      a: "It requires less effort than using a single factor of authentication",
      b: "It makes it easier to remember your password",
      c: "It provides an additional layer of security against unauthorized access",
      d: "It increases the likelihood of forgetting your login credentials",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which of the following is a danger of sharing personal information online?",
    answers: {
      a: "Increased social interaction",
      b: "Identity theft",
      c: "Access to exclusive content",
      d: "Improved job opportunities",
    },
    correctAnswer: "b",
  },
  {
    question:
      "What is a common risk associated with sharing photos on social media?",
    answers: {
      a: "Photos may not get enough likes",
      b: "Photos may be altered by other users",
      c: "Photos may disappear from the platform",
      d: "Photos may reveal sensitive information",
    },
    correctAnswer: "d",
  },
  {
    question: "What is 'oversharing'?",
    answers: {
      a: "Sharing information that is too long and difficult to read",
      b: "Sharing information that is too vague and doesn't reveal enough",
      c: "Sharing too much personal information online",
      d: "Sharing too much information about current events",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Why should you be cautious when sharing your location on social media?",
    answers: {
      a: "It could reveal your home address",
      b: "It could reveal your social security number",
      c: "It could reveal your email address",
      d: "It could reveal your age",
    },
    correctAnswer: "a",
  },
  {
    question: "Which of the following is a danger of media sharing?",
    answers: {
      a: "Increased self-esteem",
      b: "Increased social status",
      c: "Sharing of inappropriate content",
      d: "Increased productivity",
    },
    correctAnswer: "c",
  },
  {
    question: "What is security awareness training?",
    answers: {
      a: "Training that teaches you how to use security systems",
      b: "Training that teaches you how to protect your personal information",
      c: "Training that teaches you how to hack into a system",
      d: "Training that teaches you how to conduct physical security checks",
    },
    correctAnswer: "b",
  },
  {
    question: "Why is security awareness training important?",
    answers: {
      a: "It makes you a cybersecurity expert",
      b: "It helps you understand how to avoid cyber threats",
      c: "It teaches you how to break into computer systems",
      d: "It helps you increase your social media followers",
    },
    correctAnswer: "b",
  },
  {
    question: "Who should receive security awareness training?",
    answers: {
      a: "Only IT professionals",
      b: "Only employees in an organisation",
      c: "Only individuals who work with sensitive information",
      d: "Everyone using devices and services that can contain personal or sensitive information",
    },
    correctAnswer: "d",
  },
  {
    question: "How can security awareness training be delivered?",
    answers: {
      a: "Through in-person training sessions",
      b: "Through online courses",
      c: "Through email notifications",
      d: "All of the above",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the goal of security awareness training?",
    answers: {
      a: "To make you a cybersecurity expert",
      b: "To make you aware of potential cyber threats",
      c: "To teach you how to hack into computer systems",
      d: "To increase your social media followers",
    },
    correctAnswer: "b",
  },
];
export default myQuestions;
