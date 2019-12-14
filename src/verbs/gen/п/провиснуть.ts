import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провиснуть: PerfectVerb = {
  name: Word('провиснуть', 4),
  singular1stPerson: Word('провисну', 4),
  singular2ndPerson: Word('провиснешь', 4),
  singular3rdPerson: Word('провиснет', 4),
  plural1stPerson: Word('провиснем', 4),
  plural2ndPerson: Word('провиснете', 4),
  plural3rdPerson: Word('провиснут', 4),
  masculinePast: Word('провис', 4),
  femininePast: Word('провисла', 4),
  neuterPast: Word('провисло', 4),
  pluralPast: Word('провисли', 4),
  imperativeInformal: Word('провисни', 4),
  imperativeFormal: Word('провисните', 4),
  imperfect: [],
};

perfectVerbs.set(провиснуть.name.text, провиснуть);

export { провиснуть };