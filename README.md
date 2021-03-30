# pgp-login

Let's verify users by allowing them to create/provide a public key. Using the public key lets encrypt a message and have the user decrypt the message, presumably in the terminal or from wherever they have access to be a decrypt method as well as the correspondent private key.

## Organize

### Steps

1. Enter public key
2. Generate and Display Encryped Message
3. Retrieve decrypted message
4. Accept or Reject
5. Logout/startover


Let's go with a component that will contain a switch/case statement for each step + a variable that can be controlled from each step/sub-component. 
