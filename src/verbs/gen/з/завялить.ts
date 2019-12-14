import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завялить: PerfectVerb = {
  name: Word('завялить', 3),
  singular1stPerson: Word('завялю', 3),
  singular2ndPerson: Word('завялишь', 3),
  singular3rdPerson: Word('завялит', 3),
  plural1stPerson: Word('завялим', 3),
  plural2ndPerson: Word('завялите', 3),
  plural3rdPerson: Word('завялят', 3),
  masculinePast: Word('завялил', 3),
  femininePast: Word('завялила', 3),
  neuterPast: Word('завялило', 3),
  pluralPast: Word('завялили', 3),
  imperativeInformal: Word('завяль', 3),
  imperativeFormal: Word('завяльте', 3),
  imperfect: [],
};

perfectVerbs.set(завялить.name.text, завялить);

export { завялить };