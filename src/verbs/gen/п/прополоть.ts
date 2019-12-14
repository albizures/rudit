import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прополоть: PerfectVerb = {
  name: Word('прополоть', 6),
  singular1stPerson: Word('прополю', 6),
  singular2ndPerson: Word('прополешь', 4),
  singular3rdPerson: Word('прополет', 4),
  plural1stPerson: Word('прополем', 4),
  plural2ndPerson: Word('прополете', 4),
  plural3rdPerson: Word('прополют', 4),
  masculinePast: Word('прополол', 6),
  femininePast: Word('прополола', 6),
  neuterPast: Word('пропололо', 6),
  pluralPast: Word('пропололи', 6),
  imperativeInformal: Word('прополи', 6),
  imperativeFormal: Word('прополите', 6),
  imperfect: ['полоть'],
};

perfectVerbs.set(прополоть.name.text, прополоть);

export { прополоть };