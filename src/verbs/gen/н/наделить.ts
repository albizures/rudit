import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наделить: PerfectVerb = {
  name: Word('наделить', 5),
  singular1stPerson: Word('наделю', 5),
  singular2ndPerson: Word('наделишь', 5),
  singular3rdPerson: Word('наделит', 5),
  plural1stPerson: Word('наделим', 5),
  plural2ndPerson: Word('наделите', 5),
  plural3rdPerson: Word('наделят', 5),
  masculinePast: Word('наделил', 5),
  femininePast: Word('наделила', 5),
  neuterPast: Word('наделило', 5),
  pluralPast: Word('наделили', 5),
  imperativeInformal: Word('надели', 5),
  imperativeFormal: Word('наделите', 5),
  imperfect: [],
};

perfectVerbs.set(наделить.name.text, наделить);

export { наделить };