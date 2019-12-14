import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всклокочивать: PerfectVerb = {
  name: Word('всклокочивать', 6),
  singular1stPerson: Word('всклокочиваю', 6),
  singular2ndPerson: Word('всклокочиваешь', 6),
  singular3rdPerson: Word('всклокочивает', 6),
  plural1stPerson: Word('всклокочиваем', 6),
  plural2ndPerson: Word('всклокочиваете', 6),
  plural3rdPerson: Word('всклокочивают', 6),
  masculinePast: Word('всклокочивал', 6),
  femininePast: Word('всклокочивала', 6),
  neuterPast: Word('всклокочивало', 6),
  pluralPast: Word('всклокочивали', 6),
  imperativeInformal: Word('всклокочивай', 6),
  imperativeFormal: Word('всклокочивайте', 6),
  imperfect: [],
};

perfectVerbs.set(всклокочивать.name.text, всклокочивать);

export { всклокочивать };