import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролезть: PerfectVerb = {
  name: Word('пролезть', 4),
  singular1stPerson: Word('пролезу', 4),
  singular2ndPerson: Word('пролезешь', 4),
  singular3rdPerson: Word('пролезет', 4),
  plural1stPerson: Word('пролезем', 4),
  plural2ndPerson: Word('пролезете', 4),
  plural3rdPerson: Word('пролезут', 4),
  masculinePast: Word('пролез', 4),
  femininePast: Word('пролезла', 4),
  neuterPast: Word('пролезло', 4),
  pluralPast: Word('пролезли', 4),
  imperativeInformal: Word('пролезь', 4),
  imperativeFormal: Word('пролезьте', 4),
  imperfect: [],
};

perfectVerbs.set(пролезть.name.text, пролезть);

export { пролезть };