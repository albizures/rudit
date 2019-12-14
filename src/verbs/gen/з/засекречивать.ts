import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засекречивать: PerfectVerb = {
  name: Word('засекречивать', 6),
  singular1stPerson: Word('засекречиваю', 6),
  singular2ndPerson: Word('засекречиваешь', 6),
  singular3rdPerson: Word('засекречивает', 6),
  plural1stPerson: Word('засекречиваем', 6),
  plural2ndPerson: Word('засекречиваете', 6),
  plural3rdPerson: Word('засекречивают', 6),
  masculinePast: Word('засекречивал', 6),
  femininePast: Word('засекречивала', 6),
  neuterPast: Word('засекречивало', 6),
  pluralPast: Word('засекречивали', 6),
  imperativeInformal: Word('засекречивай', 6),
  imperativeFormal: Word('засекречивайте', 6),
  imperfect: [],
};

perfectVerbs.set(засекречивать.name.text, засекречивать);

export { засекречивать };