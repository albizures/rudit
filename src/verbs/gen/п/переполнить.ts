import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переполнить: PerfectVerb = {
  name: Word('переполнить', 5),
  singular1stPerson: Word('переполню', 5),
  singular2ndPerson: Word('переполнишь', 5),
  singular3rdPerson: Word('переполнит', 5),
  plural1stPerson: Word('переполним', 5),
  plural2ndPerson: Word('переполните', 5),
  plural3rdPerson: Word('переполнят', 5),
  masculinePast: Word('переполнил', 5),
  femininePast: Word('переполнила', 5),
  neuterPast: Word('переполнило', 5),
  pluralPast: Word('переполнили', 5),
  imperativeInformal: Word('переполни', 5),
  imperativeFormal: Word('переполните', 5),
  imperfect: [],
};

perfectVerbs.set(переполнить.name.text, переполнить);

export { переполнить };