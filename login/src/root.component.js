import '@laurencio-academy/style-guide';

// let name = publicApiFunction();

// console.log('>>> name', name);

import './root.component.css';

export default function Root(props) {
  console.log('>>> props', props);
  props.btnText = props.btnText || 'Submit';
  props.labelUsername = props.labelUsername || 'Username';
  props.labelPassword = props.labelPassword || 'Password';
  props.optionalText = props.optionalText || null;
  props.btnEvent = props.btnEvent || (() => {console.log('click!')});

  return (
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""/>
          <label>{props.labelUsername}</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""/>
          <label>{props.labelPassword}</label>
        </div>
        {props.optionalText && (<label style={{display:'block'}}>{props.optionalText}</label>)}
        <a href="javascript:{}" className='btn-radiant' onClick={props.btnEvent}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {props.btnText}
        </a>
      </form>
    </div>
  )
}

