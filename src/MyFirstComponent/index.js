import Avatar from '../Avatar'

function Profile() {
  return (
    <>
      <Avatar 
        size = {500}
        person = {{
            name: '蓝花', 
            imageId: 'photo/2021/09/13/08/18/blue-flower-6620619_640'
        }}
      />
      <Avatar
        size={400}
        person={{
          name: '天鹅', 
          imageId: 'photo/2024/01/15/19/40/animal-8510775_640'
        }}
      />
      <Avatar
        person={{ 
          name: '兔子',
          imageId: 'photo/2023/03/12/14/08/bunny-7847028_640'
        }}
      />
    </>
  )
}

export default Profile;