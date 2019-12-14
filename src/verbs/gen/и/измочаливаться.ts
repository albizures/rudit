import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измочаливаться: PerfectVerb = {
  name: Word('измочаливаться', 5),
  singular1stPerson: Word('измочаливаюсь', 5),
  singular2ndPerson: Word('измочаливаешься', 5),
  singular3rdPerson: Word('измочаливается', 5),
  plural1stPerson: Word('измочаливаемся', 5),
  plural2ndPerson: Word('измочаливаетесь', 5),
  plural3rdPerson: Word('измочаливаются', 5),
  masculinePast: Word('измочаливался', 5),
  femininePast: Word('измочаливалась', 5),
  neuterPast: Word('измочаливалось', 5),
  pluralPast: Word('измочаливались', 5),
  imperativeInformal: Word('измочаливайся', 5),
  imperativeFormal: Word('измочаливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(измочаливаться.name.text, измочаливаться);

export { измочаливаться };