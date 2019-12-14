import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывозить: PerfectVerb = {
  name: Word('вывозить', 1),
  singular1stPerson: Word('вывожу', 1),
  singular2ndPerson: Word('вывозишь', 1),
  singular3rdPerson: Word('вывозит', 1),
  plural1stPerson: Word('вывозим', 1),
  plural2ndPerson: Word('вывозите', 1),
  plural3rdPerson: Word('вывозят', 1),
  masculinePast: Word('вывозил', 1),
  femininePast: Word('вывозила', 1),
  neuterPast: Word('вывозило', 1),
  pluralPast: Word('вывозили', 1),
  imperativeInformal: Word('вывози', 1),
  imperativeFormal: Word('вывозите', 1),
  imperfect: [],
};

perfectVerbs.set(вывозить.name.text, вывозить);

export { вывозить };