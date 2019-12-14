import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвиснуть: PerfectVerb = {
  name: Word('обвиснуть', 3),
  singular1stPerson: Word('обвисну', 3),
  singular2ndPerson: Word('обвиснешь', 3),
  singular3rdPerson: Word('обвиснет', 3),
  plural1stPerson: Word('обвиснем', 3),
  plural2ndPerson: Word('обвиснете', 3),
  plural3rdPerson: Word('обвиснут', 3),
  masculinePast: Word('обвис', 3),
  femininePast: Word('обвисла', 3),
  neuterPast: Word('обвисло', 3),
  pluralPast: Word('обвисли', 3),
  imperativeInformal: Word('обвисни', 3),
  imperativeFormal: Word('обвисните', 3),
  imperfect: [],
};

perfectVerbs.set(обвиснуть.name.text, обвиснуть);

export { обвиснуть };