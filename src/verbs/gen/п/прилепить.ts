import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилепить: PerfectVerb = {
  name: Word('прилепить', 6),
  singular1stPerson: Word('прилеплю', 7),
  singular2ndPerson: Word('прилепишь', 4),
  singular3rdPerson: Word('прилепит', 4),
  plural1stPerson: Word('прилепим', 4),
  plural2ndPerson: Word('прилепите', 4),
  plural3rdPerson: Word('прилепят', 4),
  masculinePast: Word('прилепил', 6),
  femininePast: Word('прилепила', 6),
  neuterPast: Word('прилепило', 6),
  pluralPast: Word('прилепили', 6),
  imperativeInformal: Word('прилепи', 6),
  imperativeFormal: Word('прилепите', 6),
  imperfect: [],
};

perfectVerbs.set(прилепить.name.text, прилепить);

export { прилепить };