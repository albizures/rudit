import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сливаться: PerfectVerb = {
  name: Word('сливаться', 4),
  singular1stPerson: Word('сливаюсь', 4),
  singular2ndPerson: Word('сливаешься', 4),
  singular3rdPerson: Word('сливается', 4),
  plural1stPerson: Word('сливаемся', 4),
  plural2ndPerson: Word('сливаетесь', 4),
  plural3rdPerson: Word('сливаются', 4),
  masculinePast: Word('сливался', 4),
  femininePast: Word('сливалась', 4),
  neuterPast: Word('сливалось', 4),
  pluralPast: Word('сливались', 4),
  imperativeInformal: Word('сливайся', 4),
  imperativeFormal: Word('сливайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сливаться.name.text, сливаться);

export { сливаться };