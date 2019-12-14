import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проломаться: PerfectVerb = {
  name: Word('проломаться', 6),
  singular1stPerson: Word('проломаюсь', 6),
  singular2ndPerson: Word('проломаешься', 6),
  singular3rdPerson: Word('проломается', 6),
  plural1stPerson: Word('проломаемся', 6),
  plural2ndPerson: Word('проломаетесь', 6),
  plural3rdPerson: Word('проломаются', 6),
  masculinePast: Word('проломался', 6),
  femininePast: Word('проломалась', 6),
  neuterPast: Word('проломалось', 6),
  pluralPast: Word('проломались', 6),
  imperativeInformal: Word('проломайся', 6),
  imperativeFormal: Word('проломайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проломаться.name.text, проломаться);

export { проломаться };