import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пустословить: PerfectVerb = {
  name: Word('пустословить', 7),
  singular1stPerson: Word('пустословлю', 7),
  singular2ndPerson: Word('пустословишь', 7),
  singular3rdPerson: Word('пустословит', 7),
  plural1stPerson: Word('пустословим', 7),
  plural2ndPerson: Word('пустословите', 7),
  plural3rdPerson: Word('пустословят', 7),
  masculinePast: Word('пустословил', 7),
  femininePast: Word('пустословила', 7),
  neuterPast: Word('пустословило', 7),
  pluralPast: Word('пустословили', 7),
  imperativeInformal: Word('пустословь', 7),
  imperativeFormal: Word('пустословьте', 7),
  imperfect: [],
};

perfectVerbs.set(пустословить.name.text, пустословить);

export { пустословить };