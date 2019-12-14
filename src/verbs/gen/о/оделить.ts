import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оделить: PerfectVerb = {
  name: Word('оделить', 4),
  singular1stPerson: Word('оделю', 4),
  singular2ndPerson: Word('оделишь', 4),
  singular3rdPerson: Word('оделит', 4),
  plural1stPerson: Word('оделим', 4),
  plural2ndPerson: Word('оделите', 4),
  plural3rdPerson: Word('оделят', 4),
  masculinePast: Word('оделил', 4),
  femininePast: Word('оделила', 4),
  neuterPast: Word('оделило', 4),
  pluralPast: Word('оделили', 4),
  imperativeInformal: Word('одели', 4),
  imperativeFormal: Word('оделите', 4),
  imperfect: [],
};

perfectVerbs.set(оделить.name.text, оделить);

export { оделить };