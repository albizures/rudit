import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переупрямить: PerfectVerb = {
  name: Word('переупрямить', 7),
  singular1stPerson: Word('переупрямлю', 7),
  singular2ndPerson: Word('переупрямишь', 7),
  singular3rdPerson: Word('переупрямит', 7),
  plural1stPerson: Word('переупрямим', 7),
  plural2ndPerson: Word('переупрямите', 7),
  plural3rdPerson: Word('переупрямят', 7),
  masculinePast: Word('переупрямил', 7),
  femininePast: Word('переупрямила', 7),
  neuterPast: Word('переупрямило', 7),
  pluralPast: Word('переупрямили', 7),
  imperativeInformal: Word('переупрямь', 7),
  imperativeFormal: Word('переупрямьте', 7),
  imperfect: [],
};

perfectVerbs.set(переупрямить.name.text, переупрямить);

export { переупрямить };