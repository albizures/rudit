import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смыкаться: PerfectVerb = {
  name: Word('смыкаться', 4),
  singular1stPerson: Word('смыкаюсь', 4),
  singular2ndPerson: Word('смыкаешься', 4),
  singular3rdPerson: Word('смыкается', 4),
  plural1stPerson: Word('смыкаемся', 4),
  plural2ndPerson: Word('смыкаетесь', 4),
  plural3rdPerson: Word('смыкаются', 4),
  masculinePast: Word('смыкался', 4),
  femininePast: Word('смыкалась', 4),
  neuterPast: Word('смыкалось', 4),
  pluralPast: Word('смыкались', 4),
  imperativeInformal: Word('смыкайся', 4),
  imperativeFormal: Word('смыкайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(смыкаться.name.text, смыкаться);

export { смыкаться };