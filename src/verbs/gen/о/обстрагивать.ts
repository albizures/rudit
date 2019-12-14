import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обстрагивать: PerfectVerb = {
  name: Word('обстрагивать', 5),
  singular1stPerson: Word('обстрагиваю', 5),
  singular2ndPerson: Word('обстрагиваешь', 5),
  singular3rdPerson: Word('обстрагивает', 5),
  plural1stPerson: Word('обстрагиваем', 5),
  plural2ndPerson: Word('обстрагиваете', 5),
  plural3rdPerson: Word('обстрагивают', 5),
  masculinePast: Word('обстрагивал', 5),
  femininePast: Word('обстрагивала', 5),
  neuterPast: Word('обстрагивало', 5),
  pluralPast: Word('обстрагивали', 5),
  imperativeInformal: Word('обстрагивай', 5),
  imperativeFormal: Word('обстрагивайте', 5),
  imperfect: [],
};

perfectVerbs.set(обстрагивать.name.text, обстрагивать);

export { обстрагивать };