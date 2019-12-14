import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запруживать: PerfectVerb = {
  name: Word('запруживать', 4),
  singular1stPerson: Word('запруживаю', 4),
  singular2ndPerson: Word('запруживаешь', 4),
  singular3rdPerson: Word('запруживает', 4),
  plural1stPerson: Word('запруживаем', 4),
  plural2ndPerson: Word('запруживаете', 4),
  plural3rdPerson: Word('запруживают', 4),
  masculinePast: Word('запруживал', 4),
  femininePast: Word('запруживала', 4),
  neuterPast: Word('запруживало', 4),
  pluralPast: Word('запруживали', 4),
  imperativeInformal: Word('запруживай', 4),
  imperativeFormal: Word('запруживайте', 4),
  imperfect: [],
};

perfectVerbs.set(запруживать.name.text, запруживать);

export { запруживать };