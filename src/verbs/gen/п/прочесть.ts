import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочесть: PerfectVerb = {
  name: Word('прочесть', 4),
  singular1stPerson: Word('прочту', 5),
  singular2ndPerson: Word('прочтёшь', 5),
  singular3rdPerson: Word('прочтёт', 5),
  plural1stPerson: Word('прочтём', 5),
  plural2ndPerson: Word('прочтёте', 5),
  plural3rdPerson: Word('прочтут', 5),
  masculinePast: Word('прочёл', 4),
  femininePast: Word('прочла', 5),
  neuterPast: Word('прочло', 5),
  pluralPast: Word('прочли', 5),
  imperativeInformal: Word('прочти', 5),
  imperativeFormal: Word('прочтите', 5),
  imperfect: ['читать'],
};

perfectVerbs.set(прочесть.name.text, прочесть);

export { прочесть };