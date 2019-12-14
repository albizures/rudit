import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лущить: PerfectVerb = {
  name: Word('лущить', 3),
  singular1stPerson: Word('лущу', 3),
  singular2ndPerson: Word('лущишь', 3),
  singular3rdPerson: Word('лущит', 3),
  plural1stPerson: Word('лущим', 3),
  plural2ndPerson: Word('лущите', 3),
  plural3rdPerson: Word('лущат', 3),
  masculinePast: Word('лущил', 3),
  femininePast: Word('лущила', 3),
  neuterPast: Word('лущило', 3),
  pluralPast: Word('лущили', 3),
  imperativeInformal: Word('лущи', 3),
  imperativeFormal: Word('лущите', 3),
  imperfect: [],
};

perfectVerbs.set(лущить.name.text, лущить);

export { лущить };