import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const видаться: PerfectVerb = {
  name: Word('видаться', 3),
  singular1stPerson: Word('видаюсь', 3),
  singular2ndPerson: Word('видаешься', 3),
  singular3rdPerson: Word('видается', 3),
  plural1stPerson: Word('видаемся', 3),
  plural2ndPerson: Word('видаетесь', 3),
  plural3rdPerson: Word('видаются', 3),
  masculinePast: Word('видался', 3),
  femininePast: Word('видалась', 3),
  neuterPast: Word('видалось', 3),
  pluralPast: Word('видались', 3),
  imperativeInformal: Word('видайся', 3),
  imperativeFormal: Word('видайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(видаться.name.text, видаться);

export { видаться };