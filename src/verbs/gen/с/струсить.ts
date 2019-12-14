import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const струсить: PerfectVerb = {
  name: Word('струсить', 3),
  singular1stPerson: Word('струшу', 3),
  singular2ndPerson: Word('струсишь', 3),
  singular3rdPerson: Word('струсит', 3),
  plural1stPerson: Word('струсим', 3),
  plural2ndPerson: Word('струсите', 3),
  plural3rdPerson: Word('струсят', 3),
  masculinePast: Word('струсил', 3),
  femininePast: Word('струсила', 3),
  neuterPast: Word('струсило', 3),
  pluralPast: Word('струсили', 3),
  imperativeInformal: Word('струсь', 3),
  imperativeFormal: Word('струсьте', 3),
  imperfect: [],
};

perfectVerbs.set(струсить.name.text, струсить);

export { струсить };