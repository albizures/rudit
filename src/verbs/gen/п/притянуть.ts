import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притянуть: PerfectVerb = {
  name: Word('притянуть', 6),
  singular1stPerson: Word('притяну', 6),
  singular2ndPerson: Word('притянешь', 4),
  singular3rdPerson: Word('притянет', 4),
  plural1stPerson: Word('притянем', 4),
  plural2ndPerson: Word('притянете', 4),
  plural3rdPerson: Word('притянут', 4),
  masculinePast: Word('притянул', 6),
  femininePast: Word('притянула', 6),
  neuterPast: Word('притянуло', 6),
  pluralPast: Word('притянули', 6),
  imperativeInformal: Word('притяни', 6),
  imperativeFormal: Word('притяните', 6),
  imperfect: ['притягивать'],
};

perfectVerbs.set(притянуть.name.text, притянуть);

export { притянуть };