import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совпадать: PerfectVerb = {
  name: Word('совпадать', 6),
  singular1stPerson: Word('совпадаю', 6),
  singular2ndPerson: Word('совпадаешь', 6),
  singular3rdPerson: Word('совпадает', 6),
  plural1stPerson: Word('совпадаем', 6),
  plural2ndPerson: Word('совпадаете', 6),
  plural3rdPerson: Word('совпадают', 6),
  masculinePast: Word('совпадал', 6),
  femininePast: Word('совпадала', 6),
  neuterPast: Word('совпадало', 6),
  pluralPast: Word('совпадали', 6),
  imperativeInformal: Word('совпадай', 6),
  imperativeFormal: Word('совпадайте', 6),
  imperfect: ['совпасть'],
};

perfectVerbs.set(совпадать.name.text, совпадать);

export { совпадать };