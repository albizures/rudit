import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свиснуть: PerfectVerb = {
  name: Word('свиснуть', 2),
  singular1stPerson: Word('свисну', 2),
  singular2ndPerson: Word('свиснешь', 2),
  singular3rdPerson: Word('свиснет', 2),
  plural1stPerson: Word('свиснем', 2),
  plural2ndPerson: Word('свиснете', 2),
  plural3rdPerson: Word('свиснут', 2),
  masculinePast: Word('свис', 2),
  femininePast: Word('свисла', 2),
  neuterPast: Word('свисло', 2),
  pluralPast: Word('свисли', 2),
  imperativeInformal: Word('свисни', 2),
  imperativeFormal: Word('свисните', 2),
  imperfect: [],
};

perfectVerbs.set(свиснуть.name.text, свиснуть);

export { свиснуть };