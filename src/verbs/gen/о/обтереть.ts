import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтереть: PerfectVerb = {
  name: Word('обтереть', 5),
  singular1stPerson: Word('оботру', 5),
  singular2ndPerson: Word('оботрёшь', 5),
  singular3rdPerson: Word('оботрёт', 5),
  plural1stPerson: Word('оботрём', 5),
  plural2ndPerson: Word('оботрёте', 5),
  plural3rdPerson: Word('оботрут', 5),
  masculinePast: Word('обтёр', 3),
  femininePast: Word('обтёрла', 3),
  neuterPast: Word('обтёрло', 3),
  pluralPast: Word('обтёрли', 3),
  imperativeInformal: Word('оботри', 5),
  imperativeFormal: Word('оботрите', 5),
  imperfect: [],
};

perfectVerbs.set(обтереть.name.text, обтереть);

export { обтереть };