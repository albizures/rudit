import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const барахлить: PerfectVerb = {
  name: Word('барахлить', 6),
  singular1stPerson: Word('барахлю', 6),
  singular2ndPerson: Word('барахлишь', 6),
  singular3rdPerson: Word('барахлит', 6),
  plural1stPerson: Word('барахлим', 6),
  plural2ndPerson: Word('барахлите', 6),
  plural3rdPerson: Word('барахлят', 6),
  masculinePast: Word('барахлил', 6),
  femininePast: Word('барахлила', 6),
  neuterPast: Word('барахлило', 6),
  pluralPast: Word('барахлили', 6),
  imperativeInformal: Word('барахли', 6),
  imperativeFormal: Word('барахлите', 6),
  imperfect: [],
};

perfectVerbs.set(барахлить.name.text, барахлить);

export { барахлить };