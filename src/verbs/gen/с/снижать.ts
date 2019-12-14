import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снижать: PerfectVerb = {
  name: Word('снижать', 4),
  singular1stPerson: Word('снижаю', 4),
  singular2ndPerson: Word('снижаешь', 4),
  singular3rdPerson: Word('снижает', 4),
  plural1stPerson: Word('снижаем', 4),
  plural2ndPerson: Word('снижаете', 4),
  plural3rdPerson: Word('снижают', 4),
  masculinePast: Word('снижал', 4),
  femininePast: Word('снижала', 4),
  neuterPast: Word('снижало', 4),
  pluralPast: Word('снижали', 4),
  imperativeInformal: Word('снижай', 4),
  imperativeFormal: Word('снижайте', 4),
  imperfect: [],
};

perfectVerbs.set(снижать.name.text, снижать);

export { снижать };