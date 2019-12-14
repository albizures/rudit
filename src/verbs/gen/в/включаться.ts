import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const включаться: PerfectVerb = {
  name: Word('включаться', 5),
  singular1stPerson: Word('включаюсь', 5),
  singular2ndPerson: Word('включаешься', 5),
  singular3rdPerson: Word('включается', 5),
  plural1stPerson: Word('включаемся', 5),
  plural2ndPerson: Word('включаетесь', 5),
  plural3rdPerson: Word('включаются', 5),
  masculinePast: Word('включался', 5),
  femininePast: Word('включалась', 5),
  neuterPast: Word('включалось', 5),
  pluralPast: Word('включались', 5),
  imperativeInformal: Word('включайся', 5),
  imperativeFormal: Word('включайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(включаться.name.text, включаться);

export { включаться };