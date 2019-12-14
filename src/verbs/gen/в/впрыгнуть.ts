import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впрыгнуть: PerfectVerb = {
  name: Word('впрыгнуть', 3),
  singular1stPerson: Word('впрыгну', 3),
  singular2ndPerson: Word('впрыгнешь', 3),
  singular3rdPerson: Word('впрыгнет', 3),
  plural1stPerson: Word('впрыгнем', 3),
  plural2ndPerson: Word('впрыгнете', 3),
  plural3rdPerson: Word('впрыгнут', 3),
  masculinePast: Word('впрыгнул', 3),
  femininePast: Word('впрыгнула', 3),
  neuterPast: Word('впрыгнуло', 3),
  pluralPast: Word('впрыгнули', 3),
  imperativeInformal: Word('впрыгни', 3),
  imperativeFormal: Word('впрыгните', 3),
  imperfect: [],
};

perfectVerbs.set(впрыгнуть.name.text, впрыгнуть);

export { впрыгнуть };