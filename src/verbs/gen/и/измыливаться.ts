import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измыливаться: PerfectVerb = {
  name: Word('измыливаться', 3),
  singular1stPerson: Word('измыливаюсь', 3),
  singular2ndPerson: Word('измыливаешься', 3),
  singular3rdPerson: Word('измыливается', 3),
  plural1stPerson: Word('измыливаемся', 3),
  plural2ndPerson: Word('измыливаетесь', 3),
  plural3rdPerson: Word('измыливаются', 3),
  masculinePast: Word('измыливался', 3),
  femininePast: Word('измыливалась', 3),
  neuterPast: Word('измыливалось', 3),
  pluralPast: Word('измыливались', 3),
  imperativeInformal: Word('измыливайся', 3),
  imperativeFormal: Word('измыливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(измыливаться.name.text, измыливаться);

export { измыливаться };