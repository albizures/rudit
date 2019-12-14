import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережить: PerfectVerb = {
  name: Word('пережить', 5),
  singular1stPerson: Word('переживу', 7),
  singular2ndPerson: Word('переживёшь', 1),
  singular3rdPerson: Word('переживёт', 1),
  plural1stPerson: Word('переживём', 1),
  plural2ndPerson: Word('переживёте', 1),
  plural3rdPerson: Word('переживут', 7),
  masculinePast: Word('пережил,пе'режил', 5),
  femininePast: Word('пережила', 7),
  neuterPast: Word('пережило,пе'режило', 5),
  pluralPast: Word('пережили,пе'режили', 5),
  imperativeInformal: Word('переживи', 7),
  imperativeFormal: Word('переживите', 7),
  imperfect: ['переживать'],
};

perfectVerbs.set(пережить.name.text, пережить);

export { пережить };