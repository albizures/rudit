import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поводить: PerfectVerb = {
  name: Word('поводить', 5),
  singular1stPerson: Word('повожу', 5),
  singular2ndPerson: Word('поводишь', 3),
  singular3rdPerson: Word('поводит', 3),
  plural1stPerson: Word('поводим', 3),
  plural2ndPerson: Word('поводите', 3),
  plural3rdPerson: Word('поводят', 3),
  masculinePast: Word('поводил', 5),
  femininePast: Word('поводила', 5),
  neuterPast: Word('поводило', 5),
  pluralPast: Word('поводили', 5),
  imperativeInformal: Word('поводи', 5),
  imperativeFormal: Word('поводите', 5),
  imperfect: [],
};

perfectVerbs.set(поводить.name.text, поводить);

export { поводить };