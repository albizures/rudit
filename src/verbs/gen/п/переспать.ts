import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переспать: PerfectVerb = {
  name: Word('переспать', 6),
  singular1stPerson: Word('пересплю', 7),
  singular2ndPerson: Word('переспишь', 6),
  singular3rdPerson: Word('переспит', 6),
  plural1stPerson: Word('переспим', 6),
  plural2ndPerson: Word('переспите', 6),
  plural3rdPerson: Word('переспят', 6),
  masculinePast: Word('переспал', 6),
  femininePast: Word('переспала', 8),
  neuterPast: Word('переспало', 6),
  pluralPast: Word('переспали', 6),
  imperativeInformal: Word('переспи', 6),
  imperativeFormal: Word('переспите', 6),
  imperfect: [],
};

perfectVerbs.set(переспать.name.text, переспать);

export { переспать };