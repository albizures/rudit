import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застыдить: PerfectVerb = {
  name: Word('застыдить', 6),
  singular1stPerson: Word('застыжу', 6),
  singular2ndPerson: Word('застыдишь', 6),
  singular3rdPerson: Word('застыдит', 6),
  plural1stPerson: Word('застыдим', 6),
  plural2ndPerson: Word('застыдите', 6),
  plural3rdPerson: Word('застыдят', 6),
  masculinePast: Word('застыдил', 6),
  femininePast: Word('застыдила', 6),
  neuterPast: Word('застыдило', 6),
  pluralPast: Word('застыдили', 6),
  imperativeInformal: Word('застыди', 6),
  imperativeFormal: Word('застыдите', 6),
  imperfect: [],
};

perfectVerbs.set(застыдить.name.text, застыдить);

export { застыдить };