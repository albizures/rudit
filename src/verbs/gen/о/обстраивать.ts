import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обстраивать: PerfectVerb = {
  name: Word('обстраивать', 5),
  singular1stPerson: Word('обстраиваю', 5),
  singular2ndPerson: Word('обстраиваешь', 5),
  singular3rdPerson: Word('обстраивает', 5),
  plural1stPerson: Word('обстраиваем', 5),
  plural2ndPerson: Word('обстраиваете', 5),
  plural3rdPerson: Word('обстраивают', 5),
  masculinePast: Word('обстраивал', 5),
  femininePast: Word('обстраивала', 5),
  neuterPast: Word('обстраивало', 5),
  pluralPast: Word('обстраивали', 5),
  imperativeInformal: Word('обстраивай', 5),
  imperativeFormal: Word('обстраивайте', 5),
  imperfect: [],
};

perfectVerbs.set(обстраивать.name.text, обстраивать);

export { обстраивать };