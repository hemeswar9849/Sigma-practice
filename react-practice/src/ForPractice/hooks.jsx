const Hooks = ({toggler}) => {
  console.log(toggler);
  return (
    <>
    {toggler && <div id='hooks'>
      This is a hook
    </div>}
    </>
  )
}

export default Hooks;

// const Hooks = ({arrayOfStudents, index}) => {

//   return (
//     <div id='hooks'>
//       This is a hook
//       {/* {index} */}
//       {arrayOfStudents[index]}
//     </div>
//   )
// }

// export default Hooks;
