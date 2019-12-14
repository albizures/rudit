import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заверить: PerfectVerb = {
  name: Word('заверить', 3),
  singular1stPerson: Word('заверю', 3),
  singular2ndPerson: Word('заверишь', 3),
  singular3rdPerson: Word('заверит', 3),
  plural1stPerson: Word('заверим', 3),
  plural2ndPerson: Word('заверите', 3),
  plural3rdPerson: Word('заверят', 3),
  masculinePast: Word('заверил', 3),
  femininePast: Word('заверила', 3),
  neuterPast: Word('заверило', 3),
  pluralPast: Word('заверили', 3),
  imperativeInformal: Word('заверь', 3),
  imperativeFormal: Word('заверьте', 3),
  imperfect: ['заверять'],
};

perfectVerbs.set(заверить.name.text, заверить);

export { заверить };