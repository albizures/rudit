import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывесить: PerfectVerb = {
  name: Word('вывесить', 1),
  singular1stPerson: Word('вывешу', 1),
  singular2ndPerson: Word('вывесишь', 1),
  singular3rdPerson: Word('вывесит', 1),
  plural1stPerson: Word('вывесим', 1),
  plural2ndPerson: Word('вывесите', 1),
  plural3rdPerson: Word('вывесят', 1),
  masculinePast: Word('вывесил', 1),
  femininePast: Word('вывесила', 1),
  neuterPast: Word('вывесило', 1),
  pluralPast: Word('вывесили', 1),
  imperativeInformal: Word('вывеси//вы'весь', 1),
  imperativeFormal: Word('вывесите//вы'весьте', 1),
  imperfect: [],
};

perfectVerbs.set(вывесить.name.text, вывесить);

export { вывесить };