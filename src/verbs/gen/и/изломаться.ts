import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изломаться: PerfectVerb = {
  name: Word('изломаться', 5),
  singular1stPerson: Word('изломаюсь', 5),
  singular2ndPerson: Word('изломаешься', 5),
  singular3rdPerson: Word('изломается', 5),
  plural1stPerson: Word('изломаемся', 5),
  plural2ndPerson: Word('изломаетесь', 5),
  plural3rdPerson: Word('изломаются', 5),
  masculinePast: Word('изломался', 5),
  femininePast: Word('изломалась', 5),
  neuterPast: Word('изломалось', 5),
  pluralPast: Word('изломались', 5),
  imperativeInformal: Word('изломайся', 5),
  imperativeFormal: Word('изломайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изломаться.name.text, изломаться);

export { изломаться };