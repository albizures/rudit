import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прыснуть: PerfectVerb = {
  name: Word('прыснуть', 2),
  singular1stPerson: Word('прысну', 2),
  singular2ndPerson: Word('прыснешь', 2),
  singular3rdPerson: Word('прыснет', 2),
  plural1stPerson: Word('прыснем', 2),
  plural2ndPerson: Word('прыснете', 2),
  plural3rdPerson: Word('прыснут', 2),
  masculinePast: Word('прыснул', 2),
  femininePast: Word('прыснула', 2),
  neuterPast: Word('прыснуло', 2),
  pluralPast: Word('прыснули', 2),
  imperativeInformal: Word('прысни', 2),
  imperativeFormal: Word('прысните', 2),
  imperfect: [],
};

perfectVerbs.set(прыснуть.name.text, прыснуть);

export { прыснуть };