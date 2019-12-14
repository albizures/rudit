import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выцвести: PerfectVerb = {
  name: Word('выцвести', 1),
  singular1stPerson: Word('выцвету', 1),
  singular2ndPerson: Word('выцветешь', 1),
  singular3rdPerson: Word('выцветет', 1),
  plural1stPerson: Word('выцветем', 1),
  plural2ndPerson: Word('выцветете', 1),
  plural3rdPerson: Word('выцветут', 1),
  masculinePast: Word('выцвел', 1),
  femininePast: Word('выцвела', 1),
  neuterPast: Word('выцвело', 1),
  pluralPast: Word('выцвели', 1),
  imperativeInformal: Word('выцвети', 1),
  imperativeFormal: Word('выцветите', 1),
  imperfect: [],
};

perfectVerbs.set(выцвести.name.text, выцвести);

export { выцвести };