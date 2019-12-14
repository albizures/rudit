import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлопнуть: PerfectVerb = {
  name: Word('хлопнуть', 2),
  singular1stPerson: Word('хлопну', 2),
  singular2ndPerson: Word('хлопнешь', 2),
  singular3rdPerson: Word('хлопнет', 2),
  plural1stPerson: Word('хлопнем', 2),
  plural2ndPerson: Word('хлопнете', 2),
  plural3rdPerson: Word('хлопнут', 2),
  masculinePast: Word('хлопнул', 2),
  femininePast: Word('хлопнула', 2),
  neuterPast: Word('хлопнуло', 2),
  pluralPast: Word('хлопнули', 2),
  imperativeInformal: Word('хлопни', 2),
  imperativeFormal: Word('хлопните', 2),
  imperfect: [],
};

perfectVerbs.set(хлопнуть.name.text, хлопнуть);

export { хлопнуть };