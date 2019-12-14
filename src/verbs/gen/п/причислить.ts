import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причислить: PerfectVerb = {
  name: Word('причислить', 4),
  singular1stPerson: Word('причислю', 4),
  singular2ndPerson: Word('причислишь', 4),
  singular3rdPerson: Word('причислит', 4),
  plural1stPerson: Word('причислим', 4),
  plural2ndPerson: Word('причислите', 4),
  plural3rdPerson: Word('причислят', 4),
  masculinePast: Word('причислил', 4),
  femininePast: Word('причислила', 4),
  neuterPast: Word('причислило', 4),
  pluralPast: Word('причислили', 4),
  imperativeInformal: Word('причисли', 4),
  imperativeFormal: Word('причислите', 4),
  imperfect: [],
};

perfectVerbs.set(причислить.name.text, причислить);

export { причислить };