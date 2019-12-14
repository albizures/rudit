import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распрощаться: PerfectVerb = {
  name: Word('распрощаться', 7),
  singular1stPerson: Word('распрощаюсь', 7),
  singular2ndPerson: Word('распрощаешься', 7),
  singular3rdPerson: Word('распрощается', 7),
  plural1stPerson: Word('распрощаемся', 7),
  plural2ndPerson: Word('распрощаетесь', 7),
  plural3rdPerson: Word('распрощаются', 7),
  masculinePast: Word('распрощался', 7),
  femininePast: Word('распрощалась', 7),
  neuterPast: Word('распрощалось', 7),
  pluralPast: Word('распрощались', 7),
  imperativeInformal: Word('распрощайся', 7),
  imperativeFormal: Word('распрощайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(распрощаться.name.text, распрощаться);

export { распрощаться };