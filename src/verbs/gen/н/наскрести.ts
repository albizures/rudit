import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наскрести: PerfectVerb = {
  name: Word('наскрести', 8),
  singular1stPerson: Word('наскребу', 7),
  singular2ndPerson: Word('наскребёшь', 1),
  singular3rdPerson: Word('наскребёт', 1),
  plural1stPerson: Word('наскребём', 1),
  plural2ndPerson: Word('наскребёте', 1),
  plural3rdPerson: Word('наскребут', 7),
  masculinePast: Word('наскрёб', 1),
  femininePast: Word('наскребла', 8),
  neuterPast: Word('наскребло', 8),
  pluralPast: Word('наскребли', 8),
  imperativeInformal: Word('наскреби', 7),
  imperativeFormal: Word('наскребите', 7),
  imperfect: [],
};

perfectVerbs.set(наскрести.name.text, наскрести);

export { наскрести };