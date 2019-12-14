import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сводничать: PerfectVerb = {
  name: Word('сводничать', 2),
  singular1stPerson: Word('сводничаю', 2),
  singular2ndPerson: Word('сводничаешь', 2),
  singular3rdPerson: Word('сводничает', 2),
  plural1stPerson: Word('сводничаем', 2),
  plural2ndPerson: Word('сводничаете', 2),
  plural3rdPerson: Word('сводничают', 2),
  masculinePast: Word('сводничал', 2),
  femininePast: Word('сводничала', 2),
  neuterPast: Word('сводничало', 2),
  pluralPast: Word('сводничали', 2),
  imperativeInformal: Word('сводничай', 2),
  imperativeFormal: Word('сводничайте', 2),
  imperfect: [],
};

perfectVerbs.set(сводничать.name.text, сводничать);

export { сводничать };