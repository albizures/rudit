import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размозжить: PerfectVerb = {
  name: Word('размозжить', 7),
  singular1stPerson: Word('размозжу', 7),
  singular2ndPerson: Word('размозжишь', 7),
  singular3rdPerson: Word('размозжит', 7),
  plural1stPerson: Word('размозжим', 7),
  plural2ndPerson: Word('размозжите', 7),
  plural3rdPerson: Word('размозжат', 7),
  masculinePast: Word('размозжил', 7),
  femininePast: Word('размозжила', 7),
  neuterPast: Word('размозжило', 7),
  pluralPast: Word('размозжили', 7),
  imperativeInformal: Word('размозжи', 7),
  imperativeFormal: Word('размозжите', 7),
  imperfect: [],
};

perfectVerbs.set(размозжить.name.text, размозжить);

export { размозжить };