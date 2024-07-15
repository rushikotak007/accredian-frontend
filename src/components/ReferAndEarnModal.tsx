// ReferAndEarnModal.tsx
import React, { useState, FormEvent } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';

const ReferAndEarnModal: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
        handleClose();
    };

    return (
        <div>
            <button 
                onClick={handleOpen}
                className="bg-gray-800 p-2 px-4 text-white hover:bg-gray-700 active:bg-gray-900 rounded-full"
            >
                Get Started
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="refer-and-earn-modal-title"
                aria-describedby="refer-and-earn-modal-description"
            >
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl mx-auto z-10 bg-white m-8 p-8 rounded-3xl'
                // sx={{
                //     position: 'absolute',
                //     top: '50%',
                //     left: '50%',
                //     transform: 'translate(-50%, -50%)',
                //     width:400,
                //     bgcolor: 'background.paper',
                //     p: 4,
                //     borderRadius: '15px',
                // }}
                >
                    <h2 className='text-3xl text-zinc-950 font-bold' id="refer-and-earn-modal-title" >
                        Refer and Earn
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Your Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            className=' focus:border-red-600'
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Your Email"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="friend-email"
                            label="Friend's Email"
                            name="friend-email"
                            autoComplete="friend-email"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900 rounded-full"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default ReferAndEarnModal;
