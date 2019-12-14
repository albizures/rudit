import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доработаться: PerfectVerb = {
  name: Word('доработаться', 5),
  singular1stPerson: Word('доработаюсь', 5),
  singular2ndPerson: Word('доработаешься', 5),
  singular3rdPerson: Word('доработается', 5),
  plural1stPerson: Word('доработаемся', 5),
  plural2ndPerson: Word('доработаетесь', 5),
  plural3rdPerson: Word('доработаются', 5),
  masculinePast: Word('доработался', 5),
  femininePast: Word('доработалась', 5),
  neuterPast: Word('доработалось', 5),
  pluralPast: Word('доработались', 5),
  imperativeInformal: Word('доработайся', 5),
  imperativeFormal: Word('доработайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(доработаться.name.text, доработаться);

export { доработаться };