import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прекословить: PerfectVerb = {
  name: Word('прекословить', 7),
  singular1stPerson: Word('прекословлю', 7),
  singular2ndPerson: Word('прекословишь', 7),
  singular3rdPerson: Word('прекословит', 7),
  plural1stPerson: Word('прекословим', 7),
  plural2ndPerson: Word('прекословите', 7),
  plural3rdPerson: Word('прекословят', 7),
  masculinePast: Word('прекословил', 7),
  femininePast: Word('прекословила', 7),
  neuterPast: Word('прекословило', 7),
  pluralPast: Word('прекословили', 7),
  imperativeInformal: Word('прекословь', 7),
  imperativeFormal: Word('прекословьте', 7),
  imperfect: [],
};

perfectVerbs.set(прекословить.name.text, прекословить);

export { прекословить };