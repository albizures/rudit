import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отереть: PerfectVerb = {
  name: Word('отереть', 4),
  singular1stPerson: Word('отру', 3),
  singular2ndPerson: Word('отрёшь', 0),
  singular3rdPerson: Word('отрёт', 0),
  plural1stPerson: Word('отрём', 0),
  plural2ndPerson: Word('отрёте', 5),
  plural3rdPerson: Word('отрут', 3),
  masculinePast: Word('отёр', 0),
  femininePast: Word('отёрла', 5),
  neuterPast: Word('отёрло', 0),
  pluralPast: Word('отёрли', 5),
  imperativeInformal: Word('отри', 3),
  imperativeFormal: Word('отрите', 3),
  imperfect: [],
};

perfectVerbs.set(отереть.name.text, отереть);

export { отереть };