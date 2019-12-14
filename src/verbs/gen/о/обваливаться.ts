import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обваливаться: PerfectVerb = {
  name: Word('обваливаться', 3),
  singular1stPerson: Word('обваливаюсь', 3),
  singular2ndPerson: Word('обваливаешься', 3),
  singular3rdPerson: Word('обваливается', 3),
  plural1stPerson: Word('обваливаемся', 3),
  plural2ndPerson: Word('обваливаетесь', 3),
  plural3rdPerson: Word('обваливаются', 3),
  masculinePast: Word('обваливался', 3),
  femininePast: Word('обваливалась', 3),
  neuterPast: Word('обваливалось', 3),
  pluralPast: Word('обваливались', 3),
  imperativeInformal: Word('обваливайся', 3),
  imperativeFormal: Word('обваливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обваливаться.name.text, обваливаться);

export { обваливаться };