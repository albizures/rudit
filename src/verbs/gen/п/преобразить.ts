import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преобразить: PerfectVerb = {
  name: Word('преобразить', 8),
  singular1stPerson: Word('преображу', 8),
  singular2ndPerson: Word('преобразишь', 8),
  singular3rdPerson: Word('преобразит', 8),
  plural1stPerson: Word('преобразим', 8),
  plural2ndPerson: Word('преобразите', 8),
  plural3rdPerson: Word('преобразят', 8),
  masculinePast: Word('преобразил', 8),
  femininePast: Word('преобразила', 8),
  neuterPast: Word('преобразило', 8),
  pluralPast: Word('преобразили', 8),
  imperativeInformal: Word('преобрази', 8),
  imperativeFormal: Word('преобразите', 8),
  imperfect: [],
};

perfectVerbs.set(преобразить.name.text, преобразить);

export { преобразить };