import { useContext, useState } from "react";
import { supabase } from "../../supabaseClient";
import { View, Text, Pressable, Alert, TextInput } from "react-native";
import { spacing, margins, containers } from "../styleSheet";
import { AuthContext } from "../contexts/tokenContext";


export default function SigninSignup({navigation}){

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ loading, setLoading ] = useState(false)

  const { updateToken } = useContext(AuthContext)

  const signInWithEmail = async () => {
      setLoading(true);
      try {
        const { data: { session }, error } = await supabase.auth.signInWithPassword({
          display_name: username,
          email: email,
          password: password,
        });
    
        if (error) {
          console.log(error)
          Alert.alert(error.message);
        } else {
          updateToken(session.access_token)
        }
        }catch(error){
        Alert.alert('An error occurred while signing in.');
        }
      setLoading(false);
    };

  const signUpWithEmail = async () => {
      setLoading(true);
      try {
        const { data: { session }, error } = await supabase.auth.signUp({
          display_name: username,
          email: email,
          password: password,
        });
    
        if (error) {
          Alert.alert(error.message);
        } else if (!session) {
          Alert.alert('Please check your inbox for email verification!');
        } else {
          console.log(session)
          updateToken(session.access_token)
        }
      } catch (error) {
        Alert.alert('An error occurred while signing up.');
      }
      setLoading(false);
    }

    // This code was within sign up Email. I do not think i need it. 
    // else if (!session) {
    //   Alert.alert('Please check your inbox for email verification!');
    // }

  return(
      <View style={containers.basicContainer}>
          <View style={[spacing.verticallySpaced, margins.mt20]}>
              <TextInput
                  label='Username'
                  leftIcon={{ type: 'font-awesome', name: 'person'}}
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                  placeholder='Username'
                  autoCapitalize={'none'}
              />
          </View>
          <View style={[spacing.verticallySpaced]}>
              <TextInput
                  label='Email'
                  leftIcon={{ type: 'font-awesome', name: 'envelope'}}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  placeholder='Email'
                  autoCapitalize={'none'}
              />
          </View>
          <View style={spacing.verticallySpaced}>
              <TextInput  
                  label='Password'
                  leftIcon={{ type: 'font-awesome', name: 'lock'}}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  secureTextEntry={true}
                  placeholder='Password'
                  autoCapitalize={'none'}
              />
          </View>
          <View style={[spacing.verticallySpaced, margins.mt20]}>
              <Pressable onPress={() => signInWithEmail()} disabled={loading}>
                  <Text>Sign in</Text>
              </Pressable>
          </View>
          <View style={spacing.verticallySpaced}>
              <Pressable onPress={() => signUpWithEmail()} disabled={loading}>
                  <Text>Sign up</Text>
              </Pressable>            
          </View>
      </View>
  )

}
