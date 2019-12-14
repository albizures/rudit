import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сводить: PerfectVerb = {
  name: Word('сводить', 4),
  singular1stPerson: Word('свожу', 4),
  singular2ndPerson: Word('сводишь', 4),
  singular3rdPerson: Word('сводит', 4),
  plural1stPerson: Word('сводим', 4),
  plural2ndPerson: Word('сводите', 4),
  plural3rdPerson: Word('сводят', 4),
  masculinePast: Word('сводил', 4),
  femininePast: Word('сводила', 4),
  neuterPast: Word('сводило', 4),
  pluralPast: Word('сводили', 4),
  imperativeInformal: Word('своди', 4),
  imperativeFormal: Word('сводите', 4),
  imperfect: ['свести'],
};

perfectVerbs.set(сводить.name.text, сводить);

export { сводить };