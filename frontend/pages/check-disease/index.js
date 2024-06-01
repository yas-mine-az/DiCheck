import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Select from 'react-select';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef(null);
  const [userName, setUserName] = useState('Loading...');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [userId, setUserId] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      router.push('/login');
    } else {
      setLoading(false);
      setUserId(user._id);
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (userId) {
        const res = await axios.get(`http://localhost:8080/api/user/one/${userId}`);
        console.log(res.data);
        setUserName(res.data.first_name + ' ' + res.data.last_name);
      }
    };

    fetchProfile();
  }, [userId]);

  return (
    <header className="flex gap-5 justify-between px-8 py-8 w-full bg-white rounded-3xl border border-violet-100 border-solid shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between max-md:flex-wrap">
        <div className="flex gap-5 text-base font-semibold leading-4 text-slate-800">
          <img
            loading="lazy"
            src="/images/dicheck_logo.svg"
            className="shrink-0 w-12 aspect-square"
            alt="DiCheck logo"
          />
          <div style={{ fontFamily: 'Montserrat-Bold', fontSize: '20px' }} className="my-auto">
            <a href="/homepage">DiCheck</a>
          </div>
          <div style={{ borderLeft: '3px solid #2d3748', height: '30px', alignSelf: 'center' }}></div>
          <div style={{ fontFamily: 'Montserrat-Regular', fontSize: '18 px', fontWeight: '400', letterSpacing: '1px' }} className="my-auto text-neutral-500">
            <p>Your trusted health partner</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between text-sm font-medium leading-6 text-gray-900">
        <div className="flex gap-5 items-center relative">
          <img
            loading="lazy"
            src="/images/ava_default.png"
            className="shrink-0 self-stretch w-12 aspect-square"
            alt="User Avatar"
          />
          <div style={{ fontFamily: 'Montserrat-Bold', fontSize: '15px' }} className="text-slate-800 self-stretch my-auto mr-8">
            <p>{userName}</p>
            <p className="text-neutral-500" style={{fontFamily: 'Montserrat-Light'}}>User</p>
          </div>
          <img
            onClick={toggleDropdown}
            loading="lazy"
            src="/images/dropdown_icon.svg"
            className="shrink-0 self-stretch my-auto w-6 aspect-square cursor-pointer"
            alt="Dropdown Icon"
          />
          {isOpen && (
            <div style={{fontFamily: 'Montserrat-Semibold', top: '2em', right: '0'}} ref={dropdownRef} className="absolute w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-slate-800 hover:text-white" onClick={() => localStorage.removeItem('user')}>Log Out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function MyComponent() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState('');

    const router = useRouter();

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        router.push('/login');
      } else {
        setLoading(false);
        setUserId(user._id);
      }
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    const handleCheckNow = async () => {
      if (selectedOptions.length === 0) {
        toast.error('Mohon pilih gejala yang dialami!', {
          position: "top-center",
          autoClose: 2000,
        });
        return;
      }
    
      Swal.fire({
        title: 'Konfirmasi',
        text: 'Deteksi ini pakai teknologi Machine Learning, tapi nggak selalu 100% bener. Cuma jadikan referensi awal aja, ya. Lebih baik konsultasi sama dokter buat langkah selanjutnya 😊',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Okey, saya mengerti 👍',
        cancelButtonText: 'Batal'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await fetch(`http://127.0.0.1:8000/predict?user_id=${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              symptoms: selectedOptions.map(option => option.value),
            }),
          });
    
          const data = await response.json();
    
          router.push(`/${data.record_id}`);
        }
      });
    };

    const options = [
      { value: 'itching', label: 'Itching' },
      { value: 'skin_rash', label: 'Skin Rash' },
      { value: 'nodal_skin_eruptions', label: 'Nodal Skin Eruptions' },
      { value: 'continuous_sneezing', label: 'Continuous Sneezing' },
      { value: 'shivering', label: 'Shivering' },
      { value: 'chills', label: 'Chills' },
      { value: 'joint_pain', label: 'Joint Pain' },
      { value: 'stomach_pain', label: 'Stomach Pain' },
      { value: 'acidity', label: 'Acidity' },
      { value: 'ulcers_on_tongue', label: 'Ulcers on Tongue' },
      { value: 'muscle_wasting', label: 'Muscle Wasting' },
      { value: 'vomiting', label: 'Vomiting' },
      { value: 'burning_micturition', label: 'Burning Micturition' },
      { value: 'spotting_urination', label: 'Spotting Urination' },
      { value: 'fatigue', label: 'Fatigue' },
      { value: 'weight_gain', label: 'Weight Gain' },
      { value: 'anxiety', label: 'Anxiety' },
      { value: 'cold_hands_and_feets', label: 'Cold Hands and Feets' },
      { value: 'mood_swings', label: 'Mood Swings' },
      { value: 'weight_loss', label: 'Weight Loss' },
      { value: 'restlessness', label: 'Restlessness' },
      { value: 'lethargy', label: 'Lethargy' },
      { value: 'patches_in_throat', label: 'Patches in Throat' },
      { value: 'irregular_sugar_level', label: 'Irregular Sugar Level' },
      { value: 'cough', label: 'Cough' },
      { value: 'high_fever', label: 'High Fever' },
      { value: 'sunken_eyes', label: 'Sunken Eyes' },
      { value: 'breathlessness', label: 'Breathlessness' },
      { value: 'sweating', label: 'Sweating' },
      { value: 'dehydration', label: 'Dehydration' },
      { value: 'indigestion', label: 'Indigestion' },
      { value: 'headache', label: 'Headache' },
      { value: 'yellowish_skin', label: 'Yellowish Skin' },
      { value: 'dark_urine', label: 'Dark Urine' },
      { value: 'nausea', label: 'Nausea' },
      { value: 'loss_of_appetite', label: 'Loss of Appetite' },
      { value: 'pain_behind_the_eyes', label: 'Pain Behind the Eyes' },
      { value: 'back_pain', label: 'Back Pain' },
      { value: 'constipation', label: 'Constipation' },
      { value: 'abdominal_pain', label: 'Abdominal Pain' },
      { value: 'diarrhoea', label: 'Diarrhoea' },
      { value: 'mild_fever', label: 'Mild Fever' },
      { value: 'yellow_urine', label: 'Yellow Urine' },
      { value: 'yellowing_of_eyes', label: 'Yellowing of Eyes' },
      { value: 'acute_liver_failure', label: 'Acute Liver Failure' },
      { value: 'fluid_overload', label: 'Fluid Overload' },
      { value: 'swelling_of_stomach', label: 'Swelling of Stomach' },
      { value: 'swelled_lymph_nodes', label: 'Swelled Lymph Nodes' },
      { value: 'malaise', label: 'Malaise' },
      { value: 'blurred_and_distorted_vision', label: 'Blurred and Distorted Vision' },
      { value: 'phlegm', label: 'Phlegm' },
      { value: 'throat_irritation', label: 'Throat Irritation' },
      { value: 'redness_of_eyes', label: 'Redness of Eyes' },
      { value: 'sinus_pressure', label: 'Sinus Pressure' },
      { value: 'runny_nose', label: 'Runny Nose' },
      { value: 'congestion', label: 'Congestion' },
      { value: 'chest_pain', label: 'Chest Pain' },
      { value: 'weakness_in_limbs', label: 'Weakness in Limbs' },
      { value: 'fast_heart_rate', label: 'Fast Heart Rate' },
      { value: 'pain_during_bowel_movements', label: 'Pain During Bowel Movements' },
      { value: 'pain_in_anal_region', label: 'Pain in Anal Region' },
      { value: 'bloody_stool', label: 'Bloody Stool' },
      { value: 'irritation_in_anus', label: 'Irritation in Anus' },
      { value: 'neck_pain', label: 'Neck Pain' },
      { value: 'dizziness', label: 'Dizziness' },
      { value: 'cramps', label: 'Cramps' },
      { value: 'bruising', label: 'Bruising' },
      { value: 'obesity', label: 'Obesity' },
      { value: 'swollen_legs', label: 'Swollen Legs' },
      { value: 'swollen_blood_vessels', label: 'Swollen Blood Vessels' },
      { value: 'puffy_face_and_eyes', label: 'Puffy Face and Eyes' },
      { value: 'enlarged_thyroid', label: 'Enlarged Thyroid' },
      { value: 'brittle_nails', label: 'Brittle Nails' },
      { value: 'swollen_extremeties', label: 'Swollen Extremeties' },
      { value: 'excessive_hunger', label: 'Excessive Hunger' },
      { value: 'extra_marital_contacts', label: 'Extra Marital Contacts' },
      { value: 'drying_and_tingling_lips', label: 'Drying and Tingling Lips' },
      { value: 'slurred_speech', label: 'Slurred Speech' },
      { value: 'knee_pain', label: 'Knee Pain' },
      { value: 'hip_joint_pain', label: 'Hip Joint Pain' },
      { value: 'muscle_weakness', label: 'Muscle Weakness' },
      { value: 'stiff_neck', label: 'Stiff Neck' },
      { value: 'swelling_joints', label: 'Swelling Joints' },
      { value: 'movement_stiffness', label: 'Movement Stiffness' },
      { value: 'spinning_movements', label: 'Spinning Movements' },
      { value: 'loss_of_balance', label: 'Loss of Balance' },
      { value: 'unsteadiness', label: 'Unsteadiness' },
      { value: 'weakness_of_one_body_side', label: 'Weakness of One Body Side' },
      { value: 'loss_of_smell', label: 'Loss of Smell' },
      { value: 'bladder_discomfort', label: 'Bladder Discomfort' },
      { value: 'foul_smell_ofurine', label: 'Foul Smell of Urine' },
      { value: 'continuous_feel_of_urine', label: 'Continuous Feel of Urine' },
      { value: 'passage_of_gases', label: 'Passage of Gases' },
      { value: 'internal_itching', label: 'Internal Itching' },
      { value: 'toxic_look_typhos', label: 'Toxic Look (Typhos)' },
      { value: 'depression', label: 'Depression' },
      { value: 'irritability', label: 'Irritability' },
      { value: 'muscle_pain', label: 'Muscle Pain' },
      { value: 'altered_sensorium', label: 'Altered Sensorium' },
      { value: 'red_spots_over_body', label: 'Red Spots Over Body' },
      { value: 'belly_pain', label: 'Belly Pain' },
      { value: 'abnormal_menstruation', label: 'Abnormal Menstruation' },
      { value: 'dischromic_patches', label: 'Dischromic Patches' },
      { value: 'watering_from_eyes', label: 'Watering from Eyes' },
      { value: 'increased_appetite', label: 'Increased Appetite' },
      { value: 'polyuria', label: 'Polyuria' },
      { value: 'family_history', label: 'Family History' },
      { value: 'mucoid_sputum', label: 'Mucoid Sputum' },
      { value: 'rusty_sputum', label: 'Rusty Sputum' },
      { value: 'lack_of_concentration', label: 'Lack of Concentration' },
      { value: 'visual_disturbances', label: 'Visual Disturbances' },
      { value: 'receiving_blood_transfusion', label: 'Receiving Blood Transfusion' },
      { value: 'receiving_unsterile_injections', label: 'Receiving Unsterile Injections' },
      { value: 'coma', label: 'Coma' },
      { value: 'stomach_bleeding', label: 'Stomach Bleeding' },
      { value: 'distention_of_abdomen', label: 'Distention of Abdomen' },
      { value: 'history_of_alcohol_consumption', label: 'History of Alcohol Consumption' },
      { value: 'fluid_overload', label: 'Fluid Overload' },
      { value: 'blood_in_sputum', label: 'Blood in Sputum' },
      { value: 'prominent_veins_on_calf', label: 'Prominent Veins on Calf' },
      { value: 'palpitations', label: 'Palpitations' },
      { value: 'painful_walking', label: 'Painful Walking' },
      { value: 'pus_filled_pimples', label: 'Pus Filled Pimples' },
      { value: 'blackheads', label: 'Blackheads' },
      { value: 'scurring', label: 'Scurring' },
      { value: 'skin_peeling', label: 'Skin Peeling' },
      { value: 'silver_like_dusting', label: 'Silver Like Dusting' },
      { value: 'small_dents_in_nails', label: 'Small Dents in Nails' },
      { value: 'inflammatory_nails', label: 'Inflammatory Nails' },
      { value: 'blister', label: 'Blister' },
      { value: 'red_sore_around_nose', label: 'Red Sore Around Nose' },
      { value: 'yellow_crust_ooze', label: 'Yellow Crust Ooze' },
      { value: 'prognosis', label: 'Prognosis' }
  ];
   
  
    return (
      <div className="p-10 bg-slate-50 max-md:px-5 w-full h-screen">
        <ToastContainer />
        <Navbar />
        <section className="px-8 py-8 mt-10 bg-white rounded-3xl border border-violet-100 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-2 gap-5 max-md:flex-col max-md:gap-0" style={{ gridTemplateColumns: '1.5fr 2fr' }}>
            <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
              <header className="flex grow gap-5 font-medium max-md:mt-5">
                <h2 style={{ fontFamily: 'Montserrat-Bold', fontSize: '25px' }} className="grow text-base leading-6 text-slate-800 w-fit">
                  Cek Sekarang
                </h2>
              </header>
              <p style={{ fontFamily: 'Montserrat-Regular', fontSize: '17px', fontWeight: '400' }} className="text-neutral-500 mt-5">Segera cek gejala dan berikan penanganan awal</p>
              <p style={{ fontFamily: 'Montserrat-Regular', fontSize: '17px', fontWeight: '400' }} className="text-neutral-500 mt-2">DiCheck siap membantu!</p>
            </div>
            <div className="flex flex-col items-end">
              <a>
              <button 
                className="px-10 py-4 text-sm font-bold tracking-wide leading-5 text-center text-white hover:bg-gray-900 whitespace-nowrap bg-gray-600 rounded-md max-md:px-5 max-md:mt-10 max-md:max-w-full" 
                style={{ fontFamily: 'Montserrat-Bold', alignSelf: 'center', marginTop: '20px' }}
                onClick={handleCheckNow}
              >
                Check Now
              </button>
              </a>
            </div>
          </div>
          <div className="py-10 grid grid-cols-1 gap-5 max-md:flex-col max-md:gap-0">
          <Select
            isMulti
            name="symptoms"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Pilih gejala yang Anda rasakan"
            onChange={setSelectedOptions}
            styles={{
                option: (provided, state) => ({ // style opsi
                ...provided,
                fontFamily: 'Montserrat-Regular',
                fontSize: '17px',
                color: state.isSelected ? 'white' : 'black',
                backgroundColor: state.isSelected ? 'blue' : state.isFocused ? 'lightgray' : 'white',
                cursor: 'pointer'
                }),
                control: (provided) => ({
                ...provided,
                fontFamily: 'Montserrat-Regular',
                fontSize: '17px',
                }),
                multiValueLabel: (provided) => ({
                ...provided,
                fontFamily: 'Montserrat-Regular',
                fontSize: '17px'
                }),
            }}
            />
          </div>
        </section>
      </div>
    );
  }

export default MyComponent;