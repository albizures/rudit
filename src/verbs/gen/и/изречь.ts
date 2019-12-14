import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изречь: PerfectVerb = {
  name: Word('изречь', 3),
  singular1stPerson: Word('изреку', 5),
  singular2ndPerson: Word('изречёшь', 3),
  singular3rdPerson: Word('изречёт', 3),
  plural1stPerson: Word('изречём', 3),
  plural2ndPerson: Word('изречёте', 3),
  plural3rdPerson: Word('изрекут', 5),
  masculinePast: Word('изрёк', 0),
  femininePast: Word('изрекла', 6),
  neuterPast: Word('изрекло', 6),
  pluralPast: Word('изрекли', 6),
  imperativeInformal: Word('изреки', 5),
  imperativeFormal: Word('изреките', 5),
  imperfect: ['изрекать'],
};

perfectVerbs.set(изречь.name.text, изречь);

export { изречь };