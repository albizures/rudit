import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымахать: PerfectVerb = {
  name: Word('вымахать', 1),
  singular1stPerson: Word('вымахаю', 1),
  singular2ndPerson: Word('вымахаешь', 1),
  singular3rdPerson: Word('вымахает', 1),
  plural1stPerson: Word('вымахаем', 1),
  plural2ndPerson: Word('вымахаете', 1),
  plural3rdPerson: Word('вымахают', 1),
  masculinePast: Word('вымахал', 1),
  femininePast: Word('вымахала', 1),
  neuterPast: Word('вымахало', 1),
  pluralPast: Word('вымахали', 1),
  imperativeInformal: Word('вымахай', 1),
  imperativeFormal: Word('вымахайте', 1),
  imperfect: [],
};

perfectVerbs.set(вымахать.name.text, вымахать);

export { вымахать };