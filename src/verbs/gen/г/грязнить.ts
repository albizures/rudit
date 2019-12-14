import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грязнить: PerfectVerb = {
  name: Word('грязнить', 5),
  singular1stPerson: Word('грязню', 5),
  singular2ndPerson: Word('грязнишь', 5),
  singular3rdPerson: Word('грязнит', 5),
  plural1stPerson: Word('грязним', 5),
  plural2ndPerson: Word('грязните', 5),
  plural3rdPerson: Word('грязнят', 5),
  masculinePast: Word('грязнил', 5),
  femininePast: Word('грязнила', 5),
  neuterPast: Word('грязнило', 5),
  pluralPast: Word('грязнили', 5),
  imperativeInformal: Word('грязни', 5),
  imperativeFormal: Word('грязните', 5),
  imperfect: [],
};

perfectVerbs.set(грязнить.name.text, грязнить);

export { грязнить };