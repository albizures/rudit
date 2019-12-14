import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притереть: PerfectVerb = {
  name: Word('притереть', 6),
  singular1stPerson: Word('притру', 5),
  singular2ndPerson: Word('притрёшь', 2),
  singular3rdPerson: Word('притрёт', 2),
  plural1stPerson: Word('притрём', 2),
  plural2ndPerson: Word('притрёте', 7),
  plural3rdPerson: Word('притрут', 5),
  masculinePast: Word('притер', 4),
  femininePast: Word('притерла', 4),
  neuterPast: Word('притерло', 4),
  pluralPast: Word('притерли', 4),
  imperativeInformal: Word('притри', 5),
  imperativeFormal: Word('притрите', 5),
  imperfect: [],
};

perfectVerbs.set(притереть.name.text, притереть);

export { притереть };