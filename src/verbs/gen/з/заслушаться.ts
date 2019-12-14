import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслушаться: PerfectVerb = {
  name: Word('заслушаться', 4),
  singular1stPerson: Word('заслушаюсь', 4),
  singular2ndPerson: Word('заслушаешься', 4),
  singular3rdPerson: Word('заслушается', 4),
  plural1stPerson: Word('заслушаемся', 4),
  plural2ndPerson: Word('заслушаетесь', 4),
  plural3rdPerson: Word('заслушаются', 4),
  masculinePast: Word('заслушался', 4),
  femininePast: Word('заслушалась', 4),
  neuterPast: Word('заслушалось', 4),
  pluralPast: Word('заслушались', 4),
  imperativeInformal: Word('заслушайся', 4),
  imperativeFormal: Word('заслушайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(заслушаться.name.text, заслушаться);

export { заслушаться };