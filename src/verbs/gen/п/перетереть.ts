import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетереть: PerfectVerb = {
  name: Word('перетереть', 7),
  singular1stPerson: Word('перетру', 6),
  singular2ndPerson: Word('перетрёшь', 1),
  singular3rdPerson: Word('перетрёт', 1),
  plural1stPerson: Word('перетрём', 1),
  plural2ndPerson: Word('перетрёте', 1),
  plural3rdPerson: Word('перетрут', 6),
  masculinePast: Word('перетёр', 1),
  femininePast: Word('перетёрла', 8),
  neuterPast: Word('перетёрло', 1),
  pluralPast: Word('перетёрли', 1),
  imperativeInformal: Word('перетри', 6),
  imperativeFormal: Word('перетрите', 6),
  imperfect: [],
};

perfectVerbs.set(перетереть.name.text, перетереть);

export { перетереть };