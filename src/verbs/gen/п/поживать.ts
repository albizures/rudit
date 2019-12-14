import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поживать: PerfectVerb = {
  name: Word('поживать', 5),
  singular1stPerson: Word('поживаю', 5),
  singular2ndPerson: Word('поживаешь', 5),
  singular3rdPerson: Word('поживает', 5),
  plural1stPerson: Word('поживаем', 5),
  plural2ndPerson: Word('поживаете', 5),
  plural3rdPerson: Word('поживают', 5),
  masculinePast: Word('поживал', 5),
  femininePast: Word('поживала', 5),
  neuterPast: Word('поживало', 5),
  pluralPast: Word('поживали', 5),
  imperativeInformal: Word('поживай', 5),
  imperativeFormal: Word('поживайте', 5),
  imperfect: [],
};

perfectVerbs.set(поживать.name.text, поживать);

export { поживать };