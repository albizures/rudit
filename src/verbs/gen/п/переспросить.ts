import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переспросить: PerfectVerb = {
  name: Word('переспросить', 9),
  singular1stPerson: Word('переспрошу', 9),
  singular2ndPerson: Word('переспросишь', 7),
  singular3rdPerson: Word('переспросит', 7),
  plural1stPerson: Word('переспросим', 7),
  plural2ndPerson: Word('переспросите', 7),
  plural3rdPerson: Word('переспросят', 7),
  masculinePast: Word('переспросил', 9),
  femininePast: Word('переспросила', 9),
  neuterPast: Word('переспросило', 9),
  pluralPast: Word('переспросили', 9),
  imperativeInformal: Word('переспроси', 9),
  imperativeFormal: Word('переспросите', 9),
  imperfect: [],
};

perfectVerbs.set(переспросить.name.text, переспросить);

export { переспросить };