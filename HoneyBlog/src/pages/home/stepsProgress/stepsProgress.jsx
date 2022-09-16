import '../stepsProgress/stepsProgress.scss'
import React, { useState } from 'react';
import { Button, Steps } from 'antd';

import { useTranslation } from '../../../common/_hooks/useTranslation';
const { Step } = Steps;

const StepsProgress = () => {
  const [current, setCurrent] = useState(0);
  const translate = useTranslation();

  const steps = [
    {
      title: translate('firstStepTitle'),
      content: translate('firstStepContent'),
    },
    {
      title: translate('secondStepTitle'),
      content: translate('secondStepContent'),
    },
    {
      title: translate('thirdStepTitle'),
      content: translate('thirdStepContent'),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            {translate('next')}
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={prev}
          >
            {translate('previous')}
          </Button>
        )}
      </div>
    </>
  );
};

export default StepsProgress;