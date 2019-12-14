import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекиснуть: PerfectVerb = {
  name: Word('перекиснуть', 5),
  singular1stPerson: Word('перекисну', 5),
  singular2ndPerson: Word('перекиснешь', 5),
  singular3rdPerson: Word('перекиснет', 5),
  plural1stPerson: Word('перекиснем', 5),
  plural2ndPerson: Word('перекиснете', 5),
  plural3rdPerson: Word('перекиснут', 5),
  masculinePast: Word('перекис', 5),
  femininePast: Word('перекисла', 5),
  neuterPast: Word('перекисло', 5),
  pluralPast: Word('перекисли', 5),
  imperativeInformal: Word('перекисни', 5),
  imperativeFormal: Word('перекисните', 5),
  imperfect: [],
};

perfectVerbs.set(перекиснуть.name.text, перекиснуть);

export { перекиснуть };