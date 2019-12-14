import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угодничать: PerfectVerb = {
  name: Word('угодничать', 2),
  singular1stPerson: Word('угодничаю', 2),
  singular2ndPerson: Word('угодничаешь', 2),
  singular3rdPerson: Word('угодничает', 2),
  plural1stPerson: Word('угодничаем', 2),
  plural2ndPerson: Word('угодничаете', 2),
  plural3rdPerson: Word('угодничают', 2),
  masculinePast: Word('угодничал', 2),
  femininePast: Word('угодничала', 2),
  neuterPast: Word('угодничало', 2),
  pluralPast: Word('угодничали', 2),
  imperativeInformal: Word('угодничай', 2),
  imperativeFormal: Word('угодничайте', 2),
  imperfect: [],
};

perfectVerbs.set(угодничать.name.text, угодничать);

export { угодничать };