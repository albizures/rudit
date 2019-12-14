import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бурлачить: PerfectVerb = {
  name: Word('бурлачить', 4),
  singular1stPerson: Word('бурлачу', 4),
  singular2ndPerson: Word('бурлачишь', 4),
  singular3rdPerson: Word('бурлачит', 4),
  plural1stPerson: Word('бурлачим', 4),
  plural2ndPerson: Word('бурлачите', 4),
  plural3rdPerson: Word('бурлачат', 4),
  masculinePast: Word('бурлачил', 4),
  femininePast: Word('бурлачила', 4),
  neuterPast: Word('бурлачило', 4),
  pluralPast: Word('бурлачили', 4),
  imperativeInformal: Word('бурлачь', 4),
  imperativeFormal: Word('бурлачьте', 4),
  imperfect: [],
};

perfectVerbs.set(бурлачить.name.text, бурлачить);

export { бурлачить };