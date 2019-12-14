import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачислить: PerfectVerb = {
  name: Word('зачислить', 3),
  singular1stPerson: Word('зачислю', 3),
  singular2ndPerson: Word('зачислишь', 3),
  singular3rdPerson: Word('зачислит', 3),
  plural1stPerson: Word('зачислим', 3),
  plural2ndPerson: Word('зачислите', 3),
  plural3rdPerson: Word('зачислят', 3),
  masculinePast: Word('зачислил', 3),
  femininePast: Word('зачислила', 3),
  neuterPast: Word('зачислило', 3),
  pluralPast: Word('зачислили', 3),
  imperativeInformal: Word('зачисли', 3),
  imperativeFormal: Word('зачислите', 3),
  imperfect: [],
};

perfectVerbs.set(зачислить.name.text, зачислить);

export { зачислить };