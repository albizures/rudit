import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const портачить: PerfectVerb = {
  name: Word('портачить', 4),
  singular1stPerson: Word('портачу', 4),
  singular2ndPerson: Word('портачишь', 4),
  singular3rdPerson: Word('портачит', 4),
  plural1stPerson: Word('портачим', 4),
  plural2ndPerson: Word('портачите', 4),
  plural3rdPerson: Word('портачат', 4),
  masculinePast: Word('портачил', 4),
  femininePast: Word('портачила', 4),
  neuterPast: Word('портачило', 4),
  pluralPast: Word('портачили', 4),
  imperativeInformal: Word('портачь', 4),
  imperativeFormal: Word('портачьте', 4),
  imperfect: [],
};

perfectVerbs.set(портачить.name.text, портачить);

export { портачить };