import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уменьшаться: PerfectVerb = {
  name: Word('уменьшаться', 6),
  singular1stPerson: Word('уменьшаюсь', 6),
  singular2ndPerson: Word('уменьшаешься', 6),
  singular3rdPerson: Word('уменьшается', 6),
  plural1stPerson: Word('уменьшаемся', 6),
  plural2ndPerson: Word('уменьшаетесь', 6),
  plural3rdPerson: Word('уменьшаются', 6),
  masculinePast: Word('уменьшался', 6),
  femininePast: Word('уменьшалась', 6),
  neuterPast: Word('уменьшалось', 6),
  pluralPast: Word('уменьшались', 6),
  imperativeInformal: Word('уменьшайся', 6),
  imperativeFormal: Word('уменьшайтесь', 6),
  imperfect: ['уменьшиться'],
};

perfectVerbs.set(уменьшаться.name.text, уменьшаться);

export { уменьшаться };