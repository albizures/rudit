import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надоесть: PerfectVerb = {
  name: Word('надоесть', 4),
  singular1stPerson: Word('надоем', 4),
  singular2ndPerson: Word('надоешь', 4),
  singular3rdPerson: Word('надоест', 4),
  plural1stPerson: Word('надоедим', 6),
  plural2ndPerson: Word('надоедите', 6),
  plural3rdPerson: Word('надоедят', 6),
  masculinePast: Word('надоел', 4),
  femininePast: Word('надоела', 4),
  neuterPast: Word('надоело', 4),
  pluralPast: Word('надоели', 4),
  imperativeInformal: Word('надоешь', 4),
  imperativeFormal: Word('надоешьте', 4),
  imperfect: ['надоедать'],
};

perfectVerbs.set(надоесть.name.text, надоесть);

export { надоесть };