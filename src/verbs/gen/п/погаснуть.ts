import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погаснуть: PerfectVerb = {
  name: Word('погаснуть', 3),
  singular1stPerson: Word('погасну', 3),
  singular2ndPerson: Word('погаснешь', 3),
  singular3rdPerson: Word('погаснет', 3),
  plural1stPerson: Word('погаснем', 3),
  plural2ndPerson: Word('погаснете', 3),
  plural3rdPerson: Word('погаснут', 3),
  masculinePast: Word('погас', 3),
  femininePast: Word('погасла', 3),
  neuterPast: Word('погасло', 3),
  pluralPast: Word('погасли', 3),
  imperativeInformal: Word('погасни', 3),
  imperativeFormal: Word('погасните', 3),
  imperfect: [],
};

perfectVerbs.set(погаснуть.name.text, погаснуть);

export { погаснуть };