import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const честить: PerfectVerb = {
  name: Word('честить', 4),
  singular1stPerson: Word('чещу', 3),
  singular2ndPerson: Word('честишь', 4),
  singular3rdPerson: Word('честит', 4),
  plural1stPerson: Word('честим', 4),
  plural2ndPerson: Word('честите', 4),
  plural3rdPerson: Word('честят', 4),
  masculinePast: Word('честил', 4),
  femininePast: Word('честила', 4),
  neuterPast: Word('честило', 4),
  pluralPast: Word('честили', 4),
  imperativeInformal: Word('чести', 4),
  imperativeFormal: Word('честите', 4),
  imperfect: [],
};

perfectVerbs.set(честить.name.text, честить);

export { честить };