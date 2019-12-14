import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепрыгнуть: PerfectVerb = {
  name: Word('перепрыгнуть', 6),
  singular1stPerson: Word('перепрыгну', 6),
  singular2ndPerson: Word('перепрыгнешь', 6),
  singular3rdPerson: Word('перепрыгнет', 6),
  plural1stPerson: Word('перепрыгнем', 6),
  plural2ndPerson: Word('перепрыгнете', 6),
  plural3rdPerson: Word('перепрыгнут', 6),
  masculinePast: Word('перепрыгнул', 6),
  femininePast: Word('перепрыгнула', 6),
  neuterPast: Word('перепрыгнуло', 6),
  pluralPast: Word('перепрыгнули', 6),
  imperativeInformal: Word('перепрыгни', 6),
  imperativeFormal: Word('перепрыгните', 6),
  imperfect: ['перепрыгивать'],
};

perfectVerbs.set(перепрыгнуть.name.text, перепрыгнуть);

export { перепрыгнуть };