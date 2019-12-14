import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поколебаться: PerfectVerb = {
  name: Word('поколебаться', 7),
  singular1stPerson: Word('поколеблюсь', 5),
  singular2ndPerson: Word('поколеблешься', 5),
  singular3rdPerson: Word('поколеблется', 5),
  plural1stPerson: Word('поколеблемся', 5),
  plural2ndPerson: Word('поколеблетесь', 5),
  plural3rdPerson: Word('поколеблются', 5),
  masculinePast: Word('поколебался', 5),
  femininePast: Word('поколебалась', 5),
  neuterPast: Word('поколебалось', 5),
  pluralPast: Word('поколебались', 5),
  imperativeInformal: Word('поколеблись', 5),
  imperativeFormal: Word('поколеблитесь', 5),
  imperfect: ['колебаться'],
};

perfectVerbs.set(поколебаться.name.text, поколебаться);

export { поколебаться };