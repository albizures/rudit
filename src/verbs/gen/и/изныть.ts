import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изныть: PerfectVerb = {
  name: Word('изныть', 3),
  singular1stPerson: Word('изною', 3),
  singular2ndPerson: Word('изноешь', 3),
  singular3rdPerson: Word('изноет', 3),
  plural1stPerson: Word('изноем', 3),
  plural2ndPerson: Word('изноете', 3),
  plural3rdPerson: Word('изноют', 3),
  masculinePast: Word('изныл', 3),
  femininePast: Word('изныла', 3),
  neuterPast: Word('изныло', 3),
  pluralPast: Word('изныли', 3),
  imperativeInformal: Word('изной', 3),
  imperativeFormal: Word('изнойте', 3),
  imperfect: ['изнывать'],
};

perfectVerbs.set(изныть.name.text, изныть);

export { изныть };