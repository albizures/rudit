import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошалеть: PerfectVerb = {
  name: Word('ошалеть', 4),
  singular1stPerson: Word('ошалею', 4),
  singular2ndPerson: Word('ошалеешь', 4),
  singular3rdPerson: Word('ошалеет', 4),
  plural1stPerson: Word('ошалеем', 4),
  plural2ndPerson: Word('ошалеете', 4),
  plural3rdPerson: Word('ошалеют', 4),
  masculinePast: Word('ошалел', 4),
  femininePast: Word('ошалела', 4),
  neuterPast: Word('ошалело', 4),
  pluralPast: Word('ошалели', 4),
  imperativeInformal: Word('ошалей', 4),
  imperativeFormal: Word('ошалейте', 4),
  imperfect: [],
};

perfectVerbs.set(ошалеть.name.text, ошалеть);

export { ошалеть };