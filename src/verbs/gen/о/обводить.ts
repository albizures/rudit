import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обводить: PerfectVerb = {
  name: Word('обводить', 5),
  singular1stPerson: Word('обвожу', 5),
  singular2ndPerson: Word('обводишь', 3),
  singular3rdPerson: Word('обводит', 3),
  plural1stPerson: Word('обводим', 3),
  plural2ndPerson: Word('обводите', 3),
  plural3rdPerson: Word('обводят', 3),
  masculinePast: Word('обводил', 5),
  femininePast: Word('обводила', 5),
  neuterPast: Word('обводило', 5),
  pluralPast: Word('обводили', 5),
  imperativeInformal: Word('обводи', 5),
  imperativeFormal: Word('обводите', 5),
  imperfect: [],
};

perfectVerbs.set(обводить.name.text, обводить);

export { обводить };