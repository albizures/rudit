import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтаивать: PerfectVerb = {
  name: Word('обтаивать', 3),
  singular1stPerson: Word('обтаиваю', 3),
  singular2ndPerson: Word('обтаиваешь', 3),
  singular3rdPerson: Word('обтаивает', 3),
  plural1stPerson: Word('обтаиваем', 3),
  plural2ndPerson: Word('обтаиваете', 3),
  plural3rdPerson: Word('обтаивают', 3),
  masculinePast: Word('обтаивал', 3),
  femininePast: Word('обтаивала', 3),
  neuterPast: Word('обтаивало', 3),
  pluralPast: Word('обтаивали', 3),
  imperativeInformal: Word('обтаивай', 3),
  imperativeFormal: Word('обтаивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обтаивать.name.text, обтаивать);

export { обтаивать };