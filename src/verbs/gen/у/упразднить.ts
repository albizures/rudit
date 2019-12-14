import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упразднить: PerfectVerb = {
  name: Word('упразднить', 7),
  singular1stPerson: Word('упраздню', 7),
  singular2ndPerson: Word('упразднишь', 7),
  singular3rdPerson: Word('упразднит', 7),
  plural1stPerson: Word('упраздним', 7),
  plural2ndPerson: Word('упраздните', 7),
  plural3rdPerson: Word('упразднят', 7),
  masculinePast: Word('упразднил', 7),
  femininePast: Word('упразднила', 7),
  neuterPast: Word('упразднило', 7),
  pluralPast: Word('упразднили', 7),
  imperativeInformal: Word('упраздни', 7),
  imperativeFormal: Word('упраздните', 7),
  imperfect: [],
};

perfectVerbs.set(упразднить.name.text, упразднить);

export { упразднить };