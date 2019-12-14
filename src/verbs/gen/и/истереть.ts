import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истереть: PerfectVerb = {
  name: Word('истереть', 5),
  singular1stPerson: Word('изотру', 5),
  singular2ndPerson: Word('изотрёшь', 0),
  singular3rdPerson: Word('изотрёт', 0),
  plural1stPerson: Word('изотрём', 0),
  plural2ndPerson: Word('изотрёте', 7),
  plural3rdPerson: Word('изотрут', 5),
  masculinePast: Word('истёр', 0),
  femininePast: Word('истёрла', 6),
  neuterPast: Word('истёрло', 0),
  pluralPast: Word('истёрли', 0),
  imperativeInformal: Word('изотри', 5),
  imperativeFormal: Word('изотрите', 5),
  imperfect: [],
};

perfectVerbs.set(истереть.name.text, истереть);

export { истереть };