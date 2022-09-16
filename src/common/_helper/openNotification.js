import { notification } from 'antd';

export const openNotification = (type, notificationTitle, notificationMessage) => {
    notification[type]({
      message: notificationTitle,
      description: notificationMessage
    });
};