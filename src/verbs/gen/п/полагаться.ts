import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полагаться: PerfectVerb = {
  name: Word('полагаться', 5),
  singular1stPerson: Word('полагаюсь', 5),
  singular2ndPerson: Word('полагаешься', 5),
  singular3rdPerson: Word('полагается', 5),
  plural1stPerson: Word('полагаемся', 5),
  plural2ndPerson: Word('полагаетесь', 5),
  plural3rdPerson: Word('полагаются', 5),
  masculinePast: Word('полагался', 5),
  femininePast: Word('полагалась', 5),
  neuterPast: Word('полагалось', 5),
  pluralPast: Word('полагались', 5),
  imperativeInformal: Word('полагайся', 5),
  imperativeFormal: Word('полагайтесь', 5),
  imperfect: ['положиться'],
};

perfectVerbs.set(полагаться.name.text, полагаться);

export { полагаться };