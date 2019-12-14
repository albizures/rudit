import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допрыгнуть: PerfectVerb = {
  name: Word('допрыгнуть', 4),
  singular1stPerson: Word('допрыгну', 4),
  singular2ndPerson: Word('допрыгнешь', 4),
  singular3rdPerson: Word('допрыгнет', 4),
  plural1stPerson: Word('допрыгнем', 4),
  plural2ndPerson: Word('допрыгнете', 4),
  plural3rdPerson: Word('допрыгнут', 4),
  masculinePast: Word('допрыгнул', 4),
  femininePast: Word('допрыгнула', 4),
  neuterPast: Word('допрыгнуло', 4),
  pluralPast: Word('допрыгнули', 4),
  imperativeInformal: Word('допрыгни', 4),
  imperativeFormal: Word('допрыгните', 4),
  imperfect: [],
};

perfectVerbs.set(допрыгнуть.name.text, допрыгнуть);

export { допрыгнуть };