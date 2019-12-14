import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчислить: PerfectVerb = {
  name: Word('отчислить', 3),
  singular1stPerson: Word('отчислю', 3),
  singular2ndPerson: Word('отчислишь', 3),
  singular3rdPerson: Word('отчислит', 3),
  plural1stPerson: Word('отчислим', 3),
  plural2ndPerson: Word('отчислите', 3),
  plural3rdPerson: Word('отчислят', 3),
  masculinePast: Word('отчислил', 3),
  femininePast: Word('отчислила', 3),
  neuterPast: Word('отчислило', 3),
  pluralPast: Word('отчислили', 3),
  imperativeInformal: Word('отчисли', 3),
  imperativeFormal: Word('отчислите', 3),
  imperfect: [],
};

perfectVerbs.set(отчислить.name.text, отчислить);

export { отчислить };