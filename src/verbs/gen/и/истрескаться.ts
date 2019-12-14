import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истрескаться: PerfectVerb = {
  name: Word('истрескаться', 4),
  singular1stPerson: Word('истрескаюсь', 4),
  singular2ndPerson: Word('истрескаешься', 4),
  singular3rdPerson: Word('истрескается', 4),
  plural1stPerson: Word('истрескаемся', 4),
  plural2ndPerson: Word('истрескаетесь', 4),
  plural3rdPerson: Word('истрескаются', 4),
  masculinePast: Word('истрескался', 4),
  femininePast: Word('истрескалась', 4),
  neuterPast: Word('истрескалось', 4),
  pluralPast: Word('истрескались', 4),
  imperativeInformal: Word('истрескайся', 4),
  imperativeFormal: Word('истрескайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(истрескаться.name.text, истрескаться);

export { истрескаться };