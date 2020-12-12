import React, { useState } from "react";
import { Modal, Input, Typography } from "antd";
import { useMutation } from "@apollo/client";
import { LISTING } from "../../../../lib/graphql/mutations";
import {
  ShareVideo as YoutubeVideoData,
  ShareVideoVariables,
} from "../../../../lib/graphql/mutations/Listing/__generated__/ShareVideo";
import {
  displayErrorMessage,
  displaySuccessNotification,
} from "../../../../lib/utils";
import { Content } from "antd/lib/layout/layout";

interface Props {
  showModal: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  clearListingData: () => void;
}

const { Text, Title } = Typography;

export const ShareVideoModal = ({
  showModal,
  setModalVisible,
  clearListingData,
}: Props) => {
  const [inputVideoId, setInputVideoId] = useState("");
  const [
    video,
    { loading },
  ] = useMutation<YoutubeVideoData, ShareVideoVariables>(LISTING, {
    onCompleted: (data) => {
      if (data) {
        clearListingData();
        displaySuccessNotification(
          "You've successfully share the video!",
          "Video history can always be found in your User page."
        );
      }
    },
    onError: () => {
      displayErrorMessage(
        "Sorry! We weren't able to successfully share the video. Please try again later!"
      );
    },
  });

  if (loading) {
    return (
      <Content className="host-content">
        <div className="host__form-header">
          <Title level={3} className="host__form-title">
            Please wait!
          </Title>
          <Text type="secondary">We're creating your listing now.</Text>
        </div>
      </Content>
    );
  }

  const handleOk = () => {
    showModal = false;

    const getVideoId: string[] = [inputVideoId.split("v=")[1]];

    video({
      variables: {
        input: { ids: getVideoId },
      },
    });
    setInputVideoId("");
    window.location.reload();
  };

  return (
    <Modal
      title="▶️ Share youtube video"
      visible={showModal}
      onOk={handleOk}
      onCancel={() => setModalVisible(false)}
    >
      <Input
        placeholder="youtube link"
        value={inputVideoId}
        onChange={(e) => setInputVideoId(e.target.value)}
      />
    </Modal>
  );
};
