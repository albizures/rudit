import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ассоциировать: PerfectVerb = {
  name: Word('ассоциировать', 6),
  singular1stPerson: Word('ассоциирую', 6),
  singular2ndPerson: Word('ассоциируешь', 6),
  singular3rdPerson: Word('ассоциирует', 6),
  plural1stPerson: Word('ассоциируем', 6),
  plural2ndPerson: Word('ассоциируете', 6),
  plural3rdPerson: Word('ассоциируют', 6),
  masculinePast: Word('ассоциировал', 6),
  femininePast: Word('ассоциировала', 6),
  neuterPast: Word('ассоциировало', 6),
  pluralPast: Word('ассоциировали', 6),
  imperativeInformal: Word('ассоциируй', 6),
  imperativeFormal: Word('ассоциируйте', 6),
  imperfect: [],
};

perfectVerbs.set(ассоциировать.name.text, ассоциировать);

export { ассоциировать };