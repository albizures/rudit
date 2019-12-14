import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мямлить: PerfectVerb = {
  name: Word('мямлить', 1),
  singular1stPerson: Word('мямлю', 1),
  singular2ndPerson: Word('мямлишь', 1),
  singular3rdPerson: Word('мямлит', 1),
  plural1stPerson: Word('мямлим', 1),
  plural2ndPerson: Word('мямлите', 1),
  plural3rdPerson: Word('мямлят', 1),
  masculinePast: Word('мямлил', 1),
  femininePast: Word('мямлила', 1),
  neuterPast: Word('мямлило', 1),
  pluralPast: Word('мямлили', 1),
  imperativeInformal: Word('мямли', 1),
  imperativeFormal: Word('мямлите', 1),
  imperfect: [],
};

perfectVerbs.set(мямлить.name.text, мямлить);

export { мямлить };