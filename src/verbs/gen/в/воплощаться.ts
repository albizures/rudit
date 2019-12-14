import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воплощаться: PerfectVerb = {
  name: Word('воплощаться', 6),
  singular1stPerson: Word('воплощаюсь', 6),
  singular2ndPerson: Word('воплощаешься', 6),
  singular3rdPerson: Word('воплощается', 6),
  plural1stPerson: Word('воплощаемся', 6),
  plural2ndPerson: Word('воплощаетесь', 6),
  plural3rdPerson: Word('воплощаются', 6),
  masculinePast: Word('воплощался', 6),
  femininePast: Word('воплощалась', 6),
  neuterPast: Word('воплощалось', 6),
  pluralPast: Word('воплощались', 6),
  imperativeInformal: Word('воплощайся', 6),
  imperativeFormal: Word('воплощайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(воплощаться.name.text, воплощаться);

export { воплощаться };