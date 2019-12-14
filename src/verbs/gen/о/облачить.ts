import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облачить: PerfectVerb = {
  name: Word('облачить', 5),
  singular1stPerson: Word('облачу', 5),
  singular2ndPerson: Word('облачишь', 5),
  singular3rdPerson: Word('облачит', 5),
  plural1stPerson: Word('облачим', 5),
  plural2ndPerson: Word('облачите', 5),
  plural3rdPerson: Word('облачат', 5),
  masculinePast: Word('облачил', 5),
  femininePast: Word('облачила', 5),
  neuterPast: Word('облачило', 5),
  pluralPast: Word('облачили', 5),
  imperativeInformal: Word('облачи', 5),
  imperativeFormal: Word('облачите', 5),
  imperfect: [],
};

perfectVerbs.set(облачить.name.text, облачить);

export { облачить };