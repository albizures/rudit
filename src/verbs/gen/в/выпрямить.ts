import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпрямить: PerfectVerb = {
  name: Word('выпрямить', 1),
  singular1stPerson: Word('выпрямлю', 1),
  singular2ndPerson: Word('выпрямишь', 1),
  singular3rdPerson: Word('выпрямит', 1),
  plural1stPerson: Word('выпрямим', 1),
  plural2ndPerson: Word('выпрямите', 1),
  plural3rdPerson: Word('выпрямят', 1),
  masculinePast: Word('выпрямил', 1),
  femininePast: Word('выпрямила', 1),
  neuterPast: Word('выпрямило', 1),
  pluralPast: Word('выпрямили', 1),
  imperativeInformal: Word('выпрями', 1),
  imperativeFormal: Word('выпрямите', 1),
  imperfect: [],
};

perfectVerbs.set(выпрямить.name.text, выпрямить);

export { выпрямить };