import React, { useState, useEffect } from "react";

export const Contract = () => {
  const [employeeName, setEmployeeName] = useState("__________");

  const handleClickEmployeeName = (event) => {
    console.log(window.Flutter);
    sendMessageToFlutter("inputEmployeeName");
  };

  // Flutter로 메시지 전송
  // eslint-disable-next-line
  //@ts-ignore

  const sendMessageToFlutter = (message) => {
    // eslint-disable-next-line no-undef
    messageHandler.postMessage(message);
  };

  useEffect(() => {
    // Flutter로부터 메시지 수신
    // eslint-disable-next-line no-undef
    messageHandler.postMessageToReact = (message) => {
      console.log("Message from Flutter:", message);
      // 메시지 처리 로직
      if (typeof message == "string") {
        setEmployeeName(message);
      }
    };
  });
  return (
    <div class="gray_box1 a4-paper">
      <div
        style={{
          position: "relative",
          display: "block",
          padding: "40px 30px",
        }}
        id="div_ex"
      >
        <h2 style={{ textAlign: "center" }}>표준근로계약서(작성방법)</h2>
        <div>
          <br />
          <button onClick={handleClickEmployeeName}>{employeeName}</button>(이하
          “사업주”라 함)과(와) __________ (이하 “근로자”라 함)은 다음과 같이
          근로계약을 체결한다.
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>
            1. 근로계약기간 : &nbsp;&nbsp;&nbsp;&nbsp;년
            &nbsp;&nbsp;&nbsp;&nbsp;월 &nbsp;&nbsp;&nbsp;&nbsp; 일부터
            &nbsp;&nbsp;&nbsp;&nbsp; 년 &nbsp;&nbsp;&nbsp;&nbsp; 월
            &nbsp;&nbsp;&nbsp;&nbsp; 일까지
            <br />
            &nbsp;&nbsp;※ 근로계약기간을 정하지 않는 경우에는 “근로개시일”만
            기재
          </p>
          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 노사가 협의하여 결정하는 일을 하기로 한 기간
          </strong>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>2. 근 무 장 소 :</p>
          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 일을 수행하기 위한 장소를 명기
          </strong>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>3. 업무의 내용 : </p>
          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 어떤 일을 할지에 대한 내용을 기재
          </strong>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>
            4. 소정근로시간 : &nbsp;&nbsp;&nbsp; 시 &nbsp;&nbsp;&nbsp; 분부터
            &nbsp;&nbsp;&nbsp; 시 &nbsp;&nbsp;&nbsp; 분까지 (휴게시간 :
            &nbsp;&nbsp;&nbsp; 시 &nbsp;&nbsp;&nbsp; 분~ &nbsp;&nbsp;&nbsp; 시
            &nbsp;&nbsp;&nbsp; 분)
          </p>
          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 노사가 법정근로시간 내(하루 8시간, 주40시간)에서 하루에 몇시간을
            일할지 정한 시간을 기재휴게시간은 4시간에 30분, 8시간인 경우 1시간
            이상을 주도록 소정근로시간 내에서 기재함
          </strong>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>
            5. 근무일/휴일 : 매주 &nbsp;&nbsp;&nbsp;&nbsp; 일(또는
            매일단위)근무, 주휴일 매주 요일
          </p>

          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 일주일 중 어떤날에 근무할지를 명기하며, 주 중 근무하기로 한날을
            만근 하였을 경우 부여하는 유급휴일(주휴일)을 어느 요일로 할지
            결정하여 명기
          </strong>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>
            6. 임 금 <br />
            &nbsp;&nbsp;- 월(일, 시간)급 : ________________ 원
          </p>

          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 임금을 시간급으로 정할지, 주급으로 정할지, 월급으로 정할지
            결정하여 그 금액 명기
          </strong>
          <p>
            &nbsp;&nbsp;- 상여금 : 있음 ( &nbsp;&nbsp; ) ________________ 원,
            없음 ( &nbsp;&nbsp; )
          </p>

          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 상여금이 있으면 그 내용 및 금액에 대해 기재
          </strong>
          <p>
            &nbsp;&nbsp;- 기타급여(제수당 등) : 있음 ( &nbsp;&nbsp; ), 없음 (
            &nbsp;&nbsp; ) <br />
            _____________________원,
            &nbsp;&nbsp;&nbsp;&nbsp;_____________________원
            <br />
            _____________________원,
            &nbsp;&nbsp;&nbsp;&nbsp;_____________________원
          </p>

          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 가족수당, 자격증 수당 등 지급하기로 한 수당이 있으면 해당 내용에
            대해 기재
          </strong>
          <p>
            &nbsp;&nbsp;- 임금지급일 : 매월(매주 또는 매일) _______일(휴일의
            경우는 전일 지급)
          </p>

          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 임금을 매월 언제 지급할 것인지에 대해 기재
          </strong>
          <p>
            &nbsp;&nbsp;- 지급방법 : 근로자에게 직접지급( &nbsp;&nbsp; ), 근로자
            명의 예금통장에 입금( &nbsp;&nbsp; )
          </p>
          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 임금을 계좌로 지급할 것인지 등에 대해 노사간 협의 후 기재
          </strong>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>
            7. 연차유급휴가
            <br />
            &nbsp;&nbsp;- 연차유급휴가는 근로기준법에서 정하는 바에 따라 부여함
          </p>

          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ ①1년간 총 소정근로일의 80%이상 출근자에게 15일부여, 1년 초과 매
            2년마다 1일씩 가산, 한도 25일 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;②1년 미만 또는 1년간 80% 미만 출근자에게
            1개월 개근시 1일 부여
          </strong>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>
            8. 사회보험 적용여부(해당란에 체크) <br />□ 고용보험
            &nbsp;&nbsp;&nbsp; □ 산재보험 &nbsp;&nbsp;&nbsp; □ 국민연금
            &nbsp;&nbsp;&nbsp; □ 건강보험
          </p>

          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 사회보험 적용에 대한 해당 내용을 기재
          </strong>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>
            9. 근로계약서 교부
            <br />- 사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여
            근로자의 교부요구와 관계없이 근로자에게 교부함(근로기준법 제17조
            이행)
          </p>

          <strong
            style={{
              color: "#274FC5",
            }}
          >
            ☞ 근로기준법 제17조에 따라 근로계약 체결시 근로자에게 교부하여야
            함을 알려주는 내용
          </strong>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>
            10. 근로계약, 취업규칙 등의 성실한 이행의무
            <br />- 사업주와 근로자는 각자가 근로계약, 취업규칙, 단체협약을
            지키고 성실하게 이행하여야 함
          </p>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <p>
            11. 기타
            <br />
            &nbsp;&nbsp;- 이 계약에 정함이 없는 사항은 근로기준법령에 의함
          </p>
          <p
            style={{
              textAlign: "right",
            }}
          >
            년 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 월
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 일<br />
            <br />
            (사업주) 사업체명 :
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            (전화 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )<br />
            주 소
            :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            대 표 자 :
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            (서명) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            (근로자) 주 소
            :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            연 락 처
            :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            성 명 :
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            (서명) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contract;
