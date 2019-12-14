import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умолкнуть: PerfectVerb = {
  name: Word('умолкнуть', 2),
  singular1stPerson: Word('умолкну', 2),
  singular2ndPerson: Word('умолкнешь', 2),
  singular3rdPerson: Word('умолкнет', 2),
  plural1stPerson: Word('умолкнем', 2),
  plural2ndPerson: Word('умолкнете', 2),
  plural3rdPerson: Word('умолкнут', 2),
  masculinePast: Word('умолк', 2),
  femininePast: Word('умолкла', 2),
  neuterPast: Word('умолкло', 2),
  pluralPast: Word('умолкли', 2),
  imperativeInformal: Word('умолкни', 2),
  imperativeFormal: Word('умолкните', 2),
  imperfect: [],
};

perfectVerbs.set(умолкнуть.name.text, умолкнуть);

export { умолкнуть };