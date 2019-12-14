import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгораживать: PerfectVerb = {
  name: Word('отгораживать', 5),
  singular1stPerson: Word('отгораживаю', 5),
  singular2ndPerson: Word('отгораживаешь', 5),
  singular3rdPerson: Word('отгораживает', 5),
  plural1stPerson: Word('отгораживаем', 5),
  plural2ndPerson: Word('отгораживаете', 5),
  plural3rdPerson: Word('отгораживают', 5),
  masculinePast: Word('отгораживал', 5),
  femininePast: Word('отгораживала', 5),
  neuterPast: Word('отгораживало', 5),
  pluralPast: Word('отгораживали', 5),
  imperativeInformal: Word('отгораживай', 5),
  imperativeFormal: Word('отгораживайте', 5),
  imperfect: [],
};

perfectVerbs.set(отгораживать.name.text, отгораживать);

export { отгораживать };