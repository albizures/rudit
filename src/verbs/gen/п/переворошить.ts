import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переворошить: PerfectVerb = {
  name: Word('переворошить', 9),
  singular1stPerson: Word('переворошу', 9),
  singular2ndPerson: Word('переворошишь', 9),
  singular3rdPerson: Word('переворошит', 9),
  plural1stPerson: Word('переворошим', 9),
  plural2ndPerson: Word('переворошите', 9),
  plural3rdPerson: Word('переворошат', 9),
  masculinePast: Word('переворошил', 9),
  femininePast: Word('переворошила', 9),
  neuterPast: Word('переворошило', 9),
  pluralPast: Word('переворошили', 9),
  imperativeInformal: Word('перевороши', 9),
  imperativeFormal: Word('переворошите', 9),
  imperfect: [],
};

perfectVerbs.set(переворошить.name.text, переворошить);

export { переворошить };