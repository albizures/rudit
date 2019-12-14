import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсадить: PerfectVerb = {
  name: Word('подсадить', 6),
  singular1stPerson: Word('подсажу', 6),
  singular2ndPerson: Word('подсадишь', 4),
  singular3rdPerson: Word('подсадит', 4),
  plural1stPerson: Word('подсадим', 4),
  plural2ndPerson: Word('подсадите', 4),
  plural3rdPerson: Word('подсадят', 4),
  masculinePast: Word('подсадил', 6),
  femininePast: Word('подсадила', 6),
  neuterPast: Word('подсадило', 6),
  pluralPast: Word('подсадили', 6),
  imperativeInformal: Word('подсади', 6),
  imperativeFormal: Word('подсадите', 6),
  imperfect: [],
};

perfectVerbs.set(подсадить.name.text, подсадить);

export { подсадить };