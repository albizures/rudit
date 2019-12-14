import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повершить: PerfectVerb = {
  name: Word('повершить', 6),
  singular1stPerson: Word('повершу', 6),
  singular2ndPerson: Word('повершишь', 6),
  singular3rdPerson: Word('повершит', 6),
  plural1stPerson: Word('повершим', 6),
  plural2ndPerson: Word('повершите', 6),
  plural3rdPerson: Word('повершат', 6),
  masculinePast: Word('повершил', 6),
  femininePast: Word('повершила', 6),
  neuterPast: Word('повершило', 6),
  pluralPast: Word('повершили', 6),
  imperativeInformal: Word('поверши', 6),
  imperativeFormal: Word('повершите', 6),
  imperfect: [],
};

perfectVerbs.set(повершить.name.text, повершить);

export { повершить };