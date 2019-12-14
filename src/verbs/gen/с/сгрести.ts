import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгрести: PerfectVerb = {
  name: Word('сгрести', 6),
  singular1stPerson: Word('сгребу', 5),
  singular2ndPerson: Word('сгребёшь', 5),
  singular3rdPerson: Word('сгребёт', 5),
  plural1stPerson: Word('сгребём', 5),
  plural2ndPerson: Word('сгребёте', 5),
  plural3rdPerson: Word('сгребут', 5),
  masculinePast: Word('сгрёб', 3),
  femininePast: Word('сгребла', 6),
  neuterPast: Word('сгребло', 6),
  pluralPast: Word('сгребли', 6),
  imperativeInformal: Word('сгреби', 5),
  imperativeFormal: Word('сгребите', 5),
  imperfect: [],
};

perfectVerbs.set(сгрести.name.text, сгрести);

export { сгрести };