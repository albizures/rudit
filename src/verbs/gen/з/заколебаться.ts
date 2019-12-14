import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заколебаться: PerfectVerb = {
  name: Word('заколебаться', 7),
  singular1stPerson: Word('заколеблюсь', 5),
  singular2ndPerson: Word('заколеблешься', 5),
  singular3rdPerson: Word('заколеблется', 5),
  plural1stPerson: Word('заколеблемся', 5),
  plural2ndPerson: Word('заколеблетесь', 5),
  plural3rdPerson: Word('заколеблются', 5),
  masculinePast: Word('заколебался', 7),
  femininePast: Word('заколебалась', 7),
  neuterPast: Word('заколебалось', 7),
  pluralPast: Word('заколебались', 7),
  imperativeInformal: Word('заколеблись', 5),
  imperativeFormal: Word('заколеблитесь', 5),
  imperfect: [],
};

perfectVerbs.set(заколебаться.name.text, заколебаться);

export { заколебаться };