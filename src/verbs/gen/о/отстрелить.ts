import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстрелить: PerfectVerb = {
  name: Word('отстрелить', 7),
  singular1stPerson: Word('отстрелю', 7),
  singular2ndPerson: Word('отстрелишь', 5),
  singular3rdPerson: Word('отстрелит', 5),
  plural1stPerson: Word('отстрелим', 5),
  plural2ndPerson: Word('отстрелите', 5),
  plural3rdPerson: Word('отстрелят', 5),
  masculinePast: Word('отстрелил', 7),
  femininePast: Word('отстрелила', 7),
  neuterPast: Word('отстрелило', 7),
  pluralPast: Word('отстрелили', 7),
  imperativeInformal: Word('отстрели', 7),
  imperativeFormal: Word('отстрелите', 7),
  imperfect: [],
};

perfectVerbs.set(отстрелить.name.text, отстрелить);

export { отстрелить };