import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсаживать: PerfectVerb = {
  name: Word('отсаживать', 3),
  singular1stPerson: Word('отсаживаю', 3),
  singular2ndPerson: Word('отсаживаешь', 3),
  singular3rdPerson: Word('отсаживает', 3),
  plural1stPerson: Word('отсаживаем', 3),
  plural2ndPerson: Word('отсаживаете', 3),
  plural3rdPerson: Word('отсаживают', 3),
  masculinePast: Word('отсаживал', 3),
  femininePast: Word('отсаживала', 3),
  neuterPast: Word('отсаживало', 3),
  pluralPast: Word('отсаживали', 3),
  imperativeInformal: Word('отсаживай', 3),
  imperativeFormal: Word('отсаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(отсаживать.name.text, отсаживать);

export { отсаживать };