import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облапошивать: PerfectVerb = {
  name: Word('облапошивать', 5),
  singular1stPerson: Word('облапошиваю', 5),
  singular2ndPerson: Word('облапошиваешь', 5),
  singular3rdPerson: Word('облапошивает', 5),
  plural1stPerson: Word('облапошиваем', 5),
  plural2ndPerson: Word('облапошиваете', 5),
  plural3rdPerson: Word('облапошивают', 5),
  masculinePast: Word('облапошивал', 5),
  femininePast: Word('облапошивала', 5),
  neuterPast: Word('облапошивало', 5),
  pluralPast: Word('облапошивали', 5),
  imperativeInformal: Word('облапошивай', 5),
  imperativeFormal: Word('облапошивайте', 5),
  imperfect: [],
};

perfectVerbs.set(облапошивать.name.text, облапошивать);

export { облапошивать };