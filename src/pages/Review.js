
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

class CommuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWriteForm: false, // 글쓰기 폼 모달 표시 여부
      showPostDetail: false, // 리뷰 상세 모달 표시 여부
      showEditForm: false, // 수정 모달 표시 여부
      posts: [], // 게시물 목록
      newPost: { title: "", author: "", content: "" }, // 새 게시물 데이터
      selectedPost: null, // 상세보기할 게시물
      editPost: null, // 수정할 게시물 데이터
      selectedPostIds: new Set(), // 선택된 게시물 ID들
    };
  }

  // 글쓰기 폼 열기
  handleShowWriteForm = () => {
    this.setState({ showWriteForm: true });
  };

  // 글쓰기 폼 닫기
  handleCloseWriteForm = () => {
    this.setState({
      showWriteForm: false,
      newPost: { title: "", author: "", content: "" }, // 폼 초기화
    });
  };

  // 게시물 작성 완료
  handleSubmit = () => {
    const { newPost, posts } = this.state;

    const newPostWithId = {
      ...newPost,
      id: posts.length + 1,
      date: new Date().toISOString().split("T")[0], // 작성일 설정
    };

    this.setState((prevState) => ({
      posts: [...prevState.posts, newPostWithId], // 새 게시물 추가
      showWriteForm: false, // 모달 닫기
      newPost: { title: "", author: "", content: "" }, // 폼 초기화
    }));
  };

  // 게시물 클릭 시 상세 내용 보기
  handleShowPostDetail = (post) => {
    this.setState({
      selectedPost: post,
      showPostDetail: true,
    });
  };

  // 상세 내용 모달 닫기
  handleClosePostDetail = () => {
    this.setState({
      showPostDetail: false,
      selectedPost: null,
    });
  };

  // 게시물 수정 모달 열기
  handleShowEditForm = (post) => {
    this.setState({
      editPost: { ...post }, // 수정할 게시물 데이터 설정
      showEditForm: true,
    });
  };

  // 수정 모달 닫기
  handleCloseEditForm = () => {
    this.setState({
      showEditForm: false,
      editPost: null, // 초기화
    });
  };

  // 게시물 수정 완료
  handleEditSubmit = () => {
    const { posts, editPost } = this.state;
    const updatedPosts = posts.map((post) =>
      post.id === editPost.id ? editPost : post
    );

    this.setState({
      posts: updatedPosts,
      showEditForm: false,
      editPost: null,
    });
  };

  // 입력 필드 변경 핸들러
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newPost: {
        ...prevState.newPost,
        [name]: value,
      },
    }));
  };

  // 수정 필드 변경 핸들러
  handleEditInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      editPost: {
        ...prevState.editPost,
        [name]: value,
      },
    }));
  };

  // 체크박스 선택 핸들러
  handleCheckboxChange = (id) => {
    this.setState((prevState) => {
      const selectedPostIds = new Set(prevState.selectedPostIds);
      if (selectedPostIds.has(id)) {
        selectedPostIds.delete(id); // 선택 해제
      } else {
        selectedPostIds.add(id); // 선택
      }
      return { selectedPostIds };
    });
  };

  // 선택된 게시물 삭제
  handleDeletePosts = () => {
    const { posts, selectedPostIds } = this.state;
    const updatedPosts = posts.filter((post) => !selectedPostIds.has(post.id));

    this.setState({
      posts: updatedPosts,
      selectedPostIds: new Set(), // 선택된 게시물 초기화
    });
  };

  render() {
    const {
      showWriteForm,
      newPost,
      posts,
      showPostDetail,
      selectedPost,
      showEditForm,
      editPost,
      selectedPostIds,
    } = this.state;

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>선택</th>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>수정</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedPostIds.has(post.id)}
                      onChange={() => this.handleCheckboxChange(post.id)}
                    />
                  </td>
                  <td>{post.id}</td>
                  <td>
                    <Button
                      variant="link"
                      onClick={() => this.handleShowPostDetail(post)}
                    >
                      {post.title}
                    </Button>
                  </td>
                  <td>{post.author}</td>
                  <td>{post.date}</td>
                  <td>
                    <Button
                      variant="secondary"
                      onClick={() => this.handleShowEditForm(post)}
                    >
                      수정하기
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  등록된 리뷰가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        <Button variant="info" onClick={this.handleShowWriteForm}>
          리뷰쓰기
        </Button>
        <Button variant="danger" onClick={this.handleDeletePosts}>
          삭제하기
        </Button>

        {/* 글쓰기 폼 모달 */}
        <Modal show={showWriteForm} onHide={this.handleCloseWriteForm}>
          <Modal.Header closeButton>
            <Modal.Title>새 글 작성</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>제목</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="제목을 입력하세요"
                  name="title"
                  value={newPost.title}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>작성자</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="작성자를 입력하세요"
                  name="author"
                  value={newPost.author}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>내용</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="내용을 입력하세요"
                  name="content"
                  value={newPost.content}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseWriteForm}>
              취소
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              작성 완료
            </Button>
          </Modal.Footer>
        </Modal>

        {/* 게시물 상세 모달 */}
        {selectedPost && (
          <Modal show={showPostDetail} onHide={this.handleClosePostDetail}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedPost.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>작성자: {selectedPost.author}</p>
              <p>내용: {selectedPost.content}</p>
              <p>작성일: {selectedPost.date}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClosePostDetail}>
                닫기
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }
}

export default CommuPage;
