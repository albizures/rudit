import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застрелить: PerfectVerb = {
  name: Word('застрелить', 7),
  singular1stPerson: Word('застрелю', 7),
  singular2ndPerson: Word('застрелишь', 5),
  singular3rdPerson: Word('застрелит', 5),
  plural1stPerson: Word('застрелим', 5),
  plural2ndPerson: Word('застрелите', 5),
  plural3rdPerson: Word('застрелят', 5),
  masculinePast: Word('застрелил', 7),
  femininePast: Word('застрелила', 7),
  neuterPast: Word('застрелило', 7),
  pluralPast: Word('застрелили', 7),
  imperativeInformal: Word('застрели', 7),
  imperativeFormal: Word('застрелите', 7),
  imperfect: [],
};

perfectVerbs.set(застрелить.name.text, застрелить);

export { застрелить };