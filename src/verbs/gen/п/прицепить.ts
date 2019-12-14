import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прицепить: PerfectVerb = {
  name: Word('прицепить', 6),
  singular1stPerson: Word('прицеплю', 7),
  singular2ndPerson: Word('прицепишь', 4),
  singular3rdPerson: Word('прицепит', 4),
  plural1stPerson: Word('прицепим', 4),
  plural2ndPerson: Word('прицепите', 4),
  plural3rdPerson: Word('прицепят', 4),
  masculinePast: Word('прицепил', 6),
  femininePast: Word('прицепила', 6),
  neuterPast: Word('прицепило', 6),
  pluralPast: Word('прицепили', 6),
  imperativeInformal: Word('прицепи', 6),
  imperativeFormal: Word('прицепите', 6),
  imperfect: [],
};

perfectVerbs.set(прицепить.name.text, прицепить);

export { прицепить };