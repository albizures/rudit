import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попахивать: PerfectVerb = {
  name: Word('попахивать', 3),
  singular1stPerson: Word('попахиваю', 3),
  singular2ndPerson: Word('попахиваешь', 3),
  singular3rdPerson: Word('попахивает', 3),
  plural1stPerson: Word('попахиваем', 3),
  plural2ndPerson: Word('попахиваете', 3),
  plural3rdPerson: Word('попахивают', 3),
  masculinePast: Word('попахивал', 3),
  femininePast: Word('попахивала', 3),
  neuterPast: Word('попахивало', 3),
  pluralPast: Word('попахивали', 3),
  imperativeInformal: Word('попахивай', 3),
  imperativeFormal: Word('попахивайте', 3),
  imperfect: [],
};

perfectVerbs.set(попахивать.name.text, попахивать);

export { попахивать };