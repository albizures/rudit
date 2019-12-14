import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угаснуть: PerfectVerb = {
  name: Word('угаснуть', 2),
  singular1stPerson: Word('угасну', 2),
  singular2ndPerson: Word('угаснешь', 2),
  singular3rdPerson: Word('угаснет', 2),
  plural1stPerson: Word('угаснем', 2),
  plural2ndPerson: Word('угаснете', 2),
  plural3rdPerson: Word('угаснут', 2),
  masculinePast: Word('угас', 2),
  femininePast: Word('угасла', 2),
  neuterPast: Word('угасло', 2),
  pluralPast: Word('угасли', 2),
  imperativeInformal: Word('угасни', 2),
  imperativeFormal: Word('угасните', 2),
  imperfect: [],
};

perfectVerbs.set(угаснуть.name.text, угаснуть);

export { угаснуть };