import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтереть: PerfectVerb = {
  name: Word('обтереть', 5),
  singular1stPerson: Word('оботру', 5),
  singular2ndPerson: Word('оботрёшь', 0),
  singular3rdPerson: Word('оботрёт', 0),
  plural1stPerson: Word('оботрём', 0),
  plural2ndPerson: Word('оботрёте', 7),
  plural3rdPerson: Word('оботрут', 5),
  masculinePast: Word('обтёр', 0),
  femininePast: Word('обтёрла', 6),
  neuterPast: Word('обтёрло', 0),
  pluralPast: Word('обтёрли', 6),
  imperativeInformal: Word('оботри', 5),
  imperativeFormal: Word('оботрите', 5),
  imperfect: [],
};

perfectVerbs.set(обтереть.name.text, обтереть);

export { обтереть };