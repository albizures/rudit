import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переобувать: PerfectVerb = {
  name: Word('переобувать', 8),
  singular1stPerson: Word('переобуваю', 8),
  singular2ndPerson: Word('переобуваешь', 8),
  singular3rdPerson: Word('переобувает', 8),
  plural1stPerson: Word('переобуваем', 8),
  plural2ndPerson: Word('переобуваете', 8),
  plural3rdPerson: Word('переобувают', 8),
  masculinePast: Word('переобувал', 8),
  femininePast: Word('переобувала', 8),
  neuterPast: Word('переобувало', 8),
  pluralPast: Word('переобували', 8),
  imperativeInformal: Word('переобувай', 8),
  imperativeFormal: Word('переобувайте', 8),
  imperfect: [],
};

perfectVerbs.set(переобувать.name.text, переобувать);

export { переобувать };