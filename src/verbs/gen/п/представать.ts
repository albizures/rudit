import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const представать: PerfectVerb = {
  name: Word('представать', 8),
  singular1stPerson: Word('предстаю', 7),
  singular2ndPerson: Word('предстаёшь', 6),
  singular3rdPerson: Word('предстаёт', 6),
  plural1stPerson: Word('предстаём', 6),
  plural2ndPerson: Word('предстаёте', 6),
  plural3rdPerson: Word('предстают', 7),
  masculinePast: Word('представал', 8),
  femininePast: Word('представала', 8),
  neuterPast: Word('представало', 8),
  pluralPast: Word('представали', 8),
  imperativeInformal: Word('представай', 8),
  imperativeFormal: Word('представайте', 8),
  imperfect: ['предстать'],
};

perfectVerbs.set(представать.name.text, представать);

export { представать };