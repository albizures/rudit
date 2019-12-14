import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насаживать: PerfectVerb = {
  name: Word('насаживать', 3),
  singular1stPerson: Word('насаживаю', 3),
  singular2ndPerson: Word('насаживаешь', 3),
  singular3rdPerson: Word('насаживает', 3),
  plural1stPerson: Word('насаживаем', 3),
  plural2ndPerson: Word('насаживаете', 3),
  plural3rdPerson: Word('насаживают', 3),
  masculinePast: Word('насаживал', 3),
  femininePast: Word('насаживала', 3),
  neuterPast: Word('насаживало', 3),
  pluralPast: Word('насаживали', 3),
  imperativeInformal: Word('насаживай', 3),
  imperativeFormal: Word('насаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(насаживать.name.text, насаживать);

export { насаживать };