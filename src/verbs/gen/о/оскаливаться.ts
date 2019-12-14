import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскаливаться: PerfectVerb = {
  name: Word('оскаливаться', 3),
  singular1stPerson: Word('оскаливаюсь', 3),
  singular2ndPerson: Word('оскаливаешься', 3),
  singular3rdPerson: Word('оскаливается', 3),
  plural1stPerson: Word('оскаливаемся', 3),
  plural2ndPerson: Word('оскаливаетесь', 3),
  plural3rdPerson: Word('оскаливаются', 3),
  masculinePast: Word('оскаливался', 3),
  femininePast: Word('оскаливалась', 3),
  neuterPast: Word('оскаливалось', 3),
  pluralPast: Word('оскаливались', 3),
  imperativeInformal: Word('оскаливайся', 3),
  imperativeFormal: Word('оскаливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(оскаливаться.name.text, оскаливаться);

export { оскаливаться };