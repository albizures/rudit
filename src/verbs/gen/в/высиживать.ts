import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высиживать: PerfectVerb = {
  name: Word('высиживать', 3),
  singular1stPerson: Word('высиживаю', 3),
  singular2ndPerson: Word('высиживаешь', 3),
  singular3rdPerson: Word('высиживает', 3),
  plural1stPerson: Word('высиживаем', 3),
  plural2ndPerson: Word('высиживаете', 3),
  plural3rdPerson: Word('высиживают', 3),
  masculinePast: Word('высиживал', 3),
  femininePast: Word('высиживала', 3),
  neuterPast: Word('высиживало', 3),
  pluralPast: Word('высиживали', 3),
  imperativeInformal: Word('высиживай', 3),
  imperativeFormal: Word('высиживайте', 3),
  imperfect: [],
};

perfectVerbs.set(высиживать.name.text, высиживать);

export { высиживать };