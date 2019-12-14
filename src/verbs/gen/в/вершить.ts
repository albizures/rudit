import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вершить: PerfectVerb = {
  name: Word('вершить', 4),
  singular1stPerson: Word('вершу', 4),
  singular2ndPerson: Word('вершишь', 4),
  singular3rdPerson: Word('вершит', 4),
  plural1stPerson: Word('вершим', 4),
  plural2ndPerson: Word('вершите', 4),
  plural3rdPerson: Word('вершат', 4),
  masculinePast: Word('вершил', 4),
  femininePast: Word('вершила', 4),
  neuterPast: Word('вершило', 4),
  pluralPast: Word('вершили', 4),
  imperativeInformal: Word('верши', 4),
  imperativeFormal: Word('вершите', 4),
  imperfect: ['свершить','повершить'],
};

perfectVerbs.set(вершить.name.text, вершить);

export { вершить };