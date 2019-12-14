import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истереть: PerfectVerb = {
  name: Word('истереть', 5),
  singular1stPerson: Word('изотру', 5),
  singular2ndPerson: Word('изотрёшь', 5),
  singular3rdPerson: Word('изотрёт', 5),
  plural1stPerson: Word('изотрём', 5),
  plural2ndPerson: Word('изотрёте', 5),
  plural3rdPerson: Word('изотрут', 5),
  masculinePast: Word('истёр', 3),
  femininePast: Word('истёрла', 3),
  neuterPast: Word('истёрло', 3),
  pluralPast: Word('истёрли', 3),
  imperativeInformal: Word('изотри', 5),
  imperativeFormal: Word('изотрите', 5),
  imperfect: [],
};

perfectVerbs.set(истереть.name.text, истереть);

export { истереть };