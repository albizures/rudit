import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отуманивать: PerfectVerb = {
  name: Word('отуманивать', 4),
  singular1stPerson: Word('отуманиваю', 4),
  singular2ndPerson: Word('отуманиваешь', 4),
  singular3rdPerson: Word('отуманивает', 4),
  plural1stPerson: Word('отуманиваем', 4),
  plural2ndPerson: Word('отуманиваете', 4),
  plural3rdPerson: Word('отуманивают', 4),
  masculinePast: Word('отуманивал', 4),
  femininePast: Word('отуманивала', 4),
  neuterPast: Word('отуманивало', 4),
  pluralPast: Word('отуманивали', 4),
  imperativeInformal: Word('отуманивай', 4),
  imperativeFormal: Word('отуманивайте', 4),
  imperfect: [],
};

perfectVerbs.set(отуманивать.name.text, отуманивать);

export { отуманивать };