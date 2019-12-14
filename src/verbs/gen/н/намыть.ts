import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намыть: PerfectVerb = {
  name: Word('намыть', 3),
  singular1stPerson: Word('намою', 3),
  singular2ndPerson: Word('намоешь', 3),
  singular3rdPerson: Word('намоет', 3),
  plural1stPerson: Word('намоем', 3),
  plural2ndPerson: Word('намоете', 3),
  plural3rdPerson: Word('намоют', 3),
  masculinePast: Word('намыл', 3),
  femininePast: Word('намыла', 3),
  neuterPast: Word('намыло', 3),
  pluralPast: Word('намыли', 3),
  imperativeInformal: Word('намой', 3),
  imperativeFormal: Word('намойте', 3),
  imperfect: [],
};

perfectVerbs.set(намыть.name.text, намыть);

export { намыть };