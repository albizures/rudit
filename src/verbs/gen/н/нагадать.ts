import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагадать: PerfectVerb = {
  name: Word('нагадать', 5),
  singular1stPerson: Word('нагадаю', 5),
  singular2ndPerson: Word('нагадаешь', 5),
  singular3rdPerson: Word('нагадает', 5),
  plural1stPerson: Word('нагадаем', 5),
  plural2ndPerson: Word('нагадаете', 5),
  plural3rdPerson: Word('нагадают', 5),
  masculinePast: Word('нагадал', 5),
  femininePast: Word('нагадала', 5),
  neuterPast: Word('нагадало', 5),
  pluralPast: Word('нагадали', 5),
  imperativeInformal: Word('нагадай', 5),
  imperativeFormal: Word('нагадайте', 5),
  imperfect: [],
};

perfectVerbs.set(нагадать.name.text, нагадать);

export { нагадать };