import { RequestHandler } from 'express'
import Video from '../models/Videos';

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos =  await Video.find()
    res.json(videos)
  } catch (error) {
    res.status(400).json(error)
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const id = req?.params?.id
    const video = await Video.findById(id)

    if(!video) return res.status(404).json({message: 'Video not exist'})
    res.json(video)
  } catch (error) {
    res.status(400).json(error)
  }
};

export const createVideos: RequestHandler = async (req, res) => {
  try {
    const findVideo = await Video.findOne({url: req.body.url})
    if(findVideo) res.status(301).json({error: "the url is ready exist"})

    const newVideo = new Video(req.body)
    await newVideo.save()
    res.json(newVideo)
  } catch (error) {
    res.status(400).json(error)
  }
};

export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    const id = req?.params?.id
    const deleteVideo = await Video.findByIdAndDelete(id)

    if(!deleteVideo) return res.status(301).json({error: "the url not exist"})
    res.json(deleteVideo)
  } catch (error) {
    res.status(400).json(error)
  }
};
export const updateVideos: RequestHandler = async (req, res) => {
  try {
    const id = req?.params?.id
    const newData = req?.body

    const findVideo = await Video.findById(id)
    if(!findVideo) return res.status(404).json({message:"Video Not Exist"})

    const updatedVideo = await Video.findByIdAndUpdate(id, newData,{ new: true })
    res.json(updatedVideo)
  } catch (error) {
    res.status(400).json(error)
  }
};
