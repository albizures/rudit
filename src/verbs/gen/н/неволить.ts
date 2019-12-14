import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const неволить: PerfectVerb = {
  name: Word('неволить', 3),
  singular1stPerson: Word('неволю', 3),
  singular2ndPerson: Word('неволишь', 3),
  singular3rdPerson: Word('неволит', 3),
  plural1stPerson: Word('неволим', 3),
  plural2ndPerson: Word('неволите', 3),
  plural3rdPerson: Word('неволят', 3),
  masculinePast: Word('неволил', 3),
  femininePast: Word('неволила', 3),
  neuterPast: Word('неволило', 3),
  pluralPast: Word('неволили', 3),
  imperativeInformal: Word('неволь', 3),
  imperativeFormal: Word('невольте', 3),
  imperfect: [],
};

perfectVerbs.set(неволить.name.text, неволить);

export { неволить };