import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отслуживать: PerfectVerb = {
  name: Word('отслуживать', 4),
  singular1stPerson: Word('отслуживаю', 4),
  singular2ndPerson: Word('отслуживаешь', 4),
  singular3rdPerson: Word('отслуживает', 4),
  plural1stPerson: Word('отслуживаем', 4),
  plural2ndPerson: Word('отслуживаете', 4),
  plural3rdPerson: Word('отслуживают', 4),
  masculinePast: Word('отслуживал', 4),
  femininePast: Word('отслуживала', 4),
  neuterPast: Word('отслуживало', 4),
  pluralPast: Word('отслуживали', 4),
  imperativeInformal: Word('отслуживай', 4),
  imperativeFormal: Word('отслуживайте', 4),
  imperfect: [],
};

perfectVerbs.set(отслуживать.name.text, отслуживать);

export { отслуживать };