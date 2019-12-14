import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почистить: PerfectVerb = {
  name: Word('почистить', 3),
  singular1stPerson: Word('почищу', 3),
  singular2ndPerson: Word('почистишь', 3),
  singular3rdPerson: Word('почистит', 3),
  plural1stPerson: Word('почистим', 3),
  plural2ndPerson: Word('почистите', 3),
  plural3rdPerson: Word('почистят', 3),
  masculinePast: Word('почистил', 3),
  femininePast: Word('почистила', 3),
  neuterPast: Word('почистило', 3),
  pluralPast: Word('почистили', 3),
  imperativeInformal: Word('почисти', 3),
  imperativeFormal: Word('почистите', 3),
  imperfect: ['чистить'],
};

perfectVerbs.set(почистить.name.text, почистить);

export { почистить };