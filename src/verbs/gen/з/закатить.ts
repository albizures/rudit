import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закатить: PerfectVerb = {
  name: Word('закатить', 5),
  singular1stPerson: Word('закачу', 5),
  singular2ndPerson: Word('закатишь', 3),
  singular3rdPerson: Word('закатит', 3),
  plural1stPerson: Word('закатим', 3),
  plural2ndPerson: Word('закатите', 3),
  plural3rdPerson: Word('закатят', 3),
  masculinePast: Word('закатил', 5),
  femininePast: Word('закатила', 5),
  neuterPast: Word('закатило', 5),
  pluralPast: Word('закатили', 5),
  imperativeInformal: Word('закати', 5),
  imperativeFormal: Word('закатите', 5),
  imperfect: ['закатывать'],
};

perfectVerbs.set(закатить.name.text, закатить);

export { закатить };