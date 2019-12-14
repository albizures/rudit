import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переехать: PerfectVerb = {
  name: Word('переехать', 4),
  singular1stPerson: Word('перееду', 4),
  singular2ndPerson: Word('переедешь', 4),
  singular3rdPerson: Word('переедет', 4),
  plural1stPerson: Word('переедем', 4),
  plural2ndPerson: Word('переедете', 4),
  plural3rdPerson: Word('переедут', 4),
  masculinePast: Word('переехал', 4),
  femininePast: Word('переехала', 4),
  neuterPast: Word('переехало', 4),
  pluralPast: Word('переехали', 4),
  imperativeInformal: Word('переезжай', 7),
  imperativeFormal: Word('переезжайте', 7),
  imperfect: ['переезжать'],
};

perfectVerbs.set(переехать.name.text, переехать);

export { переехать };