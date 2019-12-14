import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насиживать: PerfectVerb = {
  name: Word('насиживать', 3),
  singular1stPerson: Word('насиживаю', 3),
  singular2ndPerson: Word('насиживаешь', 3),
  singular3rdPerson: Word('насиживает', 3),
  plural1stPerson: Word('насиживаем', 3),
  plural2ndPerson: Word('насиживаете', 3),
  plural3rdPerson: Word('насиживают', 3),
  masculinePast: Word('насиживал', 3),
  femininePast: Word('насиживала', 3),
  neuterPast: Word('насиживало', 3),
  pluralPast: Word('насиживали', 3),
  imperativeInformal: Word('насиживай', 3),
  imperativeFormal: Word('насиживайте', 3),
  imperfect: [],
};

perfectVerbs.set(насиживать.name.text, насиживать);

export { насиживать };