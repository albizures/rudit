import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засветиться: PerfectVerb = {
  name: Word('засветиться', 6),
  singular1stPerson: Word('засвечусь', 6),
  singular2ndPerson: Word('засветишься', 4),
  singular3rdPerson: Word('засветится', 4),
  plural1stPerson: Word('засветимся', 4),
  plural2ndPerson: Word('засветитесь', 4),
  plural3rdPerson: Word('засветятся', 4),
  masculinePast: Word('засветился', 6),
  femininePast: Word('засветилась', 6),
  neuterPast: Word('засветилось', 6),
  pluralPast: Word('засветились', 6),
  imperativeInformal: Word('засветись', 6),
  imperativeFormal: Word('засветитесь', 6),
  imperfect: [],
};

perfectVerbs.set(засветиться.name.text, засветиться);

export { засветиться };