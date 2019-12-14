import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прихлопнуть: PerfectVerb = {
  name: Word('прихлопнуть', 5),
  singular1stPerson: Word('прихлопну', 5),
  singular2ndPerson: Word('прихлопнешь', 5),
  singular3rdPerson: Word('прихлопнет', 5),
  plural1stPerson: Word('прихлопнем', 5),
  plural2ndPerson: Word('прихлопнете', 5),
  plural3rdPerson: Word('прихлопнут', 5),
  masculinePast: Word('прихлопнул', 5),
  femininePast: Word('прихлопнула', 5),
  neuterPast: Word('прихлопнуло', 5),
  pluralPast: Word('прихлопнули', 5),
  imperativeInformal: Word('прихлопни', 5),
  imperativeFormal: Word('прихлопните', 5),
  imperfect: [],
};

perfectVerbs.set(прихлопнуть.name.text, прихлопнуть);

export { прихлопнуть };