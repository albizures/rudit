import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошивать: PerfectVerb = {
  name: Word('прошивать', 6),
  singular1stPerson: Word('прошиваю', 6),
  singular2ndPerson: Word('прошиваешь', 6),
  singular3rdPerson: Word('прошивает', 6),
  plural1stPerson: Word('прошиваем', 6),
  plural2ndPerson: Word('прошиваете', 6),
  plural3rdPerson: Word('прошивают', 6),
  masculinePast: Word('прошивал', 6),
  femininePast: Word('прошивала', 6),
  neuterPast: Word('прошивало', 6),
  pluralPast: Word('прошивали', 6),
  imperativeInformal: Word('прошивай', 6),
  imperativeFormal: Word('прошивайте', 6),
  imperfect: [],
};

perfectVerbs.set(прошивать.name.text, прошивать);

export { прошивать };