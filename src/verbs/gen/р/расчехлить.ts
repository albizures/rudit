import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчехлить: PerfectVerb = {
  name: Word('расчехлить', 7),
  singular1stPerson: Word('расчехлю', 7),
  singular2ndPerson: Word('расчехлишь', 7),
  singular3rdPerson: Word('расчехлит', 7),
  plural1stPerson: Word('расчехлим', 7),
  plural2ndPerson: Word('расчехлите', 7),
  plural3rdPerson: Word('расчехлят', 7),
  masculinePast: Word('расчехлил', 7),
  femininePast: Word('расчехлила', 7),
  neuterPast: Word('расчехлило', 7),
  pluralPast: Word('расчехлили', 7),
  imperativeInformal: Word('расчехли', 7),
  imperativeFormal: Word('расчехлите', 7),
  imperfect: [],
};

perfectVerbs.set(расчехлить.name.text, расчехлить);

export { расчехлить };