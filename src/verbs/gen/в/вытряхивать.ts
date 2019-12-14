import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытряхивать: PerfectVerb = {
  name: Word('вытряхивать', 4),
  singular1stPerson: Word('вытряхиваю', 4),
  singular2ndPerson: Word('вытряхиваешь', 4),
  singular3rdPerson: Word('вытряхивает', 4),
  plural1stPerson: Word('вытряхиваем', 4),
  plural2ndPerson: Word('вытряхиваете', 4),
  plural3rdPerson: Word('вытряхивают', 4),
  masculinePast: Word('вытряхивал', 4),
  femininePast: Word('вытряхивала', 4),
  neuterPast: Word('вытряхивало', 4),
  pluralPast: Word('вытряхивали', 4),
  imperativeInformal: Word('вытряхивай', 4),
  imperativeFormal: Word('вытряхивайте', 4),
  imperfect: [],
};

perfectVerbs.set(вытряхивать.name.text, вытряхивать);

export { вытряхивать };