import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надвинуть: PerfectVerb = {
  name: Word('надвинуть', 4),
  singular1stPerson: Word('надвину', 4),
  singular2ndPerson: Word('надвинешь', 4),
  singular3rdPerson: Word('надвинет', 4),
  plural1stPerson: Word('надвинем', 4),
  plural2ndPerson: Word('надвинете', 4),
  plural3rdPerson: Word('надвинут', 4),
  masculinePast: Word('надвинул', 4),
  femininePast: Word('надвинула', 4),
  neuterPast: Word('надвинуло', 4),
  pluralPast: Word('надвинули', 4),
  imperativeInformal: Word('надвинь', 4),
  imperativeFormal: Word('надвиньте', 4),
  imperfect: [],
};

perfectVerbs.set(надвинуть.name.text, надвинуть);

export { надвинуть };