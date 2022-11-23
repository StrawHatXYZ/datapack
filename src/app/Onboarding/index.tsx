import React, { useEffect } from 'react';
import { LocalStorageDb } from '../../backend/db';
import Form from './components/Form';
function Onboarding() {
  const ae = async function () {
    const accountexists = await LocalStorageDb.get('accountexists');
    console.log(accountexists);
    return accountexists;
  };
  useEffect(() => {
    console.log(ae);
  }, []);
  // const [storage, setStorage] = useState<string | null>(null);
  return (
    <div className="bg-gradient-to-r from-blue-400 to-emerald-400 h-screen flex flex-col justify-center items-center ">
      <div className="w-[375px] h-[600px] bg-gray-100 rounded-xl p-5 shadow-xl ">
        <Form />
      </div>
    </div>
  );
}

export default Onboarding;
