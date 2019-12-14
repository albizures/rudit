import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выработаться: PerfectVerb = {
  name: Word('выработаться', 1),
  singular1stPerson: Word('выработаюсь', 1),
  singular2ndPerson: Word('выработаешься', 1),
  singular3rdPerson: Word('выработается', 1),
  plural1stPerson: Word('выработаемся', 1),
  plural2ndPerson: Word('выработаетесь', 1),
  plural3rdPerson: Word('выработаются', 1),
  masculinePast: Word('выработался', 1),
  femininePast: Word('выработалась', 1),
  neuterPast: Word('выработалось', 1),
  pluralPast: Word('выработались', 1),
  imperativeInformal: Word('выработайся', 1),
  imperativeFormal: Word('выработайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выработаться.name.text, выработаться);

export { выработаться };