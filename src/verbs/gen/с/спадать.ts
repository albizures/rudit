import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спадать: PerfectVerb = {
  name: Word('спадать', 4),
  singular1stPerson: Word('спадаю', 4),
  singular2ndPerson: Word('спадаешь', 4),
  singular3rdPerson: Word('спадает', 4),
  plural1stPerson: Word('спадаем', 4),
  plural2ndPerson: Word('спадаете', 4),
  plural3rdPerson: Word('спадают', 4),
  masculinePast: Word('спадал', 4),
  femininePast: Word('спадала', 4),
  neuterPast: Word('спадало', 4),
  pluralPast: Word('спадали', 4),
  imperativeInformal: Word('спадай', 4),
  imperativeFormal: Word('спадайте', 4),
  imperfect: ['спасть'],
};

perfectVerbs.set(спадать.name.text, спадать);

export { спадать };