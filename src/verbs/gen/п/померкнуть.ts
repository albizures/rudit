import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const померкнуть: PerfectVerb = {
  name: Word('померкнуть', 3),
  singular1stPerson: Word('померкну', 3),
  singular2ndPerson: Word('померкнешь', 3),
  singular3rdPerson: Word('померкнет', 3),
  plural1stPerson: Word('померкнем', 3),
  plural2ndPerson: Word('померкнете', 3),
  plural3rdPerson: Word('померкнут', 3),
  masculinePast: Word('померк', 3),
  femininePast: Word('померкла', 3),
  neuterPast: Word('померкло', 3),
  pluralPast: Word('померкли', 3),
  imperativeInformal: Word('померкни', 3),
  imperativeFormal: Word('померкните', 3),
  imperfect: [],
};

perfectVerbs.set(померкнуть.name.text, померкнуть);

export { померкнуть };