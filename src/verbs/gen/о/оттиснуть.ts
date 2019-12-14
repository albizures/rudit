import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттиснуть: PerfectVerb = {
  name: Word('оттиснуть', 3),
  singular1stPerson: Word('оттисну', 3),
  singular2ndPerson: Word('оттиснешь', 3),
  singular3rdPerson: Word('оттиснет', 3),
  plural1stPerson: Word('оттиснем', 3),
  plural2ndPerson: Word('оттиснете', 3),
  plural3rdPerson: Word('оттиснут', 3),
  masculinePast: Word('оттиснул', 3),
  femininePast: Word('оттиснула', 3),
  neuterPast: Word('оттиснуло', 3),
  pluralPast: Word('оттиснули', 3),
  imperativeInformal: Word('оттисни', 3),
  imperativeFormal: Word('оттисните', 3),
  imperfect: [],
};

perfectVerbs.set(оттиснуть.name.text, оттиснуть);

export { оттиснуть };