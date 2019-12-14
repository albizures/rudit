import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выскрести: PerfectVerb = {
  name: Word('выскрести', 1),
  singular1stPerson: Word('выскребу', 1),
  singular2ndPerson: Word('выскребешь', 1),
  singular3rdPerson: Word('выскребет', 1),
  plural1stPerson: Word('выскребем', 1),
  plural2ndPerson: Word('выскребете', 1),
  plural3rdPerson: Word('выскребут', 1),
  masculinePast: Word('выскреб', 1),
  femininePast: Word('выскребла', 1),
  neuterPast: Word('выскребло', 1),
  pluralPast: Word('выскребли', 1),
  imperativeInformal: Word('выскреби', 1),
  imperativeFormal: Word('выскребите', 1),
  imperfect: [],
};

perfectVerbs.set(выскрести.name.text, выскрести);

export { выскрести };