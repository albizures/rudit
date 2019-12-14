import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгрести: PerfectVerb = {
  name: Word('подгрести', 8),
  singular1stPerson: Word('подгребу', 7),
  singular2ndPerson: Word('подгребёшь', 5),
  singular3rdPerson: Word('подгребёт', 5),
  plural1stPerson: Word('подгребём', 5),
  plural2ndPerson: Word('подгребёте', 5),
  plural3rdPerson: Word('подгребут', 7),
  masculinePast: Word('подгрёб', 1),
  femininePast: Word('подгребла', 8),
  neuterPast: Word('подгребло', 8),
  pluralPast: Word('подгребли', 8),
  imperativeInformal: Word('подгреби', 7),
  imperativeFormal: Word('подгребите', 7),
  imperfect: [],
};

perfectVerbs.set(подгрести.name.text, подгрести);

export { подгрести };