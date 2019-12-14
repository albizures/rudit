import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досиживать: PerfectVerb = {
  name: Word('досиживать', 3),
  singular1stPerson: Word('досиживаю', 3),
  singular2ndPerson: Word('досиживаешь', 3),
  singular3rdPerson: Word('досиживает', 3),
  plural1stPerson: Word('досиживаем', 3),
  plural2ndPerson: Word('досиживаете', 3),
  plural3rdPerson: Word('досиживают', 3),
  masculinePast: Word('досиживал', 3),
  femininePast: Word('досиживала', 3),
  neuterPast: Word('досиживало', 3),
  pluralPast: Word('досиживали', 3),
  imperativeInformal: Word('досиживай', 3),
  imperativeFormal: Word('досиживайте', 3),
  imperfect: [],
};

perfectVerbs.set(досиживать.name.text, досиживать);

export { досиживать };