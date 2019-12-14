import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стряхивать: PerfectVerb = {
  name: Word('стряхивать', 3),
  singular1stPerson: Word('стряхиваю', 3),
  singular2ndPerson: Word('стряхиваешь', 3),
  singular3rdPerson: Word('стряхивает', 3),
  plural1stPerson: Word('стряхиваем', 3),
  plural2ndPerson: Word('стряхиваете', 3),
  plural3rdPerson: Word('стряхивают', 3),
  masculinePast: Word('стряхивал', 3),
  femininePast: Word('стряхивала', 3),
  neuterPast: Word('стряхивало', 3),
  pluralPast: Word('стряхивали', 3),
  imperativeInformal: Word('стряхивай', 3),
  imperativeFormal: Word('стряхивайте', 3),
  imperfect: [],
};

perfectVerbs.set(стряхивать.name.text, стряхивать);

export { стряхивать };