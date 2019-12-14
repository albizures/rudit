import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попрощаться: PerfectVerb = {
  name: Word('попрощаться', 6),
  singular1stPerson: Word('попрощаюсь', 6),
  singular2ndPerson: Word('попрощаешься', 6),
  singular3rdPerson: Word('попрощается', 6),
  plural1stPerson: Word('попрощаемся', 6),
  plural2ndPerson: Word('попрощаетесь', 6),
  plural3rdPerson: Word('попрощаются', 6),
  masculinePast: Word('попрощался', 6),
  femininePast: Word('попрощалась', 6),
  neuterPast: Word('попрощалось', 6),
  pluralPast: Word('попрощались', 6),
  imperativeInformal: Word('попрощайся', 6),
  imperativeFormal: Word('попрощайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(попрощаться.name.text, попрощаться);

export { попрощаться };