import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переметить: PerfectVerb = {
  name: Word('переметить', 5),
  singular1stPerson: Word('перемечу', 5),
  singular2ndPerson: Word('переметишь', 5),
  singular3rdPerson: Word('переметит', 5),
  plural1stPerson: Word('переметим', 5),
  plural2ndPerson: Word('переметите', 5),
  plural3rdPerson: Word('переметят', 5),
  masculinePast: Word('переметил', 5),
  femininePast: Word('переметила', 5),
  neuterPast: Word('переметило', 5),
  pluralPast: Word('переметили', 5),
  imperativeInformal: Word('переметь', 5),
  imperativeFormal: Word('переметьте', 5),
  imperfect: [],
};

perfectVerbs.set(переметить.name.text, переметить);

export { переметить };