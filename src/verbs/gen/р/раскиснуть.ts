import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскиснуть: PerfectVerb = {
  name: Word('раскиснуть', 4),
  singular1stPerson: Word('раскисну', 4),
  singular2ndPerson: Word('раскиснешь', 4),
  singular3rdPerson: Word('раскиснет', 4),
  plural1stPerson: Word('раскиснем', 4),
  plural2ndPerson: Word('раскиснете', 4),
  plural3rdPerson: Word('раскиснут', 4),
  masculinePast: Word('раскис', 4),
  femininePast: Word('раскисла', 4),
  neuterPast: Word('раскисло', 4),
  pluralPast: Word('раскисли', 4),
  imperativeInformal: Word('раскисни', 4),
  imperativeFormal: Word('раскисните', 4),
  imperfect: [],
};

perfectVerbs.set(раскиснуть.name.text, раскиснуть);

export { раскиснуть };