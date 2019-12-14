import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предстать: PerfectVerb = {
  name: Word('предстать', 6),
  singular1stPerson: Word('предстаю', 7),
  singular2ndPerson: Word('предстаёшь', 6),
  singular3rdPerson: Word('предстаёт', 6),
  plural1stPerson: Word('предстаём', 6),
  plural2ndPerson: Word('предстаёте', 6),
  plural3rdPerson: Word('предстают', 7),
  masculinePast: Word('предстал', 6),
  femininePast: Word('предстала', 6),
  neuterPast: Word('предстало', 6),
  pluralPast: Word('предстали', 6),
  imperativeInformal: Word('предстай', 6),
  imperativeFormal: Word('предстайте', 6),
  imperfect: ['представать'],
};

perfectVerbs.set(предстать.name.text, предстать);

export { предстать };