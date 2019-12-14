import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изречь: PerfectVerb = {
  name: Word('изречь', 3),
  singular1stPerson: Word('изреку', 5),
  singular2ndPerson: Word('изречёшь', 5),
  singular3rdPerson: Word('изречёт', 5),
  plural1stPerson: Word('изречём', 5),
  plural2ndPerson: Word('изречёте', 5),
  plural3rdPerson: Word('изрекут', 5),
  masculinePast: Word('изрёк', 3),
  femininePast: Word('изрекла', 6),
  neuterPast: Word('изрекло', 6),
  pluralPast: Word('изрекли', 6),
  imperativeInformal: Word('изреки', 5),
  imperativeFormal: Word('изреките', 5),
  imperfect: ['изрекать'],
};

perfectVerbs.set(изречь.name.text, изречь);

export { изречь };