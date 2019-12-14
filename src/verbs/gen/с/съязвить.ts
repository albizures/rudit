import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съязвить: PerfectVerb = {
  name: Word('съязвить', 5),
  singular1stPerson: Word('съязвлю', 6),
  singular2ndPerson: Word('съязвишь', 5),
  singular3rdPerson: Word('съязвит', 5),
  plural1stPerson: Word('съязвим', 5),
  plural2ndPerson: Word('съязвите', 5),
  plural3rdPerson: Word('съязвят', 5),
  masculinePast: Word('съязвил', 5),
  femininePast: Word('съязвила', 5),
  neuterPast: Word('съязвило', 5),
  pluralPast: Word('съязвили', 5),
  imperativeInformal: Word('съязви', 5),
  imperativeFormal: Word('съязвите', 5),
  imperfect: [],
};

perfectVerbs.set(съязвить.name.text, съязвить);

export { съязвить };