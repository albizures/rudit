import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетереть: PerfectVerb = {
  name: Word('перетереть', 7),
  singular1stPerson: Word('перетру', 6),
  singular2ndPerson: Word('перетрёшь', 6),
  singular3rdPerson: Word('перетрёт', 6),
  plural1stPerson: Word('перетрём', 6),
  plural2ndPerson: Word('перетрёте', 6),
  plural3rdPerson: Word('перетрут', 6),
  masculinePast: Word('перетёр', 5),
  femininePast: Word('перетёрла', 5),
  neuterPast: Word('перетёрло', 5),
  pluralPast: Word('перетёрли', 5),
  imperativeInformal: Word('перетри', 6),
  imperativeFormal: Word('перетрите', 6),
  imperfect: [],
};

perfectVerbs.set(перетереть.name.text, перетереть);

export { перетереть };