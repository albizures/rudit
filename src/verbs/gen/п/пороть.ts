import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пороть: PerfectVerb = {
  name: Word('пороть', 3),
  singular1stPerson: Word('порю', 3),
  singular2ndPerson: Word('порешь', 1),
  singular3rdPerson: Word('порет', 1),
  plural1stPerson: Word('порем', 1),
  plural2ndPerson: Word('порете', 1),
  plural3rdPerson: Word('порют', 1),
  masculinePast: Word('порол', 3),
  femininePast: Word('порола', 3),
  neuterPast: Word('пороло', 3),
  pluralPast: Word('пороли', 3),
  imperativeInformal: Word('пори', 3),
  imperativeFormal: Word('порите', 3),
  imperfect: ['распороть'],
};

perfectVerbs.set(пороть.name.text, пороть);

export { пороть };