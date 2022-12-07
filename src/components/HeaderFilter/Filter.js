import React, { useState } from "react";
import "./Filter.scss";
import { Button, Modal } from "antd";
import { HeaderLabel } from "../HeaderLabel/Label";
import { BsFilterLeft } from "react-icons/bs";
import { FilterSelect } from "../FilterSelectComponent/FilterSelect";
import { FilterDueDate } from "../FilterDueDateComponent/FilterDueDate";
import { FilterMembers } from "../FilterMembersComponent/FilterMembers";
import { FilterSearch } from "../FilterSearchComponent/FilterSearch";

export const HeaderFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        className={isModalOpen ? "filter-button" : "no-filter-button"}
        onClick={showModal}
      >
        <BsFilterLeft
          className={isModalOpen ? "filter-icon" : "calender-icon"}
        />
        Filter
      </Button>
      <Modal
        mask={false}
        title="Filter"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="filter-popup"
        footer={null}
      >
        <div>
          <hr />
          <h5 className="filter-caption">Keyword</h5>
          <FilterSearch />
          <p className="Filter-description">
            Search cards, members, labels, and more.
          </p>
        </div>
        <FilterMembers />
        <FilterDueDate />
        <HeaderLabel />
        <hr />
        <div>
          <FilterSelect />
        </div>
      </Modal>
    </>
  );
};


