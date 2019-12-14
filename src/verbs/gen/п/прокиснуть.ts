import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокиснуть: PerfectVerb = {
  name: Word('прокиснуть', 4),
  singular1stPerson: Word('прокисну', 4),
  singular2ndPerson: Word('прокиснешь', 4),
  singular3rdPerson: Word('прокиснет', 4),
  plural1stPerson: Word('прокиснем', 4),
  plural2ndPerson: Word('прокиснете', 4),
  plural3rdPerson: Word('прокиснут', 4),
  masculinePast: Word('прокис', 4),
  femininePast: Word('прокисла', 4),
  neuterPast: Word('прокисло', 4),
  pluralPast: Word('прокисли', 4),
  imperativeInformal: Word('прокисни', 4),
  imperativeFormal: Word('прокисните', 4),
  imperfect: [],
};

perfectVerbs.set(прокиснуть.name.text, прокиснуть);

export { прокиснуть };