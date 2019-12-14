import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оберегаться: PerfectVerb = {
  name: Word('оберегаться', 6),
  singular1stPerson: Word('оберегаюсь', 6),
  singular2ndPerson: Word('оберегаешься', 6),
  singular3rdPerson: Word('оберегается', 6),
  plural1stPerson: Word('оберегаемся', 6),
  plural2ndPerson: Word('оберегаетесь', 6),
  plural3rdPerson: Word('оберегаются', 6),
  masculinePast: Word('оберегался', 6),
  femininePast: Word('оберегалась', 6),
  neuterPast: Word('оберегалось', 6),
  pluralPast: Word('оберегались', 6),
  imperativeInformal: Word('оберегайся', 6),
  imperativeFormal: Word('оберегайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(оберегаться.name.text, оберегаться);

export { оберегаться };