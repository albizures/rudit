import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ушивать: PerfectVerb = {
  name: Word('ушивать', 4),
  singular1stPerson: Word('ушиваю', 4),
  singular2ndPerson: Word('ушиваешь', 4),
  singular3rdPerson: Word('ушивает', 4),
  plural1stPerson: Word('ушиваем', 4),
  plural2ndPerson: Word('ушиваете', 4),
  plural3rdPerson: Word('ушивают', 4),
  masculinePast: Word('ушивал', 4),
  femininePast: Word('ушивала', 4),
  neuterPast: Word('ушивало', 4),
  pluralPast: Word('ушивали', 4),
  imperativeInformal: Word('ушивай', 4),
  imperativeFormal: Word('ушивайте', 4),
  imperfect: [],
};

perfectVerbs.set(ушивать.name.text, ушивать);

export { ушивать };