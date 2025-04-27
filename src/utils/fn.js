//tree结构
export function createTree(pData,data){
    for(let i=0;i<pData.length;i++){
        for(let j=0;j<data.length;j++){
            if(data[j].father_id===pData[i].id){
                if(!pData[i].children){
                    pData[i].children = [];
                };
                pData[i].children.push({...data[j]});
            }
        };
        if(pData[i].children){
            createTree(pData[i].children,data);
        };
    };
};