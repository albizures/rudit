import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испошлить: PerfectVerb = {
  name: Word('испошлить', 3),
  singular1stPerson: Word('испошлю', 3),
  singular2ndPerson: Word('испошлишь', 3),
  singular3rdPerson: Word('испошлит', 3),
  plural1stPerson: Word('испошлим', 3),
  plural2ndPerson: Word('испошлите', 3),
  plural3rdPerson: Word('испошлят', 3),
  masculinePast: Word('испошлил', 3),
  femininePast: Word('испошлила', 3),
  neuterPast: Word('испошлило', 3),
  pluralPast: Word('испошлили', 3),
  imperativeInformal: Word('испошли', 3),
  imperativeFormal: Word('испошлите', 3),
  imperfect: [],
};

perfectVerbs.set(испошлить.name.text, испошлить);

export { испошлить };