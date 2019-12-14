import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const познавать: PerfectVerb = {
  name: Word('познавать', 6),
  singular1stPerson: Word('познаю', 5),
  singular2ndPerson: Word('познаёшь', 5),
  singular3rdPerson: Word('познаёт', 5),
  plural1stPerson: Word('познаём', 5),
  plural2ndPerson: Word('познаёте', 5),
  plural3rdPerson: Word('познают', 5),
  masculinePast: Word('познавал', 6),
  femininePast: Word('познавала', 6),
  neuterPast: Word('познавало', 6),
  pluralPast: Word('познавали', 6),
  imperativeInformal: Word('познавай', 6),
  imperativeFormal: Word('познавайте', 6),
  imperfect: [],
};

perfectVerbs.set(познавать.name.text, познавать);

export { познавать };