// src/hooks/useApi.ts
import { useState, useCallback } from 'react';
import api from '../services/api/api'; // Import the axios instance

// Custom hook for GET requests
export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<T>(url);
      setData(response.data);
    } catch (err: any) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, loading, error, fetchData };
};

// Custom hook for POST requests
export const usePost = <T>() => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postData = async (url: string, body: any): Promise<T> => {
      console.log("Backend Post Call");

      setLoading(true);
      setError(null);
      try {
        const response = await api.post<T>(url, body);
        return response.data;
      } catch (err: any) {
        setError(err.response?.data || err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    };

  return { loading, error, postData };
};

// Custom hook for PUT requests
export const usePut = <T>(url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const putData = useCallback(
    async (body: any): Promise<T> => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.put<T>(url, body);
        return response.data;
      } catch (err: any) {
        setError(err.response?.data || err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  return { loading, error, putData };
};

// Custom hook for DELETE requests
export const useDelete = <T>(url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteData = useCallback(async (): Promise<T> => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.delete<T>(url);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { loading, error, deleteData };
};

// Fetching data from API Example (TypeScript version)
// import React, { useEffect } from 'react';
// import { useFetch } from '../hooks/useApi';

// type User = {
//   id: number;
//   name: string;
// };

// const UserList: React.FC = () => {
//   const { data, loading, error, fetchData } = useFetch<User[]>('/users');

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       {data?.map((user) => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </div>
//   );
// };

// export default UserList;

// Post Request Example (TypeScript version)
// import React, { useState } from 'react';
// import { usePost } from '../hooks/useApi';

// const CreateUser: React.FC = () => {
//   const [name, setName] = useState('');
//   const { loading, error, postData } = usePost<{ id: number; name: string }>('/users');

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await postData({ name });
//       alert('User created successfully');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter name"
//       />
//       <button type="submit" disabled={loading}>
//         {loading ? 'Creating...' : 'Create User'}
//       </button>
//       {error && <p>Error: {error}</p>}
//     </form>
//   );
// };

// export default CreateUser;

// Deleting data example (TypeScript version)
// import React from 'react';
// import { useDelete } from '../hooks/useApi';

// const DeleteUser: React.FC<{ userId: number }> = ({ userId }) => {
//   const { loading, error, deleteData } = useDelete(`/users/${userId}`);

//   const handleDelete = async () => {
//     try {
//       await deleteData();
//       alert('User deleted successfully');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <button onClick={handleDelete} disabled={loading}>
//       {loading ? 'Deleting...' : 'Delete User'}
//     </button>
//   );
// };

// export default DeleteUser;
