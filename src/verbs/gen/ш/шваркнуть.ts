import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шваркнуть: PerfectVerb = {
  name: Word('шваркнуть', 2),
  singular1stPerson: Word('шваркну', 2),
  singular2ndPerson: Word('шваркнешь', 2),
  singular3rdPerson: Word('шваркнет', 2),
  plural1stPerson: Word('шваркнем', 2),
  plural2ndPerson: Word('шваркнете', 2),
  plural3rdPerson: Word('шваркнут', 2),
  masculinePast: Word('шваркнул', 2),
  femininePast: Word('шваркнула', 2),
  neuterPast: Word('шваркнуло', 2),
  pluralPast: Word('шваркнули', 2),
  imperativeInformal: Word('шваркни', 2),
  imperativeFormal: Word('шваркните', 2),
  imperfect: [],
};

perfectVerbs.set(шваркнуть.name.text, шваркнуть);

export { шваркнуть };