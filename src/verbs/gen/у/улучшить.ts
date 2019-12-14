import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улучшить: PerfectVerb = {
  name: Word('улучшить', 2),
  singular1stPerson: Word('улучшу', 2),
  singular2ndPerson: Word('улучшишь', 2),
  singular3rdPerson: Word('улучшит', 2),
  plural1stPerson: Word('улучшим', 2),
  plural2ndPerson: Word('улучшите', 2),
  plural3rdPerson: Word('улучшат', 2),
  masculinePast: Word('улучшил', 2),
  femininePast: Word('улучшила', 2),
  neuterPast: Word('улучшило', 2),
  pluralPast: Word('улучшили', 2),
  imperativeInformal: Word('улучши', 2),
  imperativeFormal: Word('улучшите', 2),
  imperfect: ['улучшать'],
};

perfectVerbs.set(улучшить.name.text, улучшить);

export { улучшить };