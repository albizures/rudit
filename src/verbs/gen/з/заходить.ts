import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заходить: PerfectVerb = {
  name: Word('заходить', 5),
  singular1stPerson: Word('захожу', 5),
  singular2ndPerson: Word('заходишь', 3),
  singular3rdPerson: Word('заходит', 3),
  plural1stPerson: Word('заходим', 3),
  plural2ndPerson: Word('заходите', 3),
  plural3rdPerson: Word('заходят', 3),
  masculinePast: Word('заходил', 5),
  femininePast: Word('заходила', 5),
  neuterPast: Word('заходило', 5),
  pluralPast: Word('заходили', 5),
  imperativeInformal: Word('заходи', 5),
  imperativeFormal: Word('заходите', 5),
  imperfect: ['зайти'],
};

perfectVerbs.set(заходить.name.text, заходить);

export { заходить };