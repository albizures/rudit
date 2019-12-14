import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забелить: PerfectVerb = {
  name: Word('забелить', 5),
  singular1stPerson: Word('забелю', 5),
  singular2ndPerson: Word('забелишь', 3),
  singular3rdPerson: Word('забелит', 3),
  plural1stPerson: Word('забелим', 3),
  plural2ndPerson: Word('забелите', 3),
  plural3rdPerson: Word('забелят', 3),
  masculinePast: Word('забелил', 5),
  femininePast: Word('забелила', 5),
  neuterPast: Word('забелило', 5),
  pluralPast: Word('забелили', 5),
  imperativeInformal: Word('забели', 5),
  imperativeFormal: Word('забелите', 5),
  imperfect: [],
};

perfectVerbs.set(забелить.name.text, забелить);

export { забелить };