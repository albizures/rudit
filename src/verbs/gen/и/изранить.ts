import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изранить: PerfectVerb = {
  name: Word('изранить', 3),
  singular1stPerson: Word('израню', 3),
  singular2ndPerson: Word('изранишь', 3),
  singular3rdPerson: Word('изранит', 3),
  plural1stPerson: Word('израним', 3),
  plural2ndPerson: Word('израните', 3),
  plural3rdPerson: Word('изранят', 3),
  masculinePast: Word('изранил', 3),
  femininePast: Word('изранила', 3),
  neuterPast: Word('изранило', 3),
  pluralPast: Word('изранили', 3),
  imperativeInformal: Word('изрань', 3),
  imperativeFormal: Word('израньте', 3),
  imperfect: [],
};

perfectVerbs.set(изранить.name.text, изранить);

export { изранить };