import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сманивать: PerfectVerb = {
  name: Word('сманивать', 2),
  singular1stPerson: Word('сманиваю', 2),
  singular2ndPerson: Word('сманиваешь', 2),
  singular3rdPerson: Word('сманивает', 2),
  plural1stPerson: Word('сманиваем', 2),
  plural2ndPerson: Word('сманиваете', 2),
  plural3rdPerson: Word('сманивают', 2),
  masculinePast: Word('сманивал', 2),
  femininePast: Word('сманивала', 2),
  neuterPast: Word('сманивало', 2),
  pluralPast: Word('сманивали', 2),
  imperativeInformal: Word('сманивай', 2),
  imperativeFormal: Word('сманивайте', 2),
  imperfect: [],
};

perfectVerbs.set(сманивать.name.text, сманивать);

export { сманивать };