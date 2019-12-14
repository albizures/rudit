import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплеснуть: PerfectVerb = {
  name: Word('выплеснуть', 1),
  singular1stPerson: Word('выплесну', 1),
  singular2ndPerson: Word('выплеснешь', 1),
  singular3rdPerson: Word('выплеснет', 1),
  plural1stPerson: Word('выплеснем', 1),
  plural2ndPerson: Word('выплеснете', 1),
  plural3rdPerson: Word('выплеснут', 1),
  masculinePast: Word('выплеснул', 1),
  femininePast: Word('выплеснула', 1),
  neuterPast: Word('выплеснуло', 1),
  pluralPast: Word('выплеснули', 1),
  imperativeInformal: Word('выплесни', 1),
  imperativeFormal: Word('выплесните', 1),
  imperfect: [],
};

perfectVerbs.set(выплеснуть.name.text, выплеснуть);

export { выплеснуть };