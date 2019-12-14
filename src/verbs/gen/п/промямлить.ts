import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промямлить: PerfectVerb = {
  name: Word('промямлить', 4),
  singular1stPerson: Word('промямлю', 4),
  singular2ndPerson: Word('промямлишь', 4),
  singular3rdPerson: Word('промямлит', 4),
  plural1stPerson: Word('промямлим', 4),
  plural2ndPerson: Word('промямлите', 4),
  plural3rdPerson: Word('промямлят', 4),
  masculinePast: Word('промямлил', 4),
  femininePast: Word('промямлила', 4),
  neuterPast: Word('промямлило', 4),
  pluralPast: Word('промямлили', 4),
  imperativeInformal: Word('промямли', 4),
  imperativeFormal: Word('промямлите', 4),
  imperfect: [],
};

perfectVerbs.set(промямлить.name.text, промямлить);

export { промямлить };