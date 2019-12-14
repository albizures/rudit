import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегладить: PerfectVerb = {
  name: Word('перегладить', 6),
  singular1stPerson: Word('переглажу', 6),
  singular2ndPerson: Word('перегладишь', 6),
  singular3rdPerson: Word('перегладит', 6),
  plural1stPerson: Word('перегладим', 6),
  plural2ndPerson: Word('перегладите', 6),
  plural3rdPerson: Word('перегладят', 6),
  masculinePast: Word('перегладил', 6),
  femininePast: Word('перегладила', 6),
  neuterPast: Word('перегладило', 6),
  pluralPast: Word('перегладили', 6),
  imperativeInformal: Word('перегладь', 6),
  imperativeFormal: Word('перегладьте', 6),
  imperfect: [],
};

perfectVerbs.set(перегладить.name.text, перегладить);

export { перегладить };