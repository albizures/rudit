import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заводить: PerfectVerb = {
  name: Word('заводить', 5),
  singular1stPerson: Word('завожу', 5),
  singular2ndPerson: Word('заводишь', 3),
  singular3rdPerson: Word('заводит', 3),
  plural1stPerson: Word('заводим', 3),
  plural2ndPerson: Word('заводите', 3),
  plural3rdPerson: Word('заводят', 3),
  masculinePast: Word('заводил', 5),
  femininePast: Word('заводила', 5),
  neuterPast: Word('заводило', 5),
  pluralPast: Word('заводили', 5),
  imperativeInformal: Word('заводи', 5),
  imperativeFormal: Word('заводите', 5),
  imperfect: ['завести'],
};

perfectVerbs.set(заводить.name.text, заводить);

export { заводить };