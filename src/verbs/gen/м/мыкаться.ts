import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мыкаться: PerfectVerb = {
  name: Word('мыкаться', 1),
  singular1stPerson: Word('мыкаюсь', 1),
  singular2ndPerson: Word('мыкаешься', 1),
  singular3rdPerson: Word('мыкается', 1),
  plural1stPerson: Word('мыкаемся', 1),
  plural2ndPerson: Word('мыкаетесь', 1),
  plural3rdPerson: Word('мыкаются', 1),
  masculinePast: Word('мыкался', 1),
  femininePast: Word('мыкалась', 1),
  neuterPast: Word('мыкалось', 1),
  pluralPast: Word('мыкались', 1),
  imperativeInformal: Word('мыкайся', 1),
  imperativeFormal: Word('мыкайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(мыкаться.name.text, мыкаться);

export { мыкаться };