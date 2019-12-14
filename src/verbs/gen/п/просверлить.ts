import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просверлить: PerfectVerb = {
  name: Word('просверлить', 8),
  singular1stPerson: Word('просверлю', 8),
  singular2ndPerson: Word('просверлишь', 8),
  singular3rdPerson: Word('просверлит', 8),
  plural1stPerson: Word('просверлим', 8),
  plural2ndPerson: Word('просверлите', 8),
  plural3rdPerson: Word('просверлят', 8),
  masculinePast: Word('просверлил', 8),
  femininePast: Word('просверлила', 8),
  neuterPast: Word('просверлило', 8),
  pluralPast: Word('просверлили', 8),
  imperativeInformal: Word('просверли', 8),
  imperativeFormal: Word('просверлите', 8),
  imperfect: [],
};

perfectVerbs.set(просверлить.name.text, просверлить);

export { просверлить };