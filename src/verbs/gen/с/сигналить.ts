import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сигналить: PerfectVerb = {
  name: Word('сигналить', 4),
  singular1stPerson: Word('сигналю', 4),
  singular2ndPerson: Word('сигналишь', 4),
  singular3rdPerson: Word('сигналит', 4),
  plural1stPerson: Word('сигналим', 4),
  plural2ndPerson: Word('сигналите', 4),
  plural3rdPerson: Word('сигналят', 4),
  masculinePast: Word('сигналил', 4),
  femininePast: Word('сигналила', 4),
  neuterPast: Word('сигналило', 4),
  pluralPast: Word('сигналили', 4),
  imperativeInformal: Word('сигналь', 4),
  imperativeFormal: Word('сигнальте', 4),
  imperfect: [],
};

perfectVerbs.set(сигналить.name.text, сигналить);

export { сигналить };