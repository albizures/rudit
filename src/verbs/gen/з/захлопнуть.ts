import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлопнуть: PerfectVerb = {
  name: Word('захлопнуть', 4),
  singular1stPerson: Word('захлопну', 4),
  singular2ndPerson: Word('захлопнешь', 4),
  singular3rdPerson: Word('захлопнет', 4),
  plural1stPerson: Word('захлопнем', 4),
  plural2ndPerson: Word('захлопнете', 4),
  plural3rdPerson: Word('захлопнут', 4),
  masculinePast: Word('захлопнул', 4),
  femininePast: Word('захлопнула', 4),
  neuterPast: Word('захлопнуло', 4),
  pluralPast: Word('захлопнули', 4),
  imperativeInformal: Word('захлопни', 4),
  imperativeFormal: Word('захлопните', 4),
  imperfect: [],
};

perfectVerbs.set(захлопнуть.name.text, захлопнуть);

export { захлопнуть };