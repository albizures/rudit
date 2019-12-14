import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наработаться: PerfectVerb = {
  name: Word('наработаться', 5),
  singular1stPerson: Word('наработаюсь', 5),
  singular2ndPerson: Word('наработаешься', 5),
  singular3rdPerson: Word('наработается', 5),
  plural1stPerson: Word('наработаемся', 5),
  plural2ndPerson: Word('наработаетесь', 5),
  plural3rdPerson: Word('наработаются', 5),
  masculinePast: Word('наработался', 5),
  femininePast: Word('наработалась', 5),
  neuterPast: Word('наработалось', 5),
  pluralPast: Word('наработались', 5),
  imperativeInformal: Word('наработайся', 5),
  imperativeFormal: Word('наработайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(наработаться.name.text, наработаться);

export { наработаться };