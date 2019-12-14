import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простереть: PerfectVerb = {
  name: Word('простереть', 7),
  singular1stPerson: Word('простру', 6),
  singular2ndPerson: Word('прострёшь', 6),
  singular3rdPerson: Word('прострёт', 6),
  plural1stPerson: Word('прострём', 6),
  plural2ndPerson: Word('прострёте', 6),
  plural3rdPerson: Word('прострут', 6),
  masculinePast: Word('простер', 5),
  femininePast: Word('простерла', 5),
  neuterPast: Word('простерло', 5),
  pluralPast: Word('простерли', 5),
  imperativeInformal: Word('простри', 6),
  imperativeFormal: Word('прострите', 6),
  imperfect: [],
};

perfectVerbs.set(простереть.name.text, простереть);

export { простереть };