import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const породить: PerfectVerb = {
  name: Word('породить', 5),
  singular1stPerson: Word('порожу', 5),
  singular2ndPerson: Word('породишь', 5),
  singular3rdPerson: Word('породит', 5),
  plural1stPerson: Word('породим', 5),
  plural2ndPerson: Word('породите', 5),
  plural3rdPerson: Word('породят', 5),
  masculinePast: Word('породил', 5),
  femininePast: Word('породила', 5),
  neuterPast: Word('породило', 5),
  pluralPast: Word('породили', 5),
  imperativeInformal: Word('породи', 5),
  imperativeFormal: Word('породите', 5),
  imperfect: ['порождать'],
};

perfectVerbs.set(породить.name.text, породить);

export { породить };