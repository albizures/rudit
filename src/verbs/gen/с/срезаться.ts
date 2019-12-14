import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срезаться: PerfectVerb = {
  name: Word('срезаться', 4),
  singular1stPerson: Word('срезаюсь', 4),
  singular2ndPerson: Word('срезаешься', 4),
  singular3rdPerson: Word('срезается', 4),
  plural1stPerson: Word('срезаемся', 4),
  plural2ndPerson: Word('срезаетесь', 4),
  plural3rdPerson: Word('срезаются', 4),
  masculinePast: Word('срезался', 4),
  femininePast: Word('срезалась', 4),
  neuterPast: Word('срезалось', 4),
  pluralPast: Word('срезались', 4),
  imperativeInformal: Word('срезайся', 4),
  imperativeFormal: Word('срезайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(срезаться.name.text, срезаться);

export { срезаться };