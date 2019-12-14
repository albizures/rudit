import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привораживать: PerfectVerb = {
  name: Word('привораживать', 6),
  singular1stPerson: Word('привораживаю', 6),
  singular2ndPerson: Word('привораживаешь', 6),
  singular3rdPerson: Word('привораживает', 6),
  plural1stPerson: Word('привораживаем', 6),
  plural2ndPerson: Word('привораживаете', 6),
  plural3rdPerson: Word('привораживают', 6),
  masculinePast: Word('привораживал', 6),
  femininePast: Word('привораживала', 6),
  neuterPast: Word('привораживало', 6),
  pluralPast: Word('привораживали', 6),
  imperativeInformal: Word('привораживай', 6),
  imperativeFormal: Word('привораживайте', 6),
  imperfect: [],
};

perfectVerbs.set(привораживать.name.text, привораживать);

export { привораживать };