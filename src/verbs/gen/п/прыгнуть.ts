import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прыгнуть: PerfectVerb = {
  name: Word('прыгнуть', 2),
  singular1stPerson: Word('прыгну', 2),
  singular2ndPerson: Word('прыгнешь', 2),
  singular3rdPerson: Word('прыгнет', 2),
  plural1stPerson: Word('прыгнем', 2),
  plural2ndPerson: Word('прыгнете', 2),
  plural3rdPerson: Word('прыгнут', 2),
  masculinePast: Word('прыгнул', 2),
  femininePast: Word('прыгнула', 2),
  neuterPast: Word('прыгнуло', 2),
  pluralPast: Word('прыгнули', 2),
  imperativeInformal: Word('прыгни', 2),
  imperativeFormal: Word('прыгните', 2),
  imperfect: ['прыгать'],
};

perfectVerbs.set(прыгнуть.name.text, прыгнуть);

export { прыгнуть };