import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просадить: PerfectVerb = {
  name: Word('просадить', 6),
  singular1stPerson: Word('просажу', 6),
  singular2ndPerson: Word('просадишь', 4),
  singular3rdPerson: Word('просадит', 4),
  plural1stPerson: Word('просадим', 4),
  plural2ndPerson: Word('просадите', 4),
  plural3rdPerson: Word('просадят', 4),
  masculinePast: Word('просадил', 6),
  femininePast: Word('просадила', 6),
  neuterPast: Word('просадило', 6),
  pluralPast: Word('просадили', 6),
  imperativeInformal: Word('просади', 6),
  imperativeFormal: Word('просадите', 6),
  imperfect: [],
};

perfectVerbs.set(просадить.name.text, просадить);

export { просадить };