import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уменьшить: PerfectVerb = {
  name: Word('уменьшить', 2),
  singular1stPerson: Word('уменьшу', 2),
  singular2ndPerson: Word('уменьшишь', 2),
  singular3rdPerson: Word('уменьшит', 2),
  plural1stPerson: Word('уменьшим', 2),
  plural2ndPerson: Word('уменьшите', 2),
  plural3rdPerson: Word('уменьшат', 2),
  masculinePast: Word('уменьшил', 2),
  femininePast: Word('уменьшила', 2),
  neuterPast: Word('уменьшило', 2),
  pluralPast: Word('уменьшили', 2),
  imperativeInformal: Word('уменьши', 2),
  imperativeFormal: Word('уменьшите', 2),
  imperfect: ['уменьшать'],
};

perfectVerbs.set(уменьшить.name.text, уменьшить);

export { уменьшить };