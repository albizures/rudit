import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наваливаться: PerfectVerb = {
  name: Word('наваливаться', 3),
  singular1stPerson: Word('наваливаюсь', 3),
  singular2ndPerson: Word('наваливаешься', 3),
  singular3rdPerson: Word('наваливается', 3),
  plural1stPerson: Word('наваливаемся', 3),
  plural2ndPerson: Word('наваливаетесь', 3),
  plural3rdPerson: Word('наваливаются', 3),
  masculinePast: Word('наваливался', 3),
  femininePast: Word('наваливалась', 3),
  neuterPast: Word('наваливалось', 3),
  pluralPast: Word('наваливались', 3),
  imperativeInformal: Word('наваливайся', 3),
  imperativeFormal: Word('наваливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(наваливаться.name.text, наваливаться);

export { наваливаться };