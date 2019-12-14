import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const украсть: PerfectVerb = {
  name: Word('украсть', 3),
  singular1stPerson: Word('украду', 5),
  singular2ndPerson: Word('украдёшь', 5),
  singular3rdPerson: Word('украдёт', 5),
  plural1stPerson: Word('украдём', 5),
  plural2ndPerson: Word('украдёте', 5),
  plural3rdPerson: Word('украдут', 5),
  masculinePast: Word('украл', 3),
  femininePast: Word('украла', 3),
  neuterPast: Word('украло', 3),
  pluralPast: Word('украли', 3),
  imperativeInformal: Word('укради', 5),
  imperativeFormal: Word('украдите', 5),
  imperfect: ['красть'],
};

perfectVerbs.set(украсть.name.text, украсть);

export { украсть };