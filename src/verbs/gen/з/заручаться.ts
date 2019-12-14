import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заручаться: PerfectVerb = {
  name: Word('заручаться', 5),
  singular1stPerson: Word('заручаюсь', 5),
  singular2ndPerson: Word('заручаешься', 5),
  singular3rdPerson: Word('заручается', 5),
  plural1stPerson: Word('заручаемся', 5),
  plural2ndPerson: Word('заручаетесь', 5),
  plural3rdPerson: Word('заручаются', 5),
  masculinePast: Word('заручался', 5),
  femininePast: Word('заручалась', 5),
  neuterPast: Word('заручалось', 5),
  pluralPast: Word('заручались', 5),
  imperativeInformal: Word('заручайся', 5),
  imperativeFormal: Word('заручайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заручаться.name.text, заручаться);

export { заручаться };