import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пойти: PerfectVerb = {
  name: Word('пойти', 4),
  singular1stPerson: Word('пойду', 4),
  singular2ndPerson: Word('пойдёшь', 4),
  singular3rdPerson: Word('пойдёт', 4),
  plural1stPerson: Word('пойдём', 4),
  plural2ndPerson: Word('пойдёте', 4),
  plural3rdPerson: Word('пойдут', 4),
  masculinePast: Word('пошёл', 3),
  femininePast: Word('пошла', 4),
  neuterPast: Word('пошло', 4),
  pluralPast: Word('пошли', 4),
  imperativeInformal: Word('пойди', 4),
  imperativeFormal: Word('пойдите', 4),
  imperfect: ['идти'],
};

perfectVerbs.set(пойти.name.text, пойти);

export { пойти };