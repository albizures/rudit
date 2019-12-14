import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выманивать: PerfectVerb = {
  name: Word('выманивать', 3),
  singular1stPerson: Word('выманиваю', 3),
  singular2ndPerson: Word('выманиваешь', 3),
  singular3rdPerson: Word('выманивает', 3),
  plural1stPerson: Word('выманиваем', 3),
  plural2ndPerson: Word('выманиваете', 3),
  plural3rdPerson: Word('выманивают', 3),
  masculinePast: Word('выманивал', 3),
  femininePast: Word('выманивала', 3),
  neuterPast: Word('выманивало', 3),
  pluralPast: Word('выманивали', 3),
  imperativeInformal: Word('выманивай', 3),
  imperativeFormal: Word('выманивайте', 3),
  imperfect: [],
};

perfectVerbs.set(выманивать.name.text, выманивать);

export { выманивать };