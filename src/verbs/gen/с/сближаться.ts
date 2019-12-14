import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сближаться: PerfectVerb = {
  name: Word('сближаться', 5),
  singular1stPerson: Word('сближаюсь', 5),
  singular2ndPerson: Word('сближаешься', 5),
  singular3rdPerson: Word('сближается', 5),
  plural1stPerson: Word('сближаемся', 5),
  plural2ndPerson: Word('сближаетесь', 5),
  plural3rdPerson: Word('сближаются', 5),
  masculinePast: Word('сближался', 5),
  femininePast: Word('сближалась', 5),
  neuterPast: Word('сближалось', 5),
  pluralPast: Word('сближались', 5),
  imperativeInformal: Word('сближайся', 5),
  imperativeFormal: Word('сближайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сближаться.name.text, сближаться);

export { сближаться };