import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потеть: PerfectVerb = {
  name: Word('потеть', 3),
  singular1stPerson: Word('потею', 3),
  singular2ndPerson: Word('потеешь', 3),
  singular3rdPerson: Word('потеет', 3),
  plural1stPerson: Word('потеем', 3),
  plural2ndPerson: Word('потеете', 3),
  plural3rdPerson: Word('потеют', 3),
  masculinePast: Word('потел', 3),
  femininePast: Word('потела', 3),
  neuterPast: Word('потело', 3),
  pluralPast: Word('потели', 3),
  imperativeInformal: Word('потей', 3),
  imperativeFormal: Word('потейте', 3),
  imperfect: ['вспотеть','запотеть'],
};

perfectVerbs.set(потеть.name.text, потеть);

export { потеть };