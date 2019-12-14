import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разворошить: PerfectVerb = {
  name: Word('разворошить', 8),
  singular1stPerson: Word('разворошу', 8),
  singular2ndPerson: Word('разворошишь', 8),
  singular3rdPerson: Word('разворошит', 8),
  plural1stPerson: Word('разворошим', 8),
  plural2ndPerson: Word('разворошите', 8),
  plural3rdPerson: Word('разворошат', 8),
  masculinePast: Word('разворошил', 8),
  femininePast: Word('разворошила', 8),
  neuterPast: Word('разворошило', 8),
  pluralPast: Word('разворошили', 8),
  imperativeInformal: Word('развороши', 8),
  imperativeFormal: Word('разворошите', 8),
  imperfect: [],
};

perfectVerbs.set(разворошить.name.text, разворошить);

export { разворошить };