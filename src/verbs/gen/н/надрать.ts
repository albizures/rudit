import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надрать: PerfectVerb = {
  name: Word('надрать', 4),
  singular1stPerson: Word('надеру', 5),
  singular2ndPerson: Word('надерёшь', 1),
  singular3rdPerson: Word('надерёт', 1),
  plural1stPerson: Word('надерём', 1),
  plural2ndPerson: Word('надерёте', 1),
  plural3rdPerson: Word('надерут', 5),
  masculinePast: Word('надрал', 4),
  femininePast: Word('надрала', 6),
  neuterPast: Word('надрало', 4),
  pluralPast: Word('надрали', 4),
  imperativeInformal: Word('надери', 5),
  imperativeFormal: Word('надерите', 5),
  imperfect: [],
};

perfectVerbs.set(надрать.name.text, надрать);

export { надрать };