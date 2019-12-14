import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ладить: PerfectVerb = {
  name: Word('ладить', 1),
  singular1stPerson: Word('лажу', 1),
  singular2ndPerson: Word('ладишь', 1),
  singular3rdPerson: Word('ладит', 1),
  plural1stPerson: Word('ладим', 1),
  plural2ndPerson: Word('ладите', 1),
  plural3rdPerson: Word('ладят', 1),
  masculinePast: Word('ладил', 1),
  femininePast: Word('ладила', 1),
  neuterPast: Word('ладило', 1),
  pluralPast: Word('ладили', 1),
  imperativeInformal: Word('ладь', 1),
  imperativeFormal: Word('ладьте', 1),
  imperfect: ['поладить','наладить','заладить'],
};

perfectVerbs.set(ладить.name.text, ладить);

export { ладить };