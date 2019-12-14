import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всадить: PerfectVerb = {
  name: Word('всадить', 4),
  singular1stPerson: Word('всажу', 4),
  singular2ndPerson: Word('всадишь', 2),
  singular3rdPerson: Word('всадит', 2),
  plural1stPerson: Word('всадим', 2),
  plural2ndPerson: Word('всадите', 2),
  plural3rdPerson: Word('всадят', 2),
  masculinePast: Word('всадил', 4),
  femininePast: Word('всадила', 4),
  neuterPast: Word('всадило', 4),
  pluralPast: Word('всадили', 4),
  imperativeInformal: Word('всади', 4),
  imperativeFormal: Word('всадите', 4),
  imperfect: [],
};

perfectVerbs.set(всадить.name.text, всадить);

export { всадить };