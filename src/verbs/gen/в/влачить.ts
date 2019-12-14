import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влачить: PerfectVerb = {
  name: Word('влачить', 4),
  singular1stPerson: Word('влачу', 4),
  singular2ndPerson: Word('влачишь', 4),
  singular3rdPerson: Word('влачит', 4),
  plural1stPerson: Word('влачим', 4),
  plural2ndPerson: Word('влачите', 4),
  plural3rdPerson: Word('влачат', 4),
  masculinePast: Word('влачил', 4),
  femininePast: Word('влачила', 4),
  neuterPast: Word('влачило', 4),
  pluralPast: Word('влачили', 4),
  imperativeInformal: Word('влачи', 4),
  imperativeFormal: Word('влачите', 4),
  imperfect: [],
};

perfectVerbs.set(влачить.name.text, влачить);

export { влачить };