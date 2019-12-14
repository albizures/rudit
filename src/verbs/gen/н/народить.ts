import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const народить: PerfectVerb = {
  name: Word('народить', 5),
  singular1stPerson: Word('нарожу', 5),
  singular2ndPerson: Word('народишь', 5),
  singular3rdPerson: Word('народит', 5),
  plural1stPerson: Word('народим', 5),
  plural2ndPerson: Word('народите', 5),
  plural3rdPerson: Word('народят', 5),
  masculinePast: Word('народил', 5),
  femininePast: Word('народила', 5),
  neuterPast: Word('народило', 5),
  pluralPast: Word('народили', 5),
  imperativeInformal: Word('народи', 5),
  imperativeFormal: Word('народите', 5),
  imperfect: [],
};

perfectVerbs.set(народить.name.text, народить);

export { народить };