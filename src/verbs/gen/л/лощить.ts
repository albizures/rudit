import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лощить: PerfectVerb = {
  name: Word('лощить', 3),
  singular1stPerson: Word('лощу', 3),
  singular2ndPerson: Word('лощишь', 3),
  singular3rdPerson: Word('лощит', 3),
  plural1stPerson: Word('лощим', 3),
  plural2ndPerson: Word('лощите', 3),
  plural3rdPerson: Word('лощат', 3),
  masculinePast: Word('лощил', 3),
  femininePast: Word('лощила', 3),
  neuterPast: Word('лощило', 3),
  pluralPast: Word('лощили', 3),
  imperativeInformal: Word('лощи', 3),
  imperativeFormal: Word('лощите', 3),
  imperfect: [],
};

perfectVerbs.set(лощить.name.text, лощить);

export { лощить };