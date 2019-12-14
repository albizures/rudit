import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надломить: PerfectVerb = {
  name: Word('надломить', 6),
  singular1stPerson: Word('надломлю', 7),
  singular2ndPerson: Word('надломишь', 4),
  singular3rdPerson: Word('надломит', 4),
  plural1stPerson: Word('надломим', 4),
  plural2ndPerson: Word('надломите', 4),
  plural3rdPerson: Word('надломят', 4),
  masculinePast: Word('надломил', 6),
  femininePast: Word('надломила', 6),
  neuterPast: Word('надломило', 6),
  pluralPast: Word('надломили', 6),
  imperativeInformal: Word('надломи', 6),
  imperativeFormal: Word('надломите', 6),
  imperfect: [],
};

perfectVerbs.set(надломить.name.text, надломить);

export { надломить };