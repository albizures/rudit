import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсиживать: PerfectVerb = {
  name: Word('отсиживать', 3),
  singular1stPerson: Word('отсиживаю', 3),
  singular2ndPerson: Word('отсиживаешь', 3),
  singular3rdPerson: Word('отсиживает', 3),
  plural1stPerson: Word('отсиживаем', 3),
  plural2ndPerson: Word('отсиживаете', 3),
  plural3rdPerson: Word('отсиживают', 3),
  masculinePast: Word('отсиживал', 3),
  femininePast: Word('отсиживала', 3),
  neuterPast: Word('отсиживало', 3),
  pluralPast: Word('отсиживали', 3),
  imperativeInformal: Word('отсиживай', 3),
  imperativeFormal: Word('отсиживайте', 3),
  imperfect: [],
};

perfectVerbs.set(отсиживать.name.text, отсиживать);

export { отсиживать };