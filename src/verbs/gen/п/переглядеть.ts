import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переглядеть: PerfectVerb = {
  name: Word('переглядеть', 8),
  singular1stPerson: Word('перегляжу', 8),
  singular2ndPerson: Word('переглядишь', 8),
  singular3rdPerson: Word('переглядит', 8),
  plural1stPerson: Word('переглядим', 8),
  plural2ndPerson: Word('переглядите', 8),
  plural3rdPerson: Word('переглядят', 8),
  masculinePast: Word('переглядел', 8),
  femininePast: Word('переглядела', 8),
  neuterPast: Word('переглядело', 8),
  pluralPast: Word('переглядели', 8),
  imperativeInformal: Word('перегляди', 8),
  imperativeFormal: Word('переглядите', 8),
  imperfect: [],
};

perfectVerbs.set(переглядеть.name.text, переглядеть);

export { переглядеть };