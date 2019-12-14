import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыхлить: PerfectVerb = {
  name: Word('рыхлить', 4),
  singular1stPerson: Word('рыхлю', 4),
  singular2ndPerson: Word('рыхлишь', 4),
  singular3rdPerson: Word('рыхлит', 4),
  plural1stPerson: Word('рыхлим', 4),
  plural2ndPerson: Word('рыхлите', 4),
  plural3rdPerson: Word('рыхлят', 4),
  masculinePast: Word('рыхлил', 4),
  femininePast: Word('рыхлила', 4),
  neuterPast: Word('рыхлило', 4),
  pluralPast: Word('рыхлили', 4),
  imperativeInformal: Word('рыхли', 4),
  imperativeFormal: Word('рыхлите', 4),
  imperfect: [],
};

perfectVerbs.set(рыхлить.name.text, рыхлить);

export { рыхлить };