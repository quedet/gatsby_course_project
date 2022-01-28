import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

function UsersPage({ pageContext: { users }}) {
    return <Layout title={'Users Page'}>
        <div className='users'>
            <div className='users__wrapper'>
                <header className='users__header'>
                    <h1 className="title"><span className="title__text__secondary">Users</span>{' '}<span className="title__text__emphasis">Page</span></h1>
                </header>
                <section className='users__content'>
                    {users && users.map(user => (
                        <article key={user.id}>
                            <p><Link to={'/users/' + user.id}>{user.name}</Link></p>
                        </article>
                    ))}
                </section>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit duis eleifend proin mattis ipsum at ex turpis elementum eros venenatis consectetur. Posuere cursus dictumst vivamus consectetur laoreet lobortis turpis finibus justo duis varius inceptos egestas mi.
                    Tempor integer blandit auctor accumsan consectetur nunc nisi aliquam felis potenti sit mattis. Sodales lobortis faucibus facilisis suscipit etiam. Gravida mattis leo aptent dictumst torquent sodales felis odio nam laoreet interdum per maximus. Amet proin nibh himenaeos platea amet scelerisque scelerisque curabitur malesuada donec arcu. Habitasse viverra volutpat nibh molestie id amet lobortis nunc placerat ultrices ante consectetur.
                    Purus ligula proin lectus luctus cubilia non lacinia <br /> <br /> <br /> inceptos morbi egestas. Sodales vivamus torquent volutpat suspendisse posuere convallis hendrerit quisque curae elit nostra lacus commodo sociosqu quam.
                    Mollis et hendrerit nisl tincidunt nisl enim nunc vivamus netus habitasse. Quam nec varius eu aenean faucibus et maximus nullam leo sagittis. Dapibus malesuada ornare luctus molestie interdum quis conubia vivamus. Cursus est porttitor nulla netus consectetur at.
                    Ligula accumsan consectetur lobortis neque risus accumsan iaculis. Fusce volutpat porttitor nunc ultrices tincidunt curae molestie nisi ornare velit. Purus netus dui velit rutrum taciti in ipsum iaculis cursus sit semper dignissim magna velit. Ut placerat gravida cursus hac posuere. Euismod enim litora porttitor egestas elementum.
                    Ipsum nunc urna pellentesque lobortis et mauris netus <br /> <br /> <br />vestibulum nulla turpis venenatis blandit hendrerit nisl sit. Gravida per ex venenatis scelerisque quisque enim eleifend eleifend nulla in nibh in aliquet.
                    Libero fames eleifend commodo ipsum fames orci convallis venenatis torquent consectetur libero dictum hendrerit cras. Eleifend dictumst semper magna commodo dui aptent morbi egestas rutrum felis accumsan.
                    Semper dolor eget nisi ex pulvinar dolor diam mauris. Odio inceptos morbi auctor nostra maximus proin gravida ex ante.
                </p> */}
            </div>
        </div>
    </Layout>
}

export default UsersPage;
