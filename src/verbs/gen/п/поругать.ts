import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поругать: PerfectVerb = {
  name: Word('поругать', 5),
  singular1stPerson: Word('поругаю', 5),
  singular2ndPerson: Word('поругаешь', 5),
  singular3rdPerson: Word('поругает', 5),
  plural1stPerson: Word('поругаем', 5),
  plural2ndPerson: Word('поругаете', 5),
  plural3rdPerson: Word('поругают', 5),
  masculinePast: Word('поругал', 5),
  femininePast: Word('поругала', 5),
  neuterPast: Word('поругало', 5),
  pluralPast: Word('поругали', 5),
  imperativeInformal: Word('поругай', 5),
  imperativeFormal: Word('поругайте', 5),
  imperfect: [],
};

perfectVerbs.set(поругать.name.text, поругать);

export { поругать };