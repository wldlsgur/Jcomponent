import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../../libs';

/**
 * ## Modal 컴포넌트
 * 이 컴포넌트는 모달 창을 표시합니다. `visible` 속성을 통해 모달의 표시 여부를 제어할 수 있습니다.
 *
 * ### 속성(Props)
 * - **visible:** 모달의 표시 여부를 제어합니다. `true`일 때 모달이 화면에 표시됩니다.
 * - **children:** 모달 내부에 표시될 콘텐츠입니다.
 * - **onClose:** 모달을 닫는 함수입니다.
 * - **backgroundColor:** 모달 배경의 색상을 설정합니다. (DefaultValue = '#23232390')
 * - **zIndex:** 모달의 z-index를 설정합니다. (DefaultValue = 999)
 * - **...rest:** Background의 `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default**
 *    - 모달이 작동하는 사용 사례입니다.
 */

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: 'boolean',
      description: '모달의 표시 여부를 제어합니다.',
    },
    children: {
      control: 'object',
      description: '모달 내부에 표시될 React.Node 타입 콘텐츠',
    },
    onClose: {
      action: 'clicked',
      description: '모달을 닫는 함수',
    },
    backgroundColor: {
      control: 'color',
      description: '모달 배경의 색상을 설정합니다.',
    },
    zIndex: {
      control: 'number',
      description: '모달의 z-index를 설정합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story, { args }) => {
      const [visible, setVisible] = useState(false);

      return (
        <div>
          <button
            type='button'
            onClick={() => setVisible(true)}
          >
            모달 버튼
          </button>
          <Story
            args={{
              backgroundColor: args.backgroundColor,
              zIndex: args.zIndex,
              visible,
              onClose: () => setVisible(false),
              children: (
                <div
                  style={{
                    width: '500px',
                    height: '500px',
                    backgroundColor: 'yellow',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  콘텐츠
                </div>
              ),
            }}
          />
        </div>
      );
    },
  ],
};
