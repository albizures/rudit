import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восполнить: PerfectVerb = {
  name: Word('восполнить', 4),
  singular1stPerson: Word('восполню', 4),
  singular2ndPerson: Word('восполнишь', 4),
  singular3rdPerson: Word('восполнит', 4),
  plural1stPerson: Word('восполним', 4),
  plural2ndPerson: Word('восполните', 4),
  plural3rdPerson: Word('восполнят', 4),
  masculinePast: Word('восполнил', 4),
  femininePast: Word('восполнила', 4),
  neuterPast: Word('восполнило', 4),
  pluralPast: Word('восполнили', 4),
  imperativeInformal: Word('восполни', 4),
  imperativeFormal: Word('восполните', 4),
  imperfect: [],
};

perfectVerbs.set(восполнить.name.text, восполнить);

export { восполнить };