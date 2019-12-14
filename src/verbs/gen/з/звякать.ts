import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const звякать: PerfectVerb = {
  name: Word('звякать', 2),
  singular1stPerson: Word('звякаю', 2),
  singular2ndPerson: Word('звякаешь', 2),
  singular3rdPerson: Word('звякает', 2),
  plural1stPerson: Word('звякаем', 2),
  plural2ndPerson: Word('звякаете', 2),
  plural3rdPerson: Word('звякают', 2),
  masculinePast: Word('звякал', 2),
  femininePast: Word('звякала', 2),
  neuterPast: Word('звякало', 2),
  pluralPast: Word('звякали', 2),
  imperativeInformal: Word('звякай', 2),
  imperativeFormal: Word('звякайте', 2),
  imperfect: [],
};

perfectVerbs.set(звякать.name.text, звякать);

export { звякать };