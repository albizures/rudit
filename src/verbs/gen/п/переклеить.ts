import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переклеить: PerfectVerb = {
  name: Word('переклеить', 6),
  singular1stPerson: Word('переклею', 6),
  singular2ndPerson: Word('переклеишь', 6),
  singular3rdPerson: Word('переклеит', 6),
  plural1stPerson: Word('переклеим', 6),
  plural2ndPerson: Word('переклеите', 6),
  plural3rdPerson: Word('переклеят', 6),
  masculinePast: Word('переклеил', 6),
  femininePast: Word('переклеила', 6),
  neuterPast: Word('переклеило', 6),
  pluralPast: Word('переклеили', 6),
  imperativeInformal: Word('переклей', 6),
  imperativeFormal: Word('переклейте', 6),
  imperfect: [],
};

perfectVerbs.set(переклеить.name.text, переклеить);

export { переклеить };