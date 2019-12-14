import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приземлить: PerfectVerb = {
  name: Word('приземлить', 7),
  singular1stPerson: Word('приземлю', 7),
  singular2ndPerson: Word('приземлишь', 7),
  singular3rdPerson: Word('приземлит', 7),
  plural1stPerson: Word('приземлим', 7),
  plural2ndPerson: Word('приземлите', 7),
  plural3rdPerson: Word('приземлят', 7),
  masculinePast: Word('приземлил', 7),
  femininePast: Word('приземлила', 7),
  neuterPast: Word('приземлило', 7),
  pluralPast: Word('приземлили', 7),
  imperativeInformal: Word('приземли', 7),
  imperativeFormal: Word('приземлите', 7),
  imperfect: [],
};

perfectVerbs.set(приземлить.name.text, приземлить);

export { приземлить };