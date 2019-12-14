import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упереть: PerfectVerb = {
  name: Word('упереть', 4),
  singular1stPerson: Word('упру', 3),
  singular2ndPerson: Word('упрёшь', 0),
  singular3rdPerson: Word('упрёт', 0),
  plural1stPerson: Word('упрём', 0),
  plural2ndPerson: Word('упрёте', 5),
  plural3rdPerson: Word('упрут', 3),
  masculinePast: Word('упёр', 0),
  femininePast: Word('упёрла', 5),
  neuterPast: Word('упёрло', 5),
  pluralPast: Word('упёрли', 5),
  imperativeInformal: Word('упри', 3),
  imperativeFormal: Word('уприте', 3),
  imperfect: [],
};

perfectVerbs.set(упереть.name.text, упереть);

export { упереть };