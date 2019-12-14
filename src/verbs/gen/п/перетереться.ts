import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетереться: PerfectVerb = {
  name: Word('перетереться', 7),
  singular1stPerson: Word('перетрусь', 6),
  singular2ndPerson: Word('перетрёшься', 1),
  singular3rdPerson: Word('перетрётся', 1),
  plural1stPerson: Word('перетрёмся', 1),
  plural2ndPerson: Word('перетрётесь', 1),
  plural3rdPerson: Word('перетрутся', 6),
  masculinePast: Word('перетёрся', 1),
  femininePast: Word('перетёрлась', 8),
  neuterPast: Word('перетёрлось', 1),
  pluralPast: Word('перетёрлись', 1),
  imperativeInformal: Word('перетрись', 6),
  imperativeFormal: Word('перетритесь', 6),
  imperfect: [],
};

perfectVerbs.set(перетереться.name.text, перетереться);

export { перетереться };