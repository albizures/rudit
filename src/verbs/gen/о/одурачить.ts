import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одурачить: PerfectVerb = {
  name: Word('одурачить', 4),
  singular1stPerson: Word('одурачу', 4),
  singular2ndPerson: Word('одурачишь', 4),
  singular3rdPerson: Word('одурачит', 4),
  plural1stPerson: Word('одурачим', 4),
  plural2ndPerson: Word('одурачите', 4),
  plural3rdPerson: Word('одурачат', 4),
  masculinePast: Word('одурачил', 4),
  femininePast: Word('одурачила', 4),
  neuterPast: Word('одурачило', 4),
  pluralPast: Word('одурачили', 4),
  imperativeInformal: Word('одурачь', 4),
  imperativeFormal: Word('одурачьте', 4),
  imperfect: [],
};

perfectVerbs.set(одурачить.name.text, одурачить);

export { одурачить };