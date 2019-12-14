import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заземлить: PerfectVerb = {
  name: Word('заземлить', 6),
  singular1stPerson: Word('заземлю', 6),
  singular2ndPerson: Word('заземлишь', 6),
  singular3rdPerson: Word('заземлит', 6),
  plural1stPerson: Word('заземлим', 6),
  plural2ndPerson: Word('заземлите', 6),
  plural3rdPerson: Word('заземлят', 6),
  masculinePast: Word('заземлил', 6),
  femininePast: Word('заземлила', 6),
  neuterPast: Word('заземлило', 6),
  pluralPast: Word('заземлили', 6),
  imperativeInformal: Word('заземли', 6),
  imperativeFormal: Word('заземлите', 6),
  imperfect: [],
};

perfectVerbs.set(заземлить.name.text, заземлить);

export { заземлить };