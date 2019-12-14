import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерождаться: PerfectVerb = {
  name: Word('перерождаться', 8),
  singular1stPerson: Word('перерождаюсь', 8),
  singular2ndPerson: Word('перерождаешься', 8),
  singular3rdPerson: Word('перерождается', 8),
  plural1stPerson: Word('перерождаемся', 8),
  plural2ndPerson: Word('перерождаетесь', 8),
  plural3rdPerson: Word('перерождаются', 8),
  masculinePast: Word('перерождался', 8),
  femininePast: Word('перерождалась', 8),
  neuterPast: Word('перерождалось', 8),
  pluralPast: Word('перерождались', 8),
  imperativeInformal: Word('перерождайся', 8),
  imperativeFormal: Word('перерождайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(перерождаться.name.text, перерождаться);

export { перерождаться };