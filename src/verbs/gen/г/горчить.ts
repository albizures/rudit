import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const горчить: PerfectVerb = {
  name: Word('горчить', 4),
  singular1stPerson: Word('горчу', 4),
  singular2ndPerson: Word('горчишь', 4),
  singular3rdPerson: Word('горчит', 4),
  plural1stPerson: Word('горчим', 4),
  plural2ndPerson: Word('горчите', 4),
  plural3rdPerson: Word('горчат', 4),
  masculinePast: Word('горчил', 4),
  femininePast: Word('горчила', 4),
  neuterPast: Word('горчило', 4),
  pluralPast: Word('горчили', 4),
  imperativeInformal: Word('горчи', 4),
  imperativeFormal: Word('горчите', 4),
  imperfect: [],
};

perfectVerbs.set(горчить.name.text, горчить);

export { горчить };