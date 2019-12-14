import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затащить: PerfectVerb = {
  name: Word('затащить', 5),
  singular1stPerson: Word('затащу', 5),
  singular2ndPerson: Word('затащишь', 3),
  singular3rdPerson: Word('затащит', 3),
  plural1stPerson: Word('затащим', 3),
  plural2ndPerson: Word('затащите', 3),
  plural3rdPerson: Word('затащат', 3),
  masculinePast: Word('затащил', 5),
  femininePast: Word('затащила', 5),
  neuterPast: Word('затащило', 5),
  pluralPast: Word('затащили', 5),
  imperativeInformal: Word('затащи', 5),
  imperativeFormal: Word('затащите', 5),
  imperfect: [],
};

perfectVerbs.set(затащить.name.text, затащить);

export { затащить };