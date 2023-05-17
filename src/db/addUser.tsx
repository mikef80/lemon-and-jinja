// Home component
const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
    };

    const name = target.name.value;
    const email = target.email.value;
    // we must pass an Id since it's our primary key declared in our createObjectStoreMethod  { keyPath: 'id' }
    const id = Date.now();

    if (name.trim() === '' || email.trim() === '') {
      alert('Please enter a valid name and email');
      return;
    }

    try {
      const res = await addData(Stores.Users, { name, email, id });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

// ...

{!isDBReady ? (
  <button onClick={handleInitDB}>Init DB</button>
) : (
  <>
    <h2>DB is ready</h2>
    {/* add user form */}
    <form onSubmit={handleAddUser}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Add User</button>
    </form>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </>
)}