import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачехлить: PerfectVerb = {
  name: Word('зачехлить', 6),
  singular1stPerson: Word('зачехлю', 6),
  singular2ndPerson: Word('зачехлишь', 6),
  singular3rdPerson: Word('зачехлит', 6),
  plural1stPerson: Word('зачехлим', 6),
  plural2ndPerson: Word('зачехлите', 6),
  plural3rdPerson: Word('зачехлят', 6),
  masculinePast: Word('зачехлил', 6),
  femininePast: Word('зачехлила', 6),
  neuterPast: Word('зачехлило', 6),
  pluralPast: Word('зачехлили', 6),
  imperativeInformal: Word('зачехли', 6),
  imperativeFormal: Word('зачехлите', 6),
  imperfect: [],
};

perfectVerbs.set(зачехлить.name.text, зачехлить);

export { зачехлить };