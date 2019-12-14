import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыдать: PerfectVerb = {
  name: Word('рыдать', 3),
  singular1stPerson: Word('рыдаю', 3),
  singular2ndPerson: Word('рыдаешь', 3),
  singular3rdPerson: Word('рыдает', 3),
  plural1stPerson: Word('рыдаем', 3),
  plural2ndPerson: Word('рыдаете', 3),
  plural3rdPerson: Word('рыдают', 3),
  masculinePast: Word('рыдал', 3),
  femininePast: Word('рыдала', 3),
  neuterPast: Word('рыдало', 3),
  pluralPast: Word('рыдали', 3),
  imperativeInformal: Word('рыдай', 3),
  imperativeFormal: Word('рыдайте', 3),
  imperfect: [],
};

perfectVerbs.set(рыдать.name.text, рыдать);

export { рыдать };