import { Request, Response } from 'express';
import ContentModel from '../database/ContentModel';
import { VideoContent } from '../types/Content';
import slugify from 'slugify';

class ContentController {
  async create(req: Request, res: Response) {
    const { title, file, description, keywords } = req.body as VideoContent;

    try {
      await ContentModel.create({
        title,
        file,
        description,
        keywords,
        likes: 0,
        unlike: 0,
        slug: `/${slugify(title)}`,
      } as VideoContent);

      return res.json({ message: 'Cadastrado com sucesso!' });
    } catch (error) {
      return res.status(500);
    }
  }
  async destroy(req: Request, res: Response) {
    const { contentId } = req.params;
    try {
      await ContentModel.destroy({ where: { id: contentId } });
      return res.status(204).send();
    } catch (error) {
      return res.status(500);
    }
  }
  async findOne(req: Request, res: Response) {
    const { contentId } = req.params;

    try {
      const content = await ContentModel.findOne({ where: { id: contentId } });
      if (!content) return res.status(201).send('No Content');
      return res.json(content);
    } catch (error) {
      return res.status(500);
    }
  }
  async findAll(req: Request, res: Response) {
    try {
      const content = await ContentModel.findAll();
      if (content.length === 0) return res.status(201).send('No Content');
      return res.json(content);
    } catch (error) {
      return res.status(500);
    }
  }
  async update(req: Request, res: Response) {
    const { contentId } = req.params;
    const { title, file, description, keywords } = req.body as VideoContent;

    try {
      await ContentModel.update(
        {
          title,
          file,
          description,
          keywords,
          likes: 0,
          unlike: 0,
          slug: slugify(title),
        } as VideoContent,
        { where: { id: contentId } },
      );

      return res.json({ message: 'Aatualizado com sucesso!' });
    } catch (error) {
      return res.status(500);
    }
  }
}

export default new ContentController();
