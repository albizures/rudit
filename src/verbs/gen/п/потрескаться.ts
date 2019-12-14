import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрескаться: PerfectVerb = {
  name: Word('потрескаться', 4),
  singular1stPerson: Word('потрескаюсь', 4),
  singular2ndPerson: Word('потрескаешься', 4),
  singular3rdPerson: Word('потрескается', 4),
  plural1stPerson: Word('потрескаемся', 4),
  plural2ndPerson: Word('потрескаетесь', 4),
  plural3rdPerson: Word('потрескаются', 4),
  masculinePast: Word('потрескался', 4),
  femininePast: Word('потрескалась', 4),
  neuterPast: Word('потрескалось', 4),
  pluralPast: Word('потрескались', 4),
  imperativeInformal: Word('потрескайся', 4),
  imperativeFormal: Word('потрескайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(потрескаться.name.text, потрескаться);

export { потрескаться };