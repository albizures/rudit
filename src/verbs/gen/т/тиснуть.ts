import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тиснуть: PerfectVerb = {
  name: Word('тиснуть', 1),
  singular1stPerson: Word('тисну', 1),
  singular2ndPerson: Word('тиснешь', 1),
  singular3rdPerson: Word('тиснет', 1),
  plural1stPerson: Word('тиснем', 1),
  plural2ndPerson: Word('тиснете', 1),
  plural3rdPerson: Word('тиснут', 1),
  masculinePast: Word('тиснул', 1),
  femininePast: Word('тиснула', 1),
  neuterPast: Word('тиснуло', 1),
  pluralPast: Word('тиснули', 1),
  imperativeInformal: Word('тисни', 1),
  imperativeFormal: Word('тисните', 1),
  imperfect: [],
};

perfectVerbs.set(тиснуть.name.text, тиснуть);

export { тиснуть };