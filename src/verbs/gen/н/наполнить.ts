import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наполнить: PerfectVerb = {
  name: Word('наполнить', 3),
  singular1stPerson: Word('наполню', 3),
  singular2ndPerson: Word('наполнишь', 3),
  singular3rdPerson: Word('наполнит', 3),
  plural1stPerson: Word('наполним', 3),
  plural2ndPerson: Word('наполните', 3),
  plural3rdPerson: Word('наполнят', 3),
  masculinePast: Word('наполнил', 3),
  femininePast: Word('наполнила', 3),
  neuterPast: Word('наполнило', 3),
  pluralPast: Word('наполнили', 3),
  imperativeInformal: Word('наполни', 3),
  imperativeFormal: Word('наполните', 3),
  imperfect: [],
};

perfectVerbs.set(наполнить.name.text, наполнить);

export { наполнить };