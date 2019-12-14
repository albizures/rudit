import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const положить: PerfectVerb = {
  name: Word('положить', 5),
  singular1stPerson: Word('положу', 5),
  singular2ndPerson: Word('положишь', 3),
  singular3rdPerson: Word('положит', 3),
  plural1stPerson: Word('положим', 3),
  plural2ndPerson: Word('положите', 3),
  plural3rdPerson: Word('положат', 3),
  masculinePast: Word('положил', 5),
  femininePast: Word('положила', 5),
  neuterPast: Word('положило', 5),
  pluralPast: Word('положили', 5),
  imperativeInformal: Word('положи', 5),
  imperativeFormal: Word('положите', 5),
  imperfect: ['класть'],
};

perfectVerbs.set(положить.name.text, положить);

export { положить };