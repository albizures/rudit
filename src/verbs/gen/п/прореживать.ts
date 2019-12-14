import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прореживать: PerfectVerb = {
  name: Word('прореживать', 4),
  singular1stPerson: Word('прореживаю', 4),
  singular2ndPerson: Word('прореживаешь', 4),
  singular3rdPerson: Word('прореживает', 4),
  plural1stPerson: Word('прореживаем', 4),
  plural2ndPerson: Word('прореживаете', 4),
  plural3rdPerson: Word('прореживают', 4),
  masculinePast: Word('прореживал', 4),
  femininePast: Word('прореживала', 4),
  neuterPast: Word('прореживало', 4),
  pluralPast: Word('прореживали', 4),
  imperativeInformal: Word('прореживай', 4),
  imperativeFormal: Word('прореживайте', 4),
  imperfect: [],
};

perfectVerbs.set(прореживать.name.text, прореживать);

export { прореживать };