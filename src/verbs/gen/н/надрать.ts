import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надрать: PerfectVerb = {
  name: Word('надрать', 4),
  singular1stPerson: Word('надеру', 5),
  singular2ndPerson: Word('надерёшь', 5),
  singular3rdPerson: Word('надерёт', 5),
  plural1stPerson: Word('надерём', 5),
  plural2ndPerson: Word('надерёте', 5),
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