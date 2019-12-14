import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплющивать: PerfectVerb = {
  name: Word('сплющивать', 3),
  singular1stPerson: Word('сплющиваю', 3),
  singular2ndPerson: Word('сплющиваешь', 3),
  singular3rdPerson: Word('сплющивает', 3),
  plural1stPerson: Word('сплющиваем', 3),
  plural2ndPerson: Word('сплющиваете', 3),
  plural3rdPerson: Word('сплющивают', 3),
  masculinePast: Word('сплющивал', 3),
  femininePast: Word('сплющивала', 3),
  neuterPast: Word('сплющивало', 3),
  pluralPast: Word('сплющивали', 3),
  imperativeInformal: Word('сплющивай', 3),
  imperativeFormal: Word('сплющивайте', 3),
  imperfect: [],
};

perfectVerbs.set(сплющивать.name.text, сплющивать);

export { сплющивать };