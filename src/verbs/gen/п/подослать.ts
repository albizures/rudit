import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подослать: PerfectVerb = {
  name: Word('подослать', 6),
  singular1stPerson: Word('подошлю', 6),
  singular2ndPerson: Word('подошлёшь', 6),
  singular3rdPerson: Word('подошлёт', 6),
  plural1stPerson: Word('подошлём', 6),
  plural2ndPerson: Word('подошлёте', 6),
  plural3rdPerson: Word('подошлют', 6),
  masculinePast: Word('подослал', 6),
  femininePast: Word('подослала', 6),
  neuterPast: Word('подослало', 6),
  pluralPast: Word('подослали', 6),
  imperativeInformal: Word('подошли', 6),
  imperativeFormal: Word('подошлите', 6),
  imperfect: [],
};

perfectVerbs.set(подослать.name.text, подослать);

export { подослать };