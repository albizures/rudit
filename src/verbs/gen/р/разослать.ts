import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разослать: PerfectVerb = {
  name: Word('разослать', 6),
  singular1stPerson: Word('разошлю', 6),
  singular2ndPerson: Word('разошлёшь', 1),
  singular3rdPerson: Word('разошлёт', 1),
  plural1stPerson: Word('разошлём', 1),
  plural2ndPerson: Word('разошлёте', 1),
  plural3rdPerson: Word('разошлют', 6),
  masculinePast: Word('разослал', 6),
  femininePast: Word('разослала', 6),
  neuterPast: Word('разослало', 6),
  pluralPast: Word('разослали', 6),
  imperativeInformal: Word('разошли', 6),
  imperativeFormal: Word('разошлите', 6),
  imperfect: [],
};

perfectVerbs.set(разослать.name.text, разослать);

export { разослать };