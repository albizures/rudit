import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обделить: PerfectVerb = {
  name: Word('обделить', 5),
  singular1stPerson: Word('обделю', 5),
  singular2ndPerson: Word('обделишь', 3),
  singular3rdPerson: Word('обделит', 3),
  plural1stPerson: Word('обделим', 3),
  plural2ndPerson: Word('обделите', 3),
  plural3rdPerson: Word('обделят', 3),
  masculinePast: Word('обделил', 5),
  femininePast: Word('обделила', 5),
  neuterPast: Word('обделило', 5),
  pluralPast: Word('обделили', 5),
  imperativeInformal: Word('обдели', 5),
  imperativeFormal: Word('обделите', 5),
  imperfect: [],
};

perfectVerbs.set(обделить.name.text, обделить);

export { обделить };