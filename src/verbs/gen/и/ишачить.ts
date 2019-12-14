import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ишачить: PerfectVerb = {
  name: Word('ишачить', 2),
  singular1stPerson: Word('ишачу', 2),
  singular2ndPerson: Word('ишачишь', 2),
  singular3rdPerson: Word('ишачит', 2),
  plural1stPerson: Word('ишачим', 2),
  plural2ndPerson: Word('ишачите', 2),
  plural3rdPerson: Word('ишачат', 2),
  masculinePast: Word('ишачил', 2),
  femininePast: Word('ишачила', 2),
  neuterPast: Word('ишачило', 2),
  pluralPast: Word('ишачили', 2),
  imperativeInformal: Word('ишачь', 2),
  imperativeFormal: Word('ишачьте', 2),
  imperfect: [],
};

perfectVerbs.set(ишачить.name.text, ишачить);

export { ишачить };