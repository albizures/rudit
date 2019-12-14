import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снашивать: PerfectVerb = {
  name: Word('снашивать', 2),
  singular1stPerson: Word('снашиваю', 2),
  singular2ndPerson: Word('снашиваешь', 2),
  singular3rdPerson: Word('снашивает', 2),
  plural1stPerson: Word('снашиваем', 2),
  plural2ndPerson: Word('снашиваете', 2),
  plural3rdPerson: Word('снашивают', 2),
  masculinePast: Word('снашивал', 2),
  femininePast: Word('снашивала', 2),
  neuterPast: Word('снашивало', 2),
  pluralPast: Word('снашивали', 2),
  imperativeInformal: Word('снашивай', 2),
  imperativeFormal: Word('снашивайте', 2),
  imperfect: [],
};

perfectVerbs.set(снашивать.name.text, снашивать);

export { снашивать };