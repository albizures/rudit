import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ломить: PerfectVerb = {
  name: Word('ломить', 3),
  singular1stPerson: Word('ломлю', 4),
  singular2ndPerson: Word('ломишь', 1),
  singular3rdPerson: Word('ломит', 1),
  plural1stPerson: Word('ломим', 1),
  plural2ndPerson: Word('ломите', 1),
  plural3rdPerson: Word('ломят', 1),
  masculinePast: Word('ломил', 3),
  femininePast: Word('ломила', 3),
  neuterPast: Word('ломило', 3),
  pluralPast: Word('ломили', 3),
  imperativeInformal: Word('ломи', 3),
  imperativeFormal: Word('ломите', 3),
  imperfect: [],
};

perfectVerbs.set(ломить.name.text, ломить);

export { ломить };