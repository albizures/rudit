import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отломить: PerfectVerb = {
  name: Word('отломить', 5),
  singular1stPerson: Word('отломлю', 6),
  singular2ndPerson: Word('отломишь', 3),
  singular3rdPerson: Word('отломит', 3),
  plural1stPerson: Word('отломим', 3),
  plural2ndPerson: Word('отломите', 3),
  plural3rdPerson: Word('отломят', 3),
  masculinePast: Word('отломил', 5),
  femininePast: Word('отломила', 5),
  neuterPast: Word('отломило', 5),
  pluralPast: Word('отломили', 5),
  imperativeInformal: Word('отломи', 5),
  imperativeFormal: Word('отломите', 5),
  imperfect: [],
};

perfectVerbs.set(отломить.name.text, отломить);

export { отломить };