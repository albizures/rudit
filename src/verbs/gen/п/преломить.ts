import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преломить: PerfectVerb = {
  name: Word('преломить', 6),
  singular1stPerson: Word('преломлю', 7),
  singular2ndPerson: Word('преломишь', 4),
  singular3rdPerson: Word('преломит', 4),
  plural1stPerson: Word('преломим', 4),
  plural2ndPerson: Word('преломите', 4),
  plural3rdPerson: Word('преломят', 4),
  masculinePast: Word('преломил', 6),
  femininePast: Word('преломила', 6),
  neuterPast: Word('преломило', 6),
  pluralPast: Word('преломили', 6),
  imperativeInformal: Word('преломи', 6),
  imperativeFormal: Word('преломите', 6),
  imperfect: [],
};

perfectVerbs.set(преломить.name.text, преломить);

export { преломить };