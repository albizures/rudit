import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыбачить: PerfectVerb = {
  name: Word('рыбачить', 3),
  singular1stPerson: Word('рыбачу', 3),
  singular2ndPerson: Word('рыбачишь', 3),
  singular3rdPerson: Word('рыбачит', 3),
  plural1stPerson: Word('рыбачим', 3),
  plural2ndPerson: Word('рыбачите', 3),
  plural3rdPerson: Word('рыбачат', 3),
  masculinePast: Word('рыбачил', 3),
  femininePast: Word('рыбачила', 3),
  neuterPast: Word('рыбачило', 3),
  pluralPast: Word('рыбачили', 3),
  imperativeInformal: Word('рыбачь', 3),
  imperativeFormal: Word('рыбачьте', 3),
  imperfect: [],
};

perfectVerbs.set(рыбачить.name.text, рыбачить);

export { рыбачить };