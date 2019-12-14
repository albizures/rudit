import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притиснуть: PerfectVerb = {
  name: Word('притиснуть', 4),
  singular1stPerson: Word('притисну', 4),
  singular2ndPerson: Word('притиснешь', 4),
  singular3rdPerson: Word('притиснет', 4),
  plural1stPerson: Word('притиснем', 4),
  plural2ndPerson: Word('притиснете', 4),
  plural3rdPerson: Word('притиснут', 4),
  masculinePast: Word('притиснул', 4),
  femininePast: Word('притиснула', 4),
  neuterPast: Word('притиснуло', 4),
  pluralPast: Word('притиснули', 4),
  imperativeInformal: Word('притисни', 4),
  imperativeFormal: Word('притисните', 4),
  imperfect: [],
};

perfectVerbs.set(притиснуть.name.text, притиснуть);

export { притиснуть };