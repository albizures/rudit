import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скиснуть: PerfectVerb = {
  name: Word('скиснуть', 2),
  singular1stPerson: Word('скисну', 2),
  singular2ndPerson: Word('скиснешь', 2),
  singular3rdPerson: Word('скиснет', 2),
  plural1stPerson: Word('скиснем', 2),
  plural2ndPerson: Word('скиснете', 2),
  plural3rdPerson: Word('скиснут', 2),
  masculinePast: Word('скис', 2),
  femininePast: Word('скисла', 2),
  neuterPast: Word('скисло', 2),
  pluralPast: Word('скисли', 2),
  imperativeInformal: Word('скисни', 2),
  imperativeFormal: Word('скисните', 2),
  imperfect: [],
};

perfectVerbs.set(скиснуть.name.text, скиснуть);

export { скиснуть };