import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выхолащивать: PerfectVerb = {
  name: Word('выхолащивать', 5),
  singular1stPerson: Word('выхолащиваю', 5),
  singular2ndPerson: Word('выхолащиваешь', 5),
  singular3rdPerson: Word('выхолащивает', 5),
  plural1stPerson: Word('выхолащиваем', 5),
  plural2ndPerson: Word('выхолащиваете', 5),
  plural3rdPerson: Word('выхолащивают', 5),
  masculinePast: Word('выхолащивал', 5),
  femininePast: Word('выхолащивала', 5),
  neuterPast: Word('выхолащивало', 5),
  pluralPast: Word('выхолащивали', 5),
  imperativeInformal: Word('выхолащивай', 5),
  imperativeFormal: Word('выхолащивайте', 5),
  imperfect: [],
};

perfectVerbs.set(выхолащивать.name.text, выхолащивать);

export { выхолащивать };