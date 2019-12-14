import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обручаться: PerfectVerb = {
  name: Word('обручаться', 5),
  singular1stPerson: Word('обручаюсь', 5),
  singular2ndPerson: Word('обручаешься', 5),
  singular3rdPerson: Word('обручается', 5),
  plural1stPerson: Word('обручаемся', 5),
  plural2ndPerson: Word('обручаетесь', 5),
  plural3rdPerson: Word('обручаются', 5),
  masculinePast: Word('обручался', 5),
  femininePast: Word('обручалась', 5),
  neuterPast: Word('обручалось', 5),
  pluralPast: Word('обручались', 5),
  imperativeInformal: Word('обручайся', 5),
  imperativeFormal: Word('обручайтесь', 5),
  imperfect: ['обручиться'],
};

perfectVerbs.set(обручаться.name.text, обручаться);

export { обручаться };