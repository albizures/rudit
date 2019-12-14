import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лихорадить: PerfectVerb = {
  name: Word('лихорадить', 5),
  singular1stPerson: Word('лихоражу', 5),
  singular2ndPerson: Word('лихорадишь', 5),
  singular3rdPerson: Word('лихорадит', 5),
  plural1stPerson: Word('лихорадим', 5),
  plural2ndPerson: Word('лихорадите', 5),
  plural3rdPerson: Word('лихорадят', 5),
  masculinePast: Word('лихорадил', 5),
  femininePast: Word('лихорадила', 5),
  neuterPast: Word('лихорадило', 5),
  pluralPast: Word('лихорадили', 5),
  imperativeInformal: Word('лихорадь', 5),
  imperativeFormal: Word('лихорадьте', 5),
  imperfect: [],
};

perfectVerbs.set(лихорадить.name.text, лихорадить);

export { лихорадить };