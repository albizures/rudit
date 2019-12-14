import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сутулить: PerfectVerb = {
  name: Word('сутулить', 3),
  singular1stPerson: Word('сутулю', 3),
  singular2ndPerson: Word('сутулишь', 3),
  singular3rdPerson: Word('сутулит', 3),
  plural1stPerson: Word('сутулим', 3),
  plural2ndPerson: Word('сутулите', 3),
  plural3rdPerson: Word('сутулят', 3),
  masculinePast: Word('сутулил', 3),
  femininePast: Word('сутулила', 3),
  neuterPast: Word('сутулило', 3),
  pluralPast: Word('сутулили', 3),
  imperativeInformal: Word('сутуль', 3),
  imperativeFormal: Word('сутульте', 3),
  imperfect: [],
};

perfectVerbs.set(сутулить.name.text, сутулить);

export { сутулить };