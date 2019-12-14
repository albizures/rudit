import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const низойти: PerfectVerb = {
  name: Word('низойти', 6),
  singular1stPerson: Word('низойду', 6),
  singular2ndPerson: Word('низойдёшь', 6),
  singular3rdPerson: Word('низойдёт', 6),
  plural1stPerson: Word('низойдём', 6),
  plural2ndPerson: Word('низойдёте', 6),
  plural3rdPerson: Word('низойдут', 6),
  masculinePast: Word('низошёл', 5),
  femininePast: Word('низошла', 6),
  neuterPast: Word('низошло', 6),
  pluralPast: Word('низошли', 6),
  imperativeInformal: Word('низойди', 6),
  imperativeFormal: Word('низойдите', 6),
  imperfect: [],
};

perfectVerbs.set(низойти.name.text, низойти);

export { низойти };