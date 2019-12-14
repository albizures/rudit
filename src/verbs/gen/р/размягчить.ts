import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размягчить: PerfectVerb = {
  name: Word('размягчить', 7),
  singular1stPerson: Word('размягчу', 7),
  singular2ndPerson: Word('размягчишь', 7),
  singular3rdPerson: Word('размягчит', 7),
  plural1stPerson: Word('размягчим', 7),
  plural2ndPerson: Word('размягчите', 7),
  plural3rdPerson: Word('размягчат', 7),
  masculinePast: Word('размягчил', 7),
  femininePast: Word('размягчила', 7),
  neuterPast: Word('размягчило', 7),
  pluralPast: Word('размягчили', 7),
  imperativeInformal: Word('размягчи', 7),
  imperativeFormal: Word('размягчите', 7),
  imperfect: [],
};

perfectVerbs.set(размягчить.name.text, размягчить);

export { размягчить };