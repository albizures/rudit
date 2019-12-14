import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ниспослать: PerfectVerb = {
  name: Word('ниспослать', 7),
  singular1stPerson: Word('ниспошлю', 7),
  singular2ndPerson: Word('ниспошлёшь', 1),
  singular3rdPerson: Word('ниспошлёт', 1),
  plural1stPerson: Word('ниспошлём', 1),
  plural2ndPerson: Word('ниспошлёте', 9),
  plural3rdPerson: Word('ниспошлют', 7),
  masculinePast: Word('ниспослал', 7),
  femininePast: Word('ниспослала', 7),
  neuterPast: Word('ниспослало', 7),
  pluralPast: Word('ниспослали', 7),
  imperativeInformal: Word('ниспошли', 7),
  imperativeFormal: Word('ниспошлите', 7),
  imperfect: [],
};

perfectVerbs.set(ниспослать.name.text, ниспослать);

export { ниспослать };