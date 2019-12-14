import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выливаться: PerfectVerb = {
  name: Word('выливаться', 5),
  singular1stPerson: Word('выливаюсь', 5),
  singular2ndPerson: Word('выливаешься', 5),
  singular3rdPerson: Word('выливается', 5),
  plural1stPerson: Word('выливаемся', 5),
  plural2ndPerson: Word('выливаетесь', 5),
  plural3rdPerson: Word('выливаются', 5),
  masculinePast: Word('выливался', 5),
  femininePast: Word('выливалась', 5),
  neuterPast: Word('выливалось', 5),
  pluralPast: Word('выливались', 5),
  imperativeInformal: Word('выливайся', 5),
  imperativeFormal: Word('выливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выливаться.name.text, выливаться);

export { выливаться };