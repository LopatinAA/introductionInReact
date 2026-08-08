import React from "react";

export const TodoSearch = ({ searchQuery, onSearchChange, onClearSearch }) => {
    return (
        
            <div
                style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '16px',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        borderRadius: '4px',
                        padding: '4px 8px',
                    }}
                >
                    <span style={{ marginRight: '8px' }}>🔍</span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Поиск задач..."
                        style={{
                            flex: 1,
                            border: 'none',
                            outline: 'none',
                            padding: '4px 0',
                            fontSize: '14px'
                        }}
                    />
                    {searchQuery && (
                        <button
                            onClick={onClearSearch}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#999',
                                padding: '0 4px'
                            }}
                        >
                            x
                        </button>
                    )}
                </div>
                {searchQuery && (
                    <span style={{ fontSize: '12px', color: '#666' }}>
                        Найдено: {searchQuery.length}
                    </span>
                )}
            </div>
        
    )
}