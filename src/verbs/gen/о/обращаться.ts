import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обращаться: PerfectVerb = {
  name: Word('обращаться', 5),
  singular1stPerson: Word('обращаюсь', 5),
  singular2ndPerson: Word('обращаешься', 5),
  singular3rdPerson: Word('обращается', 5),
  plural1stPerson: Word('обращаемся', 5),
  plural2ndPerson: Word('обращаетесь', 5),
  plural3rdPerson: Word('обращаются', 5),
  masculinePast: Word('обращался', 5),
  femininePast: Word('обращалась', 5),
  neuterPast: Word('обращалось', 5),
  pluralPast: Word('обращались', 5),
  imperativeInformal: Word('обращайся', 5),
  imperativeFormal: Word('обращайтесь', 5),
  imperfect: ['обратиться'],
};

perfectVerbs.set(обращаться.name.text, обращаться);

export { обращаться };