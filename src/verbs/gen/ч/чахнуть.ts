import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чахнуть: PerfectVerb = {
  name: Word('чахнуть', 1),
  singular1stPerson: Word('чахну', 1),
  singular2ndPerson: Word('чахнешь', 1),
  singular3rdPerson: Word('чахнет', 1),
  plural1stPerson: Word('чахнем', 1),
  plural2ndPerson: Word('чахнете', 1),
  plural3rdPerson: Word('чахнут', 1),
  masculinePast: Word('чах//ча'хнул', 1),
  femininePast: Word('чахла', 1),
  neuterPast: Word('чахло', 1),
  pluralPast: Word('чахли', 1),
  imperativeInformal: Word('чахни', 1),
  imperativeFormal: Word('чахните', 1),
  imperfect: [],
};

perfectVerbs.set(чахнуть.name.text, чахнуть);

export { чахнуть };