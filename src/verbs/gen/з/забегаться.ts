import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забегаться: PerfectVerb = {
  name: Word('забегаться', 3),
  singular1stPerson: Word('забегаюсь', 3),
  singular2ndPerson: Word('забегаешься', 3),
  singular3rdPerson: Word('забегается', 3),
  plural1stPerson: Word('забегаемся', 3),
  plural2ndPerson: Word('забегаетесь', 3),
  plural3rdPerson: Word('забегаются', 3),
  masculinePast: Word('забегался', 3),
  femininePast: Word('забегалась', 3),
  neuterPast: Word('забегалось', 3),
  pluralPast: Word('забегались', 3),
  imperativeInformal: Word('забегайся', 3),
  imperativeFormal: Word('забегайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(забегаться.name.text, забегаться);

export { забегаться };