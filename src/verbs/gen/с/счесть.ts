import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const счесть: PerfectVerb = {
  name: Word('счесть', 2),
  singular1stPerson: Word('сочту', 4),
  singular2ndPerson: Word('сочтёшь', 4),
  singular3rdPerson: Word('сочтёт', 4),
  plural1stPerson: Word('сочтём', 4),
  plural2ndPerson: Word('сочтёте', 4),
  plural3rdPerson: Word('сочтут', 4),
  masculinePast: Word('счёл', 2),
  femininePast: Word('сочла', 4),
  neuterPast: Word('сочло', 4),
  pluralPast: Word('сочли', 4),
  imperativeInformal: Word('сочти', 4),
  imperativeFormal: Word('сочтите', 4),
  imperfect: [],
};

perfectVerbs.set(счесть.name.text, счесть);

export { счесть };