import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отхаживать: PerfectVerb = {
  name: Word('отхаживать', 3),
  singular1stPerson: Word('отхаживаю', 3),
  singular2ndPerson: Word('отхаживаешь', 3),
  singular3rdPerson: Word('отхаживает', 3),
  plural1stPerson: Word('отхаживаем', 3),
  plural2ndPerson: Word('отхаживаете', 3),
  plural3rdPerson: Word('отхаживают', 3),
  masculinePast: Word('отхаживал', 3),
  femininePast: Word('отхаживала', 3),
  neuterPast: Word('отхаживало', 3),
  pluralPast: Word('отхаживали', 3),
  imperativeInformal: Word('отхаживай', 3),
  imperativeFormal: Word('отхаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(отхаживать.name.text, отхаживать);

export { отхаживать };