import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выломить: PerfectVerb = {
  name: Word('выломить', 1),
  singular1stPerson: Word('выломлю', 1),
  singular2ndPerson: Word('выломишь', 1),
  singular3rdPerson: Word('выломит', 1),
  plural1stPerson: Word('выломим', 1),
  plural2ndPerson: Word('выломите', 1),
  plural3rdPerson: Word('выломят', 1),
  masculinePast: Word('выломил', 1),
  femininePast: Word('выломила', 1),
  neuterPast: Word('выломило', 1),
  pluralPast: Word('выломили', 1),
  imperativeInformal: Word('выломи', 1),
  imperativeFormal: Word('выломите', 1),
  imperfect: [],
};

perfectVerbs.set(выломить.name.text, выломить);

export { выломить };