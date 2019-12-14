import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетереться: PerfectVerb = {
  name: Word('перетереться', 7),
  singular1stPerson: Word('перетрусь', 6),
  singular2ndPerson: Word('перетрёшься', 6),
  singular3rdPerson: Word('перетрётся', 6),
  plural1stPerson: Word('перетрёмся', 6),
  plural2ndPerson: Word('перетрётесь', 6),
  plural3rdPerson: Word('перетрутся', 6),
  masculinePast: Word('перетёрся', 5),
  femininePast: Word('перетёрлась', 5),
  neuterPast: Word('перетёрлось', 5),
  pluralPast: Word('перетёрлись', 5),
  imperativeInformal: Word('перетрись', 6),
  imperativeFormal: Word('перетритесь', 6),
  imperfect: [],
};

perfectVerbs.set(перетереться.name.text, перетереться);

export { перетереться };