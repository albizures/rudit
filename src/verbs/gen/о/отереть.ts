import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отереть: PerfectVerb = {
  name: Word('отереть', 4),
  singular1stPerson: Word('отру', 3),
  singular2ndPerson: Word('отрёшь', 3),
  singular3rdPerson: Word('отрёт', 3),
  plural1stPerson: Word('отрём', 3),
  plural2ndPerson: Word('отрёте', 3),
  plural3rdPerson: Word('отрут', 3),
  masculinePast: Word('отёр', 2),
  femininePast: Word('отёрла', 2),
  neuterPast: Word('отёрло', 2),
  pluralPast: Word('отёрли', 2),
  imperativeInformal: Word('отри', 3),
  imperativeFormal: Word('отрите', 3),
  imperfect: [],
};

perfectVerbs.set(отереть.name.text, отереть);

export { отереть };