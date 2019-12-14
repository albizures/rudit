import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const славословить: PerfectVerb = {
  name: Word('славословить', 7),
  singular1stPerson: Word('славословлю', 7),
  singular2ndPerson: Word('славословишь', 7),
  singular3rdPerson: Word('славословит', 7),
  plural1stPerson: Word('славословим', 7),
  plural2ndPerson: Word('славословите', 7),
  plural3rdPerson: Word('славословят', 7),
  masculinePast: Word('славословил', 7),
  femininePast: Word('славословила', 7),
  neuterPast: Word('славословило', 7),
  pluralPast: Word('славословили', 7),
  imperativeInformal: Word('славословь', 7),
  imperativeFormal: Word('славословьте', 7),
  imperfect: [],
};

perfectVerbs.set(славословить.name.text, славословить);

export { славословить };