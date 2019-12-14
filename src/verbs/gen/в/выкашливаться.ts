import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкашливаться: PerfectVerb = {
  name: Word('выкашливаться', 3),
  singular1stPerson: Word('выкашливаюсь', 3),
  singular2ndPerson: Word('выкашливаешься', 3),
  singular3rdPerson: Word('выкашливается', 3),
  plural1stPerson: Word('выкашливаемся', 3),
  plural2ndPerson: Word('выкашливаетесь', 3),
  plural3rdPerson: Word('выкашливаются', 3),
  masculinePast: Word('выкашливался', 3),
  femininePast: Word('выкашливалась', 3),
  neuterPast: Word('выкашливалось', 3),
  pluralPast: Word('выкашливались', 3),
  imperativeInformal: Word('выкашливайся', 3),
  imperativeFormal: Word('выкашливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выкашливаться.name.text, выкашливаться);

export { выкашливаться };