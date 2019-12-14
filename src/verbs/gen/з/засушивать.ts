import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засушивать: PerfectVerb = {
  name: Word('засушивать', 3),
  singular1stPerson: Word('засушиваю', 3),
  singular2ndPerson: Word('засушиваешь', 3),
  singular3rdPerson: Word('засушивает', 3),
  plural1stPerson: Word('засушиваем', 3),
  plural2ndPerson: Word('засушиваете', 3),
  plural3rdPerson: Word('засушивают', 3),
  masculinePast: Word('засушивал', 3),
  femininePast: Word('засушивала', 3),
  neuterPast: Word('засушивало', 3),
  pluralPast: Word('засушивали', 3),
  imperativeInformal: Word('засушивай', 3),
  imperativeFormal: Word('засушивайте', 3),
  imperfect: [],
};

perfectVerbs.set(засушивать.name.text, засушивать);

export { засушивать };