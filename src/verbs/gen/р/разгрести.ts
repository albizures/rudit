import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгрести: PerfectVerb = {
  name: Word('разгрести', 8),
  singular1stPerson: Word('разгребу', 7),
  singular2ndPerson: Word('разгребёшь', 7),
  singular3rdPerson: Word('разгребёт', 7),
  plural1stPerson: Word('разгребём', 7),
  plural2ndPerson: Word('разгребёте', 7),
  plural3rdPerson: Word('разгребут', 7),
  masculinePast: Word('разгрёб', 5),
  femininePast: Word('разгребла', 8),
  neuterPast: Word('разгребло', 8),
  pluralPast: Word('разгребли', 8),
  imperativeInformal: Word('разгреби', 7),
  imperativeFormal: Word('разгребите', 7),
  imperfect: [],
};

perfectVerbs.set(разгрести.name.text, разгрести);

export { разгрести };