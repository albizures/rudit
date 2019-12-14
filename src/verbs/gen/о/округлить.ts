import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const округлить: PerfectVerb = {
  name: Word('округлить', 6),
  singular1stPerson: Word('округлю', 6),
  singular2ndPerson: Word('округлишь', 6),
  singular3rdPerson: Word('округлит', 6),
  plural1stPerson: Word('округлим', 6),
  plural2ndPerson: Word('округлите', 6),
  plural3rdPerson: Word('округлят', 6),
  masculinePast: Word('округлил', 6),
  femininePast: Word('округлила', 6),
  neuterPast: Word('округлило', 6),
  pluralPast: Word('округлили', 6),
  imperativeInformal: Word('округли', 6),
  imperativeFormal: Word('округлите', 6),
  imperfect: [],
};

perfectVerbs.set(округлить.name.text, округлить);

export { округлить };