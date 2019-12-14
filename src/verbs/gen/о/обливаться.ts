import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обливаться: PerfectVerb = {
  name: Word('обливаться', 5),
  singular1stPerson: Word('обливаюсь', 5),
  singular2ndPerson: Word('обливаешься', 5),
  singular3rdPerson: Word('обливается', 5),
  plural1stPerson: Word('обливаемся', 5),
  plural2ndPerson: Word('обливаетесь', 5),
  plural3rdPerson: Word('обливаются', 5),
  masculinePast: Word('обливался', 5),
  femininePast: Word('обливалась', 5),
  neuterPast: Word('обливалось', 5),
  pluralPast: Word('обливались', 5),
  imperativeInformal: Word('обливайся', 5),
  imperativeFormal: Word('обливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обливаться.name.text, обливаться);

export { обливаться };