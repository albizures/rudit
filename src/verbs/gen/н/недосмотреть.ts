import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недосмотреть: PerfectVerb = {
  name: Word('недосмотреть', 9),
  singular1stPerson: Word('недосмотрю', 9),
  singular2ndPerson: Word('недосмотришь', 6),
  singular3rdPerson: Word('недосмотрит', 6),
  plural1stPerson: Word('недосмотрим', 6),
  plural2ndPerson: Word('недосмотрите', 6),
  plural3rdPerson: Word('недосмотрят', 6),
  masculinePast: Word('недосмотрел', 9),
  femininePast: Word('недосмотрела', 9),
  neuterPast: Word('недосмотрело', 9),
  pluralPast: Word('недосмотрели', 9),
  imperativeInformal: Word('недосмотри', 9),
  imperativeFormal: Word('недосмотрите', 9),
  imperfect: [],
};

perfectVerbs.set(недосмотреть.name.text, недосмотреть);

export { недосмотреть };