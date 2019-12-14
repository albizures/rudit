import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкусить: PerfectVerb = {
  name: Word('обкусить', 5),
  singular1stPerson: Word('обкушу', 5),
  singular2ndPerson: Word('обкусишь', 3),
  singular3rdPerson: Word('обкусит', 3),
  plural1stPerson: Word('обкусим', 3),
  plural2ndPerson: Word('обкусите', 3),
  plural3rdPerson: Word('обкусят', 3),
  masculinePast: Word('обкусил', 5),
  femininePast: Word('обкусила', 5),
  neuterPast: Word('обкусило', 5),
  pluralPast: Word('обкусили', 5),
  imperativeInformal: Word('обкуси', 5),
  imperativeFormal: Word('обкусите', 5),
  imperfect: [],
};

perfectVerbs.set(обкусить.name.text, обкусить);

export { обкусить };