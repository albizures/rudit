import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проверить: PerfectVerb = {
  name: Word('проверить', 4),
  singular1stPerson: Word('проверю', 4),
  singular2ndPerson: Word('проверишь', 4),
  singular3rdPerson: Word('проверит', 4),
  plural1stPerson: Word('проверим', 4),
  plural2ndPerson: Word('проверите', 4),
  plural3rdPerson: Word('проверят', 4),
  masculinePast: Word('проверил', 4),
  femininePast: Word('проверила', 4),
  neuterPast: Word('проверило', 4),
  pluralPast: Word('проверили', 4),
  imperativeInformal: Word('проверь', 4),
  imperativeFormal: Word('проверьте', 4),
  imperfect: ['проверять'],
};

perfectVerbs.set(проверить.name.text, проверить);

export { проверить };