import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import {
    endAt,
    get,
    onValue,
    orderByChild,
    push,
    query,
    ref,
    remove,
    set,
    startAt,
    update,
} from 'firebase/database';
import noData from '../Realtime-firestore/image/undraw_Empty_re_opql.png';

const User = () => {
    const [input, setInput] = useState({});
    const [originalUser, setOriginalUser] = useState([]);
    const [user, setUser] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [gender, setGender] = useState('');
    const [noRecord, setNoRecord] = useState(false);
    const [find, setFind] = useState('')


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (user.length === 0) {
            setNoRecord(true);
        } else {
            setNoRecord(false);
        }
    }, [user]);

    const fetchData = () => {
        const dbRef = ref(db, 'users');

        onValue(dbRef, (snapshot) => {
            var list = [];
            snapshot.forEach((childSnapshot) => {
                const key = childSnapshot.key;
                const data = childSnapshot.val();
                list.push({ key, ...data });
            });
            setOriginalUser(list);
            setUser(list);
        });
    };


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleDelete = (id) => {
        const dbRef = ref(db, `users/${id}`);
        remove(dbRef).then(() => {
            console.log('success..');
        });
    };

    const handleEdit = (id) => {
        const dbRef = ref(db, `users/${id}`);
        get(dbRef).then((item) => {
            var data = item.val();
            setInput({ ...input, ...data });
            setIsEdit(true);
            setEditId(id);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit && editId) {
            const userRef = ref(db, `users/${editId}`);
            update(userRef, input).then();
            setIsEdit(false);
            setEditId('');
            setInput({ name: '', email: '', gender: '' });
        } else {
            const dbRef = ref(db, 'users');
            const newRef = push(dbRef);
            set(newRef, input).then(() => {
                setInput({ name: '', email: '', gender: '' });
            });
        }
    };

    // ---------------------------------Sorting---------------------------------------------//

    const sortUser = () => {
        const orderType = sortOrder === 'asc' ? 'desc' : 'asc';
        const sortedList = [...user];

        sortedList.sort((a, b) => {
            if (orderType === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        setUser(sortedList);
        setSortOrder(orderType);
    };

    //----------------------------Filter-----------------------------------//

    const handleGender = (e) => {
        const findValue = e.target.value;
        setGender(findValue);
        if (findValue === "All") {
            setUser(originalUser);
        } else {
            const filteredList = originalUser.filter((item) => item.gender === findValue);
            setUser(filteredList);
        }

    };

    // -----------------------------Searching-------------------------------------//

    const handleFind = (e) => {
        const findValue = e.target.value.toLowerCase();
        setFind(findValue)

        const userRef = ref(db, "users")
        const recentPostsRef = query(userRef, orderByChild('name'), startAt(findValue), endAt(findValue + '\uf8ff'))

        onValue(recentPostsRef, (snapshot) => {
            var list = []
            snapshot.forEach((snapchild) => {
                var id = snapchild.key
                var data = snapchild.val()
                var details = { id, ...data }
                list.push(details)
            })
            setUser(list)
        })

    }

    return (
        <div className="container">
            <div className="form mt-5">
                <div className="d-flex align-items-center justify-content-between ">
                    <h3 className="m-0">User List</h3>
                    <div className="d-flex">
                        <div className='ms-3'>
                            <input type="text" placeholder="User..." name='find' className='input'  onChange={handleFind}></input>
                        </div>
                        <div className='ms-3'>
                            <select
                                className="w-100 input"
                                name="gender"
                                onChange={handleGender}
                                value={gender}
                                required
                            >
                                <option value="">--Gender--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                <option value="All">All</option>
                            </select>
                        </div>
                        <button className="button-confirm ms-3" onClick={sortUser}>
                            Sort {sortOrder === 'asc' ? <i className="fa-solid fa-circle-up ms-2"></i> : <i className="fa-solid fa-circle-down ms-2"></i>}
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-4">
                    <form className="form d-flex flex-column justify-content-center align-items-start " onSubmit={handleSubmit}>
                        <div className="title">
                            Welcome,<span className="d-block">sign up to continue</span>
                        </div>
                        <input type="name" placeholder="Name" name="name" className="input w-100 " onChange={handleChange} value={input ? input.name : ''} required />
                        <input type="email" placeholder="Email" name="email" className="input w-100 " onChange={handleChange} value={input ? input.email : ''} required />
                        <select className="w-100 input" name="gender" onChange={handleChange} value={input ? input.gender : ''} required>
                            <option value="">--Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <button className="button-confirm mt-3 mx-auto ">{isEdit ? 'Update User →' : 'Add User →'}</button>
                    </form>
                </div>
                <div className="col-8">
                    <table className="table form ">
                        <thead className="thead-bg-dark ">
                            <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {noRecord ? (
                                <>
                                    <tr>
                                        <td className="text-center fw-bold pe-0 py-3 fs-3 text-danger" colSpan={6}>
                                            <img src={noData} alt="" className="d-block m-auto" width="150px" />
                                            No Record Found
                                        </td>
                                    </tr>
                                </>
                            ) : (
                                user.map((item, id) => {
                                    return (
                                        <tr key={item.key}>
                                            <td>{id + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.gender}</td>
                                            <td>
                                                <button className="btn btn-danger " onClick={() => handleDelete(item.key)}>
                                                    Delete
                                                </button>
                                                <button className="btn btn-success ms-2" onClick={() => handleEdit(item.key)}>
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;
