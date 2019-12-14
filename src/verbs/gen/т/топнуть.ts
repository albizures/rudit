import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const топнуть: PerfectVerb = {
  name: Word('топнуть', 1),
  singular1stPerson: Word('топну', 1),
  singular2ndPerson: Word('топнешь', 1),
  singular3rdPerson: Word('топнет', 1),
  plural1stPerson: Word('топнем', 1),
  plural2ndPerson: Word('топнете', 1),
  plural3rdPerson: Word('топнут', 1),
  masculinePast: Word('топнул', 1),
  femininePast: Word('топнула', 1),
  neuterPast: Word('топнуло', 1),
  pluralPast: Word('топнули', 1),
  imperativeInformal: Word('топни', 1),
  imperativeFormal: Word('топните', 1),
  imperfect: [],
};

perfectVerbs.set(топнуть.name.text, топнуть);

export { топнуть };