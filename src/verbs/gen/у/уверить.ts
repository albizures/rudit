import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уверить: PerfectVerb = {
  name: Word('уверить', 2),
  singular1stPerson: Word('уверю', 2),
  singular2ndPerson: Word('уверишь', 2),
  singular3rdPerson: Word('уверит', 2),
  plural1stPerson: Word('уверим', 2),
  plural2ndPerson: Word('уверите', 2),
  plural3rdPerson: Word('уверят', 2),
  masculinePast: Word('уверил', 2),
  femininePast: Word('уверила', 2),
  neuterPast: Word('уверило', 2),
  pluralPast: Word('уверили', 2),
  imperativeInformal: Word('уверь', 2),
  imperativeFormal: Word('уверьте', 2),
  imperfect: ['уверять'],
};

perfectVerbs.set(уверить.name.text, уверить);

export { уверить };