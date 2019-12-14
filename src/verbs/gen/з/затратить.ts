import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затратить: PerfectVerb = {
  name: Word('затратить', 4),
  singular1stPerson: Word('затрачу', 4),
  singular2ndPerson: Word('затратишь', 4),
  singular3rdPerson: Word('затратит', 4),
  plural1stPerson: Word('затратим', 4),
  plural2ndPerson: Word('затратите', 4),
  plural3rdPerson: Word('затратят', 4),
  masculinePast: Word('затратил', 4),
  femininePast: Word('затратила', 4),
  neuterPast: Word('затратило', 4),
  pluralPast: Word('затратили', 4),
  imperativeInformal: Word('затрать', 4),
  imperativeFormal: Word('затратьте', 4),
  imperfect: [],
};

perfectVerbs.set(затратить.name.text, затратить);

export { затратить };