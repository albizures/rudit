import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примолкнуть: PerfectVerb = {
  name: Word('примолкнуть', 4),
  singular1stPerson: Word('примолкну', 4),
  singular2ndPerson: Word('примолкнешь', 4),
  singular3rdPerson: Word('примолкнет', 4),
  plural1stPerson: Word('примолкнем', 4),
  plural2ndPerson: Word('примолкнете', 4),
  plural3rdPerson: Word('примолкнут', 4),
  masculinePast: Word('примолк', 4),
  femininePast: Word('примолкла', 4),
  neuterPast: Word('примолкло', 4),
  pluralPast: Word('примолкли', 4),
  imperativeInformal: Word('примолкни', 4),
  imperativeFormal: Word('примолкните', 4),
  imperfect: [],
};

perfectVerbs.set(примолкнуть.name.text, примолкнуть);

export { примолкнуть };