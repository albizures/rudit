import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const судачить: PerfectVerb = {
  name: Word('судачить', 3),
  singular1stPerson: Word('судачу', 3),
  singular2ndPerson: Word('судачишь', 3),
  singular3rdPerson: Word('судачит', 3),
  plural1stPerson: Word('судачим', 3),
  plural2ndPerson: Word('судачите', 3),
  plural3rdPerson: Word('судачат', 3),
  masculinePast: Word('судачил', 3),
  femininePast: Word('судачила', 3),
  neuterPast: Word('судачило', 3),
  pluralPast: Word('судачили', 3),
  imperativeInformal: Word('судачь', 3),
  imperativeFormal: Word('судачьте', 3),
  imperfect: [],
};

perfectVerbs.set(судачить.name.text, судачить);

export { судачить };