import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ворошить: PerfectVerb = {
  name: Word('ворошить', 5),
  singular1stPerson: Word('ворошу', 5),
  singular2ndPerson: Word('ворошишь', 5),
  singular3rdPerson: Word('ворошит', 5),
  plural1stPerson: Word('ворошим', 5),
  plural2ndPerson: Word('ворошите', 5),
  plural3rdPerson: Word('ворошат', 5),
  masculinePast: Word('ворошил', 5),
  femininePast: Word('ворошила', 5),
  neuterPast: Word('ворошило', 5),
  pluralPast: Word('ворошили', 5),
  imperativeInformal: Word('вороши', 5),
  imperativeFormal: Word('ворошите', 5),
  imperfect: [],
};

perfectVerbs.set(ворошить.name.text, ворошить);

export { ворошить };