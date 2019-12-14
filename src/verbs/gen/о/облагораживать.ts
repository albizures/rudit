import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облагораживать: PerfectVerb = {
  name: Word('облагораживать', 7),
  singular1stPerson: Word('облагораживаю', 7),
  singular2ndPerson: Word('облагораживаешь', 7),
  singular3rdPerson: Word('облагораживает', 7),
  plural1stPerson: Word('облагораживаем', 7),
  plural2ndPerson: Word('облагораживаете', 7),
  plural3rdPerson: Word('облагораживают', 7),
  masculinePast: Word('облагораживал', 7),
  femininePast: Word('облагораживала', 7),
  neuterPast: Word('облагораживало', 7),
  pluralPast: Word('облагораживали', 7),
  imperativeInformal: Word('облагораживай', 7),
  imperativeFormal: Word('облагораживайте', 7),
  imperfect: [],
};

perfectVerbs.set(облагораживать.name.text, облагораживать);

export { облагораживать };