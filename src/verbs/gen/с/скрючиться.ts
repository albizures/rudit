import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрючиться: PerfectVerb = {
  name: Word('скрючиться', 3),
  singular1stPerson: Word('скрючусь', 3),
  singular2ndPerson: Word('скрючишься', 3),
  singular3rdPerson: Word('скрючится', 3),
  plural1stPerson: Word('скрючимся', 3),
  plural2ndPerson: Word('скрючитесь', 3),
  plural3rdPerson: Word('скрючатся', 3),
  masculinePast: Word('скрючился', 3),
  femininePast: Word('скрючилась', 3),
  neuterPast: Word('скрючилось', 3),
  pluralPast: Word('скрючились', 3),
  imperativeInformal: Word('скрючься', 3),
  imperativeFormal: Word('скрючьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(скрючиться.name.text, скрючиться);

export { скрючиться };