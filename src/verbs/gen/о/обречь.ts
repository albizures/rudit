import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обречь: PerfectVerb = {
  name: Word('обречь', 3),
  singular1stPerson: Word('обреку', 5),
  singular2ndPerson: Word('обречёшь', 3),
  singular3rdPerson: Word('обречёт', 3),
  plural1stPerson: Word('обречём', 3),
  plural2ndPerson: Word('обречёте', 3),
  plural3rdPerson: Word('обрекут', 5),
  masculinePast: Word('обрёк', 0),
  femininePast: Word('обрекла', 6),
  neuterPast: Word('обрекло', 6),
  pluralPast: Word('обрекли', 6),
  imperativeInformal: Word('обреки', 5),
  imperativeFormal: Word('обреките', 5),
  imperfect: [],
};

perfectVerbs.set(обречь.name.text, обречь);

export { обречь };