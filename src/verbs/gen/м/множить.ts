import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const множить: PerfectVerb = {
  name: Word('множить', 2),
  singular1stPerson: Word('множу', 2),
  singular2ndPerson: Word('множишь', 2),
  singular3rdPerson: Word('множит', 2),
  plural1stPerson: Word('множим', 2),
  plural2ndPerson: Word('множите', 2),
  plural3rdPerson: Word('множат', 2),
  masculinePast: Word('множил', 2),
  femininePast: Word('множила', 2),
  neuterPast: Word('множило', 2),
  pluralPast: Word('множили', 2),
  imperativeInformal: Word('множь', 2),
  imperativeFormal: Word('множьте', 2),
  imperfect: [],
};

perfectVerbs.set(множить.name.text, множить);

export { множить };