import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промыть: PerfectVerb = {
  name: Word('промыть', 4),
  singular1stPerson: Word('промою', 4),
  singular2ndPerson: Word('промоешь', 4),
  singular3rdPerson: Word('промоет', 4),
  plural1stPerson: Word('промоем', 4),
  plural2ndPerson: Word('промоете', 4),
  plural3rdPerson: Word('промоют', 4),
  masculinePast: Word('промыл', 4),
  femininePast: Word('промыла', 4),
  neuterPast: Word('промыло', 4),
  pluralPast: Word('промыли', 4),
  imperativeInformal: Word('промой', 4),
  imperativeFormal: Word('промойте', 4),
  imperfect: [],
};

perfectVerbs.set(промыть.name.text, промыть);

export { промыть };