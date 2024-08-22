import Style from "../style/search.module.css";

export default function Search() {
    return (
        <div className={Style["container-search"]}>
            <div className="join join-vertical w-full">
                <div className={`collapse collapse-arrow join-item border-base-300 border ${Style["custom-collapse"]}`}>
                    <input 
                        type="radio" 
                        name="my-accordion-4" 
                        defaultChecked 
                    />
                    <div className={`collapse-title text-xl font-medium ${Style["custom-collapse-title"]}`}>PREÇO</div>
                    <div className={`collapse-content ${Style["custom-collapse-content"]}`}>
                        <div className="form-control">
                            <label className={`label cursor-pointer ${Style["check"]}`}>
                                <span className="label-text">Remember me</span>
                                <input type="checkbox" defaultChecked className={`checkbox ${Style["custom-checkbox"]}`} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className={`collapse collapse-arrow join-item border-base-300 border ${Style["custom-collapse"]}`}>
                    <input 
                        type="radio" 
                        name="my-accordion-4" 
                    />
                    <div className={`collapse-title text-xl font-medium ${Style["custom-collapse-title"]}`}>CONDIÇÃO</div>
                    <div className={`collapse-content ${Style["custom-collapse-content"]}`}>
                        <div className="form-control">
                            <label className={`label cursor-pointer ${Style["check"]}`}>
                                <span className="label-text">Novo</span>
                                <input type="checkbox" defaultChecked className={`checkbox ${Style["custom-checkbox"]}`} />
                            </label>
                            <label className={`label cursor-pointer ${Style["check"]}`}>
                                <span className="label-text">Usado</span>
                                <input type="checkbox" defaultChecked className={`checkbox ${Style["custom-checkbox"]}`} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className={`collapse collapse-arrow join-item border-base-300 border ${Style["custom-collapse"]}`}>
                    <input 
                        type="radio" 
                        name="my-accordion-4" 
                    />
                    <div className={`collapse-title text-xl font-medium ${Style["custom-collapse-title"]}`}>MARCA</div>
                    <div className={`collapse-content ${Style["custom-collapse-content"]}`}>
                        <div className="form-control">
                            <label className={`label cursor-pointer ${Style["check"]}`}>
                                <span className="label-text">Remember me</span>
                                <input type="checkbox" defaultChecked className={`checkbox ${Style["custom-checkbox"]}`} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className={`collapse collapse-arrow join-item border-base-300 border ${Style["custom-collapse"]}`}>
                    <input 
                        type="radio" 
                        name="my-accordion-4" 
                    />
                    <div className={`collapse-title text-xl font-medium ${Style["custom-collapse-title"]}`}>COR</div>
                    <div className={`collapse-content ${Style["custom-collapse-content"]}`}>
                        <div className="form-control">
                            <label className={`label cursor-pointer ${Style["check"]}`}>
                                <span className="label-text">Remember me</span>
                                <input type="checkbox" defaultChecked className={`checkbox ${Style["custom-checkbox"]}`} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
