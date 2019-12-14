import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соблюсти: PerfectVerb = {
  name: Word('соблюсти', 7),
  singular1stPerson: Word('соблюду', 6),
  singular2ndPerson: Word('соблюдёшь', 6),
  singular3rdPerson: Word('соблюдёт', 6),
  plural1stPerson: Word('соблюдём', 6),
  plural2ndPerson: Word('соблюдёте', 6),
  plural3rdPerson: Word('соблюдут', 6),
  masculinePast: Word('соблюл', 4),
  femininePast: Word('соблюла', 6),
  neuterPast: Word('соблюло', 6),
  pluralPast: Word('соблюли', 6),
  imperativeInformal: Word('соблюди', 6),
  imperativeFormal: Word('соблюдите', 6),
  imperfect: ['соблюдать','блюсти'],
};

perfectVerbs.set(соблюсти.name.text, соблюсти);

export { соблюсти };