import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрать: PerfectVerb = {
  name: Word('подрать', 4),
  singular1stPerson: Word('подеру', 5),
  singular2ndPerson: Word('подерёшь', 3),
  singular3rdPerson: Word('подерёт', 3),
  plural1stPerson: Word('подерём', 3),
  plural2ndPerson: Word('подерёте', 3),
  plural3rdPerson: Word('подерут', 5),
  masculinePast: Word('подрал', 4),
  femininePast: Word('подрала', 6),
  neuterPast: Word('подрало', 4),
  pluralPast: Word('подрали', 4),
  imperativeInformal: Word('подери', 5),
  imperativeFormal: Word('подерите', 5),
  imperfect: [],
};

perfectVerbs.set(подрать.name.text, подрать);

export { подрать };