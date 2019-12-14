import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угощаться: PerfectVerb = {
  name: Word('угощаться', 4),
  singular1stPerson: Word('угощаюсь', 4),
  singular2ndPerson: Word('угощаешься', 4),
  singular3rdPerson: Word('угощается', 4),
  plural1stPerson: Word('угощаемся', 4),
  plural2ndPerson: Word('угощаетесь', 4),
  plural3rdPerson: Word('угощаются', 4),
  masculinePast: Word('угощался', 4),
  femininePast: Word('угощалась', 4),
  neuterPast: Word('угощалось', 4),
  pluralPast: Word('угощались', 4),
  imperativeInformal: Word('угощайся', 4),
  imperativeFormal: Word('угощайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(угощаться.name.text, угощаться);

export { угощаться };