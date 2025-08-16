import { images} from '@/constants/images';
import { icons } from '@/constants/icons';
import { Image, ScrollView, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"></Image>
      <ScrollView className='flex-1 px-5' showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: '100%', paddingBottom: 10}}>
        <Image source={icons.logo} className='w-12 h-10 mt-20 mb-5 mx-auto'></Image>
      </ScrollView>
    </View>
  );
}
