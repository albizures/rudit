import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утихнуть: PerfectVerb = {
  name: Word('утихнуть', 2),
  singular1stPerson: Word('утихну', 2),
  singular2ndPerson: Word('утихнешь', 2),
  singular3rdPerson: Word('утихнет', 2),
  plural1stPerson: Word('утихнем', 2),
  plural2ndPerson: Word('утихнете', 2),
  plural3rdPerson: Word('утихнут', 2),
  masculinePast: Word('утих,ути'хнул', 2),
  femininePast: Word('утихла,ути'хнула', 2),
  neuterPast: Word('утихло,ути'хнуло', 2),
  pluralPast: Word('утихли,ути'хнули', 2),
  imperativeInformal: Word('утихни', 2),
  imperativeFormal: Word('утихните', 2),
  imperfect: ['утихать'],
};

perfectVerbs.set(утихнуть.name.text, утихнуть);

export { утихнуть };