import React from 'react'

const ProfilePage = ({ params }: {
    params: {
        id: string
    }
}) => {
    return (
        <div>

            {params.id}
            ProfilePage</div>
    )
}

export default ProfilePage