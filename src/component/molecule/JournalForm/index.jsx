"use client";
import React, { useState } from "react";
import classes from "./JournalForm.module.css";
import Input from "@/component/atoms/Input/Input";
import Button from "@/component/atoms/Button";
import SentimentButton from "@/component/atoms/SentimentButton";
import { TextArea } from "@/component/atoms/TextArea/TextArea";
import { FaBook, FaChevronUp } from "react-icons/fa";

const JournalForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    feeling: "great",
    content: "",
    tags: []
  });
  const [newTag, setNewTag] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const feelings = ["great", "happy", "good", "okay", "low", "grateful"];
  const suggestedTags = ["Productivity", "Goals", "Stress", "Meditation", "Gratitude", "Work"];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeelingSelect = (feeling) => {
    handleInputChange("feeling", feeling);
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      handleInputChange("tags", [...formData.tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleSuggestedTagClick = (tag) => {
    if (!formData.tags.includes(tag)) {
      handleInputChange("tags", [...formData.tags, tag]);
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    handleInputChange("tags", formData.tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.content.trim()) {
      const entry = {
        id: Date.now().toString(),
        title: formData.title.trim(),
        feeling: formData.feeling,
        content: formData.content.trim(),
        tags: formData.tags,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      };
      onSubmit(entry);
      
      // Reset form
      setFormData({
        title: "",
        feeling: "great",
        content: "",
        tags: []
      });
      setNewTag("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      handleAddTag();
    }
  };

  return (
    <div className={classes.journalForm}>
      <div className={classes.formHeader}>
        <div className={classes.headerLeft}>
          <FaBook className={classes.headerIcon} />
          <h2 className={classes.headerTitle}>New Journal Entry</h2>
        </div>
        <button 
          className={classes.collapseButton}
          onClick={() => setIsCollapsed(!isCollapsed)}
          type="button"
        >
          <FaChevronUp 
            className={`${classes.collapseIcon} ${isCollapsed ? classes.collapsed : ''}`} 
          />
        </button>
      </div>

      {!isCollapsed && (
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.formGroup}>
            <Input
              label="Title"
              placeholder="Give your entry a meaningful title..."
              value={formData.title}
              setValue={(value) => handleInputChange("title", value)}
              variant="form"
            />
          </div>

          <div className={classes.formGroup}>
            <label className={classes.label}>How are you feeling?</label>
            <div className={classes.sentimentButtons}>
              {feelings.map((feeling) => (
                <SentimentButton
                  key={feeling}
                  feeling={feeling}
                  isSelected={formData.feeling === feeling}
                  onClick={handleFeelingSelect}
                />
              ))}
            </div>
          </div>

          <div className={classes.formGroup}>
            <TextArea
              label="Entry"
              placeholder="What's on your mind today? Reflect on your experiences, goals, challenges, or anything you'd like to share..."
              value={formData.content}
              setter={(value) => handleInputChange("content", value)}
              variant="form"
              rows={4}
            />
          </div>

          <div className={classes.formGroup}>
            <label className={classes.label}>Tags</label>
            <div className={classes.tagInputContainer}>
              <Input
                placeholder="Add a tag..."
                value={newTag}
                setValue={setNewTag}
                onEnterClick={(e) => {
                  e.preventDefault();
                  handleAddTag();
                }}
                onKeyPress={handleKeyPress}
                variant="tag"
              />
              <Button
                label="Add"
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddTag();
                }}
                type="button"
                customStyle={{ width: 'auto', minWidth: '80px' }}
              />
            </div>

            {formData.tags.length > 0 && (
              <div className={classes.selectedTags}>
                {formData.tags.map((tag, index) => (
                  <span key={index} className={classes.selectedTag}>
                    {tag}
                    <button 
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className={classes.removeTagButton}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div className={classes.suggestedTags}>
              <p className={classes.suggestedLabel}>Suggested:</p>
              <div className={classes.suggestedTagList}>
                {suggestedTags.map((tag, index) => (
                  <button
                    key={index}
                    type="button"
                    className={classes.suggestedTag}
                    onClick={() => handleSuggestedTagClick(tag)}
                    disabled={formData.tags.includes(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={classes.formActions}>
            <Button
              label="Cancel"
              variant="secondary"
              onClick={onCancel}
              customStyle={{ width: 'auto', minWidth: '100px' }}
            />
            <Button
              label="Save Entry"
              variant="primary"
              type="submit"
              customStyle={{ width: 'auto', minWidth: '120px' }}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default JournalForm;
