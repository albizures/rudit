import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переволновать: PerfectVerb = {
  name: Word('переволновать', 10),
  singular1stPerson: Word('переволную', 8),
  singular2ndPerson: Word('переволнуешь', 8),
  singular3rdPerson: Word('переволнует', 8),
  plural1stPerson: Word('переволнуем', 8),
  plural2ndPerson: Word('переволнуете', 8),
  plural3rdPerson: Word('переволнуют', 8),
  masculinePast: Word('переволновал', 10),
  femininePast: Word('переволновала', 10),
  neuterPast: Word('переволновало', 10),
  pluralPast: Word('переволновали', 10),
  imperativeInformal: Word('переволнуй', 8),
  imperativeFormal: Word('переволнуйте', 8),
  imperfect: [],
};

perfectVerbs.set(переволновать.name.text, переволновать);

export { переволновать };