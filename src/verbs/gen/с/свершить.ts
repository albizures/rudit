import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свершить: PerfectVerb = {
  name: Word('свершить', 5),
  singular1stPerson: Word('свершу', 5),
  singular2ndPerson: Word('свершишь', 5),
  singular3rdPerson: Word('свершит', 5),
  plural1stPerson: Word('свершим', 5),
  plural2ndPerson: Word('свершите', 5),
  plural3rdPerson: Word('свершат', 5),
  masculinePast: Word('свершил', 5),
  femininePast: Word('свершила', 5),
  neuterPast: Word('свершило', 5),
  pluralPast: Word('свершили', 5),
  imperativeInformal: Word('сверши', 5),
  imperativeFormal: Word('свершите', 5),
  imperfect: [],
};

perfectVerbs.set(свершить.name.text, свершить);

export { свершить };