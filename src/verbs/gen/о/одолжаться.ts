import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одолжаться: PerfectVerb = {
  name: Word('одолжаться', 5),
  singular1stPerson: Word('одолжаюсь', 5),
  singular2ndPerson: Word('одолжаешься', 5),
  singular3rdPerson: Word('одолжается', 5),
  plural1stPerson: Word('одолжаемся', 5),
  plural2ndPerson: Word('одолжаетесь', 5),
  plural3rdPerson: Word('одолжаются', 5),
  masculinePast: Word('одолжался', 5),
  femininePast: Word('одолжалась', 5),
  neuterPast: Word('одолжалось', 5),
  pluralPast: Word('одолжались', 5),
  imperativeInformal: Word('одолжайся', 5),
  imperativeFormal: Word('одолжайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(одолжаться.name.text, одолжаться);

export { одолжаться };