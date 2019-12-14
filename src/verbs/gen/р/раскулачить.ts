import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскулачить: PerfectVerb = {
  name: Word('раскулачить', 6),
  singular1stPerson: Word('раскулачу', 6),
  singular2ndPerson: Word('раскулачишь', 6),
  singular3rdPerson: Word('раскулачит', 6),
  plural1stPerson: Word('раскулачим', 6),
  plural2ndPerson: Word('раскулачите', 6),
  plural3rdPerson: Word('раскулачат', 6),
  masculinePast: Word('раскулачил', 6),
  femininePast: Word('раскулачила', 6),
  neuterPast: Word('раскулачило', 6),
  pluralPast: Word('раскулачили', 6),
  imperativeInformal: Word('раскулачь', 6),
  imperativeFormal: Word('раскулачьте', 6),
  imperfect: [],
};

perfectVerbs.set(раскулачить.name.text, раскулачить);

export { раскулачить };