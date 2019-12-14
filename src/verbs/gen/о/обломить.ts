import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обломить: PerfectVerb = {
  name: Word('обломить', 5),
  singular1stPerson: Word('обломлю', 6),
  singular2ndPerson: Word('обломишь', 3),
  singular3rdPerson: Word('обломит', 3),
  plural1stPerson: Word('обломим', 3),
  plural2ndPerson: Word('обломите', 3),
  plural3rdPerson: Word('обломят', 3),
  masculinePast: Word('обломил', 5),
  femininePast: Word('обломила', 5),
  neuterPast: Word('обломило', 5),
  pluralPast: Word('обломили', 5),
  imperativeInformal: Word('обломи', 5),
  imperativeFormal: Word('обломите', 5),
  imperfect: [],
};

perfectVerbs.set(обломить.name.text, обломить);

export { обломить };