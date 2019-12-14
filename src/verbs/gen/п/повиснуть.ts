import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повиснуть: PerfectVerb = {
  name: Word('повиснуть', 3),
  singular1stPerson: Word('повисну', 3),
  singular2ndPerson: Word('повиснешь', 3),
  singular3rdPerson: Word('повиснет', 3),
  plural1stPerson: Word('повиснем', 3),
  plural2ndPerson: Word('повиснете', 3),
  plural3rdPerson: Word('повиснут', 3),
  masculinePast: Word('повис', 3),
  femininePast: Word('повисла', 3),
  neuterPast: Word('повисло', 3),
  pluralPast: Word('повисли', 3),
  imperativeInformal: Word('повисни', 3),
  imperativeFormal: Word('повисните', 3),
  imperfect: [],
};

perfectVerbs.set(повиснуть.name.text, повиснуть);

export { повиснуть };