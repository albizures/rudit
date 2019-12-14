import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошарашить: PerfectVerb = {
  name: Word('ошарашить', 4),
  singular1stPerson: Word('ошарашу', 4),
  singular2ndPerson: Word('ошарашишь', 4),
  singular3rdPerson: Word('ошарашит', 4),
  plural1stPerson: Word('ошарашим', 4),
  plural2ndPerson: Word('ошарашите', 4),
  plural3rdPerson: Word('ошарашат', 4),
  masculinePast: Word('ошарашил', 4),
  femininePast: Word('ошарашила', 4),
  neuterPast: Word('ошарашило', 4),
  pluralPast: Word('ошарашили', 4),
  imperativeInformal: Word('ошарашь', 4),
  imperativeFormal: Word('ошарашьте', 4),
  imperfect: [],
};

perfectVerbs.set(ошарашить.name.text, ошарашить);

export { ошарашить };