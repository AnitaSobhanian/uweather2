import Component, { PageEl } from '@/components/Libs/Component';
import Window from '@/components/Libs/Window';

export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "PIXEL"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{
        minHeight: 200,
        margin: 10,
        width: "calc(100% - 20px)"
      }}>

        <c-x style={{
          backgroundImage: "url('https://cdn.ituring.ir/research/2/BG.JPG')",
          height: 667, width: 924, 
          fontFamily: "mnr", color: "#FFFFFF"
        }}>
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <f-25 style={{ paddingLeft: 150 }}> Weather: </f-25>
          <br-x />
          <br-x />

          <f-cse>

            <f-cc style={{
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: " 16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              height: "100px",
              width: "235px"
            }}>
              <img src="https://cdn.ituring.ir/research/2/temp.png"
                style={{ height: 50, objectFit: "contain" }} />
              <sp-2 />
              <f-cc>
                <f-20> {props.api.current_condition[0].FeelsLikeC}&deg;C </f-20>
              </f-cc>
            </f-cc>

            <f-cc style={{
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: " 16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid #FFFFFF4D",
              height: "100px",
              width: "235px"
            }}>
              <img src="https://cdn.ituring.ir/research/2/sunny.png"
                style={{ height: 50, objectFit: "contain" }} />
              <sp-2 />
              <f-cc>
                <f-20>{props.api.current_condition[0].weatherDesc[0].value}</f-20>
              </f-cc>
            </f-cc>
          </f-cse>

          <br-x />
          <br-x />

          <f-cc>
            <f-15>Developed By Turing Team.</f-15>
          </f-cc>

        </c-x>
      </Window >
    </div >
  )
}

export async function getServerSideProps(context) {
  var session = await global.SSRVerify(context);
  var { uid, name, image, imageprop, lang, cchar, unit,
    workspace, servid, servsecret, usedquota, quota,
    quotaunit, status, regdate, expid, role, path, devmuserip,
  } = session;


  let weather = await fetch("https://cdn.ituring.ir/research/api/weather/");
  let api = await weather.json();
  return {
    props: {
      data: global.QSON.stringify({
        session,
        api: api,
        // nlangs,
      }),
    },
  };
}