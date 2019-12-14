import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспаивать: PerfectVerb = {
  name: Word('вспаивать', 3),
  singular1stPerson: Word('вспаиваю', 3),
  singular2ndPerson: Word('вспаиваешь', 3),
  singular3rdPerson: Word('вспаивает', 3),
  plural1stPerson: Word('вспаиваем', 3),
  plural2ndPerson: Word('вспаиваете', 3),
  plural3rdPerson: Word('вспаивают', 3),
  masculinePast: Word('вспаивал', 3),
  femininePast: Word('вспаивала', 3),
  neuterPast: Word('вспаивало', 3),
  pluralPast: Word('вспаивали', 3),
  imperativeInformal: Word('вспаивай', 3),
  imperativeFormal: Word('вспаивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вспаивать.name.text, вспаивать);

export { вспаивать };