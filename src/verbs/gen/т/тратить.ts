import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тратить: PerfectVerb = {
  name: Word('тратить', 2),
  singular1stPerson: Word('трачу', 2),
  singular2ndPerson: Word('тратишь', 2),
  singular3rdPerson: Word('тратит', 2),
  plural1stPerson: Word('тратим', 2),
  plural2ndPerson: Word('тратите', 2),
  plural3rdPerson: Word('тратят', 2),
  masculinePast: Word('тратил', 2),
  femininePast: Word('тратила', 2),
  neuterPast: Word('тратило', 2),
  pluralPast: Word('тратили', 2),
  imperativeInformal: Word('трать', 2),
  imperativeFormal: Word('тратьте', 2),
  imperfect: ['истратить','потратить'],
};

perfectVerbs.set(тратить.name.text, тратить);

export { тратить };