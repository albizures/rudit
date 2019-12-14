import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просигналить: PerfectVerb = {
  name: Word('просигналить', 7),
  singular1stPerson: Word('просигналю', 7),
  singular2ndPerson: Word('просигналишь', 7),
  singular3rdPerson: Word('просигналит', 7),
  plural1stPerson: Word('просигналим', 7),
  plural2ndPerson: Word('просигналите', 7),
  plural3rdPerson: Word('просигналят', 7),
  masculinePast: Word('просигналил', 7),
  femininePast: Word('просигналила', 7),
  neuterPast: Word('просигналило', 7),
  pluralPast: Word('просигналили', 7),
  imperativeInformal: Word('просигналь', 7),
  imperativeFormal: Word('просигнальте', 7),
  imperfect: [],
};

perfectVerbs.set(просигналить.name.text, просигналить);

export { просигналить };