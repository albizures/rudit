import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продлить: PerfectVerb = {
  name: Word('продлить', 5),
  singular1stPerson: Word('продлю', 5),
  singular2ndPerson: Word('продлишь', 5),
  singular3rdPerson: Word('продлит', 5),
  plural1stPerson: Word('продлим', 5),
  plural2ndPerson: Word('продлите', 5),
  plural3rdPerson: Word('продлят', 5),
  masculinePast: Word('продлил', 5),
  femininePast: Word('продлила', 5),
  neuterPast: Word('продлило', 5),
  pluralPast: Word('продлили', 5),
  imperativeInformal: Word('продли', 5),
  imperativeFormal: Word('продлите', 5),
  imperfect: [],
};

perfectVerbs.set(продлить.name.text, продлить);

export { продлить };