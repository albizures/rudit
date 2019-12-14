import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переполошить: PerfectVerb = {
  name: Word('переполошить', 9),
  singular1stPerson: Word('переполошу', 9),
  singular2ndPerson: Word('переполошишь', 9),
  singular3rdPerson: Word('переполошит', 9),
  plural1stPerson: Word('переполошим', 9),
  plural2ndPerson: Word('переполошите', 9),
  plural3rdPerson: Word('переполошат', 9),
  masculinePast: Word('переполошил', 9),
  femininePast: Word('переполошила', 9),
  neuterPast: Word('переполошило', 9),
  pluralPast: Word('переполошили', 9),
  imperativeInformal: Word('переполоши', 9),
  imperativeFormal: Word('переполошите', 9),
  imperfect: [],
};

perfectVerbs.set(переполошить.name.text, переполошить);

export { переполошить };