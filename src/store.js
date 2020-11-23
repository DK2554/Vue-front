import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {
    //동욱
    fetchPboardList,
    fetchPboardOne,
    fetchPboardDel,
    fetchPboardUp,
    //모임
    fetchMeeting,
    fetchmsublist,
    fetchMeetinginfo,
    //주은
    fetchCommunityBoardList,
    fetchCommunityBoardView,
    fetchCommunityBoardDelete,
    fetchCommunityBoardUpdate,
    fetchNoticeList,

    //현주
    fetchQnaBoardList,
    fetchQnaBoardView,
    fetchQnaBoardDelete,
    fetchQnaBoardUpdate,
    //민지   
    fetchInfoList,
    fetchInfoDetail,
    fetchInfoDelete,
    fetchInfoUpdate,


}
    from './api/index.js';

import memberStore from './store/modules/memberStore.js';// member 관리 store
import jobStore from './store/modules/JobStore.js';

Vue.use(Vuex, axios)

export default new Vuex.Store({
    modules: {
        memberStore: memberStore,
        jobStore: jobStore
    },
    state: {
        pboard: [],
        pboardone: [],
        msg: '',
        attachment: [],
        //모임

        meeting: [],
        msubList: [],
        minfo: [],


        //주은
        communityboard: [],
        communityboardView: [],
        communityboardDelete: [],
        communityboardAttachment: [],
        cbAttachment:[],

        //현주
        qnaboard:[],
        qnaBoardView:[],
        qnaBoardDelete:[],
        qbAttachment:[],

        //민지
        infoList: [],
        infoDetail: [],
        infoForm: [],

     
        loginStatus: false,//로그인 성공 여부
        loginError: false,

    },
    actions: {
        FETCH_PBOARD({ commit }) {
            //인자로 centext가 제공 centext.commit
            fetchPboardList()
                .then(({ data }) => commit("SET_PBOARD", data))
                .catch(({ error }) => {
                    console.log(error);
                })

        },
        FETCH_PBOARDONE({ commit }, pboardNo) {
            fetchPboardOne(pboardNo)
                .then(({ data }) => commit("SET_PBOARDONE", data))
                .catch(({ error }) => console.log(error))
        },

        FETCH_PBOARDDEL({ commit }, no) {
            fetchPboardDel(no)
                .then(({ data }) => commit("SET_PBOARDDEL", data))
                .catch(({ error }) => console.log(error))
        },


        FETCH_PBOARDUP({ commit }, no) {
            fetchPboardUp(no)
                .then(({ data }) => commit("SET_PBOARDUP", data))
                .catch(({ error }) => console.log(error))
        },
        //모임 
        FECH_MEETINGLIST({ commit }) {
            fetchMeeting()
                .then(({ data }) => commit("SET_MEETING", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },

        FECH_MSUBLIST({ commit }) {
            fetchmsublist()
                .then(({ data }) => commit("SET_MSUBLIST", data))
                .catch(({ error }) => {
                    console.log(error);
                })

        },
        FECH_MOBOARDINFO({ commit }, no) {
            fetchMeetinginfo(no)
                .then(({ data }) => commit("SET_MINFO", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },


        //주은
        //자유게시판 list 불러오기
        FETCH_COMMUNITYBOARD({ commit }) {
            fetchCommunityBoardList()
                .then(({ data }) => commit("SET_COMMUNITYBOARD", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },
        //자유게시판 상세화면
        FETCH_COMMUNITYBOARD_VIEW({ commit }, communityboardNo) {
            fetchCommunityBoardView(communityboardNo)
                .then(({ data }) => commit("SET_COMMUNITYBOARD_VIEW", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },
        //자유게시판 삭제하기
        FETCH_COMMUNITYBOARD_DELETE({ commit }, communityboardNo) {
            fetchCommunityBoardDelete(communityboardNo)
                .then(({ data }) => commit("SET_COMMUNITYBOARD_DELETE", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },
        //자유게시판 수정하기(객체 값 불러오기)
        FETCH_COMMUNITYBOARD_UPDATE({ commit }, boardSq) {
            fetchCommunityBoardUpdate(boardSq)
                .then(({ data }) => commit("SET_COMMUNITYBOARD_UPDATE", data))
                .catch(({ error }) => console.log(error))
        },
        //공지사항 조회 
        FETCH_NOTICE({commit}){
            fetchNoticeList()
                .then(({ data }) => commit("SET_NOTICE", data))
                .catch(({ error }) => {
                console.log(error);
                })
        },


        //현주
        //qna 게시판 불러오기
        FETCH_QNABOARD({ commit }) {
            fetchQnaBoardList()
                .then(({ data }) => commit("SET_QNABOARD", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },
        //qna 게시판 상세화면
        FETCH_QNABOARD_VIEW({ commit }, qnaboardNo) {
            fetchQnaBoardView(qnaboardNo)
                .then(({ data }) => commit("SET_QNABOARD_VIEW", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },
        //qna 게시판 삭제하기
        FETCH_QNABOARD_DELETE({ commit }, qnaboardNo) {
            fetchQnaBoardDelete(qnaboardNo)
                .then(({ data }) => commit("SET_QNABOARD_DELETE", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },
        //qna 게시판 수정하기(객체 값 불러오기)
        FETCH_QNABOARD_UPDATE({ commit }, qnaboardNo) {
            fetchQnaBoardUpdate(qnaboardNo)
                .then(({ data }) => commit("SET_QNABOARD_UPDATE", data))
                .catch(({ error }) => console.log(error))
        },


        //민지
        //list 불러오기
        FETCH_INFO({ commit }) {
            fetchInfoList()
                .then(({ data }) => commit("SET_INFO_LIST", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },
        //상세화면
        FETCH_INFO_DETAIL({ commit }, infoNo) {
            fetchInfoDetail(infoNo)
                .then(({ data }) => commit("SET_INFO_DETAIL", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },
        //삭제하기
        FETCH_INFO_DELETE({ commit }, infoNo) {
            fetchInfoDelete(infoNo)
                .then(({ data }) => commit("SET_INFO_DELETE", data))
                .catch(({ error }) => {
                    console.log(error);
                })
        },
        //수정하기(객체 값 불러오기)
        FETCH_INFO_UPDATE({ commit }, infoSq) {
            fetchInfoUpdate(infoSq)
                .then(({ data }) => commit("SET_INFO_UPDATE", data))
                .catch(({ error }) => console.log(error))
        },



    },//action

    mutations: {
        SET_PBOARD(state, pboard) {
            state.pboard = pboard;
        },
        SET_PBOARDONE(state, pboardone) {
            state.pboardone = pboardone;
        },
        SET_PBOARDDEL(state, data) {
            state.msg = data;

        },
        SET_PBOARDUP(state, data) {
            state.attachment = data;
        },
        //모임
        SET_MEETING(state, data) {
            state.meeting = data;
        },
        SET_MINFO(state, data) {
            state.minfo = data;
        },

        //주은
        //자유게시판 리스트
        SET_COMMUNITYBOARD(state, communityboard) {
            state.communityboard = communityboard;
        },
        //자유게사판 상세화면
        SET_COMMUNITYBOARD_VIEW(state, communityboardView) {
            state.communityboardView = communityboardView;
        },
        //자유게시판 삭제
        SET_COMMUNITYBOARD_DELETE(state, data) {
            state.data = data;
        },
        //자유게시판 수정(값 불러오기)
        SET_COMMUNITYBOARD_UPDATE(state, data) {
            state.cbAttachment = data;
        },
        //공지사항
        SET_NOTICE(state,noticeList){
            state.noticeList=noticeList;
        },



        

        //현주 게시판 리스트
        SET_QNABOARD(state, qnaboard) {
        state.qnaboard = qnaboard;
        },
        //qna게시판 상세화면
        SET_QNABOARD_VIEW(state, qnaBoardView) {
        state.qnaBoardView = qnaBoardView;
        },   
        //자유게시판 삭제
        SET_QNABOARD_DELETE(state, data) {
            state.data = data;
        },
        //자유게시판 수정(값 불러오기)
        SET_QNABOARD_UPDATE(state, data) {
            state.qbAttachment = data;
        },


        //민지
        //리스트
        SET_INFO_LIST(state, infolist) {
            state.infolist = infolist;
        },
        //상세화면
        SET_INFO_VIEW(state, infoview) {
            state.infoview = infoview;
        },
        /*      //삭제
             SET_INFO_DELETE(state, data) {
                 state.data = data;
             },
             //수정(값 불러오기)
             SET_INFO_UPDATE(state, data) {
                 state.cbAttachment = data;
     <<<<<<< HEAD
     =======
             }, */


        //로그인 성공
        loginSuccess(state, payload) {

            state.loginStatus = true;
            state.loginError = false;
            state.userData = payload;
            console.log("로그인성공" + payload.memberEmail);
        },
        //로그인 실패
        loginFalse(state) {
            console.log("로그인실패");
            state.loginStatus = false;
            state.loginError = true;
        }

    }//mutations 끝


})