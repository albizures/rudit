import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превысить: PerfectVerb = {
  name: Word('превысить', 4),
  singular1stPerson: Word('превышу', 4),
  singular2ndPerson: Word('превысишь', 4),
  singular3rdPerson: Word('превысит', 4),
  plural1stPerson: Word('превысим', 4),
  plural2ndPerson: Word('превысите', 4),
  plural3rdPerson: Word('превысят', 4),
  masculinePast: Word('превысил', 4),
  femininePast: Word('превысила', 4),
  neuterPast: Word('превысило', 4),
  pluralPast: Word('превысили', 4),
  imperativeInformal: Word('превысь', 4),
  imperativeFormal: Word('превысьте', 4),
  imperfect: ['превышать'],
};

perfectVerbs.set(превысить.name.text, превысить);

export { превысить };