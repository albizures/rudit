import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заработаться: PerfectVerb = {
  name: Word('заработаться', 5),
  singular1stPerson: Word('заработаюсь', 5),
  singular2ndPerson: Word('заработаешься', 5),
  singular3rdPerson: Word('заработается', 5),
  plural1stPerson: Word('заработаемся', 5),
  plural2ndPerson: Word('заработаетесь', 5),
  plural3rdPerson: Word('заработаются', 5),
  masculinePast: Word('заработался', 5),
  femininePast: Word('заработалась', 5),
  neuterPast: Word('заработалось', 5),
  pluralPast: Word('заработались', 5),
  imperativeInformal: Word('заработайся', 5),
  imperativeFormal: Word('заработайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заработаться.name.text, заработаться);

export { заработаться };