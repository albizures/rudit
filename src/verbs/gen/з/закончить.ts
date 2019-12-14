import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закончить: PerfectVerb = {
  name: Word('закончить', 3),
  singular1stPerson: Word('закончу', 3),
  singular2ndPerson: Word('закончишь', 3),
  singular3rdPerson: Word('закончит', 3),
  plural1stPerson: Word('закончим', 3),
  plural2ndPerson: Word('закончите', 3),
  plural3rdPerson: Word('закончат', 3),
  masculinePast: Word('закончил', 3),
  femininePast: Word('закончила', 3),
  neuterPast: Word('закончило', 3),
  pluralPast: Word('закончили', 3),
  imperativeInformal: Word('закончи', 3),
  imperativeFormal: Word('закончите', 3),
  imperfect: ['заканчивать'],
};

perfectVerbs.set(закончить.name.text, закончить);

export { закончить };