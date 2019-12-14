import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плотничать: PerfectVerb = {
  name: Word('плотничать', 2),
  singular1stPerson: Word('плотничаю', 2),
  singular2ndPerson: Word('плотничаешь', 2),
  singular3rdPerson: Word('плотничает', 2),
  plural1stPerson: Word('плотничаем', 2),
  plural2ndPerson: Word('плотничаете', 2),
  plural3rdPerson: Word('плотничают', 2),
  masculinePast: Word('плотничал', 2),
  femininePast: Word('плотничала', 2),
  neuterPast: Word('плотничало', 2),
  pluralPast: Word('плотничали', 2),
  imperativeInformal: Word('плотничай', 2),
  imperativeFormal: Word('плотничайте', 2),
  imperfect: [],
};

perfectVerbs.set(плотничать.name.text, плотничать);

export { плотничать };