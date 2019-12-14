import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начислить: PerfectVerb = {
  name: Word('начислить', 3),
  singular1stPerson: Word('начислю', 3),
  singular2ndPerson: Word('начислишь', 3),
  singular3rdPerson: Word('начислит', 3),
  plural1stPerson: Word('начислим', 3),
  plural2ndPerson: Word('начислите', 3),
  plural3rdPerson: Word('начислят', 3),
  masculinePast: Word('начислил', 3),
  femininePast: Word('начислила', 3),
  neuterPast: Word('начислило', 3),
  pluralPast: Word('начислили', 3),
  imperativeInformal: Word('начисли', 3),
  imperativeFormal: Word('начислите', 3),
  imperfect: [],
};

perfectVerbs.set(начислить.name.text, начислить);

export { начислить };