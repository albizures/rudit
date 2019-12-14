import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упереть: PerfectVerb = {
  name: Word('упереть', 4),
  singular1stPerson: Word('упру', 3),
  singular2ndPerson: Word('упрёшь', 3),
  singular3rdPerson: Word('упрёт', 3),
  plural1stPerson: Word('упрём', 3),
  plural2ndPerson: Word('упрёте', 3),
  plural3rdPerson: Word('упрут', 3),
  masculinePast: Word('упёр', 2),
  femininePast: Word('упёрла', 2),
  neuterPast: Word('упёрло', 2),
  pluralPast: Word('упёрли', 2),
  imperativeInformal: Word('упри', 3),
  imperativeFormal: Word('уприте', 3),
  imperfect: [],
};

perfectVerbs.set(упереть.name.text, упереть);

export { упереть };