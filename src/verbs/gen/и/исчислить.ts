import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчислить: PerfectVerb = {
  name: Word('исчислить', 3),
  singular1stPerson: Word('исчислю', 3),
  singular2ndPerson: Word('исчислишь', 3),
  singular3rdPerson: Word('исчислит', 3),
  plural1stPerson: Word('исчислим', 3),
  plural2ndPerson: Word('исчислите', 3),
  plural3rdPerson: Word('исчислят', 3),
  masculinePast: Word('исчислил', 3),
  femininePast: Word('исчислила', 3),
  neuterPast: Word('исчислило', 3),
  pluralPast: Word('исчислили', 3),
  imperativeInformal: Word('исчисли', 3),
  imperativeFormal: Word('исчислите', 3),
  imperfect: [],
};

perfectVerbs.set(исчислить.name.text, исчислить);

export { исчислить };