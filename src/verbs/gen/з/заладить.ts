import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заладить: PerfectVerb = {
  name: Word('заладить', 3),
  singular1stPerson: Word('залажу', 3),
  singular2ndPerson: Word('заладишь', 3),
  singular3rdPerson: Word('заладит', 3),
  plural1stPerson: Word('заладим', 3),
  plural2ndPerson: Word('заладите', 3),
  plural3rdPerson: Word('заладят', 3),
  masculinePast: Word('заладил', 3),
  femininePast: Word('заладила', 3),
  neuterPast: Word('заладило', 3),
  pluralPast: Word('заладили', 3),
  imperativeInformal: Word('заладь', 3),
  imperativeFormal: Word('заладьте', 3),
  imperfect: [],
};

perfectVerbs.set(заладить.name.text, заладить);

export { заладить };