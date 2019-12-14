import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ойкнуть: PerfectVerb = {
  name: Word('ойкнуть', 0),
  singular1stPerson: Word('ойкну', 0),
  singular2ndPerson: Word('ойкнешь', 0),
  singular3rdPerson: Word('ойкнет', 0),
  plural1stPerson: Word('ойкнем', 0),
  plural2ndPerson: Word('ойкнете', 0),
  plural3rdPerson: Word('ойкнут', 0),
  masculinePast: Word('ойкнул', 0),
  femininePast: Word('ойкнула', 0),
  neuterPast: Word('ойкнуло', 0),
  pluralPast: Word('ойкнули', 0),
  imperativeInformal: Word('ойкни', 0),
  imperativeFormal: Word('ойкните', 0),
  imperfect: [],
};

perfectVerbs.set(ойкнуть.name.text, ойкнуть);

export { ойкнуть };