import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поскрести: PerfectVerb = {
  name: Word('поскрести', 8),
  singular1stPerson: Word('поскребу', 7),
  singular2ndPerson: Word('поскребёшь', 5),
  singular3rdPerson: Word('поскребёт', 5),
  plural1stPerson: Word('поскребём', 5),
  plural2ndPerson: Word('поскребёте', 5),
  plural3rdPerson: Word('поскребут', 7),
  masculinePast: Word('поскреб', 5),
  femininePast: Word('поскребла', 8),
  neuterPast: Word('поскребло', 8),
  pluralPast: Word('поскребли', 8),
  imperativeInformal: Word('поскреби', 7),
  imperativeFormal: Word('поскребите', 7),
  imperfect: [],
};

perfectVerbs.set(поскрести.name.text, поскрести);

export { поскрести };