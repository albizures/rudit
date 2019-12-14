import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлаживать: PerfectVerb = {
  name: Word('отлаживать', 3),
  singular1stPerson: Word('отлаживаю', 3),
  singular2ndPerson: Word('отлаживаешь', 3),
  singular3rdPerson: Word('отлаживает', 3),
  plural1stPerson: Word('отлаживаем', 3),
  plural2ndPerson: Word('отлаживаете', 3),
  plural3rdPerson: Word('отлаживают', 3),
  masculinePast: Word('отлаживал', 3),
  femininePast: Word('отлаживала', 3),
  neuterPast: Word('отлаживало', 3),
  pluralPast: Word('отлаживали', 3),
  imperativeInformal: Word('отлаживай', 3),
  imperativeFormal: Word('отлаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(отлаживать.name.text, отлаживать);

export { отлаживать };