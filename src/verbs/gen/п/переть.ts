import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переть: PerfectVerb = {
  name: Word('переть', 3),
  singular1stPerson: Word('пру', 2),
  singular2ndPerson: Word('прёшь', 2),
  singular3rdPerson: Word('прёт', 2),
  plural1stPerson: Word('прём', 2),
  plural2ndPerson: Word('прёте', 2),
  plural3rdPerson: Word('прут', 2),
  masculinePast: Word('пёр', 1),
  femininePast: Word('пёрла', 1),
  neuterPast: Word('пёрло', 1),
  pluralPast: Word('пёрли', 1),
  imperativeInformal: Word('при', 2),
  imperativeFormal: Word('прите', 2),
  imperfect: [],
};

perfectVerbs.set(переть.name.text, переть);

export { переть };