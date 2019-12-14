import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const течь: PerfectVerb = {
  name: Word('течь', 1),
  singular1stPerson: Word('теку', 3),
  singular2ndPerson: Word('течёшь', 3),
  singular3rdPerson: Word('течёт', 3),
  plural1stPerson: Word('течём', 3),
  plural2ndPerson: Word('течёте', 3),
  plural3rdPerson: Word('текут', 3),
  masculinePast: Word('тёк', 1),
  femininePast: Word('текла', 4),
  neuterPast: Word('текло', 4),
  pluralPast: Word('текли', 4),
  imperativeInformal: Word('теки', 3),
  imperativeFormal: Word('теките', 3),
  imperfect: ['вытечь','стечь'],
};

perfectVerbs.set(течь.name.text, течь);

export { течь };