import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вливаться: PerfectVerb = {
  name: Word('вливаться', 4),
  singular1stPerson: Word('вливаюсь', 4),
  singular2ndPerson: Word('вливаешься', 4),
  singular3rdPerson: Word('вливается', 4),
  plural1stPerson: Word('вливаемся', 4),
  plural2ndPerson: Word('вливаетесь', 4),
  plural3rdPerson: Word('вливаются', 4),
  masculinePast: Word('вливался', 4),
  femininePast: Word('вливалась', 4),
  neuterPast: Word('вливалось', 4),
  pluralPast: Word('вливались', 4),
  imperativeInformal: Word('вливайся', 4),
  imperativeFormal: Word('вливайтесь', 4),
  imperfect: ['влиться'],
};

perfectVerbs.set(вливаться.name.text, вливаться);

export { вливаться };