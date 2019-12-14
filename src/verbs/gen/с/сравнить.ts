import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сравнить: PerfectVerb = {
  name: Word('сравнить', 5),
  singular1stPerson: Word('сравню', 5),
  singular2ndPerson: Word('сравнишь', 5),
  singular3rdPerson: Word('сравнит', 5),
  plural1stPerson: Word('сравним', 5),
  plural2ndPerson: Word('сравните', 5),
  plural3rdPerson: Word('сравнят', 5),
  masculinePast: Word('сравнил', 5),
  femininePast: Word('сравнила', 5),
  neuterPast: Word('сравнило', 5),
  pluralPast: Word('сравнили', 5),
  imperativeInformal: Word('сравни', 5),
  imperativeFormal: Word('сравните', 5),
  imperfect: ['сравнивать'],
};

perfectVerbs.set(сравнить.name.text, сравнить);

export { сравнить };