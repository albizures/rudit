import { NextApiRequest, NextApiResponse } from 'next';
import { to } from 'await-to-js';
import { getConnection } from '../utils/db';
import { Word } from '../entities/word';
import { ImperfectVerb, PerfectVerb } from '../entities/verb';

const commonProperties = [
  'name',
  'singular1stPerson',
  'singular2ndPerson',
  'singular3rdPerson',
  'plural1stPerson',
  'plural2ndPerson',
  'plural3rdPerson',
  'masculinePast',
  'femininePast',
  'pluralPast',
  'neuterPast',
  'imperativeInformal',
  'imperativeFormal',
];

const getSpecificProperty = (verbType): string => {
  if (verbType === ImperfectVerb) {
    return 'perfects';
  }

  return 'imperfects';
};

const createApiGetByName = (verbType) => async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  let [connectionError, connection] = await to(getConnection());

  if (connectionError) {
    return res.status(500).json(connectionError);
  }

  const nameParam = query.name as string;
  const wordRepository = connection.getRepository(Word);
  const perfectRepository = connection.getRepository(verbType);

  const [nameError, name] = await to(wordRepository.findOne({ text: nameParam }));

  if (nameError || !name) {
    return res.status(500).json(nameError);
  }

  const [verbError, verb] = await to(
    perfectRepository.findOne({
      relations: commonProperties.concat(getSpecificProperty(verbType)),
      where: {
        name,
      },
    }),
  );

  if (verbError) {
    return res.status(500).json(verbError);
  }

  if (!verb) {
    return res.status(404).json({
      error: new Error(`${nameParam} not found`).stack,
    });
  }

  res.status(200).json(verb);
};

const createApiGetAll = <T extends Function>(verbType: T) => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  let [connectionError, connection] = await to(getConnection());

  if (connectionError) {
    return res.status(500).json(connectionError);
  }
  const perfectRepository = connection.getRepository(verbType);

  const [verbError, verbs] = await to(
    perfectRepository.find({
      relations: commonProperties.concat(getSpecificProperty(verbType)),
      take: 50,
    }),
  );

  if (verbError) {
    return res.status(500).json(verbError);
  }

  res.status(200).json(verbs);
};

export { createApiGetByName, createApiGetAll };
