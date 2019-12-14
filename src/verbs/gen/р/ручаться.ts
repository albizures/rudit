import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ручаться: PerfectVerb = {
  name: Word('ручаться', 3),
  singular1stPerson: Word('ручаюсь', 3),
  singular2ndPerson: Word('ручаешься', 3),
  singular3rdPerson: Word('ручается', 3),
  plural1stPerson: Word('ручаемся', 3),
  plural2ndPerson: Word('ручаетесь', 3),
  plural3rdPerson: Word('ручаются', 3),
  masculinePast: Word('ручался', 3),
  femininePast: Word('ручалась', 3),
  neuterPast: Word('ручалось', 3),
  pluralPast: Word('ручались', 3),
  imperativeInformal: Word('ручайся', 3),
  imperativeFormal: Word('ручайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(ручаться.name.text, ручаться);

export { ручаться };