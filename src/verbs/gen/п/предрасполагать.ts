import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предрасполагать: PerfectVerb = {
  name: Word('предрасполагать', 12),
  singular1stPerson: Word('предрасполагаю', 12),
  singular2ndPerson: Word('предрасполагаешь', 12),
  singular3rdPerson: Word('предрасполагает', 12),
  plural1stPerson: Word('предрасполагаем', 12),
  plural2ndPerson: Word('предрасполагаете', 12),
  plural3rdPerson: Word('предрасполагают', 12),
  masculinePast: Word('предрасполагал', 12),
  femininePast: Word('предрасполагала', 12),
  neuterPast: Word('предрасполагало', 12),
  pluralPast: Word('предрасполагали', 12),
  imperativeInformal: Word('предрасполагай', 12),
  imperativeFormal: Word('предрасполагайте', 12),
  imperfect: [],
};

perfectVerbs.set(предрасполагать.name.text, предрасполагать);

export { предрасполагать };