import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грести: PerfectVerb = {
  name: Word('грести', 5),
  singular1stPerson: Word('гребу', 4),
  singular2ndPerson: Word('гребёшь', 2),
  singular3rdPerson: Word('гребёт', 2),
  plural1stPerson: Word('гребём', 2),
  plural2ndPerson: Word('гребёте', 2),
  plural3rdPerson: Word('гребут', 4),
  masculinePast: Word('грёб', 2),
  femininePast: Word('гребла', 5),
  neuterPast: Word('гребло', 5),
  pluralPast: Word('гребли', 5),
  imperativeInformal: Word('греби', 4),
  imperativeFormal: Word('гребите', 4),
  imperfect: [],
};

perfectVerbs.set(грести.name.text, грести);

export { грести };