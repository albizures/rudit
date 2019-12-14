import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заикаться: PerfectVerb = {
  name: Word('заикаться', 4),
  singular1stPerson: Word('заикаюсь', 4),
  singular2ndPerson: Word('заикаешься', 4),
  singular3rdPerson: Word('заикается', 4),
  plural1stPerson: Word('заикаемся', 4),
  plural2ndPerson: Word('заикаетесь', 4),
  plural3rdPerson: Word('заикаются', 4),
  masculinePast: Word('заикался', 4),
  femininePast: Word('заикалась', 4),
  neuterPast: Word('заикалось', 4),
  pluralPast: Word('заикались', 4),
  imperativeInformal: Word('заикайся', 4),
  imperativeFormal: Word('заикайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(заикаться.name.text, заикаться);

export { заикаться };