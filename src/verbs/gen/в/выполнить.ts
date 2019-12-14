import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выполнить: PerfectVerb = {
  name: Word('выполнить', 1),
  singular1stPerson: Word('выполню', 1),
  singular2ndPerson: Word('выполнишь', 1),
  singular3rdPerson: Word('выполнит', 1),
  plural1stPerson: Word('выполним', 1),
  plural2ndPerson: Word('выполните', 1),
  plural3rdPerson: Word('выполнят', 1),
  masculinePast: Word('выполнил', 1),
  femininePast: Word('выполнила', 1),
  neuterPast: Word('выполнило', 1),
  pluralPast: Word('выполнили', 1),
  imperativeInformal: Word('выполни', 1),
  imperativeFormal: Word('выполните', 1),
  imperfect: ['выполнять'],
};

perfectVerbs.set(выполнить.name.text, выполнить);

export { выполнить };