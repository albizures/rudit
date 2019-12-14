import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кувыркаться: PerfectVerb = {
  name: Word('кувыркаться', 6),
  singular1stPerson: Word('кувыркаюсь', 6),
  singular2ndPerson: Word('кувыркаешься', 6),
  singular3rdPerson: Word('кувыркается', 6),
  plural1stPerson: Word('кувыркаемся', 6),
  plural2ndPerson: Word('кувыркаетесь', 6),
  plural3rdPerson: Word('кувыркаются', 6),
  masculinePast: Word('кувыркался', 6),
  femininePast: Word('кувыркалась', 6),
  neuterPast: Word('кувыркалось', 6),
  pluralPast: Word('кувыркались', 6),
  imperativeInformal: Word('кувыркайся', 6),
  imperativeFormal: Word('кувыркайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(кувыркаться.name.text, кувыркаться);

export { кувыркаться };