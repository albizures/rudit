import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сломить: PerfectVerb = {
  name: Word('сломить', 4),
  singular1stPerson: Word('сломлю', 5),
  singular2ndPerson: Word('сломишь', 2),
  singular3rdPerson: Word('сломит', 2),
  plural1stPerson: Word('сломим', 2),
  plural2ndPerson: Word('сломите', 2),
  plural3rdPerson: Word('сломят', 2),
  masculinePast: Word('сломил', 4),
  femininePast: Word('сломила', 4),
  neuterPast: Word('сломило', 4),
  pluralPast: Word('сломили', 4),
  imperativeInformal: Word('сломи', 4),
  imperativeFormal: Word('сломите', 4),
  imperfect: [],
};

perfectVerbs.set(сломить.name.text, сломить);

export { сломить };