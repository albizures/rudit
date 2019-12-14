import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плодить: PerfectVerb = {
  name: Word('плодить', 4),
  singular1stPerson: Word('пложу', 4),
  singular2ndPerson: Word('плодишь', 4),
  singular3rdPerson: Word('плодит', 4),
  plural1stPerson: Word('плодим', 4),
  plural2ndPerson: Word('плодите', 4),
  plural3rdPerson: Word('плодят', 4),
  masculinePast: Word('плодил', 4),
  femininePast: Word('плодила', 4),
  neuterPast: Word('плодило', 4),
  pluralPast: Word('плодили', 4),
  imperativeInformal: Word('плоди', 4),
  imperativeFormal: Word('плодите', 4),
  imperfect: [],
};

perfectVerbs.set(плодить.name.text, плодить);

export { плодить };