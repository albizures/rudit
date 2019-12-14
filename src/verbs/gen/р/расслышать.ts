import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расслышать: PerfectVerb = {
  name: Word('расслышать', 5),
  singular1stPerson: Word('расслышу', 5),
  singular2ndPerson: Word('расслышишь', 5),
  singular3rdPerson: Word('расслышит', 5),
  plural1stPerson: Word('расслышим', 5),
  plural2ndPerson: Word('расслышите', 5),
  plural3rdPerson: Word('расслышат', 5),
  masculinePast: Word('расслышал', 5),
  femininePast: Word('расслышала', 5),
  neuterPast: Word('расслышало', 5),
  pluralPast: Word('расслышали', 5),
  imperativeInformal: Word('расслышь', 5),
  imperativeFormal: Word('расслышьте', 5),
  imperfect: [],
};

perfectVerbs.set(расслышать.name.text, расслышать);

export { расслышать };