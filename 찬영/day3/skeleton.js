/*
    // todo 데이터를 보관할 객체 생성
        # todoData = {
            'todo' : {
                'id' : (number),
                'contents' : (string)
                },
            'doing' : {
                'id' : (number),
                'contents' : (string)
            },
            'done' : {
                'id' : (number),
                'contents' : (string)
            }
        }

    // function main : 메인 함수 
        # inputCommend 함수 반복

    // function inputCommend: 명령어를 입력받는 함수
        # readline 사용

    // function splitCommend: 명령어 분리 함수
        # commend => (parentsCommend, childCommend)
        # if childCommend === 분리 가능 => splitChildCommend()
        # if q => 프로그램 종료 함수 실행

    // function splitChildCommend()
        # childCommend => (frontChildCommend, backChildCommend)

    // function selectChildCommend()
        # 자식 명령어 함수 선택

    // function createId()
        # ID 랜덤 생성 함수
        # 생성 후 isUnique 함수로 검사

    // function isUnique()
        # 중복 검사 함수

    // function printResult()
        # 결과 출력 함수

    // function moveData()
        # 데이터 이동 함수

    // function deleteData()
        # 데이터 삭제 함수

    // function exitTodos()
        # 프로그램 종료 함수

    //  명령어 함수
        // function parentsShow()
            # commendAction => current, todo 선택

        // function parentsAdd()
            # (frontChildCommend, backChildCommend) => 
            # 1. createId 함수 실행
            # 2. todoData.todo 에 Id값, 내용 push

        // function parentsUpdate()
            # (frontChildCommend, backChildCommend) => 
            # 1. todoData.todo에서 frontChildCommend(Id)값 검색
            # 2. 검색된 값을 backChildCommend값으로 이동하는 moveData 실행

        // function parentsDelete()
            # (frontChildCommend, backChildCommend) => 
            # 1. todoData.todo에서 frontChildCommend(Id)값 검색
            # 2. 검색된 값을 삭제하는 deleteData 실행

*/
