import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угодить: PerfectVerb = {
  name: Word('угодить', 4),
  singular1stPerson: Word('угожу', 4),
  singular2ndPerson: Word('угодишь', 4),
  singular3rdPerson: Word('угодит', 4),
  plural1stPerson: Word('угодим', 4),
  plural2ndPerson: Word('угодите', 4),
  plural3rdPerson: Word('угодят', 4),
  masculinePast: Word('угодил', 4),
  femininePast: Word('угодила', 4),
  neuterPast: Word('угодило', 4),
  pluralPast: Word('угодили', 4),
  imperativeInformal: Word('угоди', 4),
  imperativeFormal: Word('угодите', 4),
  imperfect: [],
};

perfectVerbs.set(угодить.name.text, угодить);

export { угодить };