import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отработаться: PerfectVerb = {
  name: Word('отработаться', 5),
  singular1stPerson: Word('отработаюсь', 5),
  singular2ndPerson: Word('отработаешься', 5),
  singular3rdPerson: Word('отработается', 5),
  plural1stPerson: Word('отработаемся', 5),
  plural2ndPerson: Word('отработаетесь', 5),
  plural3rdPerson: Word('отработаются', 5),
  masculinePast: Word('отработался', 5),
  femininePast: Word('отработалась', 5),
  neuterPast: Word('отработалось', 5),
  pluralPast: Word('отработались', 5),
  imperativeInformal: Word('отработайся', 5),
  imperativeFormal: Word('отработайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отработаться.name.text, отработаться);

export { отработаться };