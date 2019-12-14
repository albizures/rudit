import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвиснуть: PerfectVerb = {
  name: Word('отвиснуть', 3),
  singular1stPerson: Word('отвисну', 3),
  singular2ndPerson: Word('отвиснешь', 3),
  singular3rdPerson: Word('отвиснет', 3),
  plural1stPerson: Word('отвиснем', 3),
  plural2ndPerson: Word('отвиснете', 3),
  plural3rdPerson: Word('отвиснут', 3),
  masculinePast: Word('отвис', 3),
  femininePast: Word('отвисла', 3),
  neuterPast: Word('отвисло', 3),
  pluralPast: Word('отвисли', 3),
  imperativeInformal: Word('отвисни', 3),
  imperativeFormal: Word('отвисните', 3),
  imperfect: [],
};

perfectVerbs.set(отвиснуть.name.text, отвиснуть);

export { отвиснуть };