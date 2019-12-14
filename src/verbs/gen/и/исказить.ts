import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исказить: PerfectVerb = {
  name: Word('исказить', 5),
  singular1stPerson: Word('искажу', 5),
  singular2ndPerson: Word('исказишь', 5),
  singular3rdPerson: Word('исказит', 5),
  plural1stPerson: Word('исказим', 5),
  plural2ndPerson: Word('исказите', 5),
  plural3rdPerson: Word('исказят', 5),
  masculinePast: Word('исказил', 5),
  femininePast: Word('исказила', 5),
  neuterPast: Word('исказило', 5),
  pluralPast: Word('исказили', 5),
  imperativeInformal: Word('искази', 5),
  imperativeFormal: Word('исказите', 5),
  imperfect: ['искажать'],
};

perfectVerbs.set(исказить.name.text, исказить);

export { исказить };