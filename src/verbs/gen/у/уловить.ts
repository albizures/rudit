import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уловить: PerfectVerb = {
  name: Word('уловить', 4),
  singular1stPerson: Word('уловлю', 5),
  singular2ndPerson: Word('уловишь', 2),
  singular3rdPerson: Word('уловит', 2),
  plural1stPerson: Word('уловим', 2),
  plural2ndPerson: Word('уловите', 2),
  plural3rdPerson: Word('уловят', 2),
  masculinePast: Word('уловил', 4),
  femininePast: Word('уловила', 4),
  neuterPast: Word('уловило', 4),
  pluralPast: Word('уловили', 4),
  imperativeInformal: Word('улови', 4),
  imperativeFormal: Word('уловите', 4),
  imperfect: ['улавливать'],
};

perfectVerbs.set(уловить.name.text, уловить);

export { уловить };