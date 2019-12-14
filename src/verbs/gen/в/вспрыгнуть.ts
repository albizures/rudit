import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспрыгнуть: PerfectVerb = {
  name: Word('вспрыгнуть', 4),
  singular1stPerson: Word('вспрыгну', 4),
  singular2ndPerson: Word('вспрыгнешь', 4),
  singular3rdPerson: Word('вспрыгнет', 4),
  plural1stPerson: Word('вспрыгнем', 4),
  plural2ndPerson: Word('вспрыгнете', 4),
  plural3rdPerson: Word('вспрыгнут', 4),
  masculinePast: Word('вспрыгнул', 4),
  femininePast: Word('вспрыгнула', 4),
  neuterPast: Word('вспрыгнуло', 4),
  pluralPast: Word('вспрыгнули', 4),
  imperativeInformal: Word('вспрыгни', 4),
  imperativeFormal: Word('вспрыгните', 4),
  imperfect: [],
};

perfectVerbs.set(вспрыгнуть.name.text, вспрыгнуть);

export { вспрыгнуть };