import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сквернословить: PerfectVerb = {
  name: Word('сквернословить', 9),
  singular1stPerson: Word('сквернословлю', 9),
  singular2ndPerson: Word('сквернословишь', 9),
  singular3rdPerson: Word('сквернословит', 9),
  plural1stPerson: Word('сквернословим', 9),
  plural2ndPerson: Word('сквернословите', 9),
  plural3rdPerson: Word('сквернословят', 9),
  masculinePast: Word('сквернословил', 9),
  femininePast: Word('сквернословила', 9),
  neuterPast: Word('сквернословило', 9),
  pluralPast: Word('сквернословили', 9),
  imperativeInformal: Word('сквернословь', 9),
  imperativeFormal: Word('сквернословьте', 9),
  imperfect: [],
};

perfectVerbs.set(сквернословить.name.text, сквернословить);

export { сквернословить };