import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приучать: PerfectVerb = {
  name: Word('приучать', 5),
  singular1stPerson: Word('приучаю', 5),
  singular2ndPerson: Word('приучаешь', 5),
  singular3rdPerson: Word('приучает', 5),
  plural1stPerson: Word('приучаем', 5),
  plural2ndPerson: Word('приучаете', 5),
  plural3rdPerson: Word('приучают', 5),
  masculinePast: Word('приучал', 5),
  femininePast: Word('приучала', 5),
  neuterPast: Word('приучало', 5),
  pluralPast: Word('приучали', 5),
  imperativeInformal: Word('приучай', 5),
  imperativeFormal: Word('приучайте', 5),
  imperfect: [],
};

perfectVerbs.set(приучать.name.text, приучать);

export { приучать };