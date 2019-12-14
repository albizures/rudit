import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настораживать: PerfectVerb = {
  name: Word('настораживать', 6),
  singular1stPerson: Word('настораживаю', 6),
  singular2ndPerson: Word('настораживаешь', 6),
  singular3rdPerson: Word('настораживает', 6),
  plural1stPerson: Word('настораживаем', 6),
  plural2ndPerson: Word('настораживаете', 6),
  plural3rdPerson: Word('настораживают', 6),
  masculinePast: Word('настораживал', 6),
  femininePast: Word('настораживала', 6),
  neuterPast: Word('настораживало', 6),
  pluralPast: Word('настораживали', 6),
  imperativeInformal: Word('настораживай', 6),
  imperativeFormal: Word('настораживайте', 6),
  imperfect: [],
};

perfectVerbs.set(настораживать.name.text, настораживать);

export { настораживать };