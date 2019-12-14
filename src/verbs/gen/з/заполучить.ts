import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заполучить: PerfectVerb = {
  name: Word('заполучить', 7),
  singular1stPerson: Word('заполучу', 7),
  singular2ndPerson: Word('заполучишь', 5),
  singular3rdPerson: Word('заполучит', 5),
  plural1stPerson: Word('заполучим', 5),
  plural2ndPerson: Word('заполучите', 5),
  plural3rdPerson: Word('заполучат', 5),
  masculinePast: Word('заполучил', 7),
  femininePast: Word('заполучила', 7),
  neuterPast: Word('заполучило', 7),
  pluralPast: Word('заполучили', 7),
  imperativeInformal: Word('заполучи', 7),
  imperativeFormal: Word('заполучите', 7),
  imperfect: [],
};

perfectVerbs.set(заполучить.name.text, заполучить);

export { заполучить };